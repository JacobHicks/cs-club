module.exports = (req, res) => {
    const {body} = req;
    console.log(body);
    res.end(body.name + " is cool.");
};