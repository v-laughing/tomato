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
    "revision": "8f2c1ce2d8dbd587bae5033aa75dfa20"
  },
  {
    "url": "assets/css/0.styles.04cf9d46.css",
    "revision": "5d05f81e444007aaaccb9e143dc433a9"
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
    "url": "assets/img/vue3-obj-effect.55d0254e.jpeg",
    "revision": "55d0254e6067b00fb2230a984a28a6a9"
  },
  {
    "url": "assets/js/1.50310eaf.js",
    "revision": "e73d29337490fc732df07a86fec59eab"
  },
  {
    "url": "assets/js/10.20ae9692.js",
    "revision": "63f57c36db68bec4fae8b648a3dbfff8"
  },
  {
    "url": "assets/js/100.299fcdb1.js",
    "revision": "f5bb08b10dc3c06dddc76adab284c8d4"
  },
  {
    "url": "assets/js/101.48bae51d.js",
    "revision": "aa3d171e1857bebf685b47b9105fc18e"
  },
  {
    "url": "assets/js/102.e5cb4348.js",
    "revision": "290dd7258699530128f4f85156987e70"
  },
  {
    "url": "assets/js/103.4b489b90.js",
    "revision": "93607f6f5cb22292de16cc75ab06dee2"
  },
  {
    "url": "assets/js/104.2e20f680.js",
    "revision": "802fe5747f34373f5a6f0e396f1bd219"
  },
  {
    "url": "assets/js/105.8a25889e.js",
    "revision": "e2da033dcedad2964a23fa0ba9ea865b"
  },
  {
    "url": "assets/js/106.ba991121.js",
    "revision": "b00e26538531e2facca630c80bc2c5da"
  },
  {
    "url": "assets/js/107.2d24ccc5.js",
    "revision": "9cf0d54ae3b7099858b45308f4f18c57"
  },
  {
    "url": "assets/js/108.cd9890df.js",
    "revision": "d31046b879b72c114730f8702a8412c9"
  },
  {
    "url": "assets/js/109.d4451d62.js",
    "revision": "dd682894e0d4aa7ecb5249ecc4ae1673"
  },
  {
    "url": "assets/js/11.4a13a78b.js",
    "revision": "a76738c6fa5ee2254358b73fcf10cacf"
  },
  {
    "url": "assets/js/110.87fbecca.js",
    "revision": "e6e9a89b521b25dce68cd2a7a3a16701"
  },
  {
    "url": "assets/js/111.c95da09c.js",
    "revision": "c5820e071065ae7837f3a59581d8b00e"
  },
  {
    "url": "assets/js/112.6ffe9ab2.js",
    "revision": "8983daad9ba4ce181a8aecaf9fc9e01d"
  },
  {
    "url": "assets/js/113.e8b86fa3.js",
    "revision": "1c5dfeb4a2ad241a3ed54cff8417fef6"
  },
  {
    "url": "assets/js/114.40a85117.js",
    "revision": "76b40ac6976553f75ccebdd35f53dc4f"
  },
  {
    "url": "assets/js/115.7e91f0be.js",
    "revision": "86d015c01683d6ebd75e163aaba3c755"
  },
  {
    "url": "assets/js/116.9941aa75.js",
    "revision": "e15d4ea6dcfec3f33ba561e02caef2eb"
  },
  {
    "url": "assets/js/117.147b098b.js",
    "revision": "e00329684547addf47a7b2c736ab7bba"
  },
  {
    "url": "assets/js/118.883a09ec.js",
    "revision": "913ee19febba72d9f2b166ac132b2ebd"
  },
  {
    "url": "assets/js/119.68e42f6f.js",
    "revision": "358ee80997b5979116804a7244457750"
  },
  {
    "url": "assets/js/12.2b3bf8be.js",
    "revision": "862d0b8251059706c0b0e0f14a97746e"
  },
  {
    "url": "assets/js/120.178b39dd.js",
    "revision": "5fa9bf2e6212f459986ae2f3575ea833"
  },
  {
    "url": "assets/js/121.3db20133.js",
    "revision": "30fb670b16808a731bcf24ff61e0fabc"
  },
  {
    "url": "assets/js/122.144373c5.js",
    "revision": "92b2b0e174c544c1644113e208d22bd7"
  },
  {
    "url": "assets/js/123.8657e873.js",
    "revision": "3e57d8a3c7612e19b6293a26a5b0a987"
  },
  {
    "url": "assets/js/124.53916753.js",
    "revision": "fa1e97215e11f759633ad1419c7052fd"
  },
  {
    "url": "assets/js/125.43ccdbeb.js",
    "revision": "f6023deb39ab69d765dde2e1bf948cdd"
  },
  {
    "url": "assets/js/126.6acb0f0f.js",
    "revision": "76db3190514de97448857001986acec8"
  },
  {
    "url": "assets/js/127.840ac3bf.js",
    "revision": "3aad40d6b5f504fe44e5d347bcac266e"
  },
  {
    "url": "assets/js/128.65b60f22.js",
    "revision": "4e85c38c9c989d5cdb6f0f680d136e28"
  },
  {
    "url": "assets/js/129.8236b965.js",
    "revision": "550eb3018550144cc376fe03782d573f"
  },
  {
    "url": "assets/js/13.2ded3862.js",
    "revision": "e278810b044be6894fc46f073159249a"
  },
  {
    "url": "assets/js/130.6fb8fb21.js",
    "revision": "12c8aab86df9a89e62d8a0fe8d48dd95"
  },
  {
    "url": "assets/js/131.3b0bf75a.js",
    "revision": "3a3e9ad00f4d465a12945014026a715a"
  },
  {
    "url": "assets/js/132.b226e919.js",
    "revision": "115b25036e74fb1aafab0b2da0363a68"
  },
  {
    "url": "assets/js/133.5cf86ec7.js",
    "revision": "adf8251c35a6b60facd8eae3512e4db9"
  },
  {
    "url": "assets/js/134.7d552845.js",
    "revision": "08d0d06d42f196601c771f6042f898bc"
  },
  {
    "url": "assets/js/135.533bf97d.js",
    "revision": "5947fb8677a19de5b61412e963ba2a2b"
  },
  {
    "url": "assets/js/136.7147ff25.js",
    "revision": "bd0d3bf4882a6c6ffb3c8fcb70aea195"
  },
  {
    "url": "assets/js/137.1219d545.js",
    "revision": "1b936ae6ff0f8bf97ede6ee5b6c441f9"
  },
  {
    "url": "assets/js/138.2e05eca0.js",
    "revision": "8bb82e4bb55f4ced421cf3fca658ea14"
  },
  {
    "url": "assets/js/139.db4cb912.js",
    "revision": "803cb58d99dbcc9d144d749f9c690374"
  },
  {
    "url": "assets/js/14.3361e730.js",
    "revision": "fc99f68e35247c60db7a743c30c234b1"
  },
  {
    "url": "assets/js/140.209e435c.js",
    "revision": "9e485a8606aa978a77c98770e8b684e9"
  },
  {
    "url": "assets/js/141.a07cfd17.js",
    "revision": "90f9eaf83ed3005ef87d10ff1cac8b51"
  },
  {
    "url": "assets/js/142.45d21fe0.js",
    "revision": "62ef155bc05d87fccd321b4b543f2be7"
  },
  {
    "url": "assets/js/143.84b627bc.js",
    "revision": "9c55439fa44333799f89f7145dde79a8"
  },
  {
    "url": "assets/js/144.b0e9efae.js",
    "revision": "1d4958bc76a78e9746ca2d5551b339e7"
  },
  {
    "url": "assets/js/145.91525a3e.js",
    "revision": "20686af39e025811d952de435addd63c"
  },
  {
    "url": "assets/js/146.c443d1f5.js",
    "revision": "fbd916bb6cb8413a6d6216a1b8d3a882"
  },
  {
    "url": "assets/js/147.f35a6323.js",
    "revision": "16bfa9ac600219d21e8f4903339296a1"
  },
  {
    "url": "assets/js/148.7bec3a8f.js",
    "revision": "e9fde7a5e73c20df08ba93ceb00b2b0a"
  },
  {
    "url": "assets/js/149.7370977f.js",
    "revision": "0f2f95b149eb0ea32e8be16a78320b28"
  },
  {
    "url": "assets/js/15.f7c81308.js",
    "revision": "8b1719d06738ce501f68794398a5f9e0"
  },
  {
    "url": "assets/js/150.57e66670.js",
    "revision": "03f978eee1517e2ea36879aa20e8ec8c"
  },
  {
    "url": "assets/js/151.6cc556fa.js",
    "revision": "6cb871f6c7113140761b79a2a9aa4dfb"
  },
  {
    "url": "assets/js/152.10bacd16.js",
    "revision": "6f618c799215ecd720ba043b15e830e6"
  },
  {
    "url": "assets/js/153.48266b6c.js",
    "revision": "0e9299787faea0c942d177f185acd2df"
  },
  {
    "url": "assets/js/154.06d7ba9e.js",
    "revision": "62450936b420c22ab2739bbd027d8447"
  },
  {
    "url": "assets/js/155.fa30e886.js",
    "revision": "0595bc65d12c776f3d6716e963b19236"
  },
  {
    "url": "assets/js/156.8a04f0b9.js",
    "revision": "216a88b6e12944f053b8cb0600f1a6b1"
  },
  {
    "url": "assets/js/157.5395bf1a.js",
    "revision": "5c047b367f2658b273617583cb035fb2"
  },
  {
    "url": "assets/js/158.17ec61a6.js",
    "revision": "8cb156771dd76db56db94717c0bd1d4c"
  },
  {
    "url": "assets/js/159.8219dcde.js",
    "revision": "1fd3a404afad85f163cd1586c4a27cf6"
  },
  {
    "url": "assets/js/16.8f32064d.js",
    "revision": "e24ab0b89e19feebb6957eca9f2d0517"
  },
  {
    "url": "assets/js/160.befe11d6.js",
    "revision": "837892124c2793db44ce30d215c882e0"
  },
  {
    "url": "assets/js/161.4e078f7d.js",
    "revision": "2e78fa14c408724323e78efdd8a548de"
  },
  {
    "url": "assets/js/162.5ae77563.js",
    "revision": "1089658cdf2abeae94bcf22c545cc4d9"
  },
  {
    "url": "assets/js/163.74b222e4.js",
    "revision": "508b8421c9d8aa0a2a0018fd49bcc20d"
  },
  {
    "url": "assets/js/164.f26dbfa0.js",
    "revision": "cd597399d6dfcb9d8f087fd00e4816a5"
  },
  {
    "url": "assets/js/165.38c52f8b.js",
    "revision": "e93cbccf07000e47f374cff83c99ad75"
  },
  {
    "url": "assets/js/166.e81da9f1.js",
    "revision": "b4fdd8f4ce7f8b3f365614debdef45d0"
  },
  {
    "url": "assets/js/167.414b3f40.js",
    "revision": "f2d601d0d8a8579b9d6f443778887117"
  },
  {
    "url": "assets/js/168.0f9aa4d2.js",
    "revision": "a1246ab6fa132541da21154c36c32bac"
  },
  {
    "url": "assets/js/169.dd799c51.js",
    "revision": "a6bda3fcc0f02d2c51cf676e22eb340e"
  },
  {
    "url": "assets/js/17.b78c461a.js",
    "revision": "7d21ca7801f9d5a845a87f302220403d"
  },
  {
    "url": "assets/js/170.9fd05d09.js",
    "revision": "ebf47d5f0c1c43a9254bb2fb77ee6c3b"
  },
  {
    "url": "assets/js/171.deb0a92b.js",
    "revision": "25ec6f4dc2209d1b63ea3b3cee821dba"
  },
  {
    "url": "assets/js/172.71c6599e.js",
    "revision": "be863d5c1a59760ec56d3e53cd43353c"
  },
  {
    "url": "assets/js/173.fe1086cc.js",
    "revision": "8754afea1f43d2ec0943423377c42215"
  },
  {
    "url": "assets/js/174.70d9eb6e.js",
    "revision": "550a7691e851fbc78723f4535a389c0c"
  },
  {
    "url": "assets/js/175.eb99ea60.js",
    "revision": "2540455de5b6dcc7e9b7caea45378921"
  },
  {
    "url": "assets/js/176.bac90a97.js",
    "revision": "586499c59fb308c7cd141a88f153af74"
  },
  {
    "url": "assets/js/177.6a1e3899.js",
    "revision": "3ffca7f6b482389b7cd4f99921757cd6"
  },
  {
    "url": "assets/js/178.d6a4d60c.js",
    "revision": "6871254ef101d42112b3764318a0b159"
  },
  {
    "url": "assets/js/179.d5333b85.js",
    "revision": "b371e599333196e047cd0e52647a50e7"
  },
  {
    "url": "assets/js/18.c8e2c08d.js",
    "revision": "a0c9fe6d4166e9eed50a5bbf093cd3f4"
  },
  {
    "url": "assets/js/180.1eb8c209.js",
    "revision": "494ef549b5a914736f51782336afdd7f"
  },
  {
    "url": "assets/js/181.6d6ac500.js",
    "revision": "ba31eb913f17a5367d187e87ef4c50b6"
  },
  {
    "url": "assets/js/182.562dbf69.js",
    "revision": "cf6f2fa867b623d8505dc8fd03d3ca26"
  },
  {
    "url": "assets/js/183.a3359896.js",
    "revision": "d5c164ba9dc420b666f93ef912b7bff4"
  },
  {
    "url": "assets/js/184.6a1e7ece.js",
    "revision": "4c388b04729eafefc87e66e48d0291eb"
  },
  {
    "url": "assets/js/185.d96eecd8.js",
    "revision": "98d90bd5ec806987b281e71448abf77a"
  },
  {
    "url": "assets/js/186.83d31f14.js",
    "revision": "11f2fa894559df45165747149596696a"
  },
  {
    "url": "assets/js/187.d31afb34.js",
    "revision": "2b8131ced1970a8aaa2fb20eb7ca8691"
  },
  {
    "url": "assets/js/188.5b77bdf7.js",
    "revision": "d27e27095332316d23962f9d32259506"
  },
  {
    "url": "assets/js/189.ec6a41ba.js",
    "revision": "3abb10e063a75fb558bd6c8e1abfbf10"
  },
  {
    "url": "assets/js/19.3fca805f.js",
    "revision": "6a77d86bee575c687d93ca5cc5b04eb0"
  },
  {
    "url": "assets/js/190.b13ee345.js",
    "revision": "77f9a7069352973cc30158e26b0592fd"
  },
  {
    "url": "assets/js/191.a5086b14.js",
    "revision": "fc0a63ee0cd9e274ee0ff1c39363ed63"
  },
  {
    "url": "assets/js/192.8747ce87.js",
    "revision": "ef250dd6d2ba436abfce3a77deb697dd"
  },
  {
    "url": "assets/js/193.6e3df594.js",
    "revision": "0ba96659a3a73b90ff5faac492564758"
  },
  {
    "url": "assets/js/194.56de1e21.js",
    "revision": "d797f6123bc813001fb5d5a8e15f1a0f"
  },
  {
    "url": "assets/js/195.7bc43aa2.js",
    "revision": "749ad290750052c63831792527a08d80"
  },
  {
    "url": "assets/js/196.e1e0381b.js",
    "revision": "03fc84a599e05fcb5ff82f2d2d9f9544"
  },
  {
    "url": "assets/js/197.f4f8c2de.js",
    "revision": "5a51f4ab10dc37d4493455b5dc2db6fc"
  },
  {
    "url": "assets/js/198.ff502800.js",
    "revision": "255e1b512299f96ec7e5d8793dc436e9"
  },
  {
    "url": "assets/js/199.a78590ca.js",
    "revision": "79c189c57fa7a10e8caa4e97a1e74f6d"
  },
  {
    "url": "assets/js/2.350e0505.js",
    "revision": "ce804155c60fa92d9b30cd40f0eb023d"
  },
  {
    "url": "assets/js/20.7ec038ea.js",
    "revision": "4cf5236ae91008a81ddd4f445069be73"
  },
  {
    "url": "assets/js/200.d4705f3d.js",
    "revision": "777453ae2ab9fd85830c6837ae7c322d"
  },
  {
    "url": "assets/js/201.5d9ae667.js",
    "revision": "7c8908d2ea4ed644dee1f664fb4db28a"
  },
  {
    "url": "assets/js/202.eaccf002.js",
    "revision": "c729ffab3f13c03f6564f26ef83f14cb"
  },
  {
    "url": "assets/js/203.76654c36.js",
    "revision": "d2fd09470b22ffc62e893b72231e2811"
  },
  {
    "url": "assets/js/204.a4c98748.js",
    "revision": "a63753ad0a54db163cd278f4f77f2c90"
  },
  {
    "url": "assets/js/205.5c00d8b9.js",
    "revision": "1eeab1c00077ddada169565e2d934bc3"
  },
  {
    "url": "assets/js/206.c7f63e73.js",
    "revision": "6eadfb3e80c3f250648183cbe187ec2e"
  },
  {
    "url": "assets/js/207.ae991b68.js",
    "revision": "6233e4285f38db5393a0c6d20b07ae53"
  },
  {
    "url": "assets/js/208.716dc04a.js",
    "revision": "f6957f4fb10f3b618ba132591df71fd1"
  },
  {
    "url": "assets/js/209.9e12fefe.js",
    "revision": "947b125610f6bedf9fa6e900f02a6d2e"
  },
  {
    "url": "assets/js/21.e7f9b449.js",
    "revision": "464d6c49a32a39d4bbd812c7e95a65ed"
  },
  {
    "url": "assets/js/210.4321a932.js",
    "revision": "35ecf5d81ca755a3562a2e924bbc5352"
  },
  {
    "url": "assets/js/211.bd1cec59.js",
    "revision": "21d2f556d841cb5cbfad0ef6a9bfbb06"
  },
  {
    "url": "assets/js/212.09f04a6d.js",
    "revision": "879906f994c38c89b2931f517ea0156d"
  },
  {
    "url": "assets/js/213.8d1e0cf5.js",
    "revision": "e08f7007f311b79d8d46ab21ab49b5fb"
  },
  {
    "url": "assets/js/214.4943d716.js",
    "revision": "852908702f89206839c6ddfb3009cbf3"
  },
  {
    "url": "assets/js/215.bdbc7de7.js",
    "revision": "72b6fa50d4c1401f80e8b2a2a0889ef3"
  },
  {
    "url": "assets/js/216.7455a632.js",
    "revision": "b2c9254ee3737f248988992201086f78"
  },
  {
    "url": "assets/js/217.dec17813.js",
    "revision": "6ce443e5be957dd24181ab2d3326071c"
  },
  {
    "url": "assets/js/218.f67c0aea.js",
    "revision": "dbcd39c92437a991cb081fc4488811a1"
  },
  {
    "url": "assets/js/219.a5d90872.js",
    "revision": "dfc8bb5c47664f33094d180884c8255a"
  },
  {
    "url": "assets/js/22.98595df4.js",
    "revision": "2021292691036b948b96ed3ad7778188"
  },
  {
    "url": "assets/js/220.256d4f6f.js",
    "revision": "e825284636035240330f10dd1a4aadba"
  },
  {
    "url": "assets/js/221.096eb2f1.js",
    "revision": "dbf09c76e59d36ed986541948bd3a5d2"
  },
  {
    "url": "assets/js/222.d33f250f.js",
    "revision": "abd384f3bc1c01fe1d185ae8d1222ff9"
  },
  {
    "url": "assets/js/223.ffef9d9a.js",
    "revision": "8deeb922fc7802b79330e64e083a3e0c"
  },
  {
    "url": "assets/js/224.38ac3f28.js",
    "revision": "62ceadb9da279e0f8701e943e6469a3f"
  },
  {
    "url": "assets/js/225.c2fca46c.js",
    "revision": "e765664c5a8236bef0d2570338667b78"
  },
  {
    "url": "assets/js/226.0f0c38af.js",
    "revision": "3af36ec4d363e3f7236a05ed3cf34177"
  },
  {
    "url": "assets/js/227.1b2dabe5.js",
    "revision": "c75f4b3ac880b582a2a2b912d7554af0"
  },
  {
    "url": "assets/js/228.21e33abd.js",
    "revision": "962d21721abae17505c10f49e789ba5e"
  },
  {
    "url": "assets/js/229.526cd8f6.js",
    "revision": "05e13ecd42b2191104ed8c0af6dc1eef"
  },
  {
    "url": "assets/js/23.e2447ba9.js",
    "revision": "f679ad4fffabe3a9f0ea5f36c7b07213"
  },
  {
    "url": "assets/js/230.9a367b61.js",
    "revision": "e01d85c080836c0d95277ab1488a5ddd"
  },
  {
    "url": "assets/js/231.75603809.js",
    "revision": "c6b9ea1a36f290b1a36410dea696c005"
  },
  {
    "url": "assets/js/232.898acd88.js",
    "revision": "0c6e1d5180e1ae3fd6bf3aab58ed0252"
  },
  {
    "url": "assets/js/233.bb84e07d.js",
    "revision": "c62c945fc00eb7313b0b5cc0d9e16631"
  },
  {
    "url": "assets/js/234.d78ba885.js",
    "revision": "16007924d55bf534abc4e4a7fadb26ef"
  },
  {
    "url": "assets/js/235.4e0c2dc0.js",
    "revision": "83e9120ff1b3caabe342f2d2ba22fa52"
  },
  {
    "url": "assets/js/236.7f5c71ec.js",
    "revision": "5bd4b2016c50ec712b4b982958d98e41"
  },
  {
    "url": "assets/js/237.3235032a.js",
    "revision": "1286e4e22b5d318d7ab60c27489a28dd"
  },
  {
    "url": "assets/js/238.e60c3955.js",
    "revision": "6eaebae7e8faef921e0e82eb2880f04a"
  },
  {
    "url": "assets/js/239.893ec239.js",
    "revision": "959367aae5c113cb06b2f7b3c546a63a"
  },
  {
    "url": "assets/js/24.6f9b4d50.js",
    "revision": "8fe8c4e2d7313033d2d691a6ddb49ea8"
  },
  {
    "url": "assets/js/240.664fae78.js",
    "revision": "a105b1e119c676aac361e61ec688ed7a"
  },
  {
    "url": "assets/js/241.ef033e29.js",
    "revision": "beaaeba370a7b649e573a8b79d3dc88f"
  },
  {
    "url": "assets/js/242.912af86e.js",
    "revision": "353e57ffc0ae29c3e5c0805328e46b70"
  },
  {
    "url": "assets/js/243.5352b9f2.js",
    "revision": "ee651798537fe3bf7c6e21dfb4a75209"
  },
  {
    "url": "assets/js/244.116d24f8.js",
    "revision": "f50c34cc2734af5001cf96c80ab9aa3c"
  },
  {
    "url": "assets/js/245.1a2fac09.js",
    "revision": "a8022e16fad7a9741c032c8fbfeddec0"
  },
  {
    "url": "assets/js/246.67b009c5.js",
    "revision": "78204051f47286e5bd51db05d0671a31"
  },
  {
    "url": "assets/js/247.0023b918.js",
    "revision": "ad2cb20646080d530de7b382d8f5947e"
  },
  {
    "url": "assets/js/248.7cb90e04.js",
    "revision": "2873cfeda9f67045ddb7e39057e4c381"
  },
  {
    "url": "assets/js/249.b1d923c3.js",
    "revision": "7d322b6ad2ad22c8cb8ed856a87c4803"
  },
  {
    "url": "assets/js/25.337d46b0.js",
    "revision": "bbddeddbd17ce14064a9768294f30780"
  },
  {
    "url": "assets/js/250.fe0683c4.js",
    "revision": "93e048391b42e3d6582aac96fb2c239d"
  },
  {
    "url": "assets/js/251.40e333a4.js",
    "revision": "5eeb2b4c9a24efb44d83a67af7be4f8b"
  },
  {
    "url": "assets/js/252.4d935f8b.js",
    "revision": "0620a1bdbb0cb6cedbde7c8e8d7581f4"
  },
  {
    "url": "assets/js/253.b9ee97ca.js",
    "revision": "d137eeec792125194d1b38dc2ff62ed2"
  },
  {
    "url": "assets/js/254.c2c537ed.js",
    "revision": "a07117acd34d2e21c446c4dc81c5fa08"
  },
  {
    "url": "assets/js/255.f894dfc2.js",
    "revision": "51049ceae90421e7f2501418c1a9d74f"
  },
  {
    "url": "assets/js/256.c51baf22.js",
    "revision": "13913ba186afd67a39aacfad816ee09e"
  },
  {
    "url": "assets/js/257.722e5a20.js",
    "revision": "566fe4509c55dbc8ae35c08375bea1bb"
  },
  {
    "url": "assets/js/258.f75d0d1d.js",
    "revision": "88b13e77a9cfc7ff740f2e96d1f8bb03"
  },
  {
    "url": "assets/js/259.3a29bdcb.js",
    "revision": "3d945bc14c60ba0906feba90c38ca667"
  },
  {
    "url": "assets/js/26.8153ee68.js",
    "revision": "bba361b8acda55ee3288bf5742215c7e"
  },
  {
    "url": "assets/js/260.e9e41d27.js",
    "revision": "7a8ca6976c524462a8a6a27b66f56d54"
  },
  {
    "url": "assets/js/261.adaceac1.js",
    "revision": "8b06b7124d10bd71079bf963a74b0de3"
  },
  {
    "url": "assets/js/262.676c97f3.js",
    "revision": "09974fca2659cd455e20b380ce8443b9"
  },
  {
    "url": "assets/js/27.8d00b30b.js",
    "revision": "c6b75374860f1e75c2b122428bfdd77f"
  },
  {
    "url": "assets/js/28.e3aa8922.js",
    "revision": "87b1952722d7c508acc9a22ff8038d5c"
  },
  {
    "url": "assets/js/29.5d3798a5.js",
    "revision": "becbb5c2feed100c4909e7bfe4805680"
  },
  {
    "url": "assets/js/30.a02f0dbc.js",
    "revision": "3dd608066f0289fb6b5a2123f23a84b5"
  },
  {
    "url": "assets/js/31.6dbe90e4.js",
    "revision": "7b4d2026ffa46ff1cb12b4de5d80443b"
  },
  {
    "url": "assets/js/32.7aa2f512.js",
    "revision": "9e0ccec1a8270e4dd4d957e50c68a830"
  },
  {
    "url": "assets/js/33.8a94dd6c.js",
    "revision": "b2530ad7d9427c9266ba621dba702e6e"
  },
  {
    "url": "assets/js/34.f7847eff.js",
    "revision": "00645d03d5e070c89303c86285313cc0"
  },
  {
    "url": "assets/js/35.c8c5fde3.js",
    "revision": "cd7b85d44efa1724e62cba4d2714459e"
  },
  {
    "url": "assets/js/36.5114130d.js",
    "revision": "438c566ec4b9f734087bab7566914b14"
  },
  {
    "url": "assets/js/37.841732fb.js",
    "revision": "59e4a72422e051351a693b5064dcb5f2"
  },
  {
    "url": "assets/js/38.479f9974.js",
    "revision": "40db801e98400fa0c01882749c709d8d"
  },
  {
    "url": "assets/js/39.ec3fb2c8.js",
    "revision": "5454f4065aa75be84a837ad6be4e3ac8"
  },
  {
    "url": "assets/js/4.1890676d.js",
    "revision": "36f6bb1a0ec23e61a759bfe5df84b07b"
  },
  {
    "url": "assets/js/40.eaccfba5.js",
    "revision": "3442ec4d6d0d873de206186468b54d39"
  },
  {
    "url": "assets/js/41.0bc95343.js",
    "revision": "1ddafefaabb4944b505dd82fb1918449"
  },
  {
    "url": "assets/js/42.d2b1a727.js",
    "revision": "81ec8fd251913d257bb4b29e7b7fa6a4"
  },
  {
    "url": "assets/js/43.6c1a2a24.js",
    "revision": "0f593e65ea63fa01c88cdab5f58acc08"
  },
  {
    "url": "assets/js/44.772bd236.js",
    "revision": "9356d8f6658d5d62171d2cc87a64cf53"
  },
  {
    "url": "assets/js/45.37efa808.js",
    "revision": "3f72f37ea315290d9ad2780de50f411f"
  },
  {
    "url": "assets/js/46.1e34551a.js",
    "revision": "5c8733412adb9f7c1dcef02cea71d82d"
  },
  {
    "url": "assets/js/47.c6601171.js",
    "revision": "681f36c6d29cdea7bed3faf9e3ff8c9d"
  },
  {
    "url": "assets/js/48.36fcf981.js",
    "revision": "1c17250aac6664a3cb624c5ec2c17f0e"
  },
  {
    "url": "assets/js/49.cc0c05f6.js",
    "revision": "51410dbedfe7b13c4e4820fed44fa36b"
  },
  {
    "url": "assets/js/5.9d764c17.js",
    "revision": "26d28e5a9d712378eae2b76d8ed4b464"
  },
  {
    "url": "assets/js/50.931deb14.js",
    "revision": "fc8c679a7503c990ac0482796c05c6c7"
  },
  {
    "url": "assets/js/51.115dc4cb.js",
    "revision": "3f93f34f2faa76165996a4f428a6759c"
  },
  {
    "url": "assets/js/52.070d493e.js",
    "revision": "2331f47098635d82b299b653defcfcc5"
  },
  {
    "url": "assets/js/53.67050d06.js",
    "revision": "3ec59f0eefca6917ac5bd7c7e474f6da"
  },
  {
    "url": "assets/js/54.ebf052d6.js",
    "revision": "12dc8b6ee014c2d28dd2e0b493ae5ff3"
  },
  {
    "url": "assets/js/55.239941c1.js",
    "revision": "75510179339526b958be9715d9bd4fdd"
  },
  {
    "url": "assets/js/56.75e17054.js",
    "revision": "e66be74b53401a7e052975f41996b3f0"
  },
  {
    "url": "assets/js/57.e9e4ba36.js",
    "revision": "f598df2db38ca628ae3408d87340b3db"
  },
  {
    "url": "assets/js/58.182d1a55.js",
    "revision": "de81993a1015709aabb2601cca2910f4"
  },
  {
    "url": "assets/js/59.01b203ad.js",
    "revision": "e9ad3d1225b0d0d7a62b3c39394d0377"
  },
  {
    "url": "assets/js/6.56288f19.js",
    "revision": "2e484f10c840321c37fc2758ff48a9c3"
  },
  {
    "url": "assets/js/60.bec6cbbb.js",
    "revision": "5dd70896fc9d7ec56ce40d85f923efe2"
  },
  {
    "url": "assets/js/61.cff02408.js",
    "revision": "572139670b8805bd8bda974c36118a3b"
  },
  {
    "url": "assets/js/62.d7c014d0.js",
    "revision": "d56e23019bfc648bcf8de7466f7b318c"
  },
  {
    "url": "assets/js/63.84b61b25.js",
    "revision": "ae32a4f42a5a042e9e975ff07729ec2e"
  },
  {
    "url": "assets/js/64.814ce04a.js",
    "revision": "8c4303ba7085cee5d1c7862d70337994"
  },
  {
    "url": "assets/js/65.35065abf.js",
    "revision": "b6754071e754b231dcd984818022da60"
  },
  {
    "url": "assets/js/66.1bcf076f.js",
    "revision": "0846d4808a4b3b3859e92d014252f920"
  },
  {
    "url": "assets/js/67.585627d8.js",
    "revision": "38f0ca77f25e7678ef79b1c36439b25d"
  },
  {
    "url": "assets/js/68.0429219a.js",
    "revision": "8425b8e48ca448f660859be821e2def7"
  },
  {
    "url": "assets/js/69.a07c5bd0.js",
    "revision": "dd43bbb84ae75fcae3c9b5f82da48e3a"
  },
  {
    "url": "assets/js/7.f99192f1.js",
    "revision": "e102a8a9c2b18748d14ce6fbd5a5d50f"
  },
  {
    "url": "assets/js/70.9a25ee18.js",
    "revision": "0811801b643642a17525a0a341ee680b"
  },
  {
    "url": "assets/js/71.ff6b60e1.js",
    "revision": "8027b4262a40d72f256d20f806068650"
  },
  {
    "url": "assets/js/72.c4be1757.js",
    "revision": "e67e04875951870cbac2f134c56903ec"
  },
  {
    "url": "assets/js/73.c4b5ad65.js",
    "revision": "93a0cd8f3a3aaa451e0b5f53c1eb96aa"
  },
  {
    "url": "assets/js/74.add5f5ed.js",
    "revision": "37cd1677721fb62c14c544514fe74db1"
  },
  {
    "url": "assets/js/75.c2962e65.js",
    "revision": "7cce97c446dc754fac36949e32a3bd96"
  },
  {
    "url": "assets/js/76.4d58faf3.js",
    "revision": "3252ce925ae46e665473c2d33138f3ed"
  },
  {
    "url": "assets/js/77.8a792aaf.js",
    "revision": "9e495a054b8d4d3d2993a3b524a81c65"
  },
  {
    "url": "assets/js/78.699bd594.js",
    "revision": "1ebeb92d95106f9fd3e82f19fd74715d"
  },
  {
    "url": "assets/js/79.16b685bd.js",
    "revision": "60669a1cffd9271334a7b210d12331dc"
  },
  {
    "url": "assets/js/8.66160b05.js",
    "revision": "8990a2c15a11a34fbae459402085c624"
  },
  {
    "url": "assets/js/80.6fc084b6.js",
    "revision": "d2620a5984454b992c51d876900d89a6"
  },
  {
    "url": "assets/js/81.c748fb81.js",
    "revision": "1e393d85c85a6082ef66823794330808"
  },
  {
    "url": "assets/js/82.a1d64f38.js",
    "revision": "ea8a36e0c8eff9d7c1eb63e5f98edcc9"
  },
  {
    "url": "assets/js/83.0104ac64.js",
    "revision": "20903c1461d5ecb0f2d04648c09570dc"
  },
  {
    "url": "assets/js/84.7063ce82.js",
    "revision": "9c6499ad027e7ddfc52aaa10c18ec532"
  },
  {
    "url": "assets/js/85.46f58a95.js",
    "revision": "6e9964e69aecff7a5fec1fc937be3e1f"
  },
  {
    "url": "assets/js/86.44593b53.js",
    "revision": "a28f44a0c221073e5d0ca2b5e60daf75"
  },
  {
    "url": "assets/js/87.c0746753.js",
    "revision": "f082b58264ed3f3d7c8a55a4e28babfb"
  },
  {
    "url": "assets/js/88.c3e5e1e2.js",
    "revision": "0a4f85f3bb9ee4315640569ca0efb412"
  },
  {
    "url": "assets/js/89.36a194c3.js",
    "revision": "82153b53a030fbc2308cc4c3122056fb"
  },
  {
    "url": "assets/js/9.f4873027.js",
    "revision": "da922fb188cfbfcb90340d521360ab4f"
  },
  {
    "url": "assets/js/90.526642b5.js",
    "revision": "559513a977010b2ba15585d68078c54a"
  },
  {
    "url": "assets/js/91.ed8aad70.js",
    "revision": "6c2a975d15161b17e9969bf7cf2672cf"
  },
  {
    "url": "assets/js/92.3923a2ca.js",
    "revision": "82134584feca163eb8132c2f1942b032"
  },
  {
    "url": "assets/js/93.d3d99bc5.js",
    "revision": "15cedbbe591e23573e4db3bb98729645"
  },
  {
    "url": "assets/js/94.108c33ae.js",
    "revision": "41fb09c7973b6b90dff7a3c39870ce9f"
  },
  {
    "url": "assets/js/95.4a31ba7c.js",
    "revision": "a5fe141b6ce26977a0a47dabe881e968"
  },
  {
    "url": "assets/js/96.43a844d9.js",
    "revision": "3204606c49851359260998fa2ff8fdda"
  },
  {
    "url": "assets/js/97.4d2a15b6.js",
    "revision": "58a4e4bd153db11d37e27abbf21d2e3a"
  },
  {
    "url": "assets/js/98.0845c92c.js",
    "revision": "32862f06d180ebdd13be5d419f61d81f"
  },
  {
    "url": "assets/js/99.41ce3e81.js",
    "revision": "f32a0ec0e2f659568d5ba9f421a44fe3"
  },
  {
    "url": "assets/js/app.fe692840.js",
    "revision": "07d2dedea775073552c807049f7d2628"
  },
  {
    "url": "categories/index.html",
    "revision": "0ac19b4e184b2610084db3f4e09832de"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "9d7829a2342f961107087dbf86e61e7e"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "e2e6d58485e543e32cbd4d902bfe25ef"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "3b8dbb1fab9565c43490ccc7252c6b49"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "59035ea1779a77889d029559e53b6751"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "94f77d1d754b3fdcaf88945b84448945"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "72c3cef92c92a71515795b638b22ef74"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "8f9ae4462975786d6ea4ecc192bb82a4"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "9ed4f3e5d07628264b1365619bfa8541"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "9a96702f8812decb45bf2a8be51223d5"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "8eff0a478d61bccfd5dda08e8701cf6e"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "e2e6d58485e543e32cbd4d902bfe25ef"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "c483ac45a333152ef7d8c20d04d5d9ba"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "af2820398853e24c785ae7227147545a"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "d6b097f08cb1229f756e9822a0453389"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "f7c7262b26ee35381668b91614666e3e"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "3b0372c0fcc53622b7fd432f6f652ed1"
  },
  {
    "url": "cs/database/index.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "06c721938459b572912ac630431d8bba"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "43bdae1ff3c29d9efb984dc58977d533"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "56f92533ed3cedf9049b314d199f22fa"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "e355cc2091505925ddcdfaae26a0d437"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "507485786423cf1cd001b0848d2e7a4d"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "460c555d4f9eaee3c6ff9f062e051202"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "fb983b8da0d20260e33a00a2b42cd79c"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "68de861b128472e52f2822fe3f494cab"
  },
  {
    "url": "cs/design/command.html",
    "revision": "bd90531db557052c14fede153236780c"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "497f395e6df39082718c7215b86485d4"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "c7da91e7a147931ab92addc45e2e9a98"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "b1c4ee0baa04e003aa34f26e59797456"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "7943edbccf3cba003ba5bd1da32e4cbc"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "d7db917ec15f74ed414f8a6c931b5c5c"
  },
  {
    "url": "cs/design/index.html",
    "revision": "44cc0a5210dfb4564c8e1061274a1ed9"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "565be98044d7d2a96fc0c568c08fd42e"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "6ab05415cc977857b9551b6d402e228d"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "1f17c4cfcfff60016bcd0e0f5e0d2796"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "97c54da20e86eba05d906243d8d092e4"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "ddfadafa250e1b30aeaef7eb588fc4b7"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "2b92adffcaf7ad2064cdd57c4093fed9"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "65cc8995d3a34b441aac62b68b35c124"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "a5b6a1553e74cec3838f78d74941648e"
  },
  {
    "url": "cs/design/state.html",
    "revision": "64172e7e744028b29a7d81ffc79378e1"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "3e30c637f6654e6439b879e8da8e4ec4"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "c306f3b66f8e045a5cbb8707e4ca5e37"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "5749b6fce28521942fc3e9bd9ce40ab7"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "aaba9b0652cfa1c7450c296a267188f7"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "8d52b94119f247a03dc1ffa0e699d2ee"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "c49e489e71e175acf53a7bdcd1374de3"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "9051c2bb4d42065d4b20b269fa34772f"
  },
  {
    "url": "cs/framework/vue3-design.html",
    "revision": "14a6667785cb1e2b6c11a2606ea39df4"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "0c718b9f7260a8ede61e4af5aca1bd90"
  },
  {
    "url": "cs/index.html",
    "revision": "0428f2ecbd8572b690993c4e220ba808"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/java/container.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/java/index.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "e1e7de942f92bbd468c08612d39b04f3"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "f613d01289a41d6b8cd5033f12e47298"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "f2d3bca2556871a499ad62b64cdced57"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "00c84abb7318b2bbb40f68286a07ca59"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "c53f2126a3789fafdb96f12b3c477f79"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "f88c7dea8261449bbdbab0eb1f417ebb"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "c97526592db04e5fe8006ae2ced1eef4"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "6c651ef6c0c52b3d30f30f074eced726"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "2c344ee7ad4ca053455ad74489cab7bf"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "4e521b47ccd486546c993c5537b8e281"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "3a9f5560e9142ddd7d97173d55f4dac6"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "439b2d5834278d707abb546df53c7cea"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "dc22a7f3a4308a1b3f301117d49c4dc3"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "4040b7b9190b2c85db582047e55c789d"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "82921f3853c48103eae5c51f534067d6"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "832c48c73d2bae837f950bc4430ab03c"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "7026a46bdb1c9d58454f8b7baa5f5221"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "fa6c5109dc2b09674d58ff85ea026b88"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "eed591768b2aac5467408dedfd9bda64"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "811d46300df500d199c6e8ccc2b78688"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "f989c5925006b9799b64d361c0462502"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "743af08aaafbecba260c7f3ef94dceb3"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "0a7888d621e04a1313108fa25a0cd1b1"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "ee0586a4131cd2fe79ec1be67bde7588"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "1047590aa4e2a1a9eb10121094765169"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "d4ca079242440bf44b86915a505d94c6"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "8390671d47abf7438df2e7a04a0d6b7e"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "e095406ab9f88af0ee227461e874b5f8"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "b8bf738631ae0d3a6430250a4b4fc6d2"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "5be28dd20f6e6ae62a3d8fef8362848a"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "50edb096662c789df0db725969f05055"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "c59d8dd4adf22a220a4c4b5c78ecc95f"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "c5ac515ba7518f89bd168b8753beaa62"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "b0af63d9284bbe23877864d69a5da874"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "9fbe853009216e3f21f46e9932e3c4e5"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "227b1fe797313b8049aea47d6a1741ab"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "ac14c040c970321fa0ece6d596dbc28c"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "080d7b492af7588114cbf938ad248434"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "2b9d7c8186d4fbe9e16deb5edc594989"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "188ac6430ec3c7a8384ed8c229886d3a"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "9ced98ad2b3168da6e182b6a6550802a"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "40197743ff60e86de0cc5f70a1c366f0"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "60096a3a9daffa2dc7df53740bc314eb"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "8af8e30d82f828b5896a213d4f432b26"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "8ad056da9cf7336a4e553a9cff4661c2"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "43cba1851c73ff8ab5a20a329e54c84d"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "afb3859f25592fa5ea6cb5383d1fd79d"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "89f30b9fbe1ada5873a10a92f2c1082e"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "1946e69ae1c08c8cd68f76b9e4d41f3e"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "69ae31d273773e3599c53c83c82e1e6d"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "044ecaf297aa0af518ae0bd007b13ee4"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "58d6114f158ba2210e0acacfcd610c63"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "4162cf683404c35eca24aa141c302b0f"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "a607bc6e6e69702d1a78ec0196e71aee"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "b124380de48b1eb1cccc65d839cea953"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "eccb7a45ac015e53c3628f9c6b077ea6"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "d1558adb37ba2a17af3e5035754e7584"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "467f9c5ff05470ba203161fd8d9c62ef"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "dbd5907754054756eb922d6a7fcd6193"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "8edd4177056c580de2499b0730e38980"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "d9664aa29dae9efaf116f4cd90fee141"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "9d457e3cde4fe4042cbd914841949fd6"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "9d57a09e5a0c2c292b0a199bdffc1318"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "4784dd9a958aceedc8e43e6ec8e26902"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "5a7e2ef4cc0c8c19291072ec89b1f2bf"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "cb874b95e982c49a2f2f5e14be1afbff"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "7b9e6779c6a7265cd0611d6c50aef08d"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "ea2860ff55c562065307e65ebf150da5"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "aeabc9a6d7d93522ee97ec78f9d07514"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "08ecb65ea77757f0b80a2500070183fd"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "1a05e53aff480be7a546f2c115adb6d7"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "f5276d5036a6174d2bec72b03b867930"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "5525a21a53e91ca511dde98d5885b91e"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "6b521ff78f3d251fb74a20a0161583dd"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "06e3eacd44afac331844473b53827e87"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "e8ede8a150121a941e69baf8ff175738"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "7ce6b8f7cb4ed2c275eeff04b714d915"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "0d984456d4e6dc37d63ebd33ebd56c10"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "86e1bd089a86a71f35ed73cc9b8593dd"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "74385a20d6ed8c59408621898ccbcd8e"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "d8a51db3ead62474e31608e337176be6"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "ca2a20c589d4b9d0e7c6d4459eb46ea9"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "47c3cd2009828d899ca450b400238a07"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "7f2d02ec289bb4a9a8988cdf9c42aa1f"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "8af8e30d82f828b5896a213d4f432b26"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "ef5a7d36c565a600a8722472c83065ed"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "ad182618af77b7783fe03fd85dabb70d"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "e2e6d58485e543e32cbd4d902bfe25ef"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "50181ed97ba8b9d67f2ab9ed7f61e96c"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "6209c89ab0b2dafd4189a5b4dcb7f7e1"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "9a55e0f2a2512b3df5e2b29c00b03ca7"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "98d65ed2fa13d88ad2d3e07c2e3d762d"
  },
  {
    "url": "cs/network/application.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "9280b7c56e52514a91cc7c71499929ae"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/network/index.html",
    "revision": "e2e6d58485e543e32cbd4d902bfe25ef"
  },
  {
    "url": "cs/network/link.html",
    "revision": "8f7b8e9618e6dbcd8fadfd9c41ee3e21"
  },
  {
    "url": "cs/network/network.html",
    "revision": "a28a52f46a39de48c743236c638369d5"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "be061f5ac88ec910cb03dfe76c52109b"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "eb97ae58789918e7654628985ed0e9f2"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "b05552b970132885e62fd2f56c890706"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "4f3b91d877194b5fbbb5af7b5bb2371a"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "b933243f74d2c5c931a52609cba32c4d"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "e2e6d58485e543e32cbd4d902bfe25ef"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "1294db56ad7e530b8eb3a6bb80f45fe2"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "3fabc6141d4d5006ab3a4d4155cbbddf"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "7815587610e73a81e821f62f539430ed"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "a4e5aca5c9fe7c1c84d852a8d6aeb486"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "e1e7de942f92bbd468c08612d39b04f3"
  },
  {
    "url": "cs/web/index.html",
    "revision": "f09016b3bece276f642038074cd64b20"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "c6145a3bfb2358a6157b8a3dce779bfd"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "69636e1f93f6b7b0f381d0ad59eaddf5"
  },
  {
    "url": "cs/web/web.html",
    "revision": "250396679dab302a6e7097ea67da27f0"
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
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "59c14a9fbf9d1d1ba9351b849508a556"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "9d90d842a5e24ffecc73ecaa6a214b02"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "dc8c7d0fc8ad5d957cd5755d2d1ef7c5"
  },
  {
    "url": "language/english/differ.html",
    "revision": "00815ff69e3f59cff088fea5f44e5fa1"
  },
  {
    "url": "language/english/index.html",
    "revision": "f613d01289a41d6b8cd5033f12e47298"
  },
  {
    "url": "language/english/modal.html",
    "revision": "be5522fe3130985b68d504b20e308003"
  },
  {
    "url": "language/english/mood.html",
    "revision": "b77fdc3b44aa0c357f693db44cf85aae"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "0ca80bcd4a48b71972f73150c37b9499"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "eae84625ab3fda9dc639f9a8a3a7e50f"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "b7f54e9379047382bda21462f512ae16"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "cb15f9f0dbb7eb5588304104a79a9ed9"
  },
  {
    "url": "language/english/tense.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "language/english/verb.html",
    "revision": "2c3eaa775d6da0586a6e8683c3adb384"
  },
  {
    "url": "language/index.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "tag/index.html",
    "revision": "984d14e5716a4086521a11607b9f0aee"
  },
  {
    "url": "timeline/index.html",
    "revision": "8df1ce21871bbc47247c71836296fd69"
  },
  {
    "url": "tools/chatgpt.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "tools/hash.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "tools/index.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
  },
  {
    "url": "tools/nothing-here-but-void.html",
    "revision": "eb3293bb25a3b21e6a608e5446748083"
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
