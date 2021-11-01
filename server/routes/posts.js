var express = require('express');
var router = express.Router();

const posts = [{
  headerImg: "https://loremflickr.com/1080/400",
  title: "Koodikerho blogpost",
  body: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac tortor non urna aliquet gravida. Sed dignissim, elit sed lacinia ullamcorper, leo diam aliquet erat, et sagittis odio odio ac enim. Mauris ipsum nisl, consequat quis felis at, lobortis semper sapien. Aliquam a faucibus mi. Sed vehicula nunc quis tellus aliquam pulvinar. Sed ultricies, nunc a luctus pretium, orci sapien fermentum justo, nec commodo mi purus in lectus. Cras venenatis aliquet cursus. Morbi vitae metus et ligula venenatis faucibus. Etiam vel ex vitae ex mollis sodales quis sit amet neque. Cras semper vitae nibh sed tincidunt. Nam finibus mattis nibh, nec semper sem semper nec.
  
  Nulla mattis tellus ut dignissim tristique. Curabitur et sapien gravida, eleifend diam et, dignissim urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at consectetur sem, in pretium erat. Aenean nisi sem, dictum ac lacinia ornare, elementum quis sem. Maecenas ut finibus purus. Duis tincidunt ut diam at congue. Donec faucibus sapien enim, in scelerisque quam vestibulum a. Praesent tempus eget neque eu scelerisque. Cras felis justo, bibendum a mi in, sodales fermentum massa.
  
  Pellentesque venenatis laoreet enim, eu accumsan felis condimentum eget. Pellentesque non suscipit metus. Aenean hendrerit lorem ac massa pellentesque ornare. Sed rutrum est non massa egestas, eget vulputate mi mollis. Phasellus quis porta diam. Nullam nec pellentesque metus, at bibendum leo. Nullam consectetur molestie tellus, viverra tincidunt enim luctus quis. Sed commodo lacus leo, nec varius arcu blandit non.
  
  Nulla lorem turpis, dictum ornare elit vitae, accumsan iaculis ipsum. Vivamus id ultricies tortor. Morbi vitae ex ipsum. Sed pretium, orci non interdum maximus, nunc purus gravida nisl, vitae faucibus arcu sem nec sem. Sed vulputate non ligula vitae luctus. Quisque at posuere velit, non interdum enim. Vestibulum fringilla lobortis rhoncus.
  
  Quisque tempus odio sed ligula sodales, ut tempor magna varius. Sed venenatis dignissim felis, at viverra lorem pretium quis. Etiam imperdiet ac risus nec consequat. Pellentesque pulvinar volutpat lacus, nec hendrerit sem iaculis eu. Aliquam lacinia consequat turpis, et consectetur enim blandit eu. Nam eget interdum neque. Duis elementum venenatis turpis, vel convallis turpis aliquet vitae. Nam efficitur, justo sit amet ornare mollis, est orci imperdiet ante, non sollicitudin augue mi vitae dolor. Proin at ex tincidunt, luctus lectus vel, tristique quam. Aenean lacinia diam quis justo imperdiet, ut cursus velit ultrices.`
}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).send({ type: "BlogPost", data: posts });
});

router.post("/", (req, res, next) => {
  if (!req.body.post) {
    res.status(400).send(req.body);
    return;
  }
  posts.push(req.body.post);

  res.status(200).send({ type: "BlogPost", data: posts });
})

module.exports = router;
