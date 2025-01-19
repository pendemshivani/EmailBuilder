const EmailTemplate = require('../models/EmailTemplate');

// Get email layout
exports.getEmailLayout = async (req, res) => {
    try {
        const templates = await EmailTemplate.find(); // Retrieve all templates
        res.status(200).json({
            success: true,
            data: templates,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Save email template
exports.saveEmailTemplate = async (req, res) => {
    try {
        const { title, content, footer } = req.body;

        // Check if all required fields are present
        if (!title || !content || !footer) {
            return res.status(400).json({
                success: false,
                message: 'All fields (title, content, footer) are required.',
            });
        }

        const newTemplate = new EmailTemplate({ title, content, footer });
        await newTemplate.save();

        res.status(201).json({
            success: true,
            message: 'Email template saved successfully.',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Upload image
exports.uploadImage = (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'No file uploaded.',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Image uploaded successfully.',
            filePath: req.file.path,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Render email template
exports.renderTemplate = (req, res) => {
    try {
        const { title, content, footer } = req.body;

        // Check if all required fields are present
        if (!title || !content || !footer) {
            return res.status(400).json({
                success: false,
                message: 'All fields (title, content, footer) are required.',
            });
        }

        const renderedTemplate = `
            <html>
            <body>
                <h1>${title}</h1>
                <p>${content}</p>
                <footer>${footer}</footer>
            </body>
            </html>
        `;

        res.status(200).json({
            success: true,
            message: 'Template rendered successfully.',
            renderedTemplate,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
