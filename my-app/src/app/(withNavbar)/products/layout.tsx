import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'BELI | Products',
    description: 'BELI products page'
}

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}