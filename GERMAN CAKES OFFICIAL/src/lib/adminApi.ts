import { db, storage } from "@/lib/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export interface CakeProduct {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
  subcategory: string;
  description: string;
  image: string;
  /** Map of "0.5 kg" → 650, "1 kg" → 1200, etc. May be empty for legacy cakes. */
  sizePrices: Record<string, number>;
  createdAt: string;
}

function docToCake(docSnap: any): CakeProduct {
  const data = docSnap.data();
  const sp =
    data.size_prices &&
    typeof data.size_prices === "object" &&
    !Array.isArray(data.size_prices)
      ? Object.fromEntries(
          Object.entries(data.size_prices as Record<string, unknown>).map(
            ([k, v]) => [k, Number(v)]
          )
        )
      : {};
  return {
    id: docSnap.id,
    name: data.name,
    price: Number(data.price),
    size: data.size,
    category: data.category,
    subcategory: data.subcategory ?? "",
    description: data.description ?? "",
    image: data.image_url ?? "",
    sizePrices: sp,
    createdAt:
      data.created_at instanceof Timestamp
        ? data.created_at.toDate().toISOString()
        : data.created_at ?? new Date().toISOString(),
  };
}

export async function fetchCakes(): Promise<CakeProduct[]> {
  const q = query(collection(db, "cakes"), orderBy("created_at", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(docToCake);
}

export async function addCake(
  cake: Omit<CakeProduct, "id" | "createdAt">,
  userId: string
): Promise<CakeProduct> {
  const docRef = await addDoc(collection(db, "cakes"), {
    name: cake.name,
    price: cake.price,
    size: cake.size,
    category: cake.category,
    subcategory: cake.subcategory || null,
    description: cake.description || null,
    image_url: cake.image,
    size_prices:
      cake.sizePrices && Object.keys(cake.sizePrices).length > 0
        ? cake.sizePrices
        : null,
    user_id: userId,
    created_at: Timestamp.now(),
    updated_at: Timestamp.now(),
  });

  return {
    id: docRef.id,
    name: cake.name,
    price: cake.price,
    size: cake.size,
    category: cake.category,
    subcategory: cake.subcategory ?? "",
    description: cake.description ?? "",
    image: cake.image,
    sizePrices: cake.sizePrices ?? {},
    createdAt: new Date().toISOString(),
  };
}

export async function updateCake(
  id: string,
  updates: Partial<Omit<CakeProduct, "id" | "createdAt">>
): Promise<CakeProduct> {
  const docRef = doc(db, "cakes", id);
  const updateData: Record<string, any> = {
    updated_at: Timestamp.now(),
  };

  if (updates.name !== undefined) updateData.name = updates.name;
  if (updates.price !== undefined) updateData.price = updates.price;
  if (updates.size !== undefined) updateData.size = updates.size;
  if (updates.category !== undefined) updateData.category = updates.category;
  if (updates.subcategory !== undefined)
    updateData.subcategory = updates.subcategory || null;
  if (updates.description !== undefined)
    updateData.description = updates.description || null;
  if (updates.image !== undefined) updateData.image_url = updates.image;
  if (updates.sizePrices !== undefined)
    updateData.size_prices =
      updates.sizePrices && Object.keys(updates.sizePrices).length > 0
        ? updates.sizePrices
        : null;

  await updateDoc(docRef, updateData);

  return {
    id,
    name: updates.name ?? "",
    price: updates.price ?? 0,
    size: updates.size ?? "",
    category: updates.category ?? "",
    subcategory: updates.subcategory ?? "",
    description: updates.description ?? "",
    image: updates.image ?? "",
    sizePrices: updates.sizePrices ?? {},
    createdAt: new Date().toISOString(),
  };
}

export async function deleteCake(id: string): Promise<void> {
  await deleteDoc(doc(db, "cakes", id));
}

export async function uploadCakeImage(file: File): Promise<string> {
  const ext = file.name.split(".").pop();
  const path = `cake-images/${crypto.randomUUID()}.${ext}`;
  const storageRef = ref(storage, path);

  await uploadBytes(storageRef, file, { contentType: file.type });
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
}
