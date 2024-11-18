import { privateDecrypt } from "crypto";
import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food item
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    });
    try {
        await food.save(); //using this METHOD=>save() food will be added to the Database
        res.json({ success: true, message: "Food added successfully" });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: `Food not added because ===> ${error}`,
        });
    }
};

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({
            success: true,
            data: foods,
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: `No Food Display because ===> ${error}`,
        });
    }
};

// remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => {});

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "food deleted successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error deleting food" });
    }
};
export { addFood, listFood, removeFood };
