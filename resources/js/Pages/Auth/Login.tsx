import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="alert alert-success">{status}</div>}

            <form
                onSubmit={submit}
                className="mx-auto"
                style={{ maxWidth: "400px" }}
            >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="form-control"
                        autoComplete="username"
                        autoFocus
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-1" />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="form-control"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-1" />
                </div>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        name="remember"
                        checked={data.remember}
                        className="form-check-input"
                        id="remember"
                        onChange={(e) => setData("remember", e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="remember">
                        Remember me
                    </label>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="small"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary ms-3"
                        disabled={processing}
                    >
                        Log in
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
