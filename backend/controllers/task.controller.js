const Task = require('../models/task.model.js');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');


exports.getAllTask = asyncHandler (async (req, res, next) => {
    const tasks = await Task.find();
    res.status(200).json({ success: true, data: tasks });
});

exports.postCreateTask = asyncHandler (async (req, res, next) => {
    const task = await Task.create(req.body);
    if (!task) {
        return next(new ErrorResponse('Error creating task', 400));
    }
    res.status(201).json({ success: true, data: task });
});

exports.putUpdateTask = asyncHandler (async (req, res, next) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!task) {
        return next(new ErrorResponse('Error updating task', 400));
    }
    res.status(200).json({ success: true, data: task });
});

exports.deleteTask = asyncHandler (async (req, res, next) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
        return next(new ErrorResponse('Error deleting task', 400));
    }
    res.status(200).json({ success: true, data: {} });
});

