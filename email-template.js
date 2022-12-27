const Template = (
    {
        name, text, buttonText, link
    }) => {
    return `
    <!DOCTYPE html>
    <html>
    
    <head>
        <style>
            .template {
                margin: 15px;
                font-size: 17px;
                font-family: 'Courier New', Courier, monospace;
            }
    
            .template p {
                margin: 4px 0px;
            }
    
            .template .content {
                margin-top: 23px;
            }
        
            .template .content .btn a {
                background-color: black;
                padding: 8px 23px;
                border-radius: 10px;
                text-decoration: none;
                color: white;
                margin-bottom: 23px;
            }
    
            .template .bottom {
                margin-top: 32px;
            }
    
            footer h2 {
                margin-bottom: 0px;
                margin-top: 0px;
            }
        </style>
    </head>
    
    <body>
        <div class="template">
            <div class="content">
                <p style="margin-bottom: 23px;">Hi ${name}, ${text}
                <div class="btn" style="margin-bottom: 23px;">
                   <a href=${link} target="_blank">${buttonText}</a>
                 </div>
                </p>    
                <footer>
                If you have any questions, contact our 24/7 Live Support
                <div class="bottom">
                    <h2>Eyadaty</h2>
                </div>
            </footer>
            </div> 
        </div>
    </body>
    
    </html>`
        ;
};

module.exports = Template;