"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

// Define a schema for step one fields.
const stepOneSchema = z.object({
    name: z.string().min(1, "Name is required"),
    phone: z.string().min(1, "Phone is required"),
    email: z.string().email("Invalid email"),
    collegeName: z.string().min(1, "College name is required"),
});

// Define a schema for step two fields.
// For the file input, we expect a FileList and require that it has at least one file.
// We then transform it into a single File.
const stepTwoSchema = z.object({
    transactionId: z.string().min(1, "Transaction ID is required"),
    paymentScreenshot: z
        .any()
        .refine((files) => files && files.length > 0, "Payment screenshot is required")
        .transform((files) => files[0]),
});

// This type represents all of the form fields.
type FormValues = {
    name: string;
    phone: string;
    email: string;
    collegeName: string;
    transactionId: string;
    paymentScreenshot: FileList;
};

interface EventRegistrationDialogProps {
    isOpen: boolean;
    onClose: () => void;
    eventName: string;
}

export function EventRegistrationDialog({
    isOpen,
    onClose,
    eventName,
}: EventRegistrationDialogProps) {
    const [step, setStep] = useState(1);

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            collegeName: "",
            transactionId: "",
            paymentScreenshot: undefined as unknown as FileList,
        },
    });

    const onSubmit = (data: FormValues) => {
        if (step === 1) {
            // Validate only the step one fields.
            const result = stepOneSchema.safeParse(data);
            if (!result.success) {
                result.error.errors.forEach((err) => {
                    setError(err.path[0] as keyof FormValues, { message: err.message });
                });
                return;
            }
            // If valid, move to step two.
            setStep(2);
        } else {
            // Validate step two fields.
            const result = stepTwoSchema.safeParse(data);
            if (!result.success) {
                result.error.errors.forEach((err) => {
                    setError(err.path[0] as keyof FormValues, { message: err.message });
                });
                return;
            }
            // Final submission logic here.
            console.log("Submitted data:", data);
            onClose();
            setStep(1);
            reset();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] bg-black border border-[#8B5CF6] rounded-xl p-6">
                <DialogHeader>
                    <DialogTitle className="text-white text-2xl">
                        Registration for {eventName}
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="overflow-y-auto max-h-[70vh] my-scrollbar">
                    {step === 1 ? (
                        <div className="grid gap-6 py-4">
                            <div className="grid gap-2">
                                <label htmlFor="name" className="text-white">
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    {...register("name")}
                                    className="bg-black border border-gray-500 focus:border-[#8B5CF6] focus:outline-none text-white rounded-md"
                                    placeholder="Enter your name"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="phone" className="text-white">
                                    Phone No.
                                </label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    {...register("phone")}
                                    className="bg-black border border-gray-500 focus:border-[#8B5CF6] focus:outline-none text-white rounded-md"
                                    placeholder="Enter your phone number"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="email" className="text-white">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    {...register("email")}
                                    className="bg-black border border-gray-500 focus:border-[#8B5CF6] focus:outline-none text-white rounded-md"
                                    placeholder="Enter your email"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="collegeName" className="text-white">
                                    College Name
                                </label>
                                <Input
                                    id="collegeName"
                                    {...register("collegeName")}
                                    className="bg-black border border-gray-500 focus:border-[#8B5CF6] focus:outline-none text-white rounded-md"
                                    placeholder="Enter college name"
                                />
                                {errors.collegeName && (
                                    <p className="text-red-500 text-sm">{errors.collegeName.message}</p>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="grid gap-6 py-4">
                            <div className="grid gap-2">
                                <label htmlFor="transactionId" className="text-white">
                                    Transaction ID
                                </label>
                                <Input
                                    id="transactionId"
                                    {...register("transactionId")}
                                    className="bg-black border border-gray-500 focus:border-[#8B5CF6] focus:outline-none text-white rounded-md"
                                    placeholder="Enter transaction ID"
                                />
                                {errors.transactionId && (
                                    <p className="text-red-500 text-sm">{errors.transactionId.message}</p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="paymentScreenshot" className="text-white">
                                    Payment Screenshot
                                </label>
                                <Input
                                    id="paymentScreenshot"
                                    type="file"
                                    {...register("paymentScreenshot")}
                                    className="bg-black border border-gray-500 focus:border-[#8B5CF6] focus:outline-none text-white rounded-md"
                                    accept="image/*"
                                />
                                {errors.paymentScreenshot && (
                                    <p className="text-red-500 text-sm">
                                        {errors.paymentScreenshot.message}
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                    <div className="flex justify-end gap-4 mt-4">
                        {step === 2 && (
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setStep(1)}
                                className="bg-white text-black hover:bg-white/90 border-0"
                            >
                                Back
                            </Button>
                        )}
                        <Button
                            type="submit"
                            className="bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90 border-0"
                        >
                            {step === 1 ? "Next" : "Register"}
                        </Button>
                    </div>
                </form>
                {step === 2 && (
                    <div className="mt-6 flex items-center justify-center">
                        <Image
                            src="/images/qr.png"
                            alt="Payment QR Code"
                            width={200}
                            height={200}
                            className="rounded-lg"
                        />
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
