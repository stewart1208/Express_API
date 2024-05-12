const Presence = require('../models/presenceModel');
const Amount = require('../models/amountModel')
const Cours = require('../models/CoursModel')
const mongoose = require('mongoose');

const index = async (req, res) => {
    try {
        const presences = await Presence.find().populate('students group');
        res.status(200).json(presences);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
const show = async (req, res) => {
    try {
        const presence = await Presence.findById(req.params.id).populate('students group');
        if (!presence) return res.status(404).json({ message: "Presence not found!" });
        res.status(200).json(presence);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
const store = async (req, res) => {
    try {
        const newPresence = new Presence(req.body);
        const presenceSaved = await newPresence.save();
        const updatedAmount = await addAmount(presenceSaved);
        res.status(201).json(presenceSaved);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
const addStudent = async (req, res) => {
    try {
        const presence = await Presence.findById(req.params.id)
        if (!presence) return res.status(404).json({ message: "Presence not found!" })
        presence.students.push(req.body.student)
        const updatedPresence = await presence.save()
        const updatedAmount = await addAmount(updatedPresence);
        res.status(200).json(updatedPresence)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
const removeStudent = async (req, res) => {
    try {
        const presence = await Presence.findById(req.params.id);
        if (!presence) return res.status(404).json({ message: "Presence not found!" });
        const studentId = req.body.student;
        presence.students = presence.students.filter(id => id.toString() !== studentId.toString());
        const updatedPresence = await presence.save();
        res.status(200).json(updatedPresence);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
async function addAmount(presence) {
    try {
        const studentID = presence.students[0]; 
        const amount = await Amount.findOne({ student: studentID });
        if (!amount) {
            amount = new Amount({
                totale: 0,
                student: studentID,
                presences: []
            });
        }
        const group = presence.group;
        const course = await Cours.findOne({ groups: group });
        const coursePrice = course.prix
        amount.totale += coursePrice;
        amount.presences.push(presence)
        return await amount.save();
    } catch (err) {
        throw new Error(err.message);
    }
}


module.exports = {
    index,
    show,
    addStudent,
    store,
    removeStudent,
};
