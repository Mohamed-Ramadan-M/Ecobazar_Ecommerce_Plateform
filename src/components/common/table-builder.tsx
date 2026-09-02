import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Product } from "@/types/products.type"
import { Button } from "../ui/button"
import { Trash2 } from "lucide-react"

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]
interface TableBuilderProps {
    tableData: Product[],
    tableHeaders: string[],
    type: "wishlist" | "cart"

}

export function TableBuilder({ tableData, tableHeaders, type }: TableBuilderProps) {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    {tableHeaders.map((header) => (
                        <TableHead key={header} className="w-25">
                            {header}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableData.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.image} {item.name}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>{item.isOutofStock ? (
                            <span className="bg-danger text-white text-[10px] px-2 py-0.5 rounded uppercase font-medium">
                                Out of Stock
                            </span>) : (
                            <span className="bg-success text-white text-[10px] px-2 py-0.5 rounded uppercase font-medium">
                                In Stock
                            </span>
                        )}</TableCell>
                        <TableCell className="text-right">
                            {type === "cart" ? (
                                <Button variant="primary" className="w-20 h-8 rounded-full bg-background border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition shadow-sm">
                                    Add to Cart
                                </Button>
                            ) : null}
                            <Button variant="primary" className="w-20 h-8 rounded-full bg-background border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition shadow-sm">
                                <Trash2 />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
