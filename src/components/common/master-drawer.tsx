"use client"

import * as React from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Product } from "@/types/products.type"

// توسيع النوع ليشمل خاصية quantity الاختيارية الخاصة بالسلة
export interface CartProduct extends Product {
  quantity?: number
}

interface MasterDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  data: CartProduct[]
  trigger?: React.ReactNode
  title: string
  type?: "cart" | "wishlist"
  submitText?: string
  onConfirm?: () => void
  onRemoveItem?: (id: number) => void
}

export function MasterDrawer({
  open,
  onOpenChange,
  data = [],
  trigger,
  title,
  type = "cart",
  submitText = "Checkout",
  onConfirm,
  onRemoveItem,
}: MasterDrawerProps) {
  // const isMobile = useIsMobile()

  const count = React.useMemo(() => {
    return data.reduce((acc, item) => acc + (item.quantity ?? 1), 0)
  }, [data])

  const totalAmount = React.useMemo(() => {
    return data.reduce(
      (acc, item) => acc + item.price * (item.quantity ?? 1),
      0
    )
  }, [data])

  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      swipeDirection="right"
    >
      {trigger && <DrawerTrigger >{trigger}</DrawerTrigger>}

      <DrawerContent className="fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-md flex-col border-l bg-background p-0 shadow-lg">
        {/* Header */}
        <DrawerHeader className="flex items-center justify-between border-b px-6 py-4">
          <DrawerTitle className="text-lg font-semibold text-foreground">
            {title} ({count})
          </DrawerTitle>
        </DrawerHeader>

        {/* Product Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-gray-100">
          {data.length === 0 ? (
            <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
              Your {type === "cart" ? "cart" : "wishlist"} is empty.
            </div>
          ) : (
            data.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
              >
                {/* Image */}
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-muted">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center">
                  <h4 className="text-sm font-medium text-foreground line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {type === "cart" && item.quantity ? `${item.quantity} x ` : ""}
                    <span className="font-semibold text-foreground">
                      ${item.price.toFixed(2)}
                    </span>
                  </p>
                </div>

                {/* Fixed Remove Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-muted-foreground hover:text-destructive"
                  onClick={() => onRemoveItem?.(item.id)}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove item</span>
                </Button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <DrawerFooter className="border-t p-6 gap-3">
          {type === "cart" && (
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">
                {count} Product{count !== 1 ? "s" : ""}
              </span>
              <span className="font-bold text-base text-foreground">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
          )}

          <Button
            onClick={onConfirm}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-full"
          >
            {submitText}
          </Button>

          <DrawerClose >
            <Button
              variant="secondary"
              className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-medium py-2.5 rounded-full"
            >
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}