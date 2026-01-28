'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cce30cd30b0960dd627c6d059a62ecd5",
"version.json": "00092e000476f37bc7f942daf75233e5",
"index.html": "e2bca255457cc35f0cd126166e4ca3b5",
"/": "e2bca255457cc35f0cd126166e4ca3b5",
"main.dart.js": "3de68c5819c202e60693ce58f2cb30b8",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7faf518548575e3726e86817df67f31b",
".git/config": "ea9ed05a8f14037f929a3cb6fdf45895",
".git/objects/61/a4a7856c6aa61eefec6c5b0e47f3a049f2ac58": "afd12b1812dc80dd94b9a2f4533e3082",
".git/objects/59/04e1049491f967a6e5fb84335b2eef7cb1166a": "3c1280b7883a6dafc7376ec6309ac76f",
".git/objects/92/bdebb160ef4979676696a4924f184cc4816d72": "95316329644cf493c30c7fe69946b93d",
".git/objects/0c/39974cf9cef427dbe73315983c7d8c3a87e40a": "6684549a800c3c3bac3655ce525e1db8",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/03/756b883d53324eb923c271a87309c24def0aad": "999e1fc528d203d88689c4b7ac59b563",
".git/objects/32/ec1047c1608bbc2a6dfbb08081a18ebc36d9b3": "2144d99cad8ad5f4ba53a21b71fe67ee",
".git/objects/35/d00035d8fbc28c9b97dc4410360818c773b3e2": "9685bff4e03413b1bb419cafb5a71405",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/69/9efb0f29910498cb00c2d4c95cbd0277a6b080": "9a2afc3b712790f6a0842cee17dea571",
".git/objects/51/769f0617d2aada5b4361d663200238b7f805cd": "5df56824c5d6d8ce0420ed91716b2794",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/0b/c602450686701312454f67bccae6a4166c1e36": "cdefaab87f153cd3b9cdb85f810259b7",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/33/f58d673a4ad89bdf44e47051cd4f1368a95927": "72421effeaab1b0500a895ea8da9e666",
".git/objects/9c/3a199883502416af50b7baaa2c739a9ba46888": "c7625141a0659f3e34679ff3cd3676b9",
".git/objects/02/db7269cc306751a0b75ce12ebe76a194defdfd": "56d557378625267b256e288d845415db",
".git/objects/a4/07b4581e75940e840d4cf1aff991f5a5fbb86a": "b2302486951ef5e7a8ea28ca4f1410ec",
".git/objects/b5/ba4abea0b1730caa52c3a15600ae7e3a1c3386": "e6a84ec44e6169c4c1e3b25222b7d860",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/beb2064c6b829bf851b264385e413f35b7195f": "0b78c853a0f968d4aea46bde4db7de6c",
".git/objects/d0/7fde147470487e6dd5887513bdaae11b4dcd02": "f361c6da99f2643fa6356e8ecc055175",
".git/objects/be/5457d57abf77906f14811608ae6ed202de1f1f": "c4be312d3844dbd99948f2359a7158b9",
".git/objects/a2/45af5a12646810eb71df05fbeabe657962889e": "95b768f10669e0c542c846e802e54531",
".git/objects/d6/f39588d28c2fdb33d3bad506354725d0eb8d6a": "4cb213301e1c86c1eae06274c38a9071",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/92e549fd967b9f0dbd5d4ee97351ede78a3ba0": "fdf89a0daa31332ab4ea728247c0d322",
".git/objects/e2/80c04577561d1fbdc95982debb54234fbc0356": "1b7311718ed86c1e74eeec0d35a29dc8",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/bb537365d49b60181658c869bfba0e1aaccf93": "fb7e27dd3123afefe3a8b8f82b3eff1b",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f2/041d27e6dc4d445b6c4562abce11b6dd7afc5d": "26d143d518ff3c77da41247c830a0fc5",
".git/objects/f2/49a13b8463f82d6429d6864cd580c52e212ac5": "0b6739c389f36ba320b2204407600b2a",
".git/objects/f5/42bd6ce1ef7094ee3be9317bc9592903b748bf": "c13fd70b1325da6a7b09493c8f4cf2f7",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e4/606f4045228de15510e55e76fadc035fbd4115": "ff621ed4fcc6df43d038e579032d4428",
".git/objects/fe/8471090acd4fcb5a7044897eae08b79f2420a0": "cc25fd81914228ac051ed82d53aa8343",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/4e/d839d044416eb4832f99f4e73b502504920754": "8a142caec302dccf854d69b4c6836835",
".git/objects/20/8cf274ff70f656c01f07d7c3081c3292c4274d": "d6ef505b6d3e8ac139e182b2d035177a",
".git/objects/29/a0f70c05871d7f3f14062f5ea7f8a90b97d152": "e8e97381f64cbf98da27c5c773a079c4",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/1f/59f15889dfba22f0696c88a02f9af02d3429a8": "72d16625c54fd66e93475f9462644d25",
".git/objects/80/bd8d02d4239c78fff0eb822257937914e0423a": "2ce60d0b21f8684d5a849341b2c8f0b9",
".git/objects/28/93fefcd72c41b3ead6215e9432b3fd28770cf0": "9911efb3418b328055a40fdf891dd3a0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/3ec751bd88dfe753d80511caad4a429f1c5988": "8df1f3bbc0349052ec56b2dddbcf9808",
".git/objects/19/34f299bc109f51541393d8224439499b000b49": "9de2d995179756de716f4c3e30007c48",
".git/objects/4c/772d3bc029b94e5d5b946a717b9747045487b8": "ede0c62732402f081a645b4436a9b6d3",
".git/objects/81/978280b3d80345b1f914da033f3a74b15781fc": "e583c3a5a1cc642d6f156832fa67b9b5",
".git/objects/43/5e40108e6c34549ef1081a4bb0012818e04daf": "4fbcc5855f566307a68372d4bed1cf37",
".git/objects/88/0ec13be4711512f3170c272a0ff9cb5a003a29": "58619081ab9f8e393b32d0a0555661f4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/8b7eed5b5c52bbd650f5c9a1cdfff4140154f7": "4fea81ed2dd7d84149fa62965ce438c0",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/55e4399109578f39173a34fe6b33c10bc44a15": "04c49b2cfb5e4afb95f4c6606c15db45",
".git/objects/36/2660fb6c50c612e9108a1bae00402b7ca1b450": "e2193342a1a1c4531ce4efec5a7664b8",
".git/objects/5c/267c742c36414101612c50a9bebce60111dbb2": "b63d9482f2fdb621c2d9854bd46ed1fb",
".git/objects/65/8161e199b1c09594cd1941bb8400d0469d5bb8": "d98d04bf0651522adca7373647ecf4fd",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3f/89054b196673e27844338fb798f7123b773c2d": "c7980d93c3546ca398ac9348bf16f114",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/6d/7af29b137f1bb132085891b22f26333bd697a3": "8e898598728e55bfa10f8642b15bf510",
".git/objects/6d/163ecb030193db823500b37907f0c4fe99ef82": "3c3c3d24ba5331534d2a49ea094847d5",
".git/objects/6d/e523e2a1f81b565ad05cb1fdc54f294140c427": "93c11c882eff8757bb10841145a3876c",
".git/objects/39/4ad81c3bcc6aa23b2a174bf96aacd5b6b66f35": "a81956b0a8caaf23ad94e2d1930be55c",
".git/objects/97/e534d6674373ab225a6af9955382bbdb3c5d48": "a9d760feb72bd9095acf1664cc56767c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/8fd23ac253deb8b160782d92311308052c56d9": "e9479f20147037b86d31c4a192c1d467",
".git/objects/ba/a7d9a17b0be0b918d02924bb883a8ababb0284": "76e1e2fcb88283f1cda4b3b3db8ba433",
".git/objects/a7/f046519c57d808f9dff7459a5244c86d051590": "3d4d088a7269a7b2fa53480dafb3f6c8",
".git/objects/a7/e0faa831713ec339620001c09964f7b4d5fc07": "6d0fea325de1738063a9e47c6f330696",
".git/objects/b8/bf69f3ff7e5a0275c0a8cb9796af99d864e3e9": "697478c65e187045979f19c3ad838e6a",
".git/objects/b8/e753b4c06be9819234ede7c27ddc51b4e9f3be": "802216c3a2e433424f60caf0a0252434",
".git/objects/b1/19237715703e3fa3f563144c60cf03cb9f4e54": "6e43df7cfd4f4a47230a7810f90e6f95",
".git/objects/dd/ad39f0b9a1a83ee65f5bc11efa60d7bd69658f": "9ff4ba43a130736fb66d9b7a785c4ec1",
".git/objects/dc/df65b2be898d49c2f2ab0c95959a31c7b923ed": "beed22829fbfcb66e46a8f3d0924d3ee",
".git/objects/aa/2ef900d6e3cc5f3059c3d64f9ff1224d67dc3d": "d9e6589910fb7b750e71fec15d21d92e",
".git/objects/aa/1fbf32795071d92610d41f911e17649d736a4e": "3c8382f52f780ce1f2dbe7336e079cd7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/bb28d04c7b4c2d3e9396ca4c7199e3643cc295": "030a4bd2efe4f200dd66275f19a6a7bf",
".git/objects/de/ed52da7682c00996ac6a40552d9055f9e7f68f": "2ac39d320a717f22f4e66c4137e2914f",
".git/objects/de/f66adad20a569545f8723af71d7aa6b74c4159": "0cee6ad45caefa9a1db9d85d2c8500fa",
".git/objects/b0/4a0d89b419fe189020b332af819d78c13db428": "620442616304e356c8a8c64f18198f7e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c4/7131f90b01a8c1c7d924eabdd174234a57656d": "015775d7ab4905bf1f9216a9f733ebce",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f0/71c57e2f031cb4ddc04b5b85f649f2e8cbb1c7": "17081e52ae0c4b1ca7e31523a7cf14e4",
".git/objects/f0/8922895db7c75e102557d49e354644aa792bd0": "4f19a395623dd098ca68f8ab5a1e8e8e",
".git/objects/f7/c3a8bbfdd7c46d803a40e8b793c6ad7fcb7329": "d9bb42997fa37da3e9d33f50bf60375c",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f6/9fda3b588db7894565104bef449ef381c14238": "233d23f2325dacd6411ef7e61030dea9",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/6a168989b2846860b230e594742255e5fa5765": "f38bd23ae9b13b0d2c3b51fc87af2514",
".git/objects/2c/da0e8b89cf163eccb110abc1df71fcdc0852cf": "57e49eb542bb9f44e046290945fc1711",
".git/objects/79/b83e0fa1c4103ada1af1a41dc3324b8c49db2b": "1f3b76e5ccc414bb531abab3af872754",
".git/objects/2d/6bab63f8f332a1d6b8c7cd2b27e4cf9b67fcdb": "d90c988b0c725fa8bb01bf0c07a9fb9f",
".git/objects/1e/39cf9e3b104bfdd9384d19f3f0e451533cb84c": "bf752483377bad88a62fbd5ba08d7904",
".git/objects/4a/0d7388f043a338d1ac6dfd316e289896d4ecbc": "277649683316795e178f58c008ac7bcc",
".git/objects/23/52e504ed8efa9efda9dd4cf28de160712ef7d6": "f20875a455190be27c580b41c6b4fd79",
".git/objects/12/9386adcac0f85ec8b243db5164505b74e57702": "cdc8a8184e8ddded457fbe80d7dcf6fe",
".git/objects/85/af4a79a8637e15f707a25512915548def24e29": "f64d9a26ab82eaa748ea414e8978813c",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/71/38c387a3ad390b512628d0fd7cf5cb29e3bf40": "ffc6c28b7b221157041c2a11f9026193",
".git/objects/1c/af0627d51481f983a229fe557ccd025400de1e": "cd5c5632fb447de84081344054275da4",
".git/objects/40/92c91bf863f3e00129069798c5ae47572af4b7": "52654a710e51f77f04b0629f198e992c",
".git/objects/13/566b81b018ad684f3a35fee301741b2734c8f4": "9c29e6900c9ff7f24c6fa14692f16acf",
".git/objects/13/dd16fb136e0c7e28d95fb882f7729bfc04a0af": "791e39f872a4c84fd58bcbe0266fd85f",
".git/objects/7a/536e18d2e752cafda4fcc19ca74343b4161fb9": "4d59042bab3ca56bab7649ae47abf20a",
".git/objects/7a/9c7de90d1bad90c8bffbbeac284e37f9330782": "de364d54f307993ff8cad6e0562be9fc",
".git/objects/8e/a085ae4896f2a23b4708f95e652df53cefec37": "38a8e0404bb315fe19e7b9a8a16ac320",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0ae13e662943571306677f5dfd88b976",
".git/logs/refs/heads/main": "0ae13e662943571306677f5dfd88b976",
".git/logs/refs/remotes/origin/main": "1d4e16a68a3492b06d8c71a0e96d3c18",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "27ed7f402cd1ee50d8e342221b4db72e",
".git/refs/remotes/origin/main": "27ed7f402cd1ee50d8e342221b4db72e",
".git/index": "3418b460451cea61322256117cab2c16",
".git/COMMIT_EDITMSG": "5f259e53299ec4975a41c634a7aa84bd",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/NOTICES": "ea404ea3dcedbcc09c2bbb6aca3fa23d",
"assets/FontManifest.json": "7765a949f18929a59f9f7f2989290682",
"assets/AssetManifest.bin.json": "0732f336e0aff7d31bb6029df2208f70",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "deda62421cef51313b47156d5aad4872",
"assets/fonts/MaterialIcons-Regular.otf": "b1ea87d01a0077392281a8bd0aadf6ed",
"assets/assets/images/zoom_logo.svg": "dfd1a8a08ebc96eff27f5ae0cbf0df97",
"assets/assets/images/clone.svg": "a6d52d43e3a20a9f415be725e6394eda",
"assets/assets/images/successful-check-circle-5.webp": "143ac34cf23510e49be7d5e47cf4df65",
"assets/assets/images/dots.svg": "bf7f628859822276b5396707e5f373f9",
"assets/assets/images/schedule-appointment.webp": "5bf0a3b4525b1ab207febded426966e0",
"assets/assets/images/two-deer.webp": "27aec1b8871c62c0a98860e127297ff7",
"assets/assets/images/drop-in.webp": "78943ff9a9f47413e50e396ab84d90e9",
"assets/assets/images/whale-wolf-deer.webp": "d386169fd3190ba6cdc5489393b815fe",
"assets/assets/images/flag_solid.svg": "0da55091b946108e0b1871247e8e3fc3",
"assets/assets/images/view-schedule.webp": "f4f8c0995fdeb4f3047f0904267a8e2e",
"assets/assets/images/screenshot.webp": "73432a82f2b85bc109d138ce2dab15ef",
"assets/assets/images/ic_bottom_home.svg": "f1cd84c6f2a7a8862fb75fb72661c185",
"assets/assets/images/group.webp": "bd3e2a374d4b4e5cf4e32ce4fe2e2a6e",
"assets/assets/images/view-schedule-large.webp": "98d95c34e36858e3faebc9bc6fc08724",
"assets/assets/images/comments.svg": "303065964e9b0eb5aefa4a010851a8cf",
"assets/assets/images/urgent-large.webp": "38a6defa571c3609d0d50a41857f6060",
"assets/assets/images/address_book.svg": "d7fc2fe858e2b93bdbf5015932b18d6a",
"assets/assets/images/schedule-appointment-large.webp": "da73864dce3df46ed6897fb287adbace",
"assets/assets/images/ellipse.webp": "115257a378444ceeaf2f7484954ed146",
"assets/assets/images/trees.webp": "848d95f9e310e788c703ae9c513c0693",
"assets/assets/images/clipboard.svg": "473cdcae83867baba81d72591b1a1771",
"assets/assets/images/map_marker.svg": "0d338fc5f52ec88aa46dc9d35bee72b5",
"assets/assets/images/group.svg": "3b54995707b2b396fe5d4559c59667cf",
"assets/assets/images/archive.svg": "17c5d05ab37087b254ade9a6ad0984e0",
"assets/assets/images/flag_checkbox.svg": "9300468500cb0387ad201f3d47fed4e8",
"assets/assets/images/facilitator.svg": "6d657af64e42fbd51b03d8644c4e5752",
"assets/assets/images/check.svg": "0572e6e02a949da5d3ba6a1c0b3d1e11",
"assets/assets/images/ic_bottom_my_story.svg": "a4ad097700742807852a7035ac6272e4",
"assets/assets/images/info.svg": "d2e720da1a9149a9a1f0bb21cdcdf74c",
"assets/assets/images/ic_bottom_urgent.svg": "a82369e3b6110b1fd36d1d4c89e72624",
"assets/assets/images/three-ducks.webp": "9c85fd2a408ce8f25c309a83a04094a4",
"assets/assets/images/smile.svg": "6dac283c4bd547d85a75699d599cf16c",
"assets/assets/images/standing-herons.webp": "2f87a0361603b85e56eb65b681a19bb0",
"assets/assets/images/bird-sun.webp": "707fe942cb50cf577a7c869450d15fbc",
"assets/assets/images/bg-login.png": "a60389da0c3c532466d692a6449182a1",
"assets/assets/images/chat.svg": "759abf38b599c6ae067dea4fb80ae26e",
"assets/assets/images/check-circle.webp": "7706b5c279b73e12b832235bc8fd35fe",
"assets/assets/images/send.svg": "dc18291f28698e494c8fdf0a7af27c46",
"assets/assets/images/up_spinner.svg": "46a1ad1e25a81377e2423f66fd664fba",
"assets/assets/images/one-deer.webp": "54066ac4290a89e94311cf3f90ab9aae",
"assets/assets/images/sign_out.svg": "131299973ec684cd5cd453a6b28a064c",
"assets/assets/images/unlink.svg": "04dcdfad858c98558d685ae7ca777c7e",
"assets/assets/images/user_circle.svg": "fd997eb40862765e7f641a5d19b3dc57",
"assets/assets/images/inbox.webp": "2aec5898e0e3dae6b3f172320bfe33a0",
"assets/assets/images/clock.svg": "7682700c88e6e392fc9625e23f7bcfed",
"assets/assets/images/eye.svg": "185a3241a39c7fa42454780e8320eb99",
"assets/assets/images/schedule.svg": "2870433b0153a8be29fb5fb209f766c0",
"assets/assets/images/globe.svg": "34877ab5fe1cd70c8508da5e5666f304",
"assets/assets/images/foundry-logo.webp": "4799a062d759f94ada9499504ee29fc4",
"assets/assets/images/ic_bottom_connect.svg": "9d141ebc340a40da9fbc0d291a9b48d7",
"assets/assets/images/drop-in-large.webp": "bcf7ab72b1384abd2fc322ca85158432",
"assets/assets/images/down_spinner.svg": "b7f343479cc4c44da22606735e1b7917",
"assets/assets/images/group-large.webp": "aad8deda4d05f4a5eb98451947e23b44",
"assets/assets/images/buffer_time.svg": "3be71c4e3f9d5960baa59fa6d6bc537c",
"assets/assets/images/clipboard_list.svg": "6137999a2a6bfdc9b9ec8881e294ce88",
"assets/assets/images/user_md.svg": "feec5f2e114fea59aa63221e570ec414",
"assets/assets/images/hands_and_heart.svg": "b63d7aa4c993bf614ca9ec66d478d43b",
"assets/assets/images/inbox-large.webp": "f7a89faaba08bd8ccb02f3a04c5fefcc",
"assets/assets/fonts/libre_franklin_medium_italic.ttf": "0a384817b27d4ad0fd3b6b72bfefa6c5",
"assets/assets/fonts/libre_franklin_semi_bold_italic.ttf": "904c162b073d5273e3cdfb8bc4e4c4e7",
"assets/assets/fonts/libre_franklin_regular_italic.ttf": "1b746baab8195763b2a983351ac904b2",
"assets/assets/fonts/libre_franklin_medium.ttf": "8844165a9c209427329e59805c31f254",
"assets/assets/fonts/libre_franklin_semi_bold.ttf": "5a95d2f7e50ff4aa4521adf013f9162e",
"assets/assets/fonts/libre_franklin_bold_italic.ttf": "3453f7c20b8a85947bda4ce5ee175047",
"assets/assets/fonts/libre_franklin_bold.ttf": "4fe3bce8027acefed4a64b56f0d55360",
"assets/assets/fonts/libre_franklin_regular.ttf": "817fb321a8297c2751ef343c68ef4ee7",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
".idea/copilot.data.migration.ask2agent.xml": "09be1fe8cd99b47bcdaa6eb26ad4c54f",
".idea/vcs.xml": "166acef3d301bd241d0d6da15bc5ad3c",
".idea/workspace.xml": "4f3a5ee5ad5eae313673e24c401d0776",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "e8a851f6ebf83919c6c1f84d72aad7aa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
