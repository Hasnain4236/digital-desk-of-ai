"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function withRole(Component: any, allowedRoles: string[]) {
    return function ProtectedRoute(props: any) {
        const { user, role, loading } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (!loading) {
                if (!user) {
                    router.push("/login");
                } else if (role && !allowedRoles.includes(role)) {
                    router.push("/"); // Redirect unauthorized users to home
                }
            }
        }, [user, role, loading, router]);

        if (loading) {
            return <div className="flex h-screen items-center justify-center">Loading...</div>;
        }

        if (!user || (role && !allowedRoles.includes(role))) {
            return null;
        }

        return <Component {...props} />;
    };
}
