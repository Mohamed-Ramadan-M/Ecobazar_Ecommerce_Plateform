"use client"
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { billingFormSchema } from "@/schemas/billing-form-schema"
import { Input } from "../ui/input"
import { toast } from "sonner"


export const BillingForm = () => {
    const form = useForm<z.infer<typeof billingFormSchema>>({
        resolver: zodResolver(billingFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            companyName: "",
            streetAddress: "",
            country: "",
            state: "",
            zipCode: "",
            email: "",
            phoneNumber: "",
            orderNotes: ""
        },
    })

    function onSubmit(data: z.infer<typeof billingFormSchema>) {
        toast("You submitted the following values:", {
            description: (
                <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
                    <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
            position: "bottom-right",
            classNames: {
                content: "flex flex-col gap-2",
            },
            style: {
                "--border-radius": "calc(var(--radius)  + 4px)",
            } as React.CSSProperties,
        })
    }
    return (
        <div>
            <form id="billing-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Section 1: Billing Information */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900">Billing Information</h2>

                    <FieldGroup className="space-y-4">
                        {/* Row 1: First Name, Last Name, Company Name */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Controller
                                name="firstName"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="firstName">First name</FieldLabel>
                                        <Input
                                            {...field}
                                            id="firstName"
                                            placeholder="Your first name"
                                            aria-invalid={fieldState.invalid}
                                        />
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="lastName"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="lastName">Last name</FieldLabel>
                                        <Input
                                            {...field}
                                            id="lastName"
                                            placeholder="Your last name"
                                            aria-invalid={fieldState.invalid}
                                        />
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="companyName"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="companyName">
                                            Company Name <span className="text-gray-400 font-normal">(optional)</span>
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="companyName"
                                            placeholder="Company name"
                                            aria-invalid={fieldState.invalid}
                                        />
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />
                        </div>

                        {/* Row 2: Street Address */}
                        <Controller
                            name="streetAddress"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="streetAddress">Street Address</FieldLabel>
                                    <Input
                                        {...field}
                                        id="streetAddress"
                                        placeholder="Street Address"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        {/* Row 3: Country/Region, States, Zip Code */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Controller
                                name="country"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="country">Country / Region</FieldLabel>
                                        <select
                                            {...field}
                                            id="country"
                                            className="w-full h-10 px-3 rounded-md border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                        >
                                            <option value="" disabled selected hidden>
                                                Select
                                            </option>
                                            <option value="us">United States</option>
                                            <option value="ca">Canada</option>
                                        </select>
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="state"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="state">States</FieldLabel>
                                        <select
                                            {...field}
                                            id="state"
                                            className="w-full h-10 px-3 rounded-md border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                        >
                                            <option value="" disabled selected hidden>
                                                Selects
                                            </option>
                                            <option value="ny">New York</option>
                                            <option value="ca">California</option>
                                        </select>
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="zipCode"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="zipCode">Zip Code</FieldLabel>
                                        <Input
                                            {...field}
                                            id="zipCode"
                                            placeholder="Zip Code"
                                            aria-invalid={fieldState.invalid}
                                        />
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />
                        </div>

                        {/* Row 4: Email, Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Controller
                                name="email"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="email">Email</FieldLabel>
                                        <Input
                                            {...field}
                                            type="email"
                                            id="email"
                                            placeholder="Email Address"
                                            aria-invalid={fieldState.invalid}
                                        />
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />

                            <Controller
                                name="phoneNumber"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="phoneNumber">Phone</FieldLabel>
                                        <Input
                                            {...field}
                                            type="tel"
                                            id="phoneNumber"
                                            placeholder="Phone number"
                                            aria-invalid={fieldState.invalid}
                                        />
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />
                        </div>

                        {/* Row 5: Ship to different address Checkbox */}
                        {/* <Controller
                            name="shipToDifferentAddress"
                            control={form.control}
                            render={({ field }) => (
                                <div className="flex items-center gap-2 pt-2">
                                    <input
                                        type="checkbox"
                                        id="shipToDifferentAddress"
                                        checked={field.value}
                                        onChange={field.onChange}
                                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                    />
                                    <label htmlFor="shipToDifferentAddress" className="text-sm font-medium text-gray-700 cursor-pointer">
                                        Ship to a different address
                                    </label>
                                </div>
                            )}
                        /> */}
                    </FieldGroup>
                </div>

                <hr className="border-gray-200 my-6" />

                {/* Section 2: Additional Info */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900">Additional Info</h2>

                    <FieldGroup>
                        <Controller
                            name="orderNotes"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="orderNotes">Order Notes (Optional)</FieldLabel>
                                    <textarea
                                        {...field}
                                        id="orderNotes"
                                        rows={4}
                                        placeholder="Notes about your order, e.g. special notes for delivery"
                                        className="w-full rounded-md border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </div>
            </form>
        </div>
    )
}
