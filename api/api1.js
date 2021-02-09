module.exports = (req, res) => {
    const {body} = req;
    console.log(body);
    if(body && body.name) res.end(body.name + " is cool.");
    else res.status(400).end("Invalid Syntax");
};