import { Head, Link, router } from "@inertiajs/react";
import { IconEdit, IconEye, IconPlus, IconTrash } from "@tabler/icons-react";

interface Category {
    id: number;
    name: string;
}

interface Product {
    id: number;
    name: string;
    slug: string;
    status: "Draft" | "Published" | "Archived";
    category: Category | null;
}

interface PaginatedProducts {
    data: Product[];
    links: { url: string | null; label: string; active: boolean }[];
    current_page: number;
    last_page: number;
    total: number;
}

interface Props {
    products: PaginatedProducts;
}

const statusBadgeClass: Record<Product["status"], string> = {
    Draft: "bg-secondary",
    Published: "bg-success",
    Archived: "bg-danger",
};

export default function Index({ products }: Props) {
    const handleDelete = (id: number) => {
        if (!confirm("Delete this product?")) return;

        router.delete(route("products.destroy", id), {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title="Products" />

            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h3 mb-0">Products</h1>
                <Link
                    href={route("products.create")}
                    className="btn btn-primary"
                >
                    <IconPlus size={18} className="me-1" />
                    Add Product
                </Link>
            </div>

            <div className="card">
                <div className="table-responsive">
                    <table className="table table-vcenter card-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th className="w-1">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.data.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={4}
                                        className="text-center text-muted py-4"
                                    >
                                        No products found.
                                    </td>
                                </tr>
                            )}

                            {products.data.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.category?.name ?? "—"}</td>
                                    <td>
                                        <span
                                            className={`badge ${statusBadgeClass[product.status]}`}
                                        >
                                            {product.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="btn-list flex-nowrap">
                                            <Link
                                                href={route(
                                                    "products.show",
                                                    product.id,
                                                )}
                                                className="btn btn-sm btn-icon"
                                                title="View"
                                            >
                                                <IconEye size={18} />
                                            </Link>
                                            <Link
                                                href={route(
                                                    "products.edit",
                                                    product.id,
                                                )}
                                                className="btn btn-sm btn-icon"
                                                title="Edit"
                                            >
                                                <IconEdit size={18} />
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleDelete(product.id)
                                                }
                                                className="btn btn-sm btn-icon text-danger"
                                                title="Delete"
                                            >
                                                <IconTrash size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {products.last_page > 1 && (
                    <div className="card-footer d-flex justify-content-end">
                        <ul className="pagination mb-0">
                            {products.links.map((link, i) => (
                                <li
                                    key={i}
                                    className={`page-item ${link.active ? "active" : ""} ${!link.url ? "disabled" : ""}`}
                                >
                                    <Link
                                        href={link.url ?? "#"}
                                        className="page-link"
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                        preserveScroll
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}
