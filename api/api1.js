module.exports = (req, res) => {
    const {body} = req;
    console.log(body);
    if(body) res.end(body.name + " is cool.");
    else res.end(400);
};