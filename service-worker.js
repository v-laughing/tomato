/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d66e3992bb5b7f85ae3587e9c70654d4"
  },
  {
    "url": "assets/css/0.styles.a1c84fbc.css",
    "revision": "45fddcf10f278ac8ad0babb536a82643"
  },
  {
    "url": "assets/img/011f3ef6-d824-4d43-8b2c-36dab8eaaa72-1.c2350789.png",
    "revision": "c23507898b611f04e4fa110e1108144d"
  },
  {
    "url": "assets/img/014fbc4d-d873-4a12-b160-867ddaed9807.c601d088.jpg",
    "revision": "c601d0884193d6b443a2113f1b8945d1"
  },
  {
    "url": "assets/img/02943a90-7dd4-4e9a-9325-f8217d3cc54d.4bf96136.jpg",
    "revision": "4bf961363fe7d22178b75446aa2b79ff"
  },
  {
    "url": "assets/img/02a1fbfd-7a9d-4114-95df-ca2445587a1f.d385f99b.jpg",
    "revision": "d385f99bcd6464fb14db0597e4d3914e"
  },
  {
    "url": "assets/img/047faac4-a368-4565-8331-2b66253080d3.ffd1805f.jpg",
    "revision": "ffd1805fccc9c3c5b9d08e561d7629af"
  },
  {
    "url": "assets/img/051e436c-0e46-4c59-8f67-52d89d656182.fd84f9ff.png",
    "revision": "fd84f9ffcb35287d0856421ba840e032"
  },
  {
    "url": "assets/img/067b310c-6877-40fe-9dcf-10654e737485.9ae6ee6a.jpg",
    "revision": "9ae6ee6a0db4c54ed7a653b9bceed817"
  },
  {
    "url": "assets/img/094e3ac8-e080-4e94-9f0a-64c25abc695e.1a81aa18.gif",
    "revision": "1a81aa184600e7e3f40057a7a0a52a5b"
  },
  {
    "url": "assets/img/0ad9f7ba-f408-4999-a77a-9b73562c9088.b16b0904.gif",
    "revision": "b16b0904f6dc2fbf3aa84ee43a3deaf0"
  },
  {
    "url": "assets/img/0c6f9930-8704-4a54-af23-19f9ca3e48b0.211d2a6b.jpg",
    "revision": "211d2a6bc9ff701b2028293d360285ee"
  },
  {
    "url": "assets/img/0dae7e93-cfd1-4bd3-97e8-325b032b716f-1572687622947.800c015f.gif",
    "revision": "800c015fdcbe7d0e5a1d2b7f06d3783d"
  },
  {
    "url": "assets/img/0dae7e93-cfd1-4bd3-97e8-325b032b716f.800c015f.gif",
    "revision": "800c015fdcbe7d0e5a1d2b7f06d3783d"
  },
  {
    "url": "assets/img/0dbc4f7d-05c9-4aae-8065-7b7ea7e9709e.cad84e73.gif",
    "revision": "cad84e7372e38e6a909fc698ebedc243"
  },
  {
    "url": "assets/img/0dd2d40a-5b2b-4d45-b176-e75a4cd4bdbf.19e71ada.png",
    "revision": "19e71ada3eedf86aad65a7e134f519b7"
  },
  {
    "url": "assets/img/0f399a9f-1351-4b2d-b8a4-2ebe82b1a703.0c614d2e.jpg",
    "revision": "0c614d2e0551b71c20950b2243a6601f"
  },
  {
    "url": "assets/img/0f8d178b-52d8-491b-9dfd-41e05a952578.931aeb85.gif",
    "revision": "931aeb85e586be282460e416933e04fb"
  },
  {
    "url": "assets/img/101550414151983.a9116fc2.gif",
    "revision": "a9116fc2718b3e760e04b0153dc58961"
  },
  {
    "url": "assets/img/11-1.034d4aa8.png",
    "revision": "034d4aa879e4a8cf155cf0c2c25646f3"
  },
  {
    "url": "assets/img/11-2.217f5403.png",
    "revision": "217f5403733382f932ad376b53aaaa4b"
  },
  {
    "url": "assets/img/11-3.da3a962a.png",
    "revision": "da3a962a17cd26954b001c27fcc51a1b"
  },
  {
    "url": "assets/img/11-4.58108010.png",
    "revision": "58108010bccb3caee94040cbbc1a95e5"
  },
  {
    "url": "assets/img/11-5.d77d7078.png",
    "revision": "d77d7078e6321503f5c55d3e8d96ae3e"
  },
  {
    "url": "assets/img/11-6.457453be.png",
    "revision": "457453be745c2d5bb4031ef4c6bdae6d"
  },
  {
    "url": "assets/img/11-7.0120b253.png",
    "revision": "0120b253e7da69da5ca31cf06aae5008"
  },
  {
    "url": "assets/img/11-8.947628e0.png",
    "revision": "947628e0940046e05c16fae19c992d10"
  },
  {
    "url": "assets/img/111521118015898.83662c9b.gif",
    "revision": "83662c9b61e6591c371f27a838c00e1d"
  },
  {
    "url": "assets/img/111521118445538.508122a2.gif",
    "revision": "508122a2f5cf603358d0e13e519c3727"
  },
  {
    "url": "assets/img/111521118483039.b379b76c.gif",
    "revision": "b379b76cd0a2e12c44e45d66f9f640cd"
  },
  {
    "url": "assets/img/111521118640738.c149bfd1.gif",
    "revision": "c149bfd1560369635d47650d3dfabb09"
  },
  {
    "url": "assets/img/111521119203347.2817dccb.gif",
    "revision": "2817dccb8da5a59439f58e211ae7c17b"
  },
  {
    "url": "assets/img/111521119368714.4306b9b7.gif",
    "revision": "4306b9b7a8de676392ea00b780f819d8"
  },
  {
    "url": "assets/img/111550414182638.e9760400.gif",
    "revision": "e97604005bbe893e3e3367c8feab047f"
  },
  {
    "url": "assets/img/11b27de5-5a9d-45e4-95cc-417fa3ad1d38.2fe1d3f2.jpg",
    "revision": "2fe1d3f22c8f0a728598697286eaa14c"
  },
  {
    "url": "assets/img/12-1.2c1101ff.png",
    "revision": "2c1101ff2b4d3a7e0491a248c17f7ed5"
  },
  {
    "url": "assets/img/12-2.f60c8bb0.png",
    "revision": "f60c8bb0a393f390fb5fe787fadaf8dd"
  },
  {
    "url": "assets/img/12-3.8ce100bc.png",
    "revision": "8ce100bce6b03d02cab470724c98a6d6"
  },
  {
    "url": "assets/img/12-4.b8481c6e.png",
    "revision": "b8481c6ecaa92a9f556c3f94ea35bea4"
  },
  {
    "url": "assets/img/12-5.fc69ff8f.png",
    "revision": "fc69ff8f021f5769cfadfe8ca79e9bb2"
  },
  {
    "url": "assets/img/12-6.494017d6.png",
    "revision": "494017d66193d9c5e6ace076ac6aa3f2"
  },
  {
    "url": "assets/img/12-7.a764cd24.png",
    "revision": "a764cd244dddab5988d7d0ce81e3535c"
  },
  {
    "url": "assets/img/12-8.9a0979de.png",
    "revision": "9a0979ded7db7f2d1802d30459d82c70"
  },
  {
    "url": "assets/img/1202b2d6-9469-4251-bd47-ca6034fb6116.bd994a00.png",
    "revision": "bd994a00ff32e89dd98eeae5d3198c78"
  },
  {
    "url": "assets/img/14389ea4-8d96-4e96-9f76-564ca3324c1e.a9a348f7.png",
    "revision": "a9a348f7c52bcb6ba046e8b8c6442e04"
  },
  {
    "url": "assets/img/1492928416812_4.cada9038.png",
    "revision": "cada9038fe8d2e6951fce3ca32a25b12"
  },
  {
    "url": "assets/img/1492929000361_5.6ed5242e.png",
    "revision": "6ed5242ecfce91bc0611babacf774291"
  },
  {
    "url": "assets/img/1492929553651_7.80f8b28f.png",
    "revision": "80f8b28f3f9540e7b8afe6fa783f90d7"
  },
  {
    "url": "assets/img/1556770b-8c01-4681-af10-46f1df69202c.b216f659.jpg",
    "revision": "b216f659f1ac02ff8636c04b55db0977"
  },
  {
    "url": "assets/img/15851555-5abc-497d-ad34-efed10f43a6b.15cb81ce.png",
    "revision": "15cb81cec6c768a3f8c4f547a94a1adf"
  },
  {
    "url": "assets/img/1a9977e4-2f5c-49a6-aec9-f3027c9f46a7.7514c8bb.png",
    "revision": "7514c8bb695f36fbeb177ae5df7495c1"
  },
  {
    "url": "assets/img/2_14_microkernelArchitecture.72331340.jpg",
    "revision": "72331340b1279112eabbbff91a9e8508"
  },
  {
    "url": "assets/img/2-1.9743052d.png",
    "revision": "9743052d2eb5fa5f4cfdd437462e9b16"
  },
  {
    "url": "assets/img/2-2.0080f210.png",
    "revision": "0080f210be9a6dd5190b635f8895e07f"
  },
  {
    "url": "assets/img/22fda4ae-4dd5-489d-ab10-9ebfdad22ae0.9761f39b.jpg",
    "revision": "9761f39b4c3313112dacf09fa609c075"
  },
  {
    "url": "assets/img/23219e4c-9fc0-4051-b33a-2bd95bf054ab.8598acb7.jpg",
    "revision": "8598acb77cb95719bd01a51fe70dbcb2"
  },
  {
    "url": "assets/img/23b9d625-ef28-42b5-bb22-d7aedd007e16.123293dc.jpg",
    "revision": "123293dc12a8fce90c3432c8dc2d378a"
  },
  {
    "url": "assets/img/23ba890e-e11c-45e2-a20c-64d217f83430.75d54050.png",
    "revision": "75d540501b4979121d3834bca9bad183"
  },
  {
    "url": "assets/img/2719067e-b299-4639-9065-bed6729dbf0b.d7dc0987.png",
    "revision": "d7dc0987f82effcd38d61764fad8b1a2"
  },
  {
    "url": "assets/img/278fe431-af88-4a95-a895-9c3b80117de3.ec2c338f.jpg",
    "revision": "ec2c338fe1833becd6fe602d0508141d"
  },
  {
    "url": "assets/img/2a1f8b0f-1dd7-4409-b177-a381c58066ad.3047ff24.png",
    "revision": "3047ff2476ad98bb808191d79ba4e8b0"
  },
  {
    "url": "assets/img/2b8bfd57-b4d1-4a75-bfb0-bcf1fba4014a.7b05951a.png",
    "revision": "7b05951ab9cf32bc92c4881f96547d99"
  },
  {
    "url": "assets/img/2bcc58ad-bf7f-485c-89b5-e7cafc211ce2.b76d9a55.jpg",
    "revision": "b76d9a55a18c76ae345902a7ea501381"
  },
  {
    "url": "assets/img/3-1.24de7795.png",
    "revision": "24de779561a6413fe9d16561caadff83"
  },
  {
    "url": "assets/img/3-2.15d95cb5.png",
    "revision": "15d95cb57fa588e7389a4053a54ef9e6"
  },
  {
    "url": "assets/img/3-3.125d03a1.png",
    "revision": "125d03a1866910072500e1074a33a533"
  },
  {
    "url": "assets/img/3-4.84327ab3.png",
    "revision": "84327ab327c0d07eca39d5d5d1148f71"
  },
  {
    "url": "assets/img/3-5.e776868c.png",
    "revision": "e776868c576c2736dade7f4b8f9d3d93"
  },
  {
    "url": "assets/img/3-6.5cbf58e2.png",
    "revision": "5cbf58e2d3c7f0662d0ed6d01b97bc62"
  },
  {
    "url": "assets/img/3-7.658eb0c6.png",
    "revision": "658eb0c65a5a2b8daf0518b284244654"
  },
  {
    "url": "assets/img/3-9.437a8447.png",
    "revision": "437a8447f104d2158b5ec694fa3283f1"
  },
  {
    "url": "assets/img/31b7e8de-ed11-4f69-b5fd-ba454120ac31.23df9ef5.jpg",
    "revision": "23df9ef5103e92fa7110d148ffeed177"
  },
  {
    "url": "assets/img/31d9adce-2af8-4754-8386-0aabb4e500b0.4beb6ffc.png",
    "revision": "4beb6ffc1608f22e830923f56a5eb715"
  },
  {
    "url": "assets/img/335fe19c-4a76-45ab-9320-88c90d6a0d7e.a38ff8ca.png",
    "revision": "a38ff8caa212b9ded22d0d642bad7fc1"
  },
  {
    "url": "assets/img/35253fa4-f60a-4e3b-aaec-8fc835aabdac.f96238de.gif",
    "revision": "f96238de82b08c2f0779641ee275ed91"
  },
  {
    "url": "assets/img/35a8c711-0dc0-4613-95f3-be96c6c6e104.792eec1b.gif",
    "revision": "792eec1bf5a2e627ef3ae67406fa6a8e"
  },
  {
    "url": "assets/img/379444c9-f1d1-45cd-b7aa-b0c18427d388.fd31fa30.jpg",
    "revision": "fd31fa30daacbcbb415b35795f70ce6e"
  },
  {
    "url": "assets/img/390c913b-5f31-444f-bbdb-2b88b688e7ce.50af6e00.jpg",
    "revision": "50af6e009784845b2cb645b1ab0b8336"
  },
  {
    "url": "assets/img/3d5b828e-5c4d-48d8-a440-281e4a8e1c92.2ba9f19f.png",
    "revision": "2ba9f19fdc1ceda5ec7d33f528533b13"
  },
  {
    "url": "assets/img/3ea280b5-be7d-471b-ac76-ff020384357c.aaa9b59f.gif",
    "revision": "aaa9b59f2d5f8f9c638bfcf96d5f3654"
  },
  {
    "url": "assets/img/4-1.1bc75b80.png",
    "revision": "1bc75b80e6cc21a0ae749754bb8bf9e8"
  },
  {
    "url": "assets/img/4-2.477265a3.png",
    "revision": "477265a3d6eec7e020dc51a97907fe28"
  },
  {
    "url": "assets/img/4-3.3092780f.png",
    "revision": "3092780f7643eadc12383695880f1642"
  },
  {
    "url": "assets/img/437cb54c-5970-4ba9-b2ef-2541f7d6c81e.eafe6372.gif",
    "revision": "eafe6372da8beae23965e0350f68d5ec"
  },
  {
    "url": "assets/img/43d323ac-9f07-4e4a-a315-4eaf8c38766c.b101e8a3.jpg",
    "revision": "b101e8a3bf1d1a97a0dad9e8b3319ff4"
  },
  {
    "url": "assets/img/44d33643-1004-43a3-b99a-4d688a08d0a1.47cf56eb.png",
    "revision": "47cf56eb40f7d6b51702db8017b6ff50"
  },
  {
    "url": "assets/img/476329d4-e2ef-4f7b-8ac9-a52a6f784600.2876029c.png",
    "revision": "2876029ca807bde0916b436215f43eb1"
  },
  {
    "url": "assets/img/47d98583-8bb0-45cc-812d-47eefa0a4a40.aa1fc122.jpg",
    "revision": "aa1fc12212b7e6d3585b3b057fdafa31"
  },
  {
    "url": "assets/img/49d2adc1-b28a-44bf-babb-d44993f4a2e3.90c8c1c7.gif",
    "revision": "90c8c1c7d3aed5e0874bc09d4cce3453"
  },
  {
    "url": "assets/img/4ab87717-e264-4232-825d-8aaf08f14e8b.00498410.jpg",
    "revision": "00498410aa268dec6416e00683d3d32d"
  },
  {
    "url": "assets/img/4c457532-550b-4eca-b881-037b84b4934b.acd43cda.jpg",
    "revision": "acd43cdabc8146741ef85338e51b0b9b"
  },
  {
    "url": "assets/img/4cf711a8-7ab2-4152-b85c-d5c226733807.fb25bb47.png",
    "revision": "fb25bb47be56baf5eda32b9a50cdd358"
  },
  {
    "url": "assets/img/5-1.08d322a1.png",
    "revision": "08d322a1463d832440786602c53232be"
  },
  {
    "url": "assets/img/5-2.ecaa5ce1.png",
    "revision": "ecaa5ce156842d99e81771d3accfe924"
  },
  {
    "url": "assets/img/5-3.e01b75cc.png",
    "revision": "e01b75cc72121940313e0aba326694aa"
  },
  {
    "url": "assets/img/50831a6f-2777-46ea-a571-29f23c85cc21.f19d985f.jpg",
    "revision": "f19d985f9b2d5a63d11cd6fc9066ea9f"
  },
  {
    "url": "assets/img/51e2ed95-65b8-4ae9-8af3-65602d452a25.cc8e319f.jpg",
    "revision": "cc8e319fdb5ba49d1f64998e85ba9dda"
  },
  {
    "url": "assets/img/55dc4e84-573d-4c13-a765-52ed1dd251f9.fe9d48e9.png",
    "revision": "fe9d48e93a18fb595ccc4e13b7a6c96c"
  },
  {
    "url": "assets/img/5f5c22d5-9c0e-49e1-b5b0-6cc7032724d4.b29547de.png",
    "revision": "b29547dee410c901c718fb1a0733cef6"
  },
  {
    "url": "assets/img/6-1.e61c2dda.png",
    "revision": "e61c2dda7761e67bc6d75c2143b5d05e"
  },
  {
    "url": "assets/img/6-2.a2e38545.png",
    "revision": "a2e385459253b732e21d81c01d1b05fc"
  },
  {
    "url": "assets/img/6019b2db-bc3e-4408-b6d8-96025f4481d6.526a760a.png",
    "revision": "526a760a355ca94a1263dbb99e5899fb"
  },
  {
    "url": "assets/img/60c4a44c-7829-4242-b3a1-26c3b513aaf0.231a6b0f.gif",
    "revision": "231a6b0fe52ab24fcd061cf570fe50c1"
  },
  {
    "url": "assets/img/62e77997-6957-4b68-8d12-bfd609bb2c68.61cc0271.jpg",
    "revision": "61cc02718498f89439d43de60650edda"
  },
  {
    "url": "assets/img/63c8ffea-a9f2-4ebe-97d1-d71be71246f9.fc127e60.jpg",
    "revision": "fc127e60a05e87f50e469cd6fe7d9159"
  },
  {
    "url": "assets/img/643b6f18-f933-4ac5-aa7a-e304dbd7fe49.91f19b25.gif",
    "revision": "91f19b25dfad8c40f58e7f0ad120d3f2"
  },
  {
    "url": "assets/img/66192382-558b-4b05-a35d-ac4a2b1a9811.8f9e192a.jpg",
    "revision": "8f9e192a3088a3191940f352bec05910"
  },
  {
    "url": "assets/img/6980aef0-debe-4b4b-8da5-8b1befbc1408.3a357aa5.gif",
    "revision": "3a357aa51f518a79f740282e310a623d"
  },
  {
    "url": "assets/img/6b833bc2-517a-4270-8a5e-0a5f6df8cd96.0d43ee1e.png",
    "revision": "0d43ee1e640714393d8b0581cfd99c00"
  },
  {
    "url": "assets/img/7002c01b-1ed5-475a-9e5f-5fc8a4cdbcc0.4fc3f365.jpg",
    "revision": "4fc3f36584574dc3ccaa6cdd5d4a8248"
  },
  {
    "url": "assets/img/7008dc2b-6f13-4174-a516-28b2d75b0152.0778eb2b.gif",
    "revision": "0778eb2b5a4731a8b6f764b78fc0b960"
  },
  {
    "url": "assets/img/71550414107576.c5716777.gif",
    "revision": "c571677785e2d616c058eff45bb3eccb"
  },
  {
    "url": "assets/img/7818c574-97a8-48db-8e62-8bfb030b02ba.82e9bae7.png",
    "revision": "82e9bae7b79ab5a331263707f302ab24"
  },
  {
    "url": "assets/img/79c6f036-bde6-4393-85a3-ef36a0327bd2.4f4a453c.png",
    "revision": "4f4a453c33acb49bfccd18d101bce4a8"
  },
  {
    "url": "assets/img/7a29acce-f243-4914-9f00-f2988c528412.4072191d.jpg",
    "revision": "4072191d63b7caddf998cb2fe821db27"
  },
  {
    "url": "assets/img/7a85e285-e152-4116-b6dc-3fab27ba9437.61e72571.jpg",
    "revision": "61e72571f50fe64d2b175e563a958b90"
  },
  {
    "url": "assets/img/7b281b1e-0595-402b-ae35-8c91084c33c1.b474cff8.png",
    "revision": "b474cff84a3523ae4fac997c7daeefc3"
  },
  {
    "url": "assets/img/7b3efa99-d306-4982-8cfb-e7153c33aab4.07a03d4d.png",
    "revision": "07a03d4da61ff30b82bcff25256c3c23"
  },
  {
    "url": "assets/img/7bd202a7-93d4-4f3a-a878-af68ae25539a.cc646fa6.png",
    "revision": "cc646fa6b311a937a1c795d0f5100dd9"
  },
  {
    "url": "assets/img/7c54de21-e2ff-402e-bc42-4037de1c1592.77db1027.png",
    "revision": "77db1027e909ec6163894226247da7a9"
  },
  {
    "url": "assets/img/8-1.d9a7e4d7.png",
    "revision": "d9a7e4d7f5d104297caba941001205bd"
  },
  {
    "url": "assets/img/8-2.b9ca27fd.png",
    "revision": "b9ca27fd9836ff74c494e3b5c47430e8"
  },
  {
    "url": "assets/img/8-4.ffa93066.png",
    "revision": "ffa9306652bb68067144574352f5ad4b"
  },
  {
    "url": "assets/img/8-5.13a44fc3.png",
    "revision": "13a44fc3c04809e103f72876ad97bcb8"
  },
  {
    "url": "assets/img/8006a450-6c2f-498c-a928-c927f758b1d0.d6129289.png",
    "revision": "d61292895db07e1bc0ccf8eb6cc1d0fb"
  },
  {
    "url": "assets/img/807f4258-dba8-4c54-9c3c-a707c7ccffa2.cc337f66.jpg",
    "revision": "cc337f668beb09747c5b0f19b5aff345"
  },
  {
    "url": "assets/img/81538cd5-1bcf-4e31-86e5-e198df1e013b.1de539c4.jpg",
    "revision": "1de539c45e97c39d6369985f5c07d36c"
  },
  {
    "url": "assets/img/83d466bd-946b-4430-854a-cf7b0696d4c8.5792e8b9.jpg",
    "revision": "5792e8b969ac843ac1b04017cd0bfce2"
  },
  {
    "url": "assets/img/8441b2c4-dca7-4d6b-8efb-f22efccaf331.c3a0c699.png",
    "revision": "c3a0c699a59b8418037eb040ee8a1430"
  },
  {
    "url": "assets/img/8442519f-0b4d-48f4-8229-56f984363c69.8b780e78.png",
    "revision": "8b780e78a0af2dc2c728245a69cc590c"
  },
  {
    "url": "assets/img/84a5b15a-86c5-4d8e-9439-d9fd5a4699a1.47d5395e.jpg",
    "revision": "47d5395e871ace9d9acd0eec67911ac9"
  },
  {
    "url": "assets/img/85c05fb1-5546-4c50-9221-21f231cdc8c5.b6dcbf8d.jpg",
    "revision": "b6dcbf8d4b16bc4f6d9b63e20cb473d9"
  },
  {
    "url": "assets/img/86e6a91d-a285-447a-9345-c5484b8d0c47.2e9e39c4.png",
    "revision": "2e9e39c426a74a61ce17a52fe7bd7d07"
  },
  {
    "url": "assets/img/89292ae1-5f13-44dc-b508-3f035e80bf89.7d175ab5.png",
    "revision": "7d175ab52123e7f573febb1db5dacd2b"
  },
  {
    "url": "assets/img/8996a537-7c4a-4ec8-a3b7-7ef1798eae26.fa3d063c.png",
    "revision": "fa3d063cb9699fa357de03acee03389d"
  },
  {
    "url": "assets/img/8edc5164-810b-4cc5-bda8-2a2c98556377.b7fd8ffa.jpg",
    "revision": "b7fd8ffaf037c109953da10910425a03"
  },
  {
    "url": "assets/img/9-10.121b9e3d.png",
    "revision": "121b9e3d94126ae88f2a949b937fc0b0"
  },
  {
    "url": "assets/img/9-11.31201e0a.png",
    "revision": "31201e0a0018dd7dd529340c40e95e1e"
  },
  {
    "url": "assets/img/9-12.777f19a1.png",
    "revision": "777f19a1fb9a3c74f5f5c632cd759c60"
  },
  {
    "url": "assets/img/9-13.73e7f89a.png",
    "revision": "73e7f89acd57bfb4c5f3824bf2d67530"
  },
  {
    "url": "assets/img/9-14.567fec29.png",
    "revision": "567fec29a82388b07baec4b6742ab86c"
  },
  {
    "url": "assets/img/9-15.a4bf5b4b.png",
    "revision": "a4bf5b4bfbfe8673993919a22df26d83"
  },
  {
    "url": "assets/img/9-16.3cd336c3.png",
    "revision": "3cd336c3be38ed1d0c151f84c2d93fd1"
  },
  {
    "url": "assets/img/9-17.fe82c291.png",
    "revision": "fe82c2912ad71fe8e57ce4489b1307e2"
  },
  {
    "url": "assets/img/9-18.d0ad15af.png",
    "revision": "d0ad15afc0b72b8c8cf9a929405909e7"
  },
  {
    "url": "assets/img/9-19.bb3490af.png",
    "revision": "bb3490afff56f3d9cfec3746bc9a3a78"
  },
  {
    "url": "assets/img/9-2.e19666a3.png",
    "revision": "e19666a3752baa752db8e3a05811c259"
  },
  {
    "url": "assets/img/9-20.ba054928.png",
    "revision": "ba05492884b7ac0e33edac82e4fdd69e"
  },
  {
    "url": "assets/img/9-21.656e8a34.png",
    "revision": "656e8a3403a77d97d22b611ade27b01f"
  },
  {
    "url": "assets/img/9-3.a7726e82.png",
    "revision": "a7726e82355930297609b4364472a8ae"
  },
  {
    "url": "assets/img/9-4.1c68220f.png",
    "revision": "1c68220f2cbc749461ac5730793947c4"
  },
  {
    "url": "assets/img/9-5.88de5545.png",
    "revision": "88de55458ef2bfe9825100cf981f6a2c"
  },
  {
    "url": "assets/img/9-6.8b2e9e3d.png",
    "revision": "8b2e9e3da250c33331eb8e71081c4994"
  },
  {
    "url": "assets/img/9-7.631e184f.png",
    "revision": "631e184f1bd45e939816b5a203eed9b7"
  },
  {
    "url": "assets/img/9-8.d416885d.png",
    "revision": "d416885dfaaf473517b74250e9768c71"
  },
  {
    "url": "assets/img/9-9.2c3a9130.png",
    "revision": "2c3a913000b2d366d9aa3c2e4ded1abe"
  },
  {
    "url": "assets/img/91550414131331.e60d9756.gif",
    "revision": "e60d9756f05d881d5d33906655fc0ed5"
  },
  {
    "url": "assets/img/924914c0-660c-4e4a-bbc0-1df1146e7516.ca65b368.jpg",
    "revision": "ca65b368fa76427863580bb17a1158dc"
  },
  {
    "url": "assets/img/95080fae-de40-463d-a76e-783a0c677fec.7c2c842a.gif",
    "revision": "7c2c842a66aa96edb8121dc0df53cea7"
  },
  {
    "url": "assets/img/95903878-725b-4ed9-bded-bc4aae0792a9.09890279.jpg",
    "revision": "09890279d02597c9f902030483eb7a02"
  },
  {
    "url": "assets/img/9709694b-db05-4cce-8d2f-1c8b09f4d921.4606122a.png",
    "revision": "4606122a15881481de12a694053deee2"
  },
  {
    "url": "assets/img/9b679ff5-94c6-48a7-b9b7-2ea868e828ed.bf0c6b39.png",
    "revision": "bf0c6b39f7784ee5016c6efee912e3dd"
  },
  {
    "url": "assets/img/9b838aee-0996-44a5-9b0f-3d1e3e2f5100.caeb1541.png",
    "revision": "caeb1541230c140c1a57d9b06ddf8b38"
  },
  {
    "url": "assets/img/9bbddeeb-e939-41f0-8e8e-2b1a0aa7e0a7.992c8043.png",
    "revision": "992c80433fe0f5b553a4bea464ab6057"
  },
  {
    "url": "assets/img/9c422923-1447-4a3b-a4e1-97e663738187.214860dd.jpg",
    "revision": "214860dd7369d03709b08969a1d41432"
  },
  {
    "url": "assets/img/9cd0ae20-4fb5-4017-a000-f7d3a0eb3529.27d73d89.png",
    "revision": "27d73d89815b310aacdb11e2317112ed"
  },
  {
    "url": "assets/img/9d1deeba-4ae1-41dc-98f4-47d85b9831bc.6d9db2f8.gif",
    "revision": "6d9db2f8df9c41e3c24d77d2ce8f0789"
  },
  {
    "url": "assets/img/9daa3616-00a4-48c4-9146-792dc8499be3.dc6e1905.jpg",
    "revision": "dc6e1905e372da6b3b295fe190dd8beb"
  },
  {
    "url": "assets/img/a3253deb-8d21-40a1-aae4-7d178e4aa319.b57e32c7.jpg",
    "revision": "b57e32c7e2d015b1e0e8e48b0167d739"
  },
  {
    "url": "assets/img/a42ad3a7-3574-4c48-a783-ed3d08a0688a.bfd432ca.jpg",
    "revision": "bfd432ca24fc04f5f7588cc330c20ef8"
  },
  {
    "url": "assets/img/a9077f06-7584-4f2b-8c20-3a8e46928820.2d5e2e03.jpg",
    "revision": "2d5e2e03d640eebdc1743aa8af7164d3"
  },
  {
    "url": "assets/img/ac6a794b-68c0-486c-902f-8d988eee5766.6507f605.png",
    "revision": "6507f60556a8b83d59228226ecad9853"
  },
  {
    "url": "assets/img/ad5cc8fc-d59b-45ce-8899-63a18320d97e.98408b96.gif",
    "revision": "98408b9669398d14763f02560200ce10"
  },
  {
    "url": "assets/img/adj-comp-unrulely.bc625d9b.jpg",
    "revision": "bc625d9b817adb32671afee387b5b44d"
  },
  {
    "url": "assets/img/adj-pos.6f60bf12.jpg",
    "revision": "6f60bf1213e9334b9d7a6f2b35a43f18"
  },
  {
    "url": "assets/img/af198da1-2480-4043-b07f-a3b91a88b815.1f88a047.png",
    "revision": "1f88a04756c0032ce3c9e8273b58429e"
  },
  {
    "url": "assets/img/b0611f89-1e5f-4494-a795-3544bf65042a.fcec1186.gif",
    "revision": "fcec11861486522e3dad8d8dc9d3f136"
  },
  {
    "url": "assets/img/b1fa0453-a4b0-4eae-a352-48acca8fff74.a5a1315f.png",
    "revision": "a5a1315fdf2207fa36571800622d12d4"
  },
  {
    "url": "assets/img/b396d726-b75f-4a32-89a2-03a7b6e19f6f.62b33b5e.jpg",
    "revision": "62b33b5eca6ad5d414fe8c642f867976"
  },
  {
    "url": "assets/img/b54eeb16-0b0e-484c-be62-306f57c40d77.2b0195fb.jpg",
    "revision": "2b0195fb258589a724391840bb727cda"
  },
  {
    "url": "assets/img/b8922f8c-95e6-4187-be85-572a509afb71.e462b600.png",
    "revision": "e462b600f152792c306e4711adacf32b"
  },
  {
    "url": "assets/img/b903fda8-07d0-46a7-91a7-e803892895cf.7a662579.gif",
    "revision": "7a662579a815828a7e175142e178d328"
  },
  {
    "url": "assets/img/b988877c-0f0a-4593-916d-de2081320628.68e019e5.jpg",
    "revision": "68e019e5f0f58169d13298a2659a77db"
  },
  {
    "url": "assets/img/b9d79a5a-e7af-499b-b989-f10483e71b8b.36485444.jpg",
    "revision": "364854448051cb9e983847d9624cb3fa"
  },
  {
    "url": "assets/img/baaa681f-7c52-4198-a5ae-303b9386cf47.cd136380.png",
    "revision": "cd1363804a4c1a590dafd3c2577b75b9"
  },
  {
    "url": "assets/img/bb6a49be-00f2-4f27-a0ce-4ed764bc605c.9a7eeb4b.png",
    "revision": "9a7eeb4b33c0a5e2c9b2fb06ad0d121b"
  },
  {
    "url": "assets/img/bc6be2d0-ed5e-4def-89e5-3ada9afa811a.3dd297f2.gif",
    "revision": "3dd297f2808b0759c08f524ec6f170bb"
  },
  {
    "url": "assets/img/be5c2c61-86d2-4dba-a289-b48ea23219de.123be26b.jpg",
    "revision": "123be26b3b71f23def2d5350d2c9b53a"
  },
  {
    "url": "assets/img/be608a77-7b7f-4f8e-87cc-f2237270bf69.3b662049.png",
    "revision": "3b662049f6ad09720f65c117d275caae"
  },
  {
    "url": "assets/img/bf667594-bb4b-4634-bf9b-0596a45415ba.55baa72f.jpg",
    "revision": "55baa72ff5a4049fa3e2727606e41726"
  },
  {
    "url": "assets/img/bfea8772-d01b-4a51-8adc-edfd7d3dce84.b9c52d74.jpg",
    "revision": "b9c52d7413bf137f1728e9a63489362c"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/browser_parse_html.a4a99b39.png",
    "revision": "a4a99b39482c51213380a22373f467d0"
  },
  {
    "url": "assets/img/browser_parse_rendertree.b8b35e2b.png",
    "revision": "b8b35e2bcd6a5fb65c9277bbde01fb37"
  },
  {
    "url": "assets/img/BSD_disk.34444dfd.png",
    "revision": "34444dfd6081914f90150a249aa85e8e"
  },
  {
    "url": "assets/img/btree.6c3c1bb9.png",
    "revision": "6c3c1bb99e9357c0e3227934b583f18c"
  },
  {
    "url": "assets/img/c0874e0a-dba3-467e-9c86-dd9313e0843e.f550b50e.jpg",
    "revision": "f550b50e2a2deab1b79b23f421f2e9b7"
  },
  {
    "url": "assets/img/c0a9fa91-da2e-4892-8c9f-80206a6f7047.b2e3b1fb.png",
    "revision": "b2e3b1fbee3782d44692ed61238caa81"
  },
  {
    "url": "assets/img/c13e2a3d-b01c-4a08-a69b-db2c4e821e09.25e7840e.png",
    "revision": "25e7840e8f8de83e657ac5103741a31f"
  },
  {
    "url": "assets/img/c269e362-1128-4212-9cf3-d4c12b363b2f.81d0ed34.gif",
    "revision": "81d0ed342a1fe627e279efa8693bba94"
  },
  {
    "url": "assets/img/c2ca8dd2-8d00-4a3e-bece-db7849ac9cfd.ee8c750b.gif",
    "revision": "ee8c750b9d2b81ab0a0b99f2b78959b0"
  },
  {
    "url": "assets/img/c3369072-c740-43b0-b276-202bd1d3960d.172deddf.jpg",
    "revision": "172deddfdfd7d9cb32dd2619395f5a3f"
  },
  {
    "url": "assets/img/c34f4503-f62c-4043-9dc6-3e03288657df.97c84f0d.jpg",
    "revision": "97c84f0d61c70f80098feac4131bbab3"
  },
  {
    "url": "assets/img/c44a0342-f405-4f17-b750-e27cf4aadde2.e30c8c71.png",
    "revision": "e30c8c71803b133bed8a4725d2bd9da0"
  },
  {
    "url": "assets/img/c4859290-e27d-4f12-becf-e2a5c1f3a275.ec1283b2.gif",
    "revision": "ec1283b2ab45512b0dd5f6874406187c"
  },
  {
    "url": "assets/img/c625baa0-dde6-449e-93df-c3a67f2f430f.45b5d841.jpg",
    "revision": "45b5d841a796745554f8a83964ff94c0"
  },
  {
    "url": "assets/img/c9cfd600-bc91-4f3a-9f99-b42f88a5bb24.f12aeac2.jpg",
    "revision": "f12aeac29005498dcfaca8c9b1812600"
  },
  {
    "url": "assets/img/cbf50eb8-22b4-4528-a2e7-d187143d57f7.b108df16.png",
    "revision": "b108df167c7cb60ed2917ad3a0e62f37"
  },
  {
    "url": "assets/img/cf4386a1-58c9-4eca-a17f-e12b1e9770eb.11cef3a7.png",
    "revision": "11cef3a715cf5826320dc509a2ae3c0a"
  },
  {
    "url": "assets/img/d156bcda-ac8d-4324-95e0-0c8df41567c9.3f9e35f2.gif",
    "revision": "3f9e35f284216fcab8b5dfc25a8a3710"
  },
  {
    "url": "assets/img/d27c99f0-7881-4f2d-9675-c75cbdee3acd.3190051f.jpg",
    "revision": "3190051fe890050d039f6230ca797fb1"
  },
  {
    "url": "assets/img/d2ae9932-e2b1-4191-8ee9-e573f36d3895.9703e915.png",
    "revision": "9703e915dd52060a89a01a455faa7e5b"
  },
  {
    "url": "assets/img/db5e376d-0b3e-490e-a43a-3231914b6668.4de001bc.png",
    "revision": "4de001bc1fa5061c6cddc6f70420bdef"
  },
  {
    "url": "assets/img/db5f30a7-8bfa-4ecc-ab5d-747c77818964.e4125e56.gif",
    "revision": "e4125e56fc4da0c96db857fc4ebc9e5e"
  },
  {
    "url": "assets/img/dd563037-fcaa-4bd8-83b6-b39d93a12c77.bf2827bc.jpg",
    "revision": "bf2827bca492f32d1b6a9e9f4f22510f"
  },
  {
    "url": "assets/img/dns.3f60e2b9.jpg",
    "revision": "3f60e2b9e392884a913801ed7cf4f84f"
  },
  {
    "url": "assets/img/docker-filesystems-busyboxrw.7e83ec9b.png",
    "revision": "7e83ec9b275f1b8648338f5d16d41a45"
  },
  {
    "url": "assets/img/e130e5b8-b19a-4f1e-b860-223040525cf6.264739fc.jpg",
    "revision": "264739fc0a32ffc6d67d75e202590cb0"
  },
  {
    "url": "assets/img/e69537d2-a016-4676-b169-9ea17eeb9037.82d1f1b1.gif",
    "revision": "82d1f1b18201036f9573f17c1666e40c"
  },
  {
    "url": "assets/img/e92d0ebc-7d46-413b-aec1-34a39602f787.c4ffddc0.png",
    "revision": "c4ffddc0126f19d53517240449f63f32"
  },
  {
    "url": "assets/img/e98deb5a-d5d4-4294-aa9b-9220d4483403.86f9e225.jpg",
    "revision": "86f9e2255f3fef2d645f0463d4869d75"
  },
  {
    "url": "assets/img/e98e9d20-206b-4533-bacf-3448d0096f38.b278d7e2.png",
    "revision": "b278d7e2d0343ddf7989c3d2b216bedf"
  },
  {
    "url": "assets/img/ed5522bb-3a60-481c-8654-43e7195a48fe.f1d9d5d8.png",
    "revision": "f1d9d5d842333deaf021088187799c9a"
  },
  {
    "url": "assets/img/ef25ff7c-0f63-420d-8b30-eafbeea35d11.17851455.gif",
    "revision": "1785145538c5aa8422b7edb31602140d"
  },
  {
    "url": "assets/img/f1912ba6-6402-4321-9aa8-13d32fd121d1.a6da67f7.jpg",
    "revision": "a6da67f7c81aa694387e3061c3a34bfe"
  },
  {
    "url": "assets/img/f61b5419-c94a-4df1-8d4d-aed9ae8cc6d5.d386ee48.png",
    "revision": "d386ee4801e75e52204c52477df4b2d5"
  },
  {
    "url": "assets/img/f7c1fea2-c1e7-4d31-94b5-0d9df85e093c.a96df49f.gif",
    "revision": "a96df49f4f3c3da742d2bf6172cbf511"
  },
  {
    "url": "assets/img/f9978fa6-9f49-4a0f-8540-02d269ac448f.202678c6.png",
    "revision": "202678c69db1e18da6f343bc4c844e14"
  },
  {
    "url": "assets/img/f99ee771-c56f-47fb-9148-c0036695b5fe.c9af962c.jpg",
    "revision": "c9af962cce82b1688975969d37b10f6c"
  },
  {
    "url": "assets/img/fb44307f-8e98-4ff7-a918-31dacfa564b4.4a00728b.jpg",
    "revision": "4a00728bf98524731bec77f8cce5fd33"
  },
  {
    "url": "assets/img/fcc941ec-134b-4dcd-bc86-1702fd305300.ababe5c1.gif",
    "revision": "ababe5c10ce5c1db688dd9ce264acb3a"
  },
  {
    "url": "assets/img/flex-item.e88d6f97.jpg",
    "revision": "e88d6f976ee5b0ea0ff2e5da8d392035"
  },
  {
    "url": "assets/img/flex-wrap.08ef17b5.jpg",
    "revision": "08ef17b543a5a55dcd77b9091407a132"
  },
  {
    "url": "assets/img/flex0.6a95a7f0.jpg",
    "revision": "6a95a7f098e4364dc0084e6a5e5fa0db"
  },
  {
    "url": "assets/img/git-areas.6f7a9afa.png",
    "revision": "6f7a9afa9058dfeea8e33240b34b1355"
  },
  {
    "url": "assets/img/git-branch-merge.d8736122.png",
    "revision": "d8736122dd3d558b7465777b6dab88ca"
  },
  {
    "url": "assets/img/git-branch.3554acad.png",
    "revision": "3554acad6793f5269b4c651589aeed1d"
  },
  {
    "url": "assets/img/git-rebase.02d28458.png",
    "revision": "02d28458acae2eb95486fea610ee90b5"
  },
  {
    "url": "assets/img/git-reset-checkout.0c12d0a8.png",
    "revision": "0c12d0a8890d9cc8ba387e8bf33b6516"
  },
  {
    "url": "assets/img/grid-align.8843c2d8.jpg",
    "revision": "8843c2d87579b401bc9b897a6c76a707"
  },
  {
    "url": "assets/img/grid.5a6926f9.jpg",
    "revision": "5a6926f963b24d0928ff3c83f3a1f6b8"
  },
  {
    "url": "assets/img/GUID_Partition_Table_Scheme.svg.3206264f.png",
    "revision": "3206264fe6c6c261e8fc0c6008627f5f"
  },
  {
    "url": "assets/img/How-HTTPS-Works.2de21035.png",
    "revision": "2de21035db40e031598347202665b0ce"
  },
  {
    "url": "assets/img/html-parase.3eb44c71.png",
    "revision": "3eb44c711f810178213693b8a7980299"
  },
  {
    "url": "assets/img/HTTP_RequestMessageExample.a7d09052.png",
    "revision": "a7d09052baf0c53c029c3dd961111505"
  },
  {
    "url": "assets/img/HTTP_ResponseMessageExample.41b72360.png",
    "revision": "41b723609ccd64ed3f9f54d73ea179c8"
  },
  {
    "url": "assets/img/http-tls.b17df166.jpg",
    "revision": "b17df166cf51ab0a294c481569ec222b"
  },
  {
    "url": "assets/img/image-20191130164425351.8f94bb44.png",
    "revision": "8f94bb4427691a32e80cd3b9d60bb53c"
  },
  {
    "url": "assets/img/image-20191207210437023.1e7c216d.png",
    "revision": "1e7c216d3e8426ecbf0f37771b09aa17"
  },
  {
    "url": "assets/img/image-20191207214442687.2c9f6cf1.png",
    "revision": "2c9f6cf11138ddbc880cb89fba923e00"
  },
  {
    "url": "assets/img/image-20191207220440451.14bbbcce.png",
    "revision": "14bbbcce145e1c13ecd086fee2276f13"
  },
  {
    "url": "assets/img/image-20191207220831843.4e6ea415.png",
    "revision": "4e6ea4157f795d2583d72e359b832618"
  },
  {
    "url": "assets/img/image-20191207221313819.26a06bad.png",
    "revision": "26a06bad226961e1214aff908ebe01db"
  },
  {
    "url": "assets/img/image-20191207221744244.476d0dbe.png",
    "revision": "476d0dbe15e4718b9fd37f33f50a580a"
  },
  {
    "url": "assets/img/image-20191207221920368.6722915a.png",
    "revision": "6722915af752f61aed709ed72474841e"
  },
  {
    "url": "assets/img/image-20191207222102010.81bbed7c.png",
    "revision": "81bbed7cb2b8fea3834125f60cd39a9e"
  },
  {
    "url": "assets/img/image-20191207222134306.d2cb7642.png",
    "revision": "d2cb764243b85e14fdea0bec365a8c12"
  },
  {
    "url": "assets/img/image-20191207222237925.c4e06159.png",
    "revision": "c4e061594813f3bd58e8575da1baf133"
  },
  {
    "url": "assets/img/image-20191208171445674.aa5f9eac.png",
    "revision": "aa5f9eac7569ffa7b0bff1a097f4e662"
  },
  {
    "url": "assets/img/image-20191208204118932.11e20472.png",
    "revision": "11e2047273f53486938adf904e3cceeb"
  },
  {
    "url": "assets/img/image-20191208220948084.4332dea8.png",
    "revision": "4332dea86a15b2707603c6870c6f05a9"
  },
  {
    "url": "assets/img/image-20191208224757855.3f69eed5.png",
    "revision": "3f69eed5ffbf88f9f371e0e6de674a14"
  },
  {
    "url": "assets/img/image-20191208225301973.2e140dd0.png",
    "revision": "2e140dd0af081f337f95e0a46c31a138"
  },
  {
    "url": "assets/img/image-20191208232221265.062048a6.png",
    "revision": "062048a6c1947e278e8bac4e827d4a47"
  },
  {
    "url": "assets/img/image-20191208233940066.1ee90493.png",
    "revision": "1ee90493632945815cd2150128be3e66"
  },
  {
    "url": "assets/img/image-20191208234948205.473084c1.png",
    "revision": "473084c1faee614f19b67354121dcf53"
  },
  {
    "url": "assets/img/image-20191208235258643.5b31cf98.png",
    "revision": "5b31cf98e9534a2793fd1f72fe7d9421"
  },
  {
    "url": "assets/img/image-20191209001038024.033c979e.png",
    "revision": "033c979e94277df59d4cf291fd7ab001"
  },
  {
    "url": "assets/img/image-20191209002818626.b78e18af.png",
    "revision": "b78e18afc6a1fa81ff096f56f967a8af"
  },
  {
    "url": "assets/img/image-20191209003453268.a76d2392.png",
    "revision": "a76d2392e1c2331273e557a279e9043e"
  },
  {
    "url": "assets/img/image-20191210004132894.90a7dba7.png",
    "revision": "90a7dba781754b861bdb745287fb181e"
  },
  {
    "url": "assets/img/image-20191212011250613.70ddce92.png",
    "revision": "70ddce92d6d6893339adaf72f2bf91d4"
  },
  {
    "url": "assets/img/image-20191212011410374.cd8d4c18.png",
    "revision": "cd8d4c18c4b50684888c464ae503ebaa"
  },
  {
    "url": "assets/img/image-20191212011747967.44efc7a1.png",
    "revision": "44efc7a1e8cda842239fea2530bc8a53"
  },
  {
    "url": "assets/img/inode_with_signatures.6a497c68.jpg",
    "revision": "6a497c680ed6df8b77c83b76e8772675"
  },
  {
    "url": "assets/img/js_load.909c198b.png",
    "revision": "909c198b7ef020ad8529cfa97f4ffd6f"
  },
  {
    "url": "assets/img/js-event-task.65dc91d8.png",
    "revision": "65dc91d8398830e9ee94df8cca81066a"
  },
  {
    "url": "assets/img/js-extend.cff66ffb.jpg",
    "revision": "cff66ffb4b8b87fc5291e24499392ff5"
  },
  {
    "url": "assets/img/js-proto-layout.77f750f2.png",
    "revision": "77f750f2d8db3ea5120daae3c3d8eb56"
  },
  {
    "url": "assets/img/js-task.4195df67.png",
    "revision": "4195df679aa0dc3f2f7f8b5e023cdf30"
  },
  {
    "url": "assets/img/linux-filesystem.bee94538.png",
    "revision": "bee94538cf084ef7522069597a772def"
  },
  {
    "url": "assets/img/margin.e44310b4.png",
    "revision": "e44310b4ba9321ff29f9f348207805a5"
  },
  {
    "url": "assets/img/master-slave-proxy.077ac719.png",
    "revision": "077ac71910b1c1e212ab8b92df465c6e"
  },
  {
    "url": "assets/img/master-slave.c5e66808.png",
    "revision": "c5e66808c1b34395e8a06b25f5ded53c"
  },
  {
    "url": "assets/img/modal-list.331afd6e.jpg",
    "revision": "331afd6efb03b280c099f0cc7203a3d5"
  },
  {
    "url": "assets/img/mood-form.8ee865b6.jpg",
    "revision": "8ee865b6cec44ec2bee304c0512fff56"
  },
  {
    "url": "assets/img/mvc.fdbaa388.png",
    "revision": "fdbaa38859afead9a8680a6810627d1f"
  },
  {
    "url": "assets/img/mvvm.b1973f93.png",
    "revision": "b1973f93adba97ef8f84be2922b712a4"
  },
  {
    "url": "assets/img/Network_GBN-action.172d0530.png",
    "revision": "172d053019aa7d71b0b5c156c18d7eb5"
  },
  {
    "url": "assets/img/network-of-networks.10dfc657.gif",
    "revision": "10dfc6578d149003adc0f091cb087e08"
  },
  {
    "url": "assets/img/nginx2flask.123d611c.jpg",
    "revision": "123d611cd739011e5c26d1e8f72c7d66"
  },
  {
    "url": "assets/img/noun-kind1.49518467.jpg",
    "revision": "4951846798f636b61e007884e2ffeec6"
  },
  {
    "url": "assets/img/noun-kind2.64106fe0.jpg",
    "revision": "64106fe0764296e73322fc8a9dae0d43"
  },
  {
    "url": "assets/img/noun-the-pos.b0df7d0c.jpg",
    "revision": "b0df7d0c23b3a4edd8642a8754d9033c"
  },
  {
    "url": "assets/img/oddevenlist.353f6608.png",
    "revision": "353f660862dbe6be9a1e5f350da375fb"
  },
  {
    "url": "assets/img/Partition2.269e111e.png",
    "revision": "269e111effc46cb5dd73135670394834"
  },
  {
    "url": "assets/img/PPjwP.118d84b4.png",
    "revision": "118d84b4bc7e732e5592961c122c25da"
  },
  {
    "url": "assets/img/preposition.25033d22.jpg",
    "revision": "25033d22a63875c90bb7a506c1b949fa"
  },
  {
    "url": "assets/img/ProcessRelated.a1d8e2a1.png",
    "revision": "a1d8e2a1982774ca8f6c4ef4f80a3c97"
  },
  {
    "url": "assets/img/ProcessState.36bc1559.png",
    "revision": "36bc1559611b05e9549101ed5fd512ab"
  },
  {
    "url": "assets/img/program-link.829f7b1c.jpg",
    "revision": "829f7b1c4af131f6b5488d14884a5220"
  },
  {
    "url": "assets/img/program-works.7eaa3861.jpg",
    "revision": "7eaa38613e33e5b97de0a77c8b3007aa"
  },
  {
    "url": "assets/img/prototype1.8c492365.png",
    "revision": "8c492365707ecf63c2ed663ec7d2b26c"
  },
  {
    "url": "assets/img/pygc1.0d507109.jpg",
    "revision": "0d5071093adaa02bc03fa3dfd91aa5bc"
  },
  {
    "url": "assets/img/pygc2.d7314ead.jpg",
    "revision": "d7314ead6b303f08a91687577c045585"
  },
  {
    "url": "assets/img/pygc3.510f4d2d.jpg",
    "revision": "510f4d2d37aabdbc8978d9e47630237d"
  },
  {
    "url": "assets/img/pygc4.6fd40c05.jpg",
    "revision": "6fd40c055a6633c654acaf05f472c1b2"
  },
  {
    "url": "assets/img/reverseLink.b5068ec1.png",
    "revision": "b5068ec1a7088c2c8b60812bf95d9264"
  },
  {
    "url": "assets/img/sentence-negative.084fdb16.jpg",
    "revision": "084fdb16f7e8c39bd45e5a66f27f1e98"
  },
  {
    "url": "assets/img/shared_ptr.395148b6.jpg",
    "revision": "395148b6daddc13a006bf53fac3f2186"
  },
  {
    "url": "assets/img/skiplist.01da932c.png",
    "revision": "01da932c2fc6f96c4433affe516ea566"
  },
  {
    "url": "assets/img/sortcolors.2ea3ac45.png",
    "revision": "2ea3ac45dbc284022183402e3562b454"
  },
  {
    "url": "assets/img/sql-ranking.7342fcbb.jpg",
    "revision": "7342fcbb9b53fec8785d65907336131a"
  },
  {
    "url": "assets/img/steps.0a91c6d3.jpg",
    "revision": "0a91c6d34132239201585c4713382f95"
  },
  {
    "url": "assets/img/style.82ae1c6c.png",
    "revision": "82ae1c6c40206b16144c1d94106522cb"
  },
  {
    "url": "assets/img/sun.896a044e.png",
    "revision": "896a044ebadc680c899613f7ce3d4057"
  },
  {
    "url": "assets/img/tense-list.c71873f6.jpg",
    "revision": "c71873f6cdd398458f2587be0597cf8b"
  },
  {
    "url": "assets/img/tGPV0.4cf15f1e.png",
    "revision": "4cf15f1ee5f507f7a4beda2b8703d7ff"
  },
  {
    "url": "assets/img/to-aspect.4d982cd4.jpg",
    "revision": "4d982cd468f7222c7e811251fca9544b"
  },
  {
    "url": "assets/img/transform.5e4c54c0.jpg",
    "revision": "5e4c54c024387f4c6517dc20600591fc"
  },
  {
    "url": "assets/img/u4E0B_u8F7D.b26ab2b1.png",
    "revision": "b26ab2b1961d3d5ec274e95d21b85700"
  },
  {
    "url": "assets/img/uglynum.ab587460.png",
    "revision": "ab5874600f058b00adb89332e2cdf9e6"
  },
  {
    "url": "assets/img/verb-auxility.de176f8c.jpg",
    "revision": "de176f8c8a654101fb68db294af0096d"
  },
  {
    "url": "assets/img/view-model.0c8d5132.png",
    "revision": "0c8d513270ba7f1be355b8a8f18a6865"
  },
  {
    "url": "assets/img/vue-array-bind.5dbf0e84.jpg",
    "revision": "5dbf0e84abaa4a79fa2f05dafa61bd27"
  },
  {
    "url": "assets/img/vue-binding.5de7af21.png",
    "revision": "5de7af21d4c2de951720c006f84b98fc"
  },
  {
    "url": "assets/img/vue-computed.e7e4816e.jpg",
    "revision": "e7e4816e8f87d60d8fe5ab56cc48f109"
  },
  {
    "url": "assets/img/vue-data-bind.1ff4e0c7.jpg",
    "revision": "1ff4e0c7fc11396a483bc2a59fb447bb"
  },
  {
    "url": "assets/img/vue-lifecycle.564f2064.png",
    "revision": "564f2064aa6e63ee05ec67aba85d663b"
  },
  {
    "url": "assets/img/vue-make-path.3aefef41.jpg",
    "revision": "3aefef4173ad5dbf66936773e17c712f"
  },
  {
    "url": "assets/img/vue3-effect-deps.e578e356.jpeg",
    "revision": "e578e356834f65260ef12396d6dcd429"
  },
  {
    "url": "assets/img/vue3-obj-collect.adb97d04.jpeg",
    "revision": "adb97d0473db1934c9b160aae2cc51e0"
  },
  {
    "url": "assets/img/web-page-fid.1d38500e.svg",
    "revision": "1d38500ea37cf1190208bf129b7e65de"
  },
  {
    "url": "assets/img/web-page-lcp.cdda224f.png",
    "revision": "cdda224f1c0f68858373a5a75d8debe0"
  },
  {
    "url": "assets/img/web-page-timing.1016c5e3.png",
    "revision": "1016c5e393de57b7d8e5f8fc6be19cc2"
  },
  {
    "url": "assets/js/1.bb8d4e29.js",
    "revision": "4d892bb02c45dc87cb6392650f70c736"
  },
  {
    "url": "assets/js/10.f50cf3e2.js",
    "revision": "5e63a3e720ca7474259aba883187645a"
  },
  {
    "url": "assets/js/100.65bcd8d0.js",
    "revision": "18dea7b874ee10fced38c7c228989e30"
  },
  {
    "url": "assets/js/101.6c84b4e2.js",
    "revision": "5aa95dd280d26a9156ec1939b09d5908"
  },
  {
    "url": "assets/js/102.3940aaf1.js",
    "revision": "b85dff8efb60242eb229813c669c89c5"
  },
  {
    "url": "assets/js/103.6436217e.js",
    "revision": "55111db827ea2c65c16673764d2b8923"
  },
  {
    "url": "assets/js/104.55cda8cb.js",
    "revision": "fb4c80380c5ec57e6f9f8a1eef026f05"
  },
  {
    "url": "assets/js/105.a88663a1.js",
    "revision": "489b22f8c583ca5d07587a1281c88aaa"
  },
  {
    "url": "assets/js/106.92b1d572.js",
    "revision": "015525dc18a9797e32a44dfba80eff07"
  },
  {
    "url": "assets/js/107.06caad72.js",
    "revision": "4f9059d07944c2ed082db684a1839aea"
  },
  {
    "url": "assets/js/108.a6605aa9.js",
    "revision": "76b71893761ecc4d1ccf5738237565c8"
  },
  {
    "url": "assets/js/109.c44b5f3e.js",
    "revision": "f9e58ff19dbd53217e93a206c53aaaac"
  },
  {
    "url": "assets/js/11.7b8cabfd.js",
    "revision": "5156c3436c8cb62d0030c70475cc4061"
  },
  {
    "url": "assets/js/110.4bf1c963.js",
    "revision": "6802a02658ef6238590703f1024924e0"
  },
  {
    "url": "assets/js/111.595f57ed.js",
    "revision": "9cc016ee9ac20ee930f03139ad20ad71"
  },
  {
    "url": "assets/js/112.169c79b9.js",
    "revision": "c77cebead4e8279eea17d57343a1e3a4"
  },
  {
    "url": "assets/js/113.056decc7.js",
    "revision": "a1a09e05246568e8cff2d1cac9f54276"
  },
  {
    "url": "assets/js/114.7e4be8d8.js",
    "revision": "1e124a34b002684ce0b14bd20320d7a9"
  },
  {
    "url": "assets/js/115.6643eb97.js",
    "revision": "fb1bc02e882e45668ae83c4ef65a8276"
  },
  {
    "url": "assets/js/116.1e0ea19c.js",
    "revision": "039dfa5933693256d69021394183c19b"
  },
  {
    "url": "assets/js/117.e2004835.js",
    "revision": "b6d721ad0c52c1ff64a7cf243e952054"
  },
  {
    "url": "assets/js/118.cd926b84.js",
    "revision": "d109383e6136abf82b782aeef1e102a3"
  },
  {
    "url": "assets/js/119.a3865e76.js",
    "revision": "7b09828168439a03a390c304065cd77e"
  },
  {
    "url": "assets/js/12.10171548.js",
    "revision": "b138030e6f0a96673df9764dc76d6897"
  },
  {
    "url": "assets/js/120.5fe13278.js",
    "revision": "9396f483c1173e885e5f409662c29492"
  },
  {
    "url": "assets/js/121.4b7fb1f3.js",
    "revision": "c8d444f55d1f39a53c1e65f73beda126"
  },
  {
    "url": "assets/js/122.2f384778.js",
    "revision": "c606151bd7f18129994b669d15e915d1"
  },
  {
    "url": "assets/js/123.a700d41f.js",
    "revision": "da592f519165485bb66758502928be4d"
  },
  {
    "url": "assets/js/124.ae3f9230.js",
    "revision": "33c4ea8ed7c43b74249611805f3f78fc"
  },
  {
    "url": "assets/js/125.e0dffbd6.js",
    "revision": "e754214c7ca4aff6d539d997ef7c3d62"
  },
  {
    "url": "assets/js/126.0109657e.js",
    "revision": "064973bd09e163ed944f54d9387cbd38"
  },
  {
    "url": "assets/js/127.b56bcde4.js",
    "revision": "2c1d77911576614b2fd306fae3229250"
  },
  {
    "url": "assets/js/128.e513b82a.js",
    "revision": "06d149081e14d5a90331d45d9c69a89e"
  },
  {
    "url": "assets/js/129.465a40aa.js",
    "revision": "6061360dd2e6587d03f45ee22418116d"
  },
  {
    "url": "assets/js/13.2d61fc8c.js",
    "revision": "d3ab0337da5a9000643fab724e6b80bf"
  },
  {
    "url": "assets/js/130.08d0491e.js",
    "revision": "b9927f566e7339432bf784479310082f"
  },
  {
    "url": "assets/js/131.2a5150e5.js",
    "revision": "cbed98f7b92fa35e0c45a5f57f500e27"
  },
  {
    "url": "assets/js/132.dbf8d568.js",
    "revision": "ef364de69709f0de2ef422119286f479"
  },
  {
    "url": "assets/js/133.7dd0d298.js",
    "revision": "97a1c5916f50b8a3e498594c53f76acb"
  },
  {
    "url": "assets/js/134.41106252.js",
    "revision": "4cb0f2ce724d1dc54923bfe45e126e73"
  },
  {
    "url": "assets/js/135.92d16085.js",
    "revision": "bdf1f286f17872741d64e0a554870a31"
  },
  {
    "url": "assets/js/136.6a74f217.js",
    "revision": "5478f201e481b7bc7970a54f05b1296e"
  },
  {
    "url": "assets/js/137.4d678e09.js",
    "revision": "ef7da0d7024a92f925e543b698e5460b"
  },
  {
    "url": "assets/js/138.a704ec6b.js",
    "revision": "751b99fa9c651c81d77e74569df2a8c1"
  },
  {
    "url": "assets/js/139.91cd0fa1.js",
    "revision": "55ecc4a597a72132d951261c5f709c40"
  },
  {
    "url": "assets/js/14.b57d72c1.js",
    "revision": "4dff0163959c6ae1310f667e60aaab74"
  },
  {
    "url": "assets/js/140.b3411a52.js",
    "revision": "55b64d302effe5a1452dd11f52638c05"
  },
  {
    "url": "assets/js/141.4325aadc.js",
    "revision": "4f76978a4d10b79a30998a4ada9e9d25"
  },
  {
    "url": "assets/js/142.aaaa76c7.js",
    "revision": "d13405d5486ea84700fe4c960434e45a"
  },
  {
    "url": "assets/js/143.55a10c96.js",
    "revision": "e2833133761b323454df04c52c417f90"
  },
  {
    "url": "assets/js/144.21b24a52.js",
    "revision": "35cc3b6c67851ce368134d958d6fba60"
  },
  {
    "url": "assets/js/145.8574b004.js",
    "revision": "75b0d9ca06c83bec416c7ea11b2c1670"
  },
  {
    "url": "assets/js/146.e9243dc1.js",
    "revision": "f4339ec713e7b3107dd81127a9c8428c"
  },
  {
    "url": "assets/js/147.1360854d.js",
    "revision": "85e477e63fae70993567b725030d0329"
  },
  {
    "url": "assets/js/148.a268616f.js",
    "revision": "7815ab14dea4982d8c09e7ea1a99144d"
  },
  {
    "url": "assets/js/149.f539ff19.js",
    "revision": "c48de524413146e95935ceca15c45e8a"
  },
  {
    "url": "assets/js/15.1e2b4260.js",
    "revision": "f51593f6730a95d0bead92b3506a8a07"
  },
  {
    "url": "assets/js/150.bf301c97.js",
    "revision": "b000c9db77cbb97c9e354625ac816961"
  },
  {
    "url": "assets/js/151.a75888fb.js",
    "revision": "21bb53135acd1f5960b1a3bb463df114"
  },
  {
    "url": "assets/js/152.801b44a0.js",
    "revision": "085c4e5fd67f65ddc22094a40751936d"
  },
  {
    "url": "assets/js/153.d2822689.js",
    "revision": "70b7893b98e03eab44da07f0c0db6819"
  },
  {
    "url": "assets/js/154.b2c00ac8.js",
    "revision": "ad386e9d67c879a4e83323657c62b2a4"
  },
  {
    "url": "assets/js/155.5fca8609.js",
    "revision": "7f4c4ab3a12f5de020d13ba46c3575b1"
  },
  {
    "url": "assets/js/156.51442839.js",
    "revision": "a0ac09060c139f591cb847892b9be64d"
  },
  {
    "url": "assets/js/157.228da734.js",
    "revision": "fc9b271cc999a3b147921d3c34a97984"
  },
  {
    "url": "assets/js/158.6dd35f0a.js",
    "revision": "6bf99cd9e346698df0012d298e146b9e"
  },
  {
    "url": "assets/js/159.1a5a7684.js",
    "revision": "a6e737d7b4474fabaf0994a32a73af6d"
  },
  {
    "url": "assets/js/16.99cc71ff.js",
    "revision": "9ce75d1ef1138a3dd3b51c188e612a6b"
  },
  {
    "url": "assets/js/160.703585f1.js",
    "revision": "d49384b8fdf025412db3147528ed8469"
  },
  {
    "url": "assets/js/161.1bda9f12.js",
    "revision": "3c28769a11ad9a44d92fca23c165f645"
  },
  {
    "url": "assets/js/162.1bba3636.js",
    "revision": "6857d5a3237ebc76cd77c97aaa36a8f3"
  },
  {
    "url": "assets/js/163.ed8aad09.js",
    "revision": "c40a580311e28a1f6ab46ebe5777f22a"
  },
  {
    "url": "assets/js/164.e032df96.js",
    "revision": "b3a891a59be490c99f7ace429ef4b482"
  },
  {
    "url": "assets/js/165.0a5f8d17.js",
    "revision": "e3fa6bbb2ac5ead94bb7a4dbc2edb85a"
  },
  {
    "url": "assets/js/166.00755a5f.js",
    "revision": "ea29f2fd7faec4d835136364b2e08b12"
  },
  {
    "url": "assets/js/167.eb351ec6.js",
    "revision": "364591bafeb98d0a5fcfd51c8b0d3441"
  },
  {
    "url": "assets/js/168.74c6e483.js",
    "revision": "5098c8b61ad0ef838ba8d91fc7461d1a"
  },
  {
    "url": "assets/js/169.93072d63.js",
    "revision": "1bfe4dad4da77f6ffc5da1f93c99346f"
  },
  {
    "url": "assets/js/17.9e967149.js",
    "revision": "8b31f6ccbe6ed87a55626724610e05fd"
  },
  {
    "url": "assets/js/170.4c321c6c.js",
    "revision": "3629598c97a4c12dd503ea03979b6db0"
  },
  {
    "url": "assets/js/171.cd89b258.js",
    "revision": "de338dcf1a47d329f26bfd05b18a01fb"
  },
  {
    "url": "assets/js/172.d845970e.js",
    "revision": "3288ea1d4de8d8b2d10565d865ed9e12"
  },
  {
    "url": "assets/js/173.121025bb.js",
    "revision": "6b1a8c5c9ff84ccc53a900fc4b8acf7b"
  },
  {
    "url": "assets/js/174.34e9d35f.js",
    "revision": "cd9ddae17b46b22364693ac379f7d0e3"
  },
  {
    "url": "assets/js/175.39b376df.js",
    "revision": "bfe1d3ae2b553c1d3ab48ca30999baec"
  },
  {
    "url": "assets/js/176.333ecefa.js",
    "revision": "245918eb57cb64bbbe091dae1aa83527"
  },
  {
    "url": "assets/js/177.bc6eda3e.js",
    "revision": "2c49690089928b3059b83b39dbf21752"
  },
  {
    "url": "assets/js/178.3ac6c3bb.js",
    "revision": "9605954a0e7de203004095ad379e4b1c"
  },
  {
    "url": "assets/js/179.1067b446.js",
    "revision": "fc1661bbfd8f497954573fd101c60bf1"
  },
  {
    "url": "assets/js/18.ad893203.js",
    "revision": "2c4c1bfe1f950a5644c16d873191b8f9"
  },
  {
    "url": "assets/js/180.9ae8e1b4.js",
    "revision": "e8eded684e799ecbd7675df17f04fcc5"
  },
  {
    "url": "assets/js/181.de9ba07e.js",
    "revision": "873d75900f062007a2f0a4ad748e68f8"
  },
  {
    "url": "assets/js/182.a3708c52.js",
    "revision": "809a840afc517dc0f30b0a9d212c89bc"
  },
  {
    "url": "assets/js/183.8531e7f7.js",
    "revision": "66b52786c587d1166904c6f9e4786e39"
  },
  {
    "url": "assets/js/184.6b642887.js",
    "revision": "53f08d386b612938b457617d634f4ce7"
  },
  {
    "url": "assets/js/185.7e261679.js",
    "revision": "0580d469ae072d130ded88d425d7d25e"
  },
  {
    "url": "assets/js/186.cba098af.js",
    "revision": "9b21a5b1d75803f1188310941776c8a4"
  },
  {
    "url": "assets/js/187.10d5a586.js",
    "revision": "f54d6eef26c76a8f40a314dac9b36d79"
  },
  {
    "url": "assets/js/188.c1d94d2e.js",
    "revision": "bbba933c84ec89def392ad55dfa13eef"
  },
  {
    "url": "assets/js/189.571493bd.js",
    "revision": "b298cda394747797ae3c009daf2eb28c"
  },
  {
    "url": "assets/js/19.cc066ddd.js",
    "revision": "2d04b30d8b46764a8cb9a5152d1c37a7"
  },
  {
    "url": "assets/js/190.8febdc51.js",
    "revision": "01a57ed9ea322ee2a85c96b3848bb026"
  },
  {
    "url": "assets/js/191.c2116698.js",
    "revision": "93833f6321da388dfc33242fff912749"
  },
  {
    "url": "assets/js/192.fe59db3c.js",
    "revision": "25ec016eb73fd3a8f9b157a801ff39a6"
  },
  {
    "url": "assets/js/193.98205c30.js",
    "revision": "1841758037bfe338fa84454326e0e5c4"
  },
  {
    "url": "assets/js/194.da381d65.js",
    "revision": "876d596abc0314c1c9a6ab4ea875a62f"
  },
  {
    "url": "assets/js/195.1881929b.js",
    "revision": "5f830a2604b7b4567366644b56ea78e4"
  },
  {
    "url": "assets/js/196.077df99b.js",
    "revision": "c8178aee0b1d379878678f92cb9fd261"
  },
  {
    "url": "assets/js/197.00d06552.js",
    "revision": "c9a1bdf690e8aa11ec1bc78b6fa214c3"
  },
  {
    "url": "assets/js/198.79d6dac6.js",
    "revision": "2ccbca7b3b036b94e41fa6dd566f2c14"
  },
  {
    "url": "assets/js/199.3bbfe669.js",
    "revision": "d764b3c760aca7d20db4dbdd01f686dc"
  },
  {
    "url": "assets/js/2.df0a64b7.js",
    "revision": "d3d7d8d4b182ba2ba13cd1e7478931c7"
  },
  {
    "url": "assets/js/20.26812bf7.js",
    "revision": "e66b872af5acb35dce05da529d4f5d78"
  },
  {
    "url": "assets/js/200.661e98f7.js",
    "revision": "ce69bb71f6c77b14830f1a1ca88d3be0"
  },
  {
    "url": "assets/js/201.4ab4c438.js",
    "revision": "b3578ffb070ee1658b2a5f54555dd0be"
  },
  {
    "url": "assets/js/202.1c3fb40e.js",
    "revision": "acb5031dc6fda17fa3ffb86c96c2dc4a"
  },
  {
    "url": "assets/js/203.1315a340.js",
    "revision": "1edcad1a542aad997028af489ed5f75f"
  },
  {
    "url": "assets/js/204.901c9c24.js",
    "revision": "c62f71a64e236c529404875098a981d8"
  },
  {
    "url": "assets/js/205.9200981e.js",
    "revision": "dda67417205d4ecb575a58964be53fa1"
  },
  {
    "url": "assets/js/206.ce6e0c3f.js",
    "revision": "d9985f69f7c6660167809f4e47f82f6e"
  },
  {
    "url": "assets/js/207.6b535e7a.js",
    "revision": "9fe3f9d9d9af92827d67a34b6e01db5d"
  },
  {
    "url": "assets/js/208.4c0fd660.js",
    "revision": "a77bd1788fd9a22b8333f67d488666ef"
  },
  {
    "url": "assets/js/209.7e9d7e9f.js",
    "revision": "c6f9e7712adb5689728f79103b370862"
  },
  {
    "url": "assets/js/21.08014a03.js",
    "revision": "c83d3ff8f06822e13d71e2e402bfca5d"
  },
  {
    "url": "assets/js/210.d6ef925b.js",
    "revision": "5eceeca8543ac776041590cd2825d902"
  },
  {
    "url": "assets/js/211.e6435be2.js",
    "revision": "3117810929c2109ac8c768b1a2784df3"
  },
  {
    "url": "assets/js/212.f42a75ad.js",
    "revision": "824c32932c06349ee3928ff6df4c97a0"
  },
  {
    "url": "assets/js/213.6f326114.js",
    "revision": "142a55f6de71426f26b86bc1725f940f"
  },
  {
    "url": "assets/js/214.aaff9365.js",
    "revision": "ca0957938e981c663e3d977b85ac4aba"
  },
  {
    "url": "assets/js/215.26d761ee.js",
    "revision": "a2dea605965909314185a0212c698aba"
  },
  {
    "url": "assets/js/216.a6180946.js",
    "revision": "e3108064690432dda7b0b18856d5a576"
  },
  {
    "url": "assets/js/217.a0a2fb2f.js",
    "revision": "c06ae64e2df08f4d85724a7eb97c88ea"
  },
  {
    "url": "assets/js/218.a6631e92.js",
    "revision": "0be09962f9c35bba746e063ad5f10ae1"
  },
  {
    "url": "assets/js/219.dcf222e3.js",
    "revision": "e80108a647fadb79964b9274f9b1fcbb"
  },
  {
    "url": "assets/js/22.e049a8b0.js",
    "revision": "d7d62d503f2f45a13cc05290050b6771"
  },
  {
    "url": "assets/js/220.ef04c01a.js",
    "revision": "30b65e11d3231bea2561379efe9694dd"
  },
  {
    "url": "assets/js/221.42832d65.js",
    "revision": "92c3ab33449f216e1279d23174cfb881"
  },
  {
    "url": "assets/js/222.5f4fe08a.js",
    "revision": "e069ee15ae75225449e34cb91e96df63"
  },
  {
    "url": "assets/js/223.4a134e61.js",
    "revision": "c19cf3475be5c07c3ae73d21ded5e8db"
  },
  {
    "url": "assets/js/224.8ec62dd9.js",
    "revision": "b9ec5c5b95b41d5ec796ad027ee4673d"
  },
  {
    "url": "assets/js/225.00d7f274.js",
    "revision": "9c52fe20612651e99f7d7bfcc9d94bbf"
  },
  {
    "url": "assets/js/226.1a1990b8.js",
    "revision": "40001989cb893abd34490c0f9affbbe0"
  },
  {
    "url": "assets/js/227.282c6d74.js",
    "revision": "a5d5fe01e0583519709be350016e7936"
  },
  {
    "url": "assets/js/228.417c9346.js",
    "revision": "e8e7375bbd11205308de3c06d4051252"
  },
  {
    "url": "assets/js/229.6abfefb1.js",
    "revision": "6a48cbe4060e0b12c18302048a2fd0a3"
  },
  {
    "url": "assets/js/23.bb59d615.js",
    "revision": "556c92bc31544d0cf109009040475444"
  },
  {
    "url": "assets/js/230.9f40186e.js",
    "revision": "c46ca4cde8bab9bb7ddaf108c8848745"
  },
  {
    "url": "assets/js/231.6593ad2a.js",
    "revision": "1de3b2721019d89f962523fdbc229b15"
  },
  {
    "url": "assets/js/232.d5567bae.js",
    "revision": "052f45d629c69772ae17e6595b54926f"
  },
  {
    "url": "assets/js/233.6969db45.js",
    "revision": "38019cd045fc56e3ec1f09907a9f754f"
  },
  {
    "url": "assets/js/234.fe3b4442.js",
    "revision": "c86079f6975bd13961e98491156a3fd8"
  },
  {
    "url": "assets/js/235.ed02c937.js",
    "revision": "6deb9d5c90890d8d30ca300963258b49"
  },
  {
    "url": "assets/js/236.81afa49e.js",
    "revision": "f491642481e1f5505dc5ce3aa6a92fee"
  },
  {
    "url": "assets/js/237.2ca66e6c.js",
    "revision": "87436ef8b8d8a2a7d0a838cc1aae5d6a"
  },
  {
    "url": "assets/js/238.f37ed8bb.js",
    "revision": "1f260f5e2d193321a58a6e7f46a03fda"
  },
  {
    "url": "assets/js/239.d3feb618.js",
    "revision": "b956d1b9dc20e6a30b562b12f15ffe39"
  },
  {
    "url": "assets/js/24.549384be.js",
    "revision": "2a8995443ee88710b6b8c1378236b795"
  },
  {
    "url": "assets/js/240.fb2974e1.js",
    "revision": "46b48dd41a3a9cc95ace0dc4dad87ba3"
  },
  {
    "url": "assets/js/241.406f372d.js",
    "revision": "a670913953e65ec176a293135ea773b9"
  },
  {
    "url": "assets/js/242.abbf6ec0.js",
    "revision": "1cfffb052faa62e958571feba408d9f9"
  },
  {
    "url": "assets/js/243.dba5cac4.js",
    "revision": "9522a6d8c3190f693b4ccdc0904511aa"
  },
  {
    "url": "assets/js/244.018780fe.js",
    "revision": "5f9ee8b22b2ebf2825018d645d373bb9"
  },
  {
    "url": "assets/js/245.2f3c1993.js",
    "revision": "75886af327cdfb351e91c6490634c439"
  },
  {
    "url": "assets/js/246.b8e32750.js",
    "revision": "6bd34789f26c149ee6110b588c8c6e09"
  },
  {
    "url": "assets/js/247.54981d71.js",
    "revision": "f96673afad9f9199bdc9b35e48546ec2"
  },
  {
    "url": "assets/js/248.5714f674.js",
    "revision": "ce60401ba4b6c01dbd4cfcbeb1568617"
  },
  {
    "url": "assets/js/249.6e6f89bc.js",
    "revision": "4274af42ccb0db90bbe4e76ce74e2274"
  },
  {
    "url": "assets/js/25.67005a01.js",
    "revision": "ca2f3085a912728a90105b9065b9d982"
  },
  {
    "url": "assets/js/250.9bef9191.js",
    "revision": "65ebcf9bb14a6b9b1fe8a23fb09da4ac"
  },
  {
    "url": "assets/js/251.7885ddf9.js",
    "revision": "222137d8aa640eb48877d92a50ddc522"
  },
  {
    "url": "assets/js/252.7bbe77c5.js",
    "revision": "f2fd48d96340a64dd6f57996491bb18d"
  },
  {
    "url": "assets/js/253.ff37d51f.js",
    "revision": "a0ccd940a522eed7bcb116b750a830cd"
  },
  {
    "url": "assets/js/254.bc5bbe6d.js",
    "revision": "aafbe77b1a57c72bfdde2cc4c8404cd8"
  },
  {
    "url": "assets/js/255.0f010b6e.js",
    "revision": "565bf113821fa7b0e0fcd817d8ec8a89"
  },
  {
    "url": "assets/js/256.4cd294dd.js",
    "revision": "0c7a16b8926f1f19007f2336ec0153a6"
  },
  {
    "url": "assets/js/257.0dac6a98.js",
    "revision": "006368dd20aa370b952451ef2b986a32"
  },
  {
    "url": "assets/js/258.a161400a.js",
    "revision": "cf82beecceb81058c172f46832c038ab"
  },
  {
    "url": "assets/js/259.e494162e.js",
    "revision": "a50439aa8f7d697bbe7e734157cec88a"
  },
  {
    "url": "assets/js/26.c58bc858.js",
    "revision": "83dabf777b0445df4a4710d37927682b"
  },
  {
    "url": "assets/js/260.d3b6f826.js",
    "revision": "1b26c36f4918e658d2e37d8a2707a00c"
  },
  {
    "url": "assets/js/261.fb955a28.js",
    "revision": "f81b49a7cb504cfd496c3e2c28010208"
  },
  {
    "url": "assets/js/262.fb30723e.js",
    "revision": "bfe912476bfb4a31aa67ecddcf5cbda6"
  },
  {
    "url": "assets/js/263.677585a4.js",
    "revision": "51149e5124aec422ebdc17956a1b80bb"
  },
  {
    "url": "assets/js/264.d6339596.js",
    "revision": "cb448ef6475d283e3caae6eea80e5715"
  },
  {
    "url": "assets/js/265.5d76c5f6.js",
    "revision": "d1cad4842265550c2e96162434277ad2"
  },
  {
    "url": "assets/js/266.effbcc3e.js",
    "revision": "37da5863811f12ff25878cd21eaf60e7"
  },
  {
    "url": "assets/js/267.7c533b05.js",
    "revision": "eb7a528babc3ea5584a36b144dfae390"
  },
  {
    "url": "assets/js/268.8b4c424c.js",
    "revision": "b127bef9a4cbd8f08bc4adbcee442205"
  },
  {
    "url": "assets/js/27.d5f9f178.js",
    "revision": "fd04b0dd22a8922bab2f28607509c7a3"
  },
  {
    "url": "assets/js/28.5842ec8d.js",
    "revision": "bce952812e3de56948c170385262f33c"
  },
  {
    "url": "assets/js/29.a01102ab.js",
    "revision": "5370a10c5bbe9447e60b28f5a0e2a8e8"
  },
  {
    "url": "assets/js/30.51e4e8f4.js",
    "revision": "78b2ea0d870a3173376e9edd6e277f47"
  },
  {
    "url": "assets/js/31.ada9e512.js",
    "revision": "7fc7563a31615b1276f16cc29fec9d96"
  },
  {
    "url": "assets/js/32.aa178b11.js",
    "revision": "0116df1cf87edd04dcbf411906c878e7"
  },
  {
    "url": "assets/js/33.2c0fd1be.js",
    "revision": "dfe332045f097a7a308f6ea5cb17b2d8"
  },
  {
    "url": "assets/js/34.6f9f1600.js",
    "revision": "7fbaf8c71f3733edafcbd3241a79d9da"
  },
  {
    "url": "assets/js/35.b2e5e112.js",
    "revision": "5e7dc38e45e9e220461a0d2ff6ceb80f"
  },
  {
    "url": "assets/js/36.90c1bb01.js",
    "revision": "41dedc311a9e643a3763e55d6446b979"
  },
  {
    "url": "assets/js/37.b957ad57.js",
    "revision": "090f289fa93ed67b4e9a3caba61273fc"
  },
  {
    "url": "assets/js/38.ad7dcca3.js",
    "revision": "02492946eec4ae3f627dc03879e32662"
  },
  {
    "url": "assets/js/39.fe7297e0.js",
    "revision": "7d863f85cc788b763a4dcbcb5469ab05"
  },
  {
    "url": "assets/js/4.39a60059.js",
    "revision": "9f65c94c08aa14fc7c520d6b36371716"
  },
  {
    "url": "assets/js/40.4bfffd03.js",
    "revision": "1e68731e664af841a4058cafbb6eb85b"
  },
  {
    "url": "assets/js/41.ba117ec4.js",
    "revision": "6536d7c98e18123453123aa333412d9f"
  },
  {
    "url": "assets/js/42.06c4a2bb.js",
    "revision": "9625265713df7947d9622e33d0db32c1"
  },
  {
    "url": "assets/js/43.eec45b06.js",
    "revision": "ee1d1bfffc57b0108a2353aadaa1c5ad"
  },
  {
    "url": "assets/js/44.2ad31292.js",
    "revision": "673fe92e7f7629e806d04d94c388458a"
  },
  {
    "url": "assets/js/45.238a90f3.js",
    "revision": "bc5d1e059309484851d5d4b54df34b4a"
  },
  {
    "url": "assets/js/46.1107f95b.js",
    "revision": "6a19425547128d92923e0665ea85bc36"
  },
  {
    "url": "assets/js/47.f4bd1500.js",
    "revision": "43cf00840993762012cf771a28885c47"
  },
  {
    "url": "assets/js/48.506fde71.js",
    "revision": "32a453dc30f47c7adf6409ca65d815e0"
  },
  {
    "url": "assets/js/49.12f08b6d.js",
    "revision": "9f3b1dcc5f26ec0a2e194cc6f5f0283d"
  },
  {
    "url": "assets/js/5.a2dda00f.js",
    "revision": "1e1842140e3a56666ff879f4fc17ac27"
  },
  {
    "url": "assets/js/50.6d498148.js",
    "revision": "e4626ee4599bccadd992e2300b063a4f"
  },
  {
    "url": "assets/js/51.1cbfeeae.js",
    "revision": "e6c2f29ff9bca11369f1cf8b16e09abd"
  },
  {
    "url": "assets/js/52.bae969d3.js",
    "revision": "7bbdbb863454910deac8fe0fd98c6db4"
  },
  {
    "url": "assets/js/53.933cfe72.js",
    "revision": "3092ebf444529a1246d2f39d42d60f32"
  },
  {
    "url": "assets/js/54.65463d35.js",
    "revision": "62b8c37c81a6bcb8d7c160d7c6f7d2f1"
  },
  {
    "url": "assets/js/55.192a273f.js",
    "revision": "92eea809f4bfb2ff40731cf9b827490c"
  },
  {
    "url": "assets/js/56.31091a33.js",
    "revision": "4899f800c6f08368fc0f02d6c922c953"
  },
  {
    "url": "assets/js/57.6d2338d0.js",
    "revision": "3a160a6d5cde924196f22ef09ad718c2"
  },
  {
    "url": "assets/js/58.e5e283f9.js",
    "revision": "a083cd56706aa18ad7db0774d0d34ff7"
  },
  {
    "url": "assets/js/59.dae6ef03.js",
    "revision": "65a5e9b4b49aa523379bb931e060646c"
  },
  {
    "url": "assets/js/6.6485cab6.js",
    "revision": "439588acee95bc897ed3915b48e1af3b"
  },
  {
    "url": "assets/js/60.f31e80a2.js",
    "revision": "236c33584bb871cddbcffcf8699e4e15"
  },
  {
    "url": "assets/js/61.2a2599b5.js",
    "revision": "e27499cf596161fc583d4de22ec77e56"
  },
  {
    "url": "assets/js/62.b49dce5c.js",
    "revision": "3345ed9c8f090bb5f0c251d034bee170"
  },
  {
    "url": "assets/js/63.e5b196af.js",
    "revision": "fd6602904368cd9ffb4d66ff75b81fad"
  },
  {
    "url": "assets/js/64.b7fd8b8d.js",
    "revision": "4a7975dc8070e2b3646c951afd95478a"
  },
  {
    "url": "assets/js/65.bf14f564.js",
    "revision": "429db2167ff1e8ea56208b583be02be6"
  },
  {
    "url": "assets/js/66.f8e68471.js",
    "revision": "e6e0118aa8f51092474eaf7aa6d89077"
  },
  {
    "url": "assets/js/67.bf72c8d4.js",
    "revision": "884c86cff4e0c62999f8796c6ec79a8f"
  },
  {
    "url": "assets/js/68.fe37ed11.js",
    "revision": "201379a90c4d54f57859a0c2ca4548f7"
  },
  {
    "url": "assets/js/69.6077fd72.js",
    "revision": "b306d6cd587425f685fb04a7733e2059"
  },
  {
    "url": "assets/js/7.41465560.js",
    "revision": "5614c1391d730ac7305f25c96d4d9b73"
  },
  {
    "url": "assets/js/70.45feb6f5.js",
    "revision": "45dff402af82f7d29ff4f3d75c4dcad8"
  },
  {
    "url": "assets/js/71.0f6c7bb4.js",
    "revision": "d53225e162d37a4b8315f3756b1d9dd3"
  },
  {
    "url": "assets/js/72.8b2d95a2.js",
    "revision": "25cae7fb718c13d77a60dd06cd94b58a"
  },
  {
    "url": "assets/js/73.341892ad.js",
    "revision": "36e6779a31fcbde7909c95fb43bf6faf"
  },
  {
    "url": "assets/js/74.666f841b.js",
    "revision": "45fb32fe89b6940b4acf4c7731be3a82"
  },
  {
    "url": "assets/js/75.d48a0be6.js",
    "revision": "cfd448c995f304c6b6249a537bad04ae"
  },
  {
    "url": "assets/js/76.fcfab744.js",
    "revision": "208e53cedd96d09c3708d8bda048d321"
  },
  {
    "url": "assets/js/77.dde06e70.js",
    "revision": "1502240b1e712d1268bd7167dc0bb447"
  },
  {
    "url": "assets/js/78.558f3c4b.js",
    "revision": "1268b270069cbcc872d2cd7de61dc052"
  },
  {
    "url": "assets/js/79.4d61bb92.js",
    "revision": "f1a20e01ee6eefc74894beeb4965bbcb"
  },
  {
    "url": "assets/js/8.b1be851d.js",
    "revision": "eacc695907776295206bcce18713cd14"
  },
  {
    "url": "assets/js/80.3203647d.js",
    "revision": "bade40679613607162cf08a35b18f186"
  },
  {
    "url": "assets/js/81.fd14116d.js",
    "revision": "277f3077c5bc00841fdba628e89a005a"
  },
  {
    "url": "assets/js/82.dc306946.js",
    "revision": "c3e4aa4b3b85f136c03f6a21103da60e"
  },
  {
    "url": "assets/js/83.0c2972f9.js",
    "revision": "fdbaeafb55363d800ed03c686866e46f"
  },
  {
    "url": "assets/js/84.dcf7cda0.js",
    "revision": "6d1fd26ef2b8b1227987f8e8db0bcabe"
  },
  {
    "url": "assets/js/85.47a6cd3f.js",
    "revision": "76b92e7ae3915dbe9ba56513ad8d2788"
  },
  {
    "url": "assets/js/86.34ad8c43.js",
    "revision": "5146b54588d5262b954687ff0d654936"
  },
  {
    "url": "assets/js/87.7ad3b3d8.js",
    "revision": "01b59fe822e73199847cc48ef87395b4"
  },
  {
    "url": "assets/js/88.cd73628c.js",
    "revision": "d94459289640cd7c9800d16b0954031c"
  },
  {
    "url": "assets/js/89.f888e91f.js",
    "revision": "379dc1d5657aa05dad800551c0e939e7"
  },
  {
    "url": "assets/js/9.40bce664.js",
    "revision": "20434bb2640b1e044f7cb848c3ead29d"
  },
  {
    "url": "assets/js/90.a6a77461.js",
    "revision": "2c78bff766d20137c2b81058e12a0d6b"
  },
  {
    "url": "assets/js/91.b7dab738.js",
    "revision": "06f399d9f3b10505adfd5f7bd62d07ab"
  },
  {
    "url": "assets/js/92.e595c4ca.js",
    "revision": "f1b76dd958a8cff0b56de049ba3043b0"
  },
  {
    "url": "assets/js/93.3b559267.js",
    "revision": "8b1c60845a9a74e290b5927c64e3794d"
  },
  {
    "url": "assets/js/94.40ee798d.js",
    "revision": "cb32d503bfb301cd56b9e39c4a87e118"
  },
  {
    "url": "assets/js/95.a0256bbf.js",
    "revision": "3a61f524274b675668429bfe209f47fb"
  },
  {
    "url": "assets/js/96.8ff5beb8.js",
    "revision": "98c25824734e81f4f8eebd1caaab74fc"
  },
  {
    "url": "assets/js/97.e994625f.js",
    "revision": "7f7a8dbf6cfc56fba6e5fdc102884843"
  },
  {
    "url": "assets/js/98.a837009a.js",
    "revision": "b964073dc2a2a195e50f4fb9e8b6d9a0"
  },
  {
    "url": "assets/js/99.fb360101.js",
    "revision": "1aa9e33b229d6ccbc2c760cdd45888b0"
  },
  {
    "url": "assets/js/app.346f4a8a.js",
    "revision": "43ef7e213355243a22ce1ee201587690"
  },
  {
    "url": "categories/index.html",
    "revision": "56f7785f057fbd173402290919cd2377"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "98672db4975c999982f3790055388add"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "2428a40d0862b7484066a5dcf694c411"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "0ed8b4da5ea4a59fef65a3f837bdad6d"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "4646f85f10cdd36e3f1d4a8b41d8f27a"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "f9ae0f6e5fe51e03a5705abf7fa61352"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "79b5e821aa4f6c3d920f92f0339698ac"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "2efb68ae4d402cba739ea5453cb9bd1f"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "cc6224f8be236aa792d93b08c32089d8"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "5547b491a51727239a6f92987ea4bc3b"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "4a882603ee10e1e072e930cfa0ab9674"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "2428a40d0862b7484066a5dcf694c411"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "0f46dee23cf35ff2c7186db63e3569d9"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "cbdc8000903721418364eec0d26ddd6e"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "a58097c5e67557181cb5cabd7f0b4674"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "68fb5a1f6b2e248e3b57c08b78576b9e"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "ca4253f76e7cd18d62abaad6e7978ed5"
  },
  {
    "url": "cs/database/index.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "c280e2e09a2175ed76f2dc812019e287"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "abe64f2bd75c0928d881727a63f6c09f"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "78d44d678205a13ac206d7821342dd49"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "ee2c0ace29a58b59282de1524a7e7145"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "b6eb67fb3b7a7cdb5ba29306ddf549fd"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "7acd80d12900329826384ecd103d5bda"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "6488f67e100526cb6713d3e47c7dda45"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "0741cdbb47e44c34e952647489b0739f"
  },
  {
    "url": "cs/design/command.html",
    "revision": "0cbb3ca1fb8a74821796d22d301ca428"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "81caefad0b7c5379eefee1e3ee499124"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "89fd7dfa964ed763de2d155ad33314e1"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "cb3b53762483389f3daa05e59ca8de66"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "1a3b1fe5a65a850fc68712ffd72a7111"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "c5d778b8108fb63bed3cc646e81f951f"
  },
  {
    "url": "cs/design/index.html",
    "revision": "32e1dee6973e37dc840ffff0c9901787"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "48306170448254a411b5e0bfc8c0de15"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "1a6d6dbf4ffa3c57522070b688c57ec2"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "580a2843e819ae209f93c521b62c32fc"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "eae2d76157f79875cc4c3943de23c9fc"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "b072f15a20fcc3ddccc5abe6728e186d"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "f8ee12c2da1fdb0d5d572ce7cac99c34"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "18a42ba0b4184bf09d254f88c45a1df3"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "f65c70d5f6d6bf09df2dba9157dc0dfc"
  },
  {
    "url": "cs/design/state.html",
    "revision": "041f1a44e1562bdaff542ffeb6165dfb"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "2378d2cd8807ed1562a558f31a1ea0f5"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "06410e89b0b3fe564bead241ade10d38"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "6d248779dc0797d67709ada5312bfb5e"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "2f45f577c15458899e1a679465f93703"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "b190c9d92f0c320e607a03d44029e229"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "82e38a4807977b79d47bdff3c42b287a"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "70ffd399b06cf1370ee2698ff554621a"
  },
  {
    "url": "cs/framework/vue3-reactivity.html",
    "revision": "e577b25f8ff31db4fcadcb96c63d75fa"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "8df5219f44cc2a38530ebe76449d3c89"
  },
  {
    "url": "cs/index.html",
    "revision": "66dc39583253a2f00238af85f30979f8"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/java/container.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/java/index.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "74e111d22a0f15e5e8bd15111c1071c9"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "c413e3a3baef8bea0452d09bc8d598b3"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "97da45811aa6c7cb46da6e4ba5428051"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "238a47fde3be980f6792a8ab967d6675"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "d080f80f0175d634b976909bd9e3d091"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "d3a7d9ff15daaefd53cdaf46538ad903"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "83a4e1049f4fa2f93a3c82f8155de14b"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "b9d15f7a59521ddf2214086034102c72"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "beb938b98457250dab6a151a1d9a6947"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "bb0a990f9ba4a80695139ff238416fa7"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "6539d5ea36031e55a66648fae008c86f"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "e95ca920a945bd4547ceb74bf03431ef"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "d3e96e62b91967f8dc77c01d530a3d67"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "2f79c822f34ddb6c8e32fb075e2a02fa"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "f999e5df17c4d12e1576e91d43521286"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "744ca11fd2b49a44b1b28dc7e98ada8d"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "424e3bfa2675599935bbfb67757d1c2c"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "3319830921585136472e07379d397a1f"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "4f74799668df619d03707925262a6a8f"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "1f09f26cb0bfd4f8522fb7e15966dd23"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "d04b8521a903a3ad05664f0289643835"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "28ab5dceb4ea8209493a1fb07acfe9db"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "4485736e1d7d2f7a31a332b208996945"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "2f758da7d9be1b88da1427823e9689a9"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "d27b49e1f7ca34a3eec06644bcad5ee3"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "7a81245d4b1cd0715b3d95e065fa3306"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "60032720a1ce79ced84a27e739025f26"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "3d2acae916ff2e06d477514fc601a75d"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "39292db8a26187d38b5c15fa830d9bac"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "c2dd7ed5f5f207123e3993cafc004b84"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "1ca20e542c381ea2aab9c0561fb17166"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "0af99ceccec8f4cf0c2c9f8af136991a"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "c98631b3a419d340b51f62eb91bb9c4d"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "148dc7c87cfb86e6f609e13a84419ddb"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "fce5f27424a6f086899552c3de217261"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "7fd140512085f5c5357147f18d35b615"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "1db81693ede8ca4f89b19e3853a1d8bf"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "8558a65b1840edf6169607568c850efc"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "cd544b3ad3f740f8181bee053e4e91c5"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "037271c619c76948788240dfb8a5c58d"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "033232d1a1139cfbd4b709d03d9541ea"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "1ff3d9b8521182f0a25f31f61f5d1718"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "1606811be31b040c49b9a3397baf570a"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "5db1d3fd64956efb1568d43ce0721f74"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "351c4c57d5da75ef57381c40d38e0207"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "2a8e3dc04830c7fcd0a7651d0a3c867a"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "3e4e9abd7156c63688886e4f3553de7b"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "21300cded82b93513012abca905508b5"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "72aa07bbcd8c7ee0181c5dcfda47ed97"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "b6bac235bc0910c6c6394529ff05727f"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "7dd6963356f31747d74d66235c560390"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "21c36bb5710d02861bd89aaee794a95b"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "d1e6d92e1dfce8d4e7bbf1c03d28685f"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "5c5fc1a1e60c65ce7125d720e383d3a6"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "2b0ef4e1e881ab5ed8adc6fb41afe88e"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "61aeda404a340c270c58357f8b47967b"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "8aae637807cfd698966758892e6d7426"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "4ccd1b0688715b2306c4f0093f1cd071"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "629f8bc613bf61b752cc599a2a9dc0bd"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "fcfc3bc0a7f029bf836037503d52b5e2"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "f28f8552ee8b196d6824d1e4040557a4"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "e3507c6a9605c7cd668baf8d6c6400c7"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "646bd4605b32858f3836ee4a5933b894"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "27ede9f86cbc7ccf8c37690bf490306b"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "b4391989b09c414084f871b046c53999"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "ffd0b071d573abe4afccdd3709f4d994"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "119fafd8726b29a3d80cbfac3dfdad70"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "4b1cb7dc019ef5e19a5fffcbd4c40a54"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "0d7feb866da5f0ce5048c6d42beedcac"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "9788717afa6720af0278e3f5e62fb56a"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "b6d130195d56c64c4e11ce05e345c143"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "05ed7526f98956e35cafbfaf6732813c"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "0d1f1603cace544d00827b6961dec3a9"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "78be34a2417d193c72a777cb762e0f78"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "7d5dc979eb86c1e4c1a1e5dd449fb8d1"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "3358c977c805733a58493a8558a05558"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "25d155297effe9f6021baf84ddae097e"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "fdb427c7b77c74db6d2bcaecc1354d84"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "378242038e72ceb7998d9b1566e1ef88"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "6c0c2fc884ad8584d47c38bc64c9c19e"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "3996819ec43b7741c3b310b642ad79a5"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "765b8e1edaedaaf9322897e9fef0e64c"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "6a0fdd3de5b1b22e67c7dbcf013cdcc5"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "dacb75542cedced8ee5100e6d1f0ba1a"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "5db1d3fd64956efb1568d43ce0721f74"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "73f34767f8dcc24a34cbd716e591c45b"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "1178c72b6086089d801874ae3ca795ae"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "2428a40d0862b7484066a5dcf694c411"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "426411f1f588ad442c0ece959fbcb3c5"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "7d808be64188afffc8e527190255a439"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "7ff0742b17d89019e085a157c6ccffa4"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "64389b267326198f1a4ae0619d2857a6"
  },
  {
    "url": "cs/network/application.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "564fac4871954395a77f1eeac72c4002"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/network/index.html",
    "revision": "2428a40d0862b7484066a5dcf694c411"
  },
  {
    "url": "cs/network/link.html",
    "revision": "fe97acc3b2b83fc2f1a27549b93ca0e8"
  },
  {
    "url": "cs/network/network.html",
    "revision": "c0d9bfaa6490e92214d2d40191cc5559"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "112941800a7b7c8b22b32d83e96ac896"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "f7ea9fccd123fe568633115fae898561"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "9de5a74cb71c23031de8a1cd1a4566dc"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "129647d22cf4578834ee17553b46f809"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "66e525150420ac4648ac24e52cffcad8"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "2428a40d0862b7484066a5dcf694c411"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "5b2f332f23836091dcc46633a5b98006"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "23e20461bec050dce6a86c065e54bee6"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "a307318b6ccfdfb5e00dd2f5d6211b50"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "681035a02d014a8c1b8374f0ee6c7f48"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "74e111d22a0f15e5e8bd15111c1071c9"
  },
  {
    "url": "cs/web/index.html",
    "revision": "2e45c9203060f25f478e4ad2f9da242b"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "ba0a416fa1576b79b4c9e2f2256079a0"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "8896558e1b30694987e3b195fcacb9fd"
  },
  {
    "url": "cs/web/web.html",
    "revision": "cf7b58150fe95df17001c6371cdeffcb"
  },
  {
    "url": "daily-life/phone-lost.html",
    "revision": "6b4d04a5b5515ac11604110ea6648380"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "1b4f635128a82bc4fd9a0c8141d9386e"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "b2f2662e652fc16c402d788b42b29efa"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "85d9f0d2c6d7c2c20a04c5ae95aa1860"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "33db48f5c6c1b732365cab69e3c155b0"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "a2d48fb807fd7c2a6deb2e2170ac76f3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "2350602bfb8228f4f0361e4f64321c7b"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "2797b3ae848e499c5fe6b0bb9368ed89"
  },
  {
    "url": "index.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "1e981a7cb398075aa0ea7f8a2f476e40"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "4c6ef170be497180c57dcb2b2cb49063"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "fc63429ca8454c83d6e3e4fa7221da2e"
  },
  {
    "url": "language/english/differ.html",
    "revision": "2ee9d7ce40f4a1166f905c1dd4af1338"
  },
  {
    "url": "language/english/index.html",
    "revision": "c413e3a3baef8bea0452d09bc8d598b3"
  },
  {
    "url": "language/english/modal.html",
    "revision": "414e8b451c23eb2d175c169acc7cea07"
  },
  {
    "url": "language/english/mood.html",
    "revision": "12454038c4bd15c198a9836d702337d5"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "6397855db94dfd6a26f3bd9ed303c304"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "8ef00e4c4dce8f972fdab61e60e6d38c"
  },
  {
    "url": "language/english/phonetic.html",
    "revision": "17b8235588116db5ec8b1454992803ac"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "e18815500a3ebc8424746d952da1d3a1"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "180c78b1ec768ea1381bff89b71f4742"
  },
  {
    "url": "language/english/tense.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "language/english/verb.html",
    "revision": "a645d02b1c4da2091b361224dbd6b247"
  },
  {
    "url": "language/english/word5000.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "language/index.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "tag/index.html",
    "revision": "0e3fd71fe0f8cf8406bc96eebde77a41"
  },
  {
    "url": "timeline/index.html",
    "revision": "7afb4195a6a6466017563499ac71972b"
  },
  {
    "url": "tools/chatgpt.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "tools/hash.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "tools/index.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  },
  {
    "url": "tools/test1234567890.html",
    "revision": "eac997191f9e16805aaa14b4e2b00566"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
