const express = require('express');
const reportsSchema = require("../models/Reports");
const reportRouter = express();


reportRouter.post("/report", async (req,res) => {
    const {ReportBody, questionId, userId } = req.body
    const newReport = new reportsSchema({
        reportBody: ReportBody,
        questionId: questionId,
        userId: userId,
    })
    try {
        const response = await newReport.save();
       res.status(200).json("Your report has been submitted")
    } catch (error) {
        res.status(209).json(error)
    }
})


module.exports = reportRouter;