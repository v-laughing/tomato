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
    "revision": "34a95c7fcdb99d0aae71081631d774ae"
  },
  {
    "url": "assets/css/0.styles.bc779f66.css",
    "revision": "e0f60f3c765dc2b88f664fae9c31d1c8"
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
    "url": "assets/js/1.cb54a108.js",
    "revision": "41ec6c7026b76664917a3db87dfadf1a"
  },
  {
    "url": "assets/js/10.8e39fe75.js",
    "revision": "1e8388260edc91e3b7bce138221280bf"
  },
  {
    "url": "assets/js/100.f576ddc4.js",
    "revision": "6c2c78e6b5152e9aa0871b2b1a40d9da"
  },
  {
    "url": "assets/js/101.40395bef.js",
    "revision": "f11c4b2d5590592229a44d511f3d7017"
  },
  {
    "url": "assets/js/102.9b558c70.js",
    "revision": "4b1e7bf4fc083df14c1197355bcda37a"
  },
  {
    "url": "assets/js/103.b4e32ffc.js",
    "revision": "fdfa9bfa005eb2ad9129caf74ccb5a8f"
  },
  {
    "url": "assets/js/104.b6217022.js",
    "revision": "56a6b142b2d45403467c30fd4243148e"
  },
  {
    "url": "assets/js/105.8a3aa0b0.js",
    "revision": "4fe7892b853e9da596b1fa294e610420"
  },
  {
    "url": "assets/js/106.46328742.js",
    "revision": "5633b1b20092194f353ae14c510154fb"
  },
  {
    "url": "assets/js/107.8445ea8d.js",
    "revision": "7bb2bc313be364bb33edda0fd27f2d73"
  },
  {
    "url": "assets/js/108.0439f927.js",
    "revision": "f61ee2e90dab41379f5fa35fe835e170"
  },
  {
    "url": "assets/js/109.cbe46220.js",
    "revision": "3cc2c3a524b5143f3256eb6aabb75de0"
  },
  {
    "url": "assets/js/11.06e4bfd3.js",
    "revision": "908e3d3cdc06a5529d03b0a6a2a387e1"
  },
  {
    "url": "assets/js/110.8b935952.js",
    "revision": "d0380609d16014791e8075333b6af032"
  },
  {
    "url": "assets/js/111.c0c5c4b1.js",
    "revision": "d292026ab032ea9bd0ef547983c438bf"
  },
  {
    "url": "assets/js/112.e35bd69b.js",
    "revision": "e2cccbf2334d353dbb3c0f1805625e51"
  },
  {
    "url": "assets/js/113.9b817bc3.js",
    "revision": "7368dc95a79fabf0663662c074293d57"
  },
  {
    "url": "assets/js/114.8e2be743.js",
    "revision": "c73c42d97023dca116c3140e90253fb7"
  },
  {
    "url": "assets/js/115.4fb199e7.js",
    "revision": "024abd43a826bf871120a9a86f7fad43"
  },
  {
    "url": "assets/js/116.8f2128ef.js",
    "revision": "e0625e9a3186f0273b6178bc1acf8e24"
  },
  {
    "url": "assets/js/117.e9d08c8b.js",
    "revision": "d03d14729c10b28bd00c9121f909ce4d"
  },
  {
    "url": "assets/js/118.516da0d5.js",
    "revision": "7d58ba8f3f6ee1ff7aca8f816cc6c06f"
  },
  {
    "url": "assets/js/119.7d1ee857.js",
    "revision": "51d375aa7e6095c029ec3a2f4b3ba316"
  },
  {
    "url": "assets/js/12.0c3d6b63.js",
    "revision": "a4d5bc886ddc933792f8525ed0cdaf0c"
  },
  {
    "url": "assets/js/120.abc80b08.js",
    "revision": "9ef3bb2d0ba8def0a2d60992e99c6594"
  },
  {
    "url": "assets/js/121.2d4e6788.js",
    "revision": "322507c27a86a89fd5217c41bbdaf9fc"
  },
  {
    "url": "assets/js/122.587ac886.js",
    "revision": "35618c8b042aa2de05a0c4f8b7e964de"
  },
  {
    "url": "assets/js/123.4134b2db.js",
    "revision": "eb4650cdb71d1d1852e9511c66734e6e"
  },
  {
    "url": "assets/js/124.1771b894.js",
    "revision": "5070c03830448ec4dc4cd20f5d3846fe"
  },
  {
    "url": "assets/js/125.2a7be534.js",
    "revision": "adc737a3384a65aa54e488182eae9b9f"
  },
  {
    "url": "assets/js/126.a3e05a7b.js",
    "revision": "4c3ad01f6ecac6c6692a2c9db419eeb8"
  },
  {
    "url": "assets/js/127.01f619a8.js",
    "revision": "2aa6433de28306cae6e9dc2dc12f8118"
  },
  {
    "url": "assets/js/128.8fc9923a.js",
    "revision": "b00928c7fbeed0ac53dcd2dcbdc78f1e"
  },
  {
    "url": "assets/js/129.097eb354.js",
    "revision": "a57823ea496c9a967f7f4cff630bb3cf"
  },
  {
    "url": "assets/js/13.b6e6f0af.js",
    "revision": "a2e60717777118176980408d69033af3"
  },
  {
    "url": "assets/js/130.63573ed5.js",
    "revision": "ced038b7e6759c1755f1f8ef0a9fc85d"
  },
  {
    "url": "assets/js/131.cea91fe6.js",
    "revision": "4bad59b261ae5423f181b3b5b345454c"
  },
  {
    "url": "assets/js/132.61d04152.js",
    "revision": "ad2b1f511adf81d9ac0d557842b7fda6"
  },
  {
    "url": "assets/js/133.a75590c9.js",
    "revision": "74a0670a04a191aedd1bec86dc06a210"
  },
  {
    "url": "assets/js/134.10babed0.js",
    "revision": "8329b7f52f29da50b4fa5e784cb866b1"
  },
  {
    "url": "assets/js/135.631517b3.js",
    "revision": "c85eb5220213093e0abf3c902b2ab2ad"
  },
  {
    "url": "assets/js/136.d3be3f99.js",
    "revision": "a15f19559bd6105b86f0650f077c58fa"
  },
  {
    "url": "assets/js/137.a7c368ab.js",
    "revision": "ce4232ecfca4c9e5ec2e5c7828552dcd"
  },
  {
    "url": "assets/js/138.04444aef.js",
    "revision": "97baa54a11374f472a30053327e73b3a"
  },
  {
    "url": "assets/js/139.a4b78bc8.js",
    "revision": "cff7cb7a72b6fe3f4704996109be48f7"
  },
  {
    "url": "assets/js/14.a255a85a.js",
    "revision": "4bc4087a60053969a314775883e667ab"
  },
  {
    "url": "assets/js/140.7ccc0473.js",
    "revision": "be20c872067222a491704fe07bd08a34"
  },
  {
    "url": "assets/js/141.33838eea.js",
    "revision": "db7963f77689d1bd2f070a4fd4e470b4"
  },
  {
    "url": "assets/js/142.e4eb2d0e.js",
    "revision": "08ccdf468473451716e5341fc6ba6cdf"
  },
  {
    "url": "assets/js/143.725b403f.js",
    "revision": "45fafbe7c11575796398d5edfb96edd2"
  },
  {
    "url": "assets/js/144.b7739266.js",
    "revision": "5e8b320a77126a00bf83b0d8943a325e"
  },
  {
    "url": "assets/js/145.479bcd07.js",
    "revision": "f3bb0e5125c0f7e461e0f2363f6f5219"
  },
  {
    "url": "assets/js/146.3754d673.js",
    "revision": "e9f76a3dac04eb9a46a0257d3d7606ef"
  },
  {
    "url": "assets/js/147.22359ed7.js",
    "revision": "1ef141c2e5343580edccf1f919a9168c"
  },
  {
    "url": "assets/js/148.dea69b46.js",
    "revision": "e122a5546044fdb74ed1fa75accdce19"
  },
  {
    "url": "assets/js/149.01624edc.js",
    "revision": "a44a985e11e0cde79b8074f58deaf703"
  },
  {
    "url": "assets/js/15.cb654472.js",
    "revision": "f77024f8539cf2f95a5e14c644661b03"
  },
  {
    "url": "assets/js/150.88624bc3.js",
    "revision": "c2236174ed319456d5e6f2d1f18497ac"
  },
  {
    "url": "assets/js/151.ebabdc4a.js",
    "revision": "5838cdb24696aebe665ef3e7b374a203"
  },
  {
    "url": "assets/js/152.a3e12947.js",
    "revision": "ca0445fe581c073ef7cb4cd96a77e98b"
  },
  {
    "url": "assets/js/153.b3c39543.js",
    "revision": "743904d4e30c27eb3dd2a73ba25074d8"
  },
  {
    "url": "assets/js/154.e4a2b91f.js",
    "revision": "a7477c90ee25b0405b45594b234617c7"
  },
  {
    "url": "assets/js/155.4743c621.js",
    "revision": "f4d2c0e7b9097001c45e7666d744f4ca"
  },
  {
    "url": "assets/js/156.38507534.js",
    "revision": "29e9026de5d7534563e95948f85e5a32"
  },
  {
    "url": "assets/js/157.c54ab4e8.js",
    "revision": "6ec74a080126f5dc6a862eba3e0b5209"
  },
  {
    "url": "assets/js/158.93ccdacc.js",
    "revision": "e74512b4ec5abbc149ec9816f662b616"
  },
  {
    "url": "assets/js/159.d7969780.js",
    "revision": "30b0a6d1b6b7804ef62e97c4e49ab7f9"
  },
  {
    "url": "assets/js/16.98bc7d3f.js",
    "revision": "c14dae80c449f17c9624efba70252e94"
  },
  {
    "url": "assets/js/160.bb883a61.js",
    "revision": "ab1ddabdb39e7d6c0015f34292538f33"
  },
  {
    "url": "assets/js/161.a3829a75.js",
    "revision": "08c47b9c7647dc0d02bdecbe87eaac3e"
  },
  {
    "url": "assets/js/162.2a9277bc.js",
    "revision": "5944acb7da293e15cbf12b6c99ec8b57"
  },
  {
    "url": "assets/js/163.bef1c77b.js",
    "revision": "c27cd7b1531065fde3c5b470f7842ecf"
  },
  {
    "url": "assets/js/164.8223216e.js",
    "revision": "5c51b4e7a43fa835cc4f1a03fb19d1c2"
  },
  {
    "url": "assets/js/165.27a167bf.js",
    "revision": "f90a8a024cf7ca7102208379f6608cf4"
  },
  {
    "url": "assets/js/166.9cd8ba9b.js",
    "revision": "2682555079b78dfe4ac743d3d2782217"
  },
  {
    "url": "assets/js/167.f83e55bb.js",
    "revision": "1760dc0e3509d476aacede82f57b7006"
  },
  {
    "url": "assets/js/168.07e4c4bc.js",
    "revision": "25fcd0c2fce25a59a6a099b39d5f6864"
  },
  {
    "url": "assets/js/169.6642c8e3.js",
    "revision": "52b3cc102c4e064c0d82a1e0cb96a6d7"
  },
  {
    "url": "assets/js/17.7244c605.js",
    "revision": "bf32519469f2cee880bec2ed90060902"
  },
  {
    "url": "assets/js/170.81fea436.js",
    "revision": "ed836bded9c41aade896156fd6b1c14a"
  },
  {
    "url": "assets/js/171.f7bf34e5.js",
    "revision": "59d7f922a43398fa434263eac4b88368"
  },
  {
    "url": "assets/js/172.a8aede98.js",
    "revision": "8e457c18aba5a0b7234494d7ee270ac6"
  },
  {
    "url": "assets/js/173.0861f34e.js",
    "revision": "f07f9f1734e0656e9a2cb9b8379ba2c1"
  },
  {
    "url": "assets/js/174.9e3e58f9.js",
    "revision": "0dbe44e65f20b81a9ecddc2f2ae2500e"
  },
  {
    "url": "assets/js/175.cac592c2.js",
    "revision": "26f08d505d423cfdb0db34e5b903a4b2"
  },
  {
    "url": "assets/js/176.e763e44d.js",
    "revision": "02b532cc655bd2128a267bcb69ea2b18"
  },
  {
    "url": "assets/js/177.52e00b16.js",
    "revision": "ef84ea2fb504f6cbeb39a508cd8cdd3e"
  },
  {
    "url": "assets/js/178.d4f271b4.js",
    "revision": "e74ad037cfc70dfb77c667ba0febb697"
  },
  {
    "url": "assets/js/179.336229b2.js",
    "revision": "17a7b0be728312f1106bd063be75a3fa"
  },
  {
    "url": "assets/js/18.d37c8c6f.js",
    "revision": "907390b72ed06381272d72018a558c5b"
  },
  {
    "url": "assets/js/180.0e43fd56.js",
    "revision": "7c7d9ba45d195c66b251cbbe432c1ff8"
  },
  {
    "url": "assets/js/181.de263a67.js",
    "revision": "14803748e9c5fb1e9421e199bca51d1b"
  },
  {
    "url": "assets/js/182.6dad0f7e.js",
    "revision": "7d22423813f668430df463175848a5b5"
  },
  {
    "url": "assets/js/183.bff22d30.js",
    "revision": "1fa543ac726526015b7ce6106f7327e7"
  },
  {
    "url": "assets/js/184.f8d470f0.js",
    "revision": "88f99af7332a1636e8c4e87a245c14eb"
  },
  {
    "url": "assets/js/185.da1558c6.js",
    "revision": "c22d9db6898b92db7d5e78b45b2b71ff"
  },
  {
    "url": "assets/js/186.b67a6aba.js",
    "revision": "dcfd5a2667a418eff920872b31c4e1c2"
  },
  {
    "url": "assets/js/187.626a1dbb.js",
    "revision": "72e3fa44b946fc4f6e6da40648f45a41"
  },
  {
    "url": "assets/js/188.c8af9f36.js",
    "revision": "085f4e24f069715d0610bc461a828468"
  },
  {
    "url": "assets/js/189.6b74ca0e.js",
    "revision": "780170415c0b77039b0fb1517fb3e693"
  },
  {
    "url": "assets/js/19.2ef6e769.js",
    "revision": "a8d884f569fd52c5cf4edaaab3c09016"
  },
  {
    "url": "assets/js/190.841aa7a1.js",
    "revision": "29decd97b8f575dbc760add69335906c"
  },
  {
    "url": "assets/js/191.deb197fd.js",
    "revision": "7286af4a517d6266815ce392ac2328f8"
  },
  {
    "url": "assets/js/192.e1f06a78.js",
    "revision": "a8064b482a6776d6d9290725206314b7"
  },
  {
    "url": "assets/js/193.a8fa6fc1.js",
    "revision": "1358d11b3471734c6965d9c4871fc9e0"
  },
  {
    "url": "assets/js/194.0d3b614c.js",
    "revision": "4c34514340ce2bab06c7e978a65360b1"
  },
  {
    "url": "assets/js/195.07773c05.js",
    "revision": "7054ad11b6f3c4fb0afe797a46b8f612"
  },
  {
    "url": "assets/js/196.2eb17195.js",
    "revision": "6aacfdfa5c13cda943bc82eeb029b1e4"
  },
  {
    "url": "assets/js/197.24ef8329.js",
    "revision": "25feb1c257d092085b61821d100d79eb"
  },
  {
    "url": "assets/js/198.630e2b82.js",
    "revision": "025fb7104855a0123fb74727b8780ddf"
  },
  {
    "url": "assets/js/199.38f4b64e.js",
    "revision": "65f667e7b7e0fd6bd3b086b163ac6a2f"
  },
  {
    "url": "assets/js/2.8c802a48.js",
    "revision": "ddef852228aa5a69222d932dfbccf369"
  },
  {
    "url": "assets/js/20.fb9ffc47.js",
    "revision": "afeb692edb97bd19faddacb15ba5a586"
  },
  {
    "url": "assets/js/200.f7b1fbeb.js",
    "revision": "b86a075dacd13c5fe406c37c1d50dc53"
  },
  {
    "url": "assets/js/201.1ddf287b.js",
    "revision": "34db390549caf302fb8906193df9e16a"
  },
  {
    "url": "assets/js/202.824ee66e.js",
    "revision": "77a36ba8818f2b5b072bd5c841840d9d"
  },
  {
    "url": "assets/js/203.ba386c25.js",
    "revision": "14e13a343087dffcfef3d2a9fe04ea0d"
  },
  {
    "url": "assets/js/204.1f6abb61.js",
    "revision": "0ed44b4cb3df14150199169901a34fa3"
  },
  {
    "url": "assets/js/205.c30ff4ea.js",
    "revision": "51790b90def3d78900e3398f3bff05c3"
  },
  {
    "url": "assets/js/206.550cf0ed.js",
    "revision": "08108f9734f7e80e9bcd55de14b17f66"
  },
  {
    "url": "assets/js/207.590167e1.js",
    "revision": "6c4a65717359d1733b4afa00adb4ed3a"
  },
  {
    "url": "assets/js/208.ecb70b8d.js",
    "revision": "331272950346b0e4b55d7db0cae8268a"
  },
  {
    "url": "assets/js/209.d90b1595.js",
    "revision": "d3816d66837378313f2989e141e6921c"
  },
  {
    "url": "assets/js/21.892e8b12.js",
    "revision": "f52f36318556fa4d5431b23d81ab685a"
  },
  {
    "url": "assets/js/210.83558421.js",
    "revision": "84b84e96202a67241b93839f7ce588f3"
  },
  {
    "url": "assets/js/211.557c3552.js",
    "revision": "0e01c40fd71acd7c95e78d48444f08fe"
  },
  {
    "url": "assets/js/212.c0c19433.js",
    "revision": "2ddd384b71def38868a2c06598195f8c"
  },
  {
    "url": "assets/js/213.136ce8e9.js",
    "revision": "02fff1f74411b905ef60fe79b6194805"
  },
  {
    "url": "assets/js/214.fe858d9e.js",
    "revision": "ad242206281da1dd63f6f86b15750beb"
  },
  {
    "url": "assets/js/215.0bbb668c.js",
    "revision": "0cbb2726010fffe0be4003c62f35ff00"
  },
  {
    "url": "assets/js/216.93b970ca.js",
    "revision": "bd9ade2b79743727137db771e00bae67"
  },
  {
    "url": "assets/js/217.2d887578.js",
    "revision": "1c0bb2bf0d6f093c56b049042527075a"
  },
  {
    "url": "assets/js/218.0717a96f.js",
    "revision": "6e3c5c3c6bba6566519821307e2817c6"
  },
  {
    "url": "assets/js/219.fa431b87.js",
    "revision": "b3241953e3815502b70e2238ed2c0167"
  },
  {
    "url": "assets/js/22.bf06aebf.js",
    "revision": "9adb55e993b9a6c8183b4bc9fcf9add6"
  },
  {
    "url": "assets/js/220.5a6e7cd5.js",
    "revision": "131edaac027323cd29052f82a9d7b349"
  },
  {
    "url": "assets/js/221.d0d4767b.js",
    "revision": "61615711902d1adc7619384487d5c4a7"
  },
  {
    "url": "assets/js/222.c40215ab.js",
    "revision": "336c01ad9ef20b657692f0d99ce2c491"
  },
  {
    "url": "assets/js/223.55673671.js",
    "revision": "62aa8bd91c9a5f7f5e961a5c3b03146a"
  },
  {
    "url": "assets/js/224.75156b96.js",
    "revision": "9762780859335fae555b2fa7c5c2cf17"
  },
  {
    "url": "assets/js/225.fb783de0.js",
    "revision": "0ff7d9c71837fdaa65a11035ff2f1127"
  },
  {
    "url": "assets/js/226.0e4264e5.js",
    "revision": "b9a766b4a7412e3d3c1fcfd54da90304"
  },
  {
    "url": "assets/js/227.f9c42523.js",
    "revision": "e0d908bee4924477068fef21703b558e"
  },
  {
    "url": "assets/js/228.825e33cb.js",
    "revision": "d852b95ba9a11a42c123d7773498c328"
  },
  {
    "url": "assets/js/229.f5111376.js",
    "revision": "92f984b2020ac126e98a4adf7673fd72"
  },
  {
    "url": "assets/js/23.47da3870.js",
    "revision": "2f8bef58fea637c0167ae97da98fd4b5"
  },
  {
    "url": "assets/js/230.6f24bffc.js",
    "revision": "32945dbdade3e321a0de29b016470e06"
  },
  {
    "url": "assets/js/231.75ecb8c3.js",
    "revision": "5aa3d51be32afee6d530c956cdd0d764"
  },
  {
    "url": "assets/js/232.c9391892.js",
    "revision": "daaca7e321b8bcbbf641d1be7def950f"
  },
  {
    "url": "assets/js/233.f6f1b44b.js",
    "revision": "94b21cc8925e0d31c345a59a561060d8"
  },
  {
    "url": "assets/js/234.c3632c6a.js",
    "revision": "cfc8a3570c636007cf5e9a8ad06d4b08"
  },
  {
    "url": "assets/js/235.fbb097e7.js",
    "revision": "7819f1bfb5a064dc1567363e36760cb4"
  },
  {
    "url": "assets/js/236.5c5969be.js",
    "revision": "af2f753e081ef3e64bf180f19f99392f"
  },
  {
    "url": "assets/js/237.eaa87ec1.js",
    "revision": "5bfa61a6cca40025b6b6b6dd11f3c1d4"
  },
  {
    "url": "assets/js/238.435110c8.js",
    "revision": "764e798cd476fe68710b7071c85c0a9b"
  },
  {
    "url": "assets/js/239.dc9bea10.js",
    "revision": "4b94a1c2478b60ec85f2371e456d53f7"
  },
  {
    "url": "assets/js/24.9de64fa4.js",
    "revision": "389e316ce74ce3d631b696b7386c8b6c"
  },
  {
    "url": "assets/js/240.a056aa21.js",
    "revision": "b5e93323b4b44e4eb59efbf590272eb5"
  },
  {
    "url": "assets/js/241.1e43b5f6.js",
    "revision": "c320d823ab06e1d9aa590c3fa8c9e945"
  },
  {
    "url": "assets/js/242.63288f67.js",
    "revision": "a28a7c09f4ca80e7925cffb6eeeb3304"
  },
  {
    "url": "assets/js/243.8b6fd19f.js",
    "revision": "b1908a77aede28b5f95c21ce03f9c263"
  },
  {
    "url": "assets/js/244.902b34cf.js",
    "revision": "a5c7b96166ac9abf630034d7d776d4fc"
  },
  {
    "url": "assets/js/245.6d166857.js",
    "revision": "26c4e1322a47463f63b9ddaee845d7ec"
  },
  {
    "url": "assets/js/246.2d17f058.js",
    "revision": "1f7114f9c02bf7ad476f9a7ec89d8719"
  },
  {
    "url": "assets/js/247.6dacf1fc.js",
    "revision": "263b9da140e60a55f81b6fa7bac4c80b"
  },
  {
    "url": "assets/js/248.8bde642b.js",
    "revision": "958b83d6262aac1a7c6d57e38a75a836"
  },
  {
    "url": "assets/js/249.dcc535aa.js",
    "revision": "4ffe0cb567e7bcc431c04ceaa5677655"
  },
  {
    "url": "assets/js/25.ad5b5aa2.js",
    "revision": "aec66322271acd641ae032ed9d12a8e4"
  },
  {
    "url": "assets/js/250.b005075c.js",
    "revision": "9cd6489bab67ee0b538bec791b84f124"
  },
  {
    "url": "assets/js/251.c9b09544.js",
    "revision": "bcb33e60f531230dad0eee6430457d87"
  },
  {
    "url": "assets/js/252.8f3e63f8.js",
    "revision": "1e67efcaf7cd1dc28a1c4f43ac3b1a49"
  },
  {
    "url": "assets/js/253.9cbbf760.js",
    "revision": "4540eab8cb7db722e468c8f317e27b26"
  },
  {
    "url": "assets/js/254.5e2e8eda.js",
    "revision": "fe76d0ad2a7a288d394dbb9a2eb74787"
  },
  {
    "url": "assets/js/255.a1e9469f.js",
    "revision": "430f6163d7a17e6430d2d5c8d73f0d98"
  },
  {
    "url": "assets/js/256.a98bd1fb.js",
    "revision": "98fb97a984da0b11ea79761774d9fc65"
  },
  {
    "url": "assets/js/257.d186a788.js",
    "revision": "244ddf285c5400cc43cf15da50184eaf"
  },
  {
    "url": "assets/js/258.7046eabc.js",
    "revision": "67a396fb7af567929ab8fbcb6038df2e"
  },
  {
    "url": "assets/js/259.9bc43235.js",
    "revision": "871c4aafff42f11876dffe0ae20029ab"
  },
  {
    "url": "assets/js/26.17b2ae62.js",
    "revision": "2fb2d20817969366f0d7b9c345dc816d"
  },
  {
    "url": "assets/js/260.c4e090ee.js",
    "revision": "c52ee18e0c8dc652c6ba569a3188fc63"
  },
  {
    "url": "assets/js/261.03a1d4e6.js",
    "revision": "a7331aa4a0ff598d745f7c1db459bf07"
  },
  {
    "url": "assets/js/262.986730c9.js",
    "revision": "a382b5bdaa1cc1cb6323cef319608dec"
  },
  {
    "url": "assets/js/263.cf8aeaf7.js",
    "revision": "a2bcc02d29e490cad14a3f079b74b878"
  },
  {
    "url": "assets/js/264.28932490.js",
    "revision": "f1db3247e21570fa55a49994b1f3d811"
  },
  {
    "url": "assets/js/265.00cebd4a.js",
    "revision": "cc685bbdb1173f6e24abf198f529d140"
  },
  {
    "url": "assets/js/266.982a3eb4.js",
    "revision": "eb9f42f92395c67f03d662785adb80e3"
  },
  {
    "url": "assets/js/267.b775ad44.js",
    "revision": "0793f50d91eb2d7c82732e94a3f61674"
  },
  {
    "url": "assets/js/268.49cb8a81.js",
    "revision": "9fc450afde6f286b0c83828e1ec939ee"
  },
  {
    "url": "assets/js/269.071798bb.js",
    "revision": "a47426e18f1cddf2cc386af8050d42e7"
  },
  {
    "url": "assets/js/27.802fa203.js",
    "revision": "a1cd9b7792731e138e4b698aaec893fb"
  },
  {
    "url": "assets/js/270.6f79c057.js",
    "revision": "2cdf7fb2f9c861ae949f494e9ac29997"
  },
  {
    "url": "assets/js/271.a1416b22.js",
    "revision": "5a4f9aff039c7c160c6eb2510f4fa822"
  },
  {
    "url": "assets/js/272.70c18fe3.js",
    "revision": "38413cb86fb2d821ba8619ec0532ca88"
  },
  {
    "url": "assets/js/273.04335efa.js",
    "revision": "d222d0a876ed16b3a14d4d9440b27fb8"
  },
  {
    "url": "assets/js/28.2a58acbe.js",
    "revision": "d3db5251afdbc037328eafb1a8d52ac2"
  },
  {
    "url": "assets/js/29.7028ea52.js",
    "revision": "05713e39cd182b993136c5e3ec025235"
  },
  {
    "url": "assets/js/3.bb9c69c9.js",
    "revision": "b8a849bfcbb3f9d9c62bc4b8a6052695"
  },
  {
    "url": "assets/js/30.795bb3af.js",
    "revision": "ab10701329ac9f1e66b4eb696e0bb2fe"
  },
  {
    "url": "assets/js/31.e4fe9620.js",
    "revision": "857c32ecc71d20535ca038033bfe45a1"
  },
  {
    "url": "assets/js/32.505789de.js",
    "revision": "408049674eea8a104c49819b2653fec1"
  },
  {
    "url": "assets/js/33.7e3b5084.js",
    "revision": "d9659e3ad67a0a492fa64c523c14788f"
  },
  {
    "url": "assets/js/34.d06098c1.js",
    "revision": "eda4ffb3e8f7a6a094caa15d98516e6c"
  },
  {
    "url": "assets/js/35.23fdddc3.js",
    "revision": "215efdf7e8c78b5c1360749439717957"
  },
  {
    "url": "assets/js/36.51e8fee6.js",
    "revision": "a8e18f8dfe5c7ffeb76abc3fab87cef1"
  },
  {
    "url": "assets/js/37.472fda25.js",
    "revision": "ad1ca27567ae1a2893c601a911f7639d"
  },
  {
    "url": "assets/js/38.c171c831.js",
    "revision": "d7d6c6b8ac1c5b5edeeb61f7b3513765"
  },
  {
    "url": "assets/js/39.9bee4fc0.js",
    "revision": "951c8a24b24f6e607a6e2de009efff4d"
  },
  {
    "url": "assets/js/40.a088e6f2.js",
    "revision": "7cfa35002cfbf7e9443139834f14da44"
  },
  {
    "url": "assets/js/41.03e90989.js",
    "revision": "cff9ddc2ae614a7a735d0fb5349f05e5"
  },
  {
    "url": "assets/js/42.76b5d93f.js",
    "revision": "728cd8d60e9a274fadca316b3e1da93a"
  },
  {
    "url": "assets/js/43.e06ac441.js",
    "revision": "914da2fe9def9711fbab49396c8cf99b"
  },
  {
    "url": "assets/js/44.f6bfabce.js",
    "revision": "a78cadc910f98fd6ddf951ec390c4c52"
  },
  {
    "url": "assets/js/45.42637f95.js",
    "revision": "d6ca154dff6716eb0444ae65c9ccef91"
  },
  {
    "url": "assets/js/46.d90e1e76.js",
    "revision": "768d72429b01794edf2a17fe095df27b"
  },
  {
    "url": "assets/js/47.03760085.js",
    "revision": "62a58f0beb377386fbff88715a85b668"
  },
  {
    "url": "assets/js/48.384b7bca.js",
    "revision": "44c8e7706f2b88bacb8bad3e8228fedf"
  },
  {
    "url": "assets/js/49.ac90fd88.js",
    "revision": "90ad7af8902520ece6001aae65b8a81d"
  },
  {
    "url": "assets/js/5.e9727b56.js",
    "revision": "be54821f8e62e97a6b7f948a39373922"
  },
  {
    "url": "assets/js/50.7a2ebe21.js",
    "revision": "59ec553fdd3fd0eb279e701dedefad74"
  },
  {
    "url": "assets/js/51.28c05b23.js",
    "revision": "3891d5307563cd65081268dd6557417d"
  },
  {
    "url": "assets/js/52.5d2b9368.js",
    "revision": "21b5992b810f1eada608fccafe41164f"
  },
  {
    "url": "assets/js/53.652f1d36.js",
    "revision": "94eab446240eed2dc1067ed7bd0ebd2d"
  },
  {
    "url": "assets/js/54.eba9f994.js",
    "revision": "98ce9e76669f9a3887d2e82ed9710459"
  },
  {
    "url": "assets/js/55.189c36e9.js",
    "revision": "884d9507ddf787034f3042422a83f84d"
  },
  {
    "url": "assets/js/56.86178ba1.js",
    "revision": "f7485e0619a34fedcfbd4d888cff1a4c"
  },
  {
    "url": "assets/js/57.eee21ece.js",
    "revision": "97802537a484d3c71f1024306bf0070a"
  },
  {
    "url": "assets/js/58.391a1be2.js",
    "revision": "2d2c931f1f6acba694fc6191c1a0b7d3"
  },
  {
    "url": "assets/js/59.e7e7dfa6.js",
    "revision": "4a7c7e538fbfd867a6d67d9fec62704d"
  },
  {
    "url": "assets/js/6.cd44a7be.js",
    "revision": "fac9f5a3073ba7b5016844ad0e8369c0"
  },
  {
    "url": "assets/js/60.9921d579.js",
    "revision": "1aac2ce59b94e4f4cce30a523966f52f"
  },
  {
    "url": "assets/js/61.25e577bd.js",
    "revision": "2af415d50abfc65bf0744076666602e0"
  },
  {
    "url": "assets/js/62.4c5978b5.js",
    "revision": "6bd884d76120f6bb8977c4f552811f32"
  },
  {
    "url": "assets/js/63.2e8d74ce.js",
    "revision": "9a2e50f98dd19c72455a30c153faf96e"
  },
  {
    "url": "assets/js/64.a15ce9db.js",
    "revision": "5687e6f042aaf97fe144264ed108f320"
  },
  {
    "url": "assets/js/65.7bfe1fde.js",
    "revision": "ac15add051b9a9412a0eac6c7fc50db4"
  },
  {
    "url": "assets/js/66.99c12c8a.js",
    "revision": "f31365f296ccb9568a92a6183b65f8f7"
  },
  {
    "url": "assets/js/67.6e39fa83.js",
    "revision": "fb6fcb62991d32062d23fc23ccf90ea1"
  },
  {
    "url": "assets/js/68.40aca550.js",
    "revision": "018fe8bf0cf44138638a914a391252e3"
  },
  {
    "url": "assets/js/69.e0c30748.js",
    "revision": "b83817cfdf397e692c5227023b912f75"
  },
  {
    "url": "assets/js/7.c7defcd7.js",
    "revision": "fff341f25a6ec9045a6973c839ed0d36"
  },
  {
    "url": "assets/js/70.16d2bbce.js",
    "revision": "4b52521912b06b725325a192bde8eddf"
  },
  {
    "url": "assets/js/71.b49f4f54.js",
    "revision": "1b7c375014c5d1d5109664ab22d9ce30"
  },
  {
    "url": "assets/js/72.322baa3e.js",
    "revision": "4abe87e8c51f75583d215344e9a804be"
  },
  {
    "url": "assets/js/73.60b9b0c7.js",
    "revision": "d02ca4b50eb660c1c9fb1c51e7ebe0c6"
  },
  {
    "url": "assets/js/74.4f8bdeb8.js",
    "revision": "f4bd398fbb9b4c1e0a2200c84475d402"
  },
  {
    "url": "assets/js/75.b1acf075.js",
    "revision": "7ae2fe86486876c85912cc9ee2be2f57"
  },
  {
    "url": "assets/js/76.056b8199.js",
    "revision": "13f758f44c6f6e4aa8dfa2badaa1edd0"
  },
  {
    "url": "assets/js/77.28fd614a.js",
    "revision": "06cd4d5382f79d232b7e01afea072579"
  },
  {
    "url": "assets/js/78.0fc779e4.js",
    "revision": "5af312a07806b9c26f99c82df5dd7b3d"
  },
  {
    "url": "assets/js/79.c9f6c376.js",
    "revision": "f10ef4551d78dd1c46ae260d1be2deef"
  },
  {
    "url": "assets/js/8.88c02dcf.js",
    "revision": "d71b954c268937fae1368621146d1e51"
  },
  {
    "url": "assets/js/80.f2919dbc.js",
    "revision": "e058bf91ce28c03beeb46630f8cb40d9"
  },
  {
    "url": "assets/js/81.27fd6610.js",
    "revision": "fa043e027703d03b7a901fd2c3844d9e"
  },
  {
    "url": "assets/js/82.60c9c10f.js",
    "revision": "5885c4847545b6347239b329f2bb67c6"
  },
  {
    "url": "assets/js/83.8561a33e.js",
    "revision": "4a72dcf16206bbf4345d781c090f8999"
  },
  {
    "url": "assets/js/84.b89b7b47.js",
    "revision": "a4a158ec44db0970181d3b47fe3e73a5"
  },
  {
    "url": "assets/js/85.cb087add.js",
    "revision": "9b2377a1f94d42487538873261fb8987"
  },
  {
    "url": "assets/js/86.d3d2546f.js",
    "revision": "b1013f9a23956d76d5c7cba071a00364"
  },
  {
    "url": "assets/js/87.b67cd3f7.js",
    "revision": "1b2e890c0ddb53405265b2bc159fb813"
  },
  {
    "url": "assets/js/88.77d192fb.js",
    "revision": "eef4ccdb16cd50b1d55899fe946205a3"
  },
  {
    "url": "assets/js/89.65292a8b.js",
    "revision": "36bb8ce5832dad3e722b3d31cfffb338"
  },
  {
    "url": "assets/js/9.7348f1c3.js",
    "revision": "b6f7fc004c02c3ff4449f10afd9817d7"
  },
  {
    "url": "assets/js/90.354f7095.js",
    "revision": "6fcfa94c802b5a2bab7a7ae2de10e093"
  },
  {
    "url": "assets/js/91.b3133f1d.js",
    "revision": "2ce6e7e7e117be5919e12a10f0358dfa"
  },
  {
    "url": "assets/js/92.80e8be52.js",
    "revision": "29ebee74b747f819d58830a0bad6f98f"
  },
  {
    "url": "assets/js/93.7696b26e.js",
    "revision": "507de8a74252eae8352f8ee9c0a77929"
  },
  {
    "url": "assets/js/94.4f3b04f8.js",
    "revision": "fdc50e68a6c044b77a117064b5927279"
  },
  {
    "url": "assets/js/95.88d70c21.js",
    "revision": "30926600383c150e7c526c03895e3fcb"
  },
  {
    "url": "assets/js/96.847bb6c8.js",
    "revision": "dc033d1c745587a4b7224852f30a3ac2"
  },
  {
    "url": "assets/js/97.aca38f66.js",
    "revision": "9451dace81d0061abec9c0e56357b2ab"
  },
  {
    "url": "assets/js/98.c64d63b3.js",
    "revision": "948301c3ca75379ee7254f9767111807"
  },
  {
    "url": "assets/js/99.ee6f24ca.js",
    "revision": "b72c2c3f4f72ce6907f9a901b24187ca"
  },
  {
    "url": "assets/js/app.9a64da9f.js",
    "revision": "7f8566d4e9addf3804da8beb09dac4c6"
  },
  {
    "url": "categories/index.html",
    "revision": "7a3ca58c96291975f15c0a97d3f954b7"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "7fd5a163df133024f690cf4f890177da"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "095f83379d572611fb0c23392113396f"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "356ee43409dc35a6adb9c44587e8e0e6"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "59a8a5538cab4392ddc0d61e076cefb9"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "23e1e3f45f884605f1eb489d2c8b45f9"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "3b8a93fd7e0a6a3b7496a8f9322cdab4"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "be65a930ad3f76cd4b7fee1738ebe4c8"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "9a846a4bf5f7d2867c2d750fd7e48c87"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "e8cd0df17bf3ea0fc406dc031ff8aa6c"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "c8d7c846da0c31cd1c413b8b64de011a"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "095f83379d572611fb0c23392113396f"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "9b023f8e775ab9b568567d69cbb742af"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "9e11ab7d5502c1de4b816b4b2c5b3263"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "fcc6a0b4420cd0c0da9113f97dab0da9"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "451c43fc1bd257634c5d77082daff0cb"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "2413187a5cb9cf29ca6f9f8a9dea7024"
  },
  {
    "url": "cs/database/index.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "bc848567677b5a71a84a165af8d1fd0d"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "a3580fde971d93da8de61689f06ee2e7"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "3a8f79ffdddc5c6bab9d457b0494a7fb"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "1bf8891013f5706c8afe6dad04711ae5"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "14569f2031a9a8b3dba68475a42bb0ea"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "f15b1491e4617d074bc892676f28f3df"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "8516ceb44adb2600c48b3aa05429f3ac"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "b0be1ee12280549b516833d3008db8cd"
  },
  {
    "url": "cs/design/command.html",
    "revision": "dd9e0f2421d39287c95a768e1287a65c"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "ba7b78177266d0da4a8b0a002d0de3d1"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "30e7ad14f83b76eb3f72d4601da2453f"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "8d30629d7924b1ce7df0244d2dd0c0a3"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "cd5cfeba7c1f763f5e46a1d5ab6dc100"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "04004cfee796cc92c3c248b817a08db8"
  },
  {
    "url": "cs/design/index.html",
    "revision": "49c61f08d92decd07af0ccba3dabb2d8"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "14f88357b1a3bd6f33e9910ff30b5582"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "9c4a4a41ab2800a88ab29ccadda5233c"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "6d8eb9ce6291f9c75e8c14977df3382d"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "7ac44f42d1e8e832e20a23fb68600d4c"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "89de932599d5d8a55b5c6f6a629d5d7b"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "482a0dab985b18aef1ae852139727f8e"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "4451495d62b40f848080bf9bba784a78"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "81534f3c0002756e66d75c834a5f9d89"
  },
  {
    "url": "cs/design/state.html",
    "revision": "7e58b8eb96ed55abf8eb7789caf22375"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "3161a1b6f7f5d2999689ddaf074c58a0"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "1a50ae3327a1760171473aaaf2c9f618"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "18bc6d4009278b93a4e37fccfb8bc58a"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "f52f4fce0fde360b1f8a062a973b4c97"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "0350bb045ea6ab3724c1f9c6b44bc70f"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "2fbb3e36833c5bbde47c5a9599efad02"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "888f2dfc8f399d3ce90e67eff6bab632"
  },
  {
    "url": "cs/framework/vue3-reactivity.html",
    "revision": "21d984aab4701ff2cd1f6f43af62c20d"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "65dbde65b8c4c7f3c1950d28d2eb53c4"
  },
  {
    "url": "cs/index.html",
    "revision": "f82249058bcf4e30e6400d5240ea3696"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/java/container.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/java/index.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "e9c7c5c7c45434964ca6df7eb3685169"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "c77843ac14da549395c9504dbbbecad9"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "99ad683398a9ea5a8244600f6ac79182"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "c957288ff731681f89cdee3a37e548ef"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "ee902e2d95bac7b631e1c66c891e52ab"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "e6a3564bac8c8a3e4ef3dd732db46d61"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "cb22d8c8cfb372dc3fb1b8eeb31a8565"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "d80f76421723248368dc026afe779b5d"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "34b370fa3f8ad5b21a68826a0f4aec0e"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "23da4c447897073e1525eb51b5242992"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "1481546f54b65a06a3db3d3b434f9b88"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "985070e2a5c18df50783e6ce26f2ecfa"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "2946c53607a3def1b0c570b522069cd0"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "a8a6e640b784cccabbd437e5456d6abb"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "d01736cc02aec1541b50398a297e6c67"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "799e8b20af3469bd69980ea707357273"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "3e9182575a5f8d10c73fad82c764c7b8"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "8c9a4a63127901fba7cccf762ab74d20"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "031d508df92aca8d76c417424b62fe68"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "ac5cf973dfc91d0da0564bfff13912e3"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "fb25fb46f1ec4e410ef05ed62a50f00f"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "ae7f2616200f56ad771fdb74a20358df"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "ac67d77b9d6b59027d6520feb25db4ac"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "0ccff1fcb1a108cf6c3d29790a059746"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "0eef9d33c25f05d497ae41a4433dcd93"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "eb76c255a05da1ada687360ad2ac10be"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "bfcec07eeb4380c89239b6dbe5d7245d"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "9ae30d359885420247c6f37fb468ae01"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "a014c0122a0a5aee162c38b7755f46a3"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "cd747a66ca748a7bc0f1300daabb2891"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "81b605253e5448ca19a330bede750682"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "cb72b367ec2778a2dcc4992fe7f441e8"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "85ba25fab7531fa3a652ae1ffc90beb8"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "64e02a151350ba55d44aea9d2033d185"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "95c9d50ccb5cef8ced54d98df704c462"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "af5640cfb9711a10115b5635e0a1d870"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "b172f07c25a8b11c096d7dd32f493251"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "1a05ef9b532066a469abc1ad08be86fc"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "c89be9ba94811d67f9eb7362b930abc9"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "27ec5c904571d130372f293b73a7cecf"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "d6de674c1d5de9008e987f26a6f50d91"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "2d12312552a0adb12b4a49a1652292a3"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "0d7d527d2ba0b992a95aecbeaa375b9e"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "14fb63d5b0682577658f9a8262c00dc0"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "709aac9aa10152d22404a2b1029d6da7"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "0b2b22866c49282fa16928f3f0c1cc09"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "3426318f4fb44aa95bac368c57fefca4"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "ad331a93418bb9fccdfecc4dd0149f40"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "9e7e989b4d50c27347f8569ae414a008"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "5141afe2bf7287577d39553a8736c6aa"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "1ae602b30360d0282a6b7e579646be6c"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "27668ce53d984717849a7cc0dd57ba55"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "b7232e7f6f958899cc874681c6c64563"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "978f32e3b720ca644636fcb1380785fb"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "5515ae60690f62f1c0a7ae3a488c21d5"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "57ca6bbaf3a52360312d8d5ab5028f0f"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "5d2a39b321232dcd7aeaa0973baa232b"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "12fcac0b3f39a4bd38b5d38cf0a36fbf"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "86b0cdb0f921e6f9ed553ff0601e87c7"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "bd80217827c6cf05e56b28150505a559"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "62b0890c1079c8c2455e64b021e750ca"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "996b6d56f3125d99057d7f0542a45fca"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "ab38b6bec4596689383ab46dc3809e0a"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "8212ce4a2589c616ce008fe0e96f3b39"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "dfe48b269afced20ddf9d90b28d655bf"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "f805d77ff0983dd83e72a39dcb895bbf"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "c737e7e3d5f9cc61d149889be709f12d"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "66cf12dc2642c4c9908e5bb93b014fdf"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "4d3bdf358f227916aedc7caa39591f9e"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "64655a2d69afb2acd248a06e1543e597"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "ddc0577921ca20a0cf3772159b4dc4e3"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "bb025b74be7db552256e704d1c42d3a7"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "f566c4561fe8f811f83049d575419017"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "9afd5e35bbfe32c93de8edbaac89b57c"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "bf513b699b1899dbca69c4715b6659ff"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "d625ef68baae79fc1249dc64941176d5"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "01a4699579c8c05c8f5322b6e63d93ff"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "fe3c4f2f300b4cc21470d30d21a5a3c9"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "76a016a7f613221d5b95670a9580c2d7"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "90cd17f14d56a13f533782be26d1c802"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "f7f979bcbf06f8759df210e1c3cce694"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "1694b2d22a12837f64bb1e814bf3b477"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "d00772a233118f9f41c16d78a69622e9"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "c85369434a9767f608cf3d007cd23fbb"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "14fb63d5b0682577658f9a8262c00dc0"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "9c5d5dc992a6752e049d78d8e64f1832"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "3b5f43ae7943e5efbd05d1fcd1e96ab3"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "095f83379d572611fb0c23392113396f"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "5d88acdbbf3631378bb9bb7b3e5765df"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "4b8eb866fba078b87d6507459c22ee58"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "ad2d780a9625bd41a3f8d632faf80b49"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "962c2292552d142d92defd2b839fe2ca"
  },
  {
    "url": "cs/network/application.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "3e25439268ba0fd827e8752d61d24676"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/network/index.html",
    "revision": "095f83379d572611fb0c23392113396f"
  },
  {
    "url": "cs/network/link.html",
    "revision": "f56823fa87d93ac0f95b4a00c47ed32f"
  },
  {
    "url": "cs/network/network.html",
    "revision": "54793ebaa0983d3304c4db195c6ab809"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "1c656f0e6cdbc43a043eec18a7316e3f"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "8fac28c04b7316c5ed6d5ea2c83312c2"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "1c54c4af62490f78c96d92e892e15c4c"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "44a39016a1da4a079ce55f9bbe0355c9"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "a0a38dfcd7435f624a12265c754b1dcb"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "095f83379d572611fb0c23392113396f"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "52daec18efe083a179aaa69fe0deb109"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "2cd5db8cd245353ce573846604857fb0"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "cda764a1f3107a7ee848d2892eb281ab"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "dff7b966a9e4e32fe2318bbd7d554d83"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "e9c7c5c7c45434964ca6df7eb3685169"
  },
  {
    "url": "cs/web/index.html",
    "revision": "0ece47a50237744d6130883ab0cde98d"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "a25d22b029a3e8d52081cac27f95facb"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "282187c612ae7b8bae9351dc8ac95ec8"
  },
  {
    "url": "cs/web/web.html",
    "revision": "fbef63c6fa8139d3da9116e15ad45926"
  },
  {
    "url": "daily-life/phone-lost.html",
    "revision": "1980a8d2f342f3e79d2b97f46740d7b0"
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
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "2eb7f495710b9718337c1677db1153c9"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "742de619a4db8c661b521a485fb0a43f"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "09c0b2f9dcbf8c4d79f65f523353824f"
  },
  {
    "url": "language/english/differ.html",
    "revision": "8dc9cd6266e038bedf7882f8dc54e8d3"
  },
  {
    "url": "language/english/index.html",
    "revision": "c77843ac14da549395c9504dbbbecad9"
  },
  {
    "url": "language/english/modal.html",
    "revision": "63765313381a22b4da5bcbd960f76026"
  },
  {
    "url": "language/english/mood.html",
    "revision": "c9736568721c6a33606470dc48ab3c7a"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "4a1131cb7f238c66a9a9d0a5f96afbe8"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "6e823e711b2616a19f177485ca0a5421"
  },
  {
    "url": "language/english/phonetic.html",
    "revision": "bb155fe1af8d0c0ac7201e9ba5afb51d"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "dd85362494759a7f218489218888b07e"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "2dfc9583aa8dd8ac74862f768badbb50"
  },
  {
    "url": "language/english/tense.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "language/english/verb.html",
    "revision": "01b1e094f3282faca682c1eae0d52dcf"
  },
  {
    "url": "language/english/word5000.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "language/index.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "tag/index.html",
    "revision": "7457cd8e65ace13bf0ca499850d9832a"
  },
  {
    "url": "timeline/index.html",
    "revision": "0aef599b9220e3c4faf51bed64ba7320"
  },
  {
    "url": "tools/chatgpt.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "tools/gpost.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "tools/hash.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "tools/index.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
  },
  {
    "url": "tools/test1234567890.html",
    "revision": "b2e0b16e935e5356e60930536ce2b4ee"
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
