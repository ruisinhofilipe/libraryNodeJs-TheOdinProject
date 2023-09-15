const display_form = (req, res) => {
    res.render('form', {errorMessage:null});
}

module.exports = display_form;