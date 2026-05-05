import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { fetchCakes } from "@/lib/adminApi";

/**
 * Detail pages have been replaced by an in-place quick-view modal on the
 * catalog. If anyone lands on /cake/:id directly (old links, shared URLs,
 * search history), bounce them to the catalog with the cake auto-pinned —
 * ProductGrid will scroll it to the top and open the quick-view modal.
 */
export default function CakeDetailPage() {
  const { id } = useParams<{ id: string }>();

  // Best-effort warm cache so the modal opens instantly after redirect
  useEffect(() => {
    fetchCakes().catch(() => {});
  }, []);

  if (!id) return <Navigate to="/catalog" replace />;
  return <Navigate to={`/catalog?pin=${id}`} replace />;
}
