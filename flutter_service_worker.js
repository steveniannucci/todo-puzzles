'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2e333d6f4489e7e52a3c164051b45750",
".git/config": "658c4b214424e1824c9c763f57d7753a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6b948fe654de7d062dd6a26feac8a770",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "34bbf06f32c7506eacfd968f20000e14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "67a1ee94b1d854eee7fbca02e04fe643",
".git/logs/refs/heads/main": "60ae5923133d8bab6a5a20f36a8f9cf4",
".git/logs/refs/remotes/origin/main": "76364d42bdcc539016d8eba620d33689",
".git/objects/01/20c91d3ec21eb903172069802c28ffaa3d8afa": "445d8b483ea4ca92255dd70195fbdf99",
".git/objects/03/c0a142509e295eb62bb8a3e373b550659a3521": "fe315c4bbe0106160cb8efb09b493e7a",
".git/objects/05/2dbd0defe526f054f715ff34ecfda857fb0303": "78f76c237e06ad23c156c185476014bd",
".git/objects/07/afa268a772a7584ba78bc156eac6a74a2c2655": "aef86035cee4d6a64c36c0dc2e015abc",
".git/objects/08/82c337ddf48d90e3f498fc0de42cdffab11c38": "3dc08d5dc727e2f73dff826724d3d6a0",
".git/objects/0b/09a0b8af42fb723f627de40e11ec17c4375d90": "7767580d172820f96b91349d1ba3d3ed",
".git/objects/10/f63db418918688f28631ff8c29c86f9f107c1d": "6694797b8e745bd728eafb0d0732b6a7",
".git/objects/17/b1e4fcbdc5746e3af961341b6a2e42d999392f": "b0b065393acdbbc34254433200b76f90",
".git/objects/18/dc4320eddb4a9369bca2e18557e7f65d0ec0fb": "3ab902cd2ee7bf125eacef990c6fd4db",
".git/objects/1c/ba6f24a1923aaafdd9cea503e5c858c7b4c344": "d867e4a6f288c5bb3fe935b994e8b367",
".git/objects/1d/e9f7d81637d2294f200e56b563f9e99c7f3ac1": "8366a3026161805c14567e64b141f62e",
".git/objects/1f/17d93d086fa8de4dda554eec49a3c849ec7382": "0143912d2a74823f9fdbae0c09f8af76",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/9fd25be93402c7101ef7b14415077b5a321955": "3ebe145f4655ada268bd56d5f1381917",
".git/objects/1f/a87390bc9e67a3e0b0e0b02dcf6afdb44dd97d": "d3e4823f2117f79e47098606a3b0858d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/7752413dbbfb30159b6e2ae86c9462496dc308": "9f316d6d8a39b0a555566a2b1bbb5bc7",
".git/objects/21/4f0e3a6852671d083d800499e6d4b9ef76c0ab": "5f25ac99502870d26b5d21d1b84a29fc",
".git/objects/21/eccdf6e75310a062b2e87b13249ad959843227": "c9137d21b1e256b3e7d67868c660747d",
".git/objects/21/fffd53863c8da573a62f99a9e709f76435e4d8": "41267bc8badd8a78f8dc9dd64cf15588",
".git/objects/22/0887b59747b3fb0a42bd1466384af405c595fc": "176f12a9ca62a2703977dc6ce4ffca64",
".git/objects/23/14e6e95c485dee2e6712626fe9d1e5303afbaf": "a6948660c65e4f8b370b9bd840677d09",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/cc66e14bc18fbba56c9c4e4b867dcb4a037b4f": "7249c72c3f4cf743b9466eef2f7b7233",
".git/objects/26/39d8f85e71a061bbe607545b5f84bf61aaca6b": "b76fb4143d83032bd8755d8ef4d0134f",
".git/objects/26/820ef229d4dd1ead50f57e9b140a7e3d965b79": "f00bc1864ea0163a2def4cc6f8338318",
".git/objects/29/d6ad0e82d480df143f29e650e942a2b07e54df": "bfa235bd4c5a243e07d1c7cac7ae9d14",
".git/objects/31/73e8ad91d6b92e9a5590d28c6f49d703910662": "4b23f76bca0e838b801e7c55b9ab9943",
".git/objects/32/37d1a417d5d8ff0ed3145217a5b6580d9a3e03": "c3d0a098c58740104149a1b62c8d322b",
".git/objects/32/66f87abf8fb9bbcf2add659f89791633369e69": "018e43cbcf980d7d23ad0d6de99580a5",
".git/objects/35/2cc48f3189b8d97c55b441d3363cf97aa3ba0e": "74169072debc2abc7d1b89699d50422d",
".git/objects/37/82282c5b37668adb12600a386ff656c7ad0f58": "c65ca2630583b731cab724bd4c0b1291",
".git/objects/3b/0fd318161ae66a654ba2a53abe1a3b01b90ac6": "ce787396e9117c94e50bcbed0ecfae32",
".git/objects/3b/cd755e7d0b5fbb6cbd362b0666cde5d68480f4": "07d5b1f1c33e108d73a6b7a5f30aef62",
".git/objects/3c/d9eb604fe804f8fd548cb1361e8043ee9046b1": "173858ff6b8b2f914b75a323c397c78e",
".git/objects/3d/bfc8081d98c26d72917d105cefbe3ed192c054": "18ead9bf81c714bc700c69e1055e3b92",
".git/objects/3d/fcaaaceab651e6d4a82aff9eeda24308cc68bb": "8fb763c0f46ade397d74ef15c2a15017",
".git/objects/3f/8b063db02005829237482d1824ddc96fea10f0": "e292de93b4e5f292fd643e65cec44bec",
".git/objects/43/84bfdba152998fde91488a063698863108faa9": "b9660f7f4b23166b0e61374b92ceee1d",
".git/objects/45/18c3e61d2b9723e39fcc10c0dc141171c41705": "8722a92b5ebbb2f3cd3aef48a9b51cda",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/c3f429b42aff426cbab1c75d8cb572adc76982": "751b04b9934268e993e8b29ec77f3852",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/26e369388a8cc25e34e352621e7cf75dab44ba": "de987aed98e921b19d69966bbd2ec649",
".git/objects/4d/f299a3175149f4bf67cf5472841f1bf8e342d7": "d18c624045ac4783d55cefa0fce33ccd",
".git/objects/54/9266a1deb3cfdf9b3d88e7a4cecbbd7c626f8f": "9557c5471cd47373aada15894d34c189",
".git/objects/54/ebc865ed6a07280798de7634710d02c200b56d": "825f5ccd82576c098581100fdc84babc",
".git/objects/57/b7ee740b983b73d87e9003f17ad3f10cfe2258": "7a254c91f58b9828c114c0e24653e2f0",
".git/objects/58/38874af7615f1c6b0ef1834e94e17a9f332829": "d49b3800f868c25aeb470569f311d9fb",
".git/objects/58/a98b560b550090e5f9cd011c7ad9db84864868": "ece4f938a9481a5a7741d5fc2d3bef75",
".git/objects/5c/c5b003ae8dee4501c8c1e680807af82b16cd9f": "c50aa1f6fcd519e048ff283def37c17c",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/60/7444d20f8c44db82f55ae1c8b629688d0117aa": "506a35a37db5e11bcf942d244ce53c6c",
".git/objects/61/0f82299b2a669e442cbe2417e90826801ec016": "54097783a77ca0cca47a1ce28f78ec67",
".git/objects/63/e234f2c8b5b34d5bb7a9daceb5edc8b57e2e38": "43b271839d033f953e099b2de3fe3733",
".git/objects/69/a52a3f66b97c4fd9efc507e751c946eb0f9722": "69c4849f17f196d8438d972b5d86a92a",
".git/objects/6a/4504fc7d1463970c5a663a020c623311888b1a": "917c9f0d71c60e81a80cbafc1e6fe9f6",
".git/objects/6a/ce65cd06598346087fdcf0bb66104970b07580": "e250e2f9852df7af5d4444df3bee120d",
".git/objects/71/795ef532fe9c77a98335fcb31a4bd1ff85f047": "6d20535fad2e987246028cc5fe61a329",
".git/objects/7d/1374879c980f3e3b61639695f3fe9b9126f381": "7659d0c0dbb3d279b4fa4609ffffd4a4",
".git/objects/7e/1fbde372ef7a5ada2935b17a302415fe26bbeb": "683a335fff5ca889a04afd9cf7566bcf",
".git/objects/83/2664d3cfc5f2e11abae81cc106e700092417a7": "ed6c80b2e3b5bf2de6a447b4bf4fe53c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/ed6e58e6f8f05182842c6aebc6541f01322a78": "16dfc37e140b591ff8b21091cd070015",
".git/objects/8a/abd1618d25e9e85500e5e2c2343a19965416ec": "36a3b0b94f2539101b4bb45c6ad758aa",
".git/objects/8a/c07f23fa5cdf1576d9c366c4aa5063a65e692a": "25029b3b6e935af16b5038ebe4b893b9",
".git/objects/8d/aa64da7885c83993d4568de403c57cfcb056cb": "0480c796c3682a1f5c2dc5ab86a419df",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/93/896d59344a479a387eb405045cf3c93f2988a7": "2ae1a7fc1b65a4b9dfa079078497c105",
".git/objects/94/6661b92b04bf30ab729413891db4c3d6c40d58": "6d94967794c0d9ea90f56acdea5b5fd6",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/99/7a4ea6123c6e1abcbd6933083695711b9f86d6": "b24d666abae7b3b48d344309b17e08e7",
".git/objects/9a/01c114ed027848578d2c2a7f129cb1e5c3c166": "810534befa349c748b62dce5ecb93936",
".git/objects/9a/83e11e42aa9b8939282c03f9b2d383e430428d": "f99328362c30e690f2fed9f60bd20777",
".git/objects/9a/9314791c1aaec58ffc6fc7fcaa19721e494241": "9dfa06bce7cd2eaf8e6f7fff8facb62b",
".git/objects/9d/d256c4ba09e3524c0ea8f65b8cf8e82ec4ca71": "a287e7fda04890b2f17326bbab6887b3",
".git/objects/a0/ba8c9d797349a635128205721f9551ad4ab200": "f295252a08894c8741c8b395fb9bbee1",
".git/objects/a4/b23a70c16fc4c9255a9a6e9ddeec6b4dc91fe8": "d2f7955272572daf4a0cd8f35d218575",
".git/objects/ac/f9c8dd8f75c263b472c45e5662a2c758c3e28e": "94e850f257fb3cc18b0bf102d8c972b8",
".git/objects/ae/3e385434b4f0fc644090e2b02b8acdaa532187": "b1dd2113fbe6ecc86d98b056c76e4d50",
".git/objects/ae/5e4e570f34ec2c0b56d7165012120dccc28e32": "157fa0ecb56608f54d96a7ab59235f99",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/f29d552b61b59e8f92139dbb5c861e13937ace": "590f7e1ff9d0a05b74d1af463369ac84",
".git/objects/be/1f68de47f3b9d562b7bc705f78fa87b2745e06": "c0f34657d559366737254c48d8179577",
".git/objects/be/2d12028491da062cd8821037467131e18d31f3": "23f2194ecfa19c308fb00ff564508e56",
".git/objects/bf/6c5a09a4825bd00b6089e89066fc2fb726a955": "1e8425f61626dbbb1ea9cf02846cc49f",
".git/objects/c1/6662e0ed21c8070787af71b3b7b7ecfe3a30cf": "cf890b21b9bf53efef91508e4d98c17b",
".git/objects/c3/3d49f0d568e411f18a172484d4b24d0240671f": "39b74e94767c17e1168a4a46737b9d13",
".git/objects/c3/c1ee222cd453d165661d5cff3902fe75b84b46": "744e4059da313fd4f1b638351d779269",
".git/objects/c5/b68b1f4b589a436e688b2f1cb184d52c363a28": "9ed47828608d9eef8db977a1d30f8ff3",
".git/objects/ca/60c5caf18de8bc02f5fc6b5a7bc6063abfab37": "b26ef79436973bf5ededcad0609b1db5",
".git/objects/cd/93423d32fcbbb67c7c403a05c40e30d73b1d45": "0dfe1341dde99bded5198404bcf3dd0b",
".git/objects/ce/16c6baf0c06f1968cc40b80ce1909d04a3cf8b": "00d9caff2d7c16e9cf078836253e28dc",
".git/objects/cf/293a16b8efb322ba3229da23571fb78c846572": "fec75aee3ea65b0d28de890c8da75ce8",
".git/objects/d1/a3c004b86a9ddc23c8c3d107e829448166c3ec": "e356c7e836da2becd90fc769070da73c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d8/050557b9f9b3532d58bf48db1cdd32667177e8": "d54f755827721814f5e24f0e83836871",
".git/objects/e2/45a279c8a56db87737fa713dd9813666d2ddfb": "412d54751a6501d343c881e4b5ea3cdc",
".git/objects/e4/f4e672e4a5789131b0f0c9ad86bb7cd305f32a": "7a1aaf14a7bafbd244d08c5a577fd366",
".git/objects/e6/0a253deb11016dd0a846b026339e1edd692ba2": "46a513c82aa60ae850d70dd29ae17fa0",
".git/objects/e8/d1a38c3a7b89e8cbbfb65a5fa25ccad06823f5": "8b195b80e030585b404bd23232342abf",
".git/objects/ea/9da68a1f893a3c081941e3be7b3610c0868bc3": "b073ee38ea9f10dacb34195241dbdee5",
".git/objects/ea/bc47ec7577c42f23387d5732a705ec455d7d55": "7e964c01220a008d6597fbcf5127758a",
".git/objects/eb/0e523a385014393547dfaff31a9100b4107900": "27a79efde67188a2d36206947ab913cd",
".git/objects/ec/b241dd6f8ba9624a17bb3638dbe7d7d86d1106": "c71d5a8945d2eccb5b416132202385c6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f5/1f145cc17df27d6982e9c215907bb112a41321": "5eb09309ffe9b80016413a20d5a7d17c",
".git/objects/f8/a3c33a2890af4979fbeef6e84c89d8c668282f": "ba14337a841e0fd799757e3a23508fd5",
".git/objects/ff/72d39ac55ceb1cf2b75cfb04fe9b26aaa6edc0": "6edb7d9e75f21ca7e5b64c9a3161d770",
".git/ORIG_HEAD": "2e2b2bb9d9f9d5e521cdafbf237b7d4e",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "2e2b2bb9d9f9d5e521cdafbf237b7d4e",
".git/refs/remotes/origin/main": "2e2b2bb9d9f9d5e521cdafbf237b7d4e",
"assets/AssetManifest.bin": "2a6be04cc06afda2ba0b11e39db2dc31",
"assets/AssetManifest.bin.json": "561c5f9842ea810201881ff385cd2c0d",
"assets/AssetManifest.json": "7a588e1af624c2cdb4b9253404a76f6a",
"assets/assets/containers/default_frame.png": "fcaa7ba4017f33bcc9b21e78a2afbf5a",
"assets/assets/containers/todopuzzles.png": "80ce952ee0ac66ab6c0b5231fe08c320",
"assets/assets/frames/frame.svg": "402e7f74035cfe42dfbcbc3924c381aa",
"assets/assets/gems/7_0.png": "9a82f712aea2bc886809760dc9005b23",
"assets/assets/gems/7_1.png": "bf33109fc7684d31b85cd6f048c5fc8b",
"assets/assets/gems/7_2.png": "81080d0eb3a7c6f29c53e8c12b825d0a",
"assets/assets/gems/7_3.png": "80507ab4057a6d21078d7ec2db8a942f",
"assets/assets/gems/7_4.png": "2b5eb1a0d345787d6a43b3b33c48e745",
"assets/assets/gems/7_5.png": "9c0c13b39910f96fd4bc5f40f57d4d19",
"assets/assets/gems/7_6.png": "79effd389f67fece4eea4c3e5b976202",
"assets/assets/gems/7_7.png": "bd60938c99367a413dfeceae8dbccce9",
"assets/assets/puzzles/1/0.png": "8008a89706956394b89fa5042ef9048a",
"assets/assets/puzzles/1/1.png": "d1b249038ff6b50448ed4add54c63646",
"assets/assets/puzzles/2/0.png": "8008a89706956394b89fa5042ef9048a",
"assets/assets/puzzles/2/1.png": "fb98d6d7ca63d14cf513fe0b320fd933",
"assets/assets/puzzles/2/2.png": "d1b249038ff6b50448ed4add54c63646",
"assets/assets/puzzles/3/0.png": "8008a89706956394b89fa5042ef9048a",
"assets/assets/puzzles/3/1.png": "58dfbd8b8c6429e848354ad883637cf1",
"assets/assets/puzzles/3/2.png": "4f5255f39c6d66af78eb909424188834",
"assets/assets/puzzles/3/3.png": "d1b249038ff6b50448ed4add54c63646",
"assets/assets/puzzles/4/0.png": "8008a89706956394b89fa5042ef9048a",
"assets/assets/puzzles/4/1.png": "23e6407ed4c462293e6ce49a1e35c005",
"assets/assets/puzzles/4/2.png": "fb98d6d7ca63d14cf513fe0b320fd933",
"assets/assets/puzzles/4/3.png": "9379e9523231ed2432bedbb9d442989b",
"assets/assets/puzzles/4/4.png": "d1b249038ff6b50448ed4add54c63646",
"assets/assets/puzzles/5/0.png": "dff0ade096aaa2b5c2f93a3c026b5326",
"assets/assets/puzzles/5/1.png": "bb9f54a8fc2b3937888dd0dc55047088",
"assets/assets/puzzles/5/2.png": "8186b27f94847bb7d2344ae55ad36dd1",
"assets/assets/puzzles/5/3.png": "4dac664f552af6f007188e2fa373dc20",
"assets/assets/puzzles/5/4.png": "de5177e5c1a63008596337398377e6f9",
"assets/assets/puzzles/5/5.png": "d1b249038ff6b50448ed4add54c63646",
"assets/assets/puzzles/6/0.png": "dff0ade096aaa2b5c2f93a3c026b5326",
"assets/assets/puzzles/6/1.png": "a8c2282afa9a151d11369c9424d989e8",
"assets/assets/puzzles/6/2.png": "617a90e617f2744024945a4923f0cb1c",
"assets/assets/puzzles/6/3.png": "2707c3c83097b50b89422a3032210f77",
"assets/assets/puzzles/6/4.png": "6e9b289002e024d9383e7f6a0cac1f8b",
"assets/assets/puzzles/6/5.png": "8f31625d56c58baeb05463df06a8032c",
"assets/assets/puzzles/6/6.png": "d1b249038ff6b50448ed4add54c63646",
"assets/assets/puzzles/7/0.png": "dff0ade096aaa2b5c2f93a3c026b5326",
"assets/assets/puzzles/7/1.png": "7e5194e288ebdf860eba0dcc20f5d28a",
"assets/assets/puzzles/7/2.png": "c09a65a28fef78c78032917b9449e68f",
"assets/assets/puzzles/7/3.png": "d436ca50ce621a61f849f431023eb8c0",
"assets/assets/puzzles/7/4.png": "be66d5e84f409f31bca21ad4aa30cbce",
"assets/assets/puzzles/7/5.png": "56bf9b562c65ca6e7c2389e6b0b33209",
"assets/assets/puzzles/7/6.png": "0a8b32939db33e952965c7d8283f929f",
"assets/assets/puzzles/7/7.png": "d1b249038ff6b50448ed4add54c63646",
"assets/assets/puzzles/8/0.png": "8008a89706956394b89fa5042ef9048a",
"assets/assets/puzzles/8/1.png": "a36fc11a2c3452b670f079e9b69ca939",
"assets/assets/puzzles/8/2.png": "23e6407ed4c462293e6ce49a1e35c005",
"assets/assets/puzzles/8/3.png": "58dfbd8b8c6429e848354ad883637cf1",
"assets/assets/puzzles/8/4.png": "fb98d6d7ca63d14cf513fe0b320fd933",
"assets/assets/puzzles/8/5.png": "4f5255f39c6d66af78eb909424188834",
"assets/assets/puzzles/8/6.png": "9379e9523231ed2432bedbb9d442989b",
"assets/assets/puzzles/8/7.png": "a392cc4ea62c52152d917b4d97c0756c",
"assets/assets/puzzles/8/8.png": "d1b249038ff6b50448ed4add54c63646",
"assets/assets/rewards/default_reward.png": "82bc0e4924f8e08cdc752910f703902f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "83ae931c6ce66f70529f4a0ef3c4169a",
"assets/NOTICES": "d690dc238c3170b7ea8d602374496586",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "b85fedc601db924025e7936d851e7e7e",
"canvaskit/canvaskit.wasm": "32e3efb7197623764dab3ab619bc8e0e",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "9f2dfa8c181a437290aa2b58e55da15d",
"canvaskit/chromium/canvaskit.wasm": "a9ac3154d01d503f2f999bfe159149a8",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "c6f605aa7f865f54f11010319bec4307",
"canvaskit/skwasm.wasm": "44af633450aae3d639948c8fd7d344b0",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "fe31c28c2a3f033bcf8ce09fdaf4c08c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "609c3d4a3e489f90c1750c07943de9a7",
"icons/android-chrome-192x192.png": "1e57b1fc95123c2553e749dc02a85374",
"icons/android-chrome-512x512.png": "9ad0f9345f1f7ebaa5df4736e713d40c",
"icons/apple-touch-icon.png": "8f68fda99f8b5a8eb22c00f91d1eedf3",
"icons/favicon-16x16.png": "dd010301c60f9065f2854bf4138446b9",
"icons/favicon-32x32.png": "90650b3c0743f3623e18fbced475e5ad",
"index.html": "5168c6b722d17df3d0557169cae3c78f",
"/": "5168c6b722d17df3d0557169cae3c78f",
"js/sql.js": "b3743183c44b227e1624374a154c592f",
"main.dart.js": "f09a4f25fdd7d6b3a59b751c6e808dd5",
"manifest.json": "535472e4a9cf1cbe8517cff0918fba35",
"version.json": "e452c0841f1568fdce6ba83d66ac9977"};
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
