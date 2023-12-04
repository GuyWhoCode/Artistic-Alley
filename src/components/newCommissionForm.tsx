import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ImageUploadPreview from "@/components/imageUploadPreview";
import { Textarea } from "@/components/ui/textarea";

export interface commissionFormData {
    title: string;
    description: string;
    price: string;
    categories: string[];
    keywords: string[];
    image: string;
}

interface commissionFormProps {
    submitForm: (commissionData: commissionFormData) => void;
}

export default function NewCommissionForm({ submitForm }: commissionFormProps) {
    const [formData, setFormData] = useState<commissionFormData>({
        title: "",
        description: "",
        price: "",
        categories: [],
        keywords: [],
        image: "",
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitForm(formData);
    };

    const handleChange = (e: ChangeEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    return (
        <div className="flex items-center justify-center my-12">
            <div className="p-10 rounded-lg shadow-lg w-96">
                <h1 className="py-5 text-2xl font-bold text-center">
                    New Commission
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-2 gap-y-2 justify-center">
                        <div>
                            <Label htmlFor="title">Title</Label>
                            <Input
                                name="title"
                                type="text"
                                id="title"
                                value={formData.title}
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                name="description"
                                id="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="price">Price</Label>
                            <Input
                                name="price"
                                type="number"
                                id="price"
                                value={formData.price}
                                required
                                placeholder="$0.00"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label>Thumbnail</Label>
                            <ImageUploadPreview
                                imageSrc={formData.image}
                                setImageSrc={(imageSrc: string) => {
                                    setFormData({
                                        ...formData,
                                        image: imageSrc,
                                    });
                                }}
                            />
                        </div>

                        <div>
                            <Label htmlFor="categories">Categories</Label>
                            <Textarea
                                placeholder="Separate with spaces"
                                name="categories"
                                id="categories"
                                value={formData.categories}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="keywords">Keywords</Label>
                            <Textarea
                                placeholder="Separate with spaces"
                                name="keywords"
                                id="keywords"
                                value={formData.keywords}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <Button type="submit" className="mb-3">
                            Create New Commission
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
