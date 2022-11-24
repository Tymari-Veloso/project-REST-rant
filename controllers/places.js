const router = require ('express').Router()

router.get('/',  function(req, res){
    let places = [{
        name: 'Best Food',
        city: 'Las Vegas',
        State: 'Nevada',
        cuisines: 'Everything',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: '2nd Best Food',
        city: 'Las Vegas',
        State: 'Nevada',
        cuisines: 'Everything',
        pic: 'http://place-puppy.com/250x250'
    }]
    res.render('places/index', {places})
})

module.exports = router