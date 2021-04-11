export interface Recipe {
    id: string;
    title:string;
    rating: number;
    image: string;
    serving: number;
    sponsored: boolean;
    generated: boolean;
    author: Author;
    times_cooked: number;
    ingredients: Ingredient[];
    instructions: Instruction[];
    equipments: any[];
    time: Time;
    category: Category;
    taste_profile: TasteProfile;
    allergens: any[];
    nutrients: Nutrients;
    comments: Comment[];

    
}

export interface Author {
    id: number;
    display_name: string;
}

export interface Unit {
    singular: string;
    plural: string;
    shorthand: string;
}

export interface Ingredient {
    id: number;
    name: string;
    attributes: any[];
    quantity: number;
    unit: Unit;
    tags: string[];
    category: string[];
    extra: string;
    swapables :any[];
}

export interface Instruction {
    step: number;
    instruction: string;
}

export interface Time {
    cooking: number;
    preparation: number;
    total: number;
}

export interface Category {
    time_of_day: string;
    type_1: string;
    type_2: string;
    cuisine: string;
    diet: string[];
}

export interface TasteProfile {
    sweet: number;
    sour: number;
    umami: number;
    salty: number;
    bitter: number;
    hot_spicy: number;
    cold_mint: number;
}

export interface ValueUnit {
    value: number;
    unit: string;
}

export interface Nutrients {
    carbs: ValueUnit;
    carbohydrates: ValueUnit;
    protein: ValueUnit;
    saturated_fat: ValueUnit;
    unsaturated_fat: ValueUnit;
    salt: ValueUnit;
    fibers: ValueUnit;
}




