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
    "revision": "8827fb72d0a6c98047bcaa8e28e972d7"
  },
  {
    "url": "assets/css/0.styles.950824b2.css",
    "revision": "66253171d8c0d733d21b848c8fd0bbb4"
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
    "url": "assets/js/1.0b929a74.js",
    "revision": "2fe75d8b7c6e3d796e59f1c46a5b8e41"
  },
  {
    "url": "assets/js/10.6aafde9a.js",
    "revision": "88b36c2298102b516a834764d555eb20"
  },
  {
    "url": "assets/js/100.ad7f6e39.js",
    "revision": "ec2be254a7aae015b90a75f0387b0be1"
  },
  {
    "url": "assets/js/101.76b535c7.js",
    "revision": "2c70552d939d545663d146c45ad53a92"
  },
  {
    "url": "assets/js/102.961819ee.js",
    "revision": "002f35675e1fe831a9cae8a8fc43a6db"
  },
  {
    "url": "assets/js/103.384b8ef4.js",
    "revision": "2e3009e4159e25c6f6bf2c133103b2c9"
  },
  {
    "url": "assets/js/104.039857d1.js",
    "revision": "9ff1611ed666a456db9fa5763ef10fa6"
  },
  {
    "url": "assets/js/105.3591fce1.js",
    "revision": "add3eb69aea3d0916c411f5a9b60a334"
  },
  {
    "url": "assets/js/106.fe697b45.js",
    "revision": "02c91954bc5858847136c21fc244294a"
  },
  {
    "url": "assets/js/107.d5b6805d.js",
    "revision": "5c5164262b3f1fc5e10501dc595e040f"
  },
  {
    "url": "assets/js/108.111db666.js",
    "revision": "1b704b044e290071117d0ffa1237b9e5"
  },
  {
    "url": "assets/js/109.ad7e2ab7.js",
    "revision": "3df9144a79114d6188650fb123f9ff84"
  },
  {
    "url": "assets/js/11.51d6c7b9.js",
    "revision": "7eb8a51569f9126a40650802da39e288"
  },
  {
    "url": "assets/js/110.e4d98739.js",
    "revision": "61aee4d95af1033480f2fff0788a86ea"
  },
  {
    "url": "assets/js/111.92f694c0.js",
    "revision": "91529da6414e69f8c66ece94654a8916"
  },
  {
    "url": "assets/js/112.93358038.js",
    "revision": "3f18facbd86d200e1a188659ac2be98e"
  },
  {
    "url": "assets/js/113.7b748187.js",
    "revision": "0d7aa51d9540294b364529adcac2f1af"
  },
  {
    "url": "assets/js/114.c7a2aa05.js",
    "revision": "dbe6c30c57112aa16e278448e6eaac61"
  },
  {
    "url": "assets/js/115.32f01050.js",
    "revision": "671b5c568bd6599ed06d9bc6d30bc8f1"
  },
  {
    "url": "assets/js/116.869926bc.js",
    "revision": "5ed8774e336ed6bc83b49ab9f0c71844"
  },
  {
    "url": "assets/js/117.ddeaa0c4.js",
    "revision": "ee77eceee90236f23272a39489257717"
  },
  {
    "url": "assets/js/118.91df8781.js",
    "revision": "b9e8286dad115913b8709983f1114cab"
  },
  {
    "url": "assets/js/119.76f80943.js",
    "revision": "d9c9b7c651cd33dc84a8c0c14cb986e1"
  },
  {
    "url": "assets/js/12.bb72566e.js",
    "revision": "97b14f2b963a7aea6f5f5e603982c51b"
  },
  {
    "url": "assets/js/120.2e6717af.js",
    "revision": "4c3ce3754925c6eb89e71c3f5bc32294"
  },
  {
    "url": "assets/js/121.a36c2570.js",
    "revision": "9cfc29976a5173550449c83ee865bdb7"
  },
  {
    "url": "assets/js/122.c58ab214.js",
    "revision": "42537f463bae104df7531263ef74e5c4"
  },
  {
    "url": "assets/js/123.46851b32.js",
    "revision": "3ce12fbd1fa924df3304c1a3536c930b"
  },
  {
    "url": "assets/js/124.ad413461.js",
    "revision": "489b176a79298a556e0959b5101b4de0"
  },
  {
    "url": "assets/js/125.b29b9840.js",
    "revision": "25f799195fdec21def632b942ddf6444"
  },
  {
    "url": "assets/js/126.3190d32f.js",
    "revision": "703c3427b562da36f08d25bbe7d17354"
  },
  {
    "url": "assets/js/127.0ba18d42.js",
    "revision": "7ebef5b3a5ec024d7dd39972741be757"
  },
  {
    "url": "assets/js/128.22099d08.js",
    "revision": "0b0a239b0dcbdb3e84924a11534a05ef"
  },
  {
    "url": "assets/js/129.ccb73a21.js",
    "revision": "c8d8ca96afcfd92842cff9042a006571"
  },
  {
    "url": "assets/js/13.d72c4a50.js",
    "revision": "aa8144366b3a9b56707a4b832b6961ab"
  },
  {
    "url": "assets/js/130.5374c016.js",
    "revision": "c420471b9891813204a3e51d9eff21d6"
  },
  {
    "url": "assets/js/131.6c6eae27.js",
    "revision": "2d8ce16a9b51bf47d727df30f6f3573c"
  },
  {
    "url": "assets/js/132.c137e4ab.js",
    "revision": "9cd438cf510884e8b36f35769b82a010"
  },
  {
    "url": "assets/js/133.370b053c.js",
    "revision": "aff026324ed2202a4adfe98c5968fd22"
  },
  {
    "url": "assets/js/134.9f48f4a5.js",
    "revision": "b04c0714a9fafcb6aa9804af5c0cc743"
  },
  {
    "url": "assets/js/135.c0d2edb6.js",
    "revision": "47f495e6b4b386f018b86f009d87c585"
  },
  {
    "url": "assets/js/136.1e100977.js",
    "revision": "72f74ccfb7bb79beeea29cd509f63fe3"
  },
  {
    "url": "assets/js/137.095d2b6f.js",
    "revision": "88bc2cdf212875e92a3773eda51a8766"
  },
  {
    "url": "assets/js/138.cfd2dc9f.js",
    "revision": "b391f19c3888aa4f0d0f036d0e5f2e79"
  },
  {
    "url": "assets/js/139.e422dca8.js",
    "revision": "86934d48055ac0f3f5a20b5237f35653"
  },
  {
    "url": "assets/js/14.c1a76793.js",
    "revision": "23e6e4898692a6b4db4881254642dfeb"
  },
  {
    "url": "assets/js/140.39541a33.js",
    "revision": "ffd7044aeb0e4d449239e1c705dc5a36"
  },
  {
    "url": "assets/js/141.2aaa2d7c.js",
    "revision": "d6e473db37cb5e38cf80285d1bd9505c"
  },
  {
    "url": "assets/js/142.73d83335.js",
    "revision": "7a959c42b8808ecb8e5cdd433191d374"
  },
  {
    "url": "assets/js/143.ddd533fe.js",
    "revision": "510ddfdc1552f4306cd20605bc811bd7"
  },
  {
    "url": "assets/js/144.15ef6bc0.js",
    "revision": "4fdf846953512fec8ebf0c94c0a36bb4"
  },
  {
    "url": "assets/js/145.4b7f693c.js",
    "revision": "57818d455d2b4bcbff8dfa011d4c84cd"
  },
  {
    "url": "assets/js/146.aacf4b7c.js",
    "revision": "2660a7e019d79ce75375456765dd40a2"
  },
  {
    "url": "assets/js/147.f97de4cb.js",
    "revision": "9dd6db9ab96d775aed1f2fc845dc95c1"
  },
  {
    "url": "assets/js/148.3b67b8a4.js",
    "revision": "fca5cb28f0124e480a0c399e6494f646"
  },
  {
    "url": "assets/js/149.436f8e83.js",
    "revision": "d5b5fffd7959b19abb1da9e570e61f0b"
  },
  {
    "url": "assets/js/15.53b9d677.js",
    "revision": "4d23b5e7d336e19b987da2a0884a8003"
  },
  {
    "url": "assets/js/150.615f64c2.js",
    "revision": "d3a8c5694dd0d28682a90e0b909ade3f"
  },
  {
    "url": "assets/js/151.5a531ed5.js",
    "revision": "677379bfe7a0717e3dc52c498a5efdb1"
  },
  {
    "url": "assets/js/152.7291d635.js",
    "revision": "06286be80fa4d74ba8fef33cf3489d0b"
  },
  {
    "url": "assets/js/153.a6747ee7.js",
    "revision": "907f48b8721e8f9fdb0111a1344a762b"
  },
  {
    "url": "assets/js/154.32ab83a1.js",
    "revision": "aee3d2d619ea26508437363f2d24d2da"
  },
  {
    "url": "assets/js/155.f5c07949.js",
    "revision": "8bf63f40b74fabda91d0c21984b55179"
  },
  {
    "url": "assets/js/156.6aeaa9bb.js",
    "revision": "fb2b7a3d0d0f63a08d9ff0a98305a50d"
  },
  {
    "url": "assets/js/157.7e63cadb.js",
    "revision": "f9a75dd4df7745c745f0b9a2762ef3a8"
  },
  {
    "url": "assets/js/158.82fd2a03.js",
    "revision": "5fe3eab795d2115b0b7281e83376188a"
  },
  {
    "url": "assets/js/159.b9e3e222.js",
    "revision": "ed2517c2b75b386704d7dcb0960eddf8"
  },
  {
    "url": "assets/js/16.2d7b00c9.js",
    "revision": "bced6d4aeeedd1af5bde9d42c523bb1b"
  },
  {
    "url": "assets/js/160.d10e4ed2.js",
    "revision": "2e6080a04e0d9d06b4e1c3d9d6b11eba"
  },
  {
    "url": "assets/js/161.42bdc502.js",
    "revision": "864aeb3db2adb16cc169281211b349a1"
  },
  {
    "url": "assets/js/162.ed3719cc.js",
    "revision": "15d343cda8a5bf5f13bcc6facc990c47"
  },
  {
    "url": "assets/js/163.f57ac43f.js",
    "revision": "e5222347ad90bb3afce5d1046b22096b"
  },
  {
    "url": "assets/js/164.f3680a52.js",
    "revision": "476746919905eec4248f60eb41fd9001"
  },
  {
    "url": "assets/js/165.21cba3d9.js",
    "revision": "26bb0d7a7eb1f40c39efb1c5afcdacd7"
  },
  {
    "url": "assets/js/166.bc06b6ff.js",
    "revision": "02c83372ee903c4a22e630f9c9f7d85d"
  },
  {
    "url": "assets/js/167.c39620b5.js",
    "revision": "8bca0acec28b33d5a4f77ba27ab236bd"
  },
  {
    "url": "assets/js/168.30f8539d.js",
    "revision": "e2e34d424774a07fcc410a9c8f02bb1f"
  },
  {
    "url": "assets/js/169.28313694.js",
    "revision": "7ae0f3256402403baface946bf280cd8"
  },
  {
    "url": "assets/js/17.b5fc362c.js",
    "revision": "baaf041a7a59b5b70f301aba3eeefcaf"
  },
  {
    "url": "assets/js/170.81fb8c4d.js",
    "revision": "6a5bccf089aca7eff6eec7ade8abf6f7"
  },
  {
    "url": "assets/js/171.8d3cf1d2.js",
    "revision": "f85dd1b4c0c50e623745ae9e905f8497"
  },
  {
    "url": "assets/js/172.75958ca6.js",
    "revision": "fbf24261b47322be19e89cf6e405c187"
  },
  {
    "url": "assets/js/173.36cfb6ac.js",
    "revision": "4643f88fc8ce183830c68e3a1c429fad"
  },
  {
    "url": "assets/js/174.dbcb02af.js",
    "revision": "453b0216f11bfd4e28df5758d63d3712"
  },
  {
    "url": "assets/js/175.5e4c763a.js",
    "revision": "c9adb590bd6f678692c8900bcc9627b4"
  },
  {
    "url": "assets/js/176.2fcb77fa.js",
    "revision": "b0425293368e728ea24f52df18fa29fc"
  },
  {
    "url": "assets/js/177.14590f6a.js",
    "revision": "f3769b5fa19c184d626d2ddeed6ff918"
  },
  {
    "url": "assets/js/178.aaf8a2dc.js",
    "revision": "196e2380426b700b09f04c21d7a7cfda"
  },
  {
    "url": "assets/js/179.fadccfe2.js",
    "revision": "f57bb96323bc1e1dbc5ae11b5226794a"
  },
  {
    "url": "assets/js/18.ba73eb64.js",
    "revision": "6af5ccc0032118760fe6dfc77e47b78e"
  },
  {
    "url": "assets/js/180.71b452fd.js",
    "revision": "8d31e768dd548a7199c0c5219b663783"
  },
  {
    "url": "assets/js/181.7b19afad.js",
    "revision": "1d82b96897cf0db547abbefb4acb722c"
  },
  {
    "url": "assets/js/182.fe586055.js",
    "revision": "249450cab159ad5b40974a1cd722e245"
  },
  {
    "url": "assets/js/183.150f4bf2.js",
    "revision": "cff8caa44e0f0407ef9f4c04d9e56862"
  },
  {
    "url": "assets/js/184.82f15105.js",
    "revision": "cc3220fc17a5ca1ba81ae05ceb130845"
  },
  {
    "url": "assets/js/185.2b36f56d.js",
    "revision": "13ae2504fd0c273da4f9a87f2213daf9"
  },
  {
    "url": "assets/js/186.b2c0912a.js",
    "revision": "efa89f33717e986b5b861f75f5af2ede"
  },
  {
    "url": "assets/js/187.d1d43c3c.js",
    "revision": "7f7b94dc9091a513d57de7a93af5e6d1"
  },
  {
    "url": "assets/js/188.1c978d11.js",
    "revision": "8d65ce32344f7f497354421472fbb065"
  },
  {
    "url": "assets/js/189.30090a28.js",
    "revision": "33a8c6b32a14769b2c275544da15d9e9"
  },
  {
    "url": "assets/js/19.3b967dec.js",
    "revision": "71570069ed3431a6e3d8c73f7d954888"
  },
  {
    "url": "assets/js/190.e2286243.js",
    "revision": "cd8c85228477e3ceb2f9a369860d7c2e"
  },
  {
    "url": "assets/js/191.219a4da0.js",
    "revision": "a6a302cb468d07458a513ba3b50f7695"
  },
  {
    "url": "assets/js/192.9eb0c49d.js",
    "revision": "dfa485ddaa5fab1e3c7fc181996e6b83"
  },
  {
    "url": "assets/js/193.db5aff74.js",
    "revision": "0cfb4e1083b6ac42430acf579f1ad4b7"
  },
  {
    "url": "assets/js/194.83b0172d.js",
    "revision": "170dceea90062196cdf533f9293e526b"
  },
  {
    "url": "assets/js/195.9e28df9f.js",
    "revision": "77b017251521b1e913df5be4a7d7a5dd"
  },
  {
    "url": "assets/js/196.a981b3cf.js",
    "revision": "0423cad95d593ea6f6b3969d26b9501e"
  },
  {
    "url": "assets/js/197.cf97c9d8.js",
    "revision": "888702473c8ab689c2bd63bc8c39dd74"
  },
  {
    "url": "assets/js/198.91d31748.js",
    "revision": "ac1ae1734953749b72304f26961273ca"
  },
  {
    "url": "assets/js/199.fa160471.js",
    "revision": "3bab78315639134ec977d3d6e74c145a"
  },
  {
    "url": "assets/js/2.c2ba7920.js",
    "revision": "3b6a7a135a1bf642a102c6353e01140c"
  },
  {
    "url": "assets/js/20.e16106fb.js",
    "revision": "8a7fbc42a5bcd79f97299a228cc4042e"
  },
  {
    "url": "assets/js/200.10c78a03.js",
    "revision": "a8461c40377e2050e345bca436e3e72c"
  },
  {
    "url": "assets/js/201.01a2a586.js",
    "revision": "e39f485f0532a29376e8f92998fe2ab3"
  },
  {
    "url": "assets/js/202.74652227.js",
    "revision": "3e13be6748693a34e8a5fa931fcea246"
  },
  {
    "url": "assets/js/203.4ba21047.js",
    "revision": "02a03b48cfe52a88539ae93bd2b65dc0"
  },
  {
    "url": "assets/js/204.1fab79d6.js",
    "revision": "52355dcfc99ce3486d4ec12cf37cd150"
  },
  {
    "url": "assets/js/205.1c71737e.js",
    "revision": "210d8e5fcf736a86ac7141d81a5eae44"
  },
  {
    "url": "assets/js/206.d456cde7.js",
    "revision": "af52831de336ed77b93ce7df97ea0312"
  },
  {
    "url": "assets/js/207.967ef4d2.js",
    "revision": "ff2a572f8235c9426bff9bcefc462b1a"
  },
  {
    "url": "assets/js/208.47482fa5.js",
    "revision": "3e2ed067bdb0384e9c6894ea6bc23cec"
  },
  {
    "url": "assets/js/209.811b3c56.js",
    "revision": "f254cdfb9f198d73ece54422d45d6c58"
  },
  {
    "url": "assets/js/21.0f30026d.js",
    "revision": "179b57e3df68fecb9ab4dd3c6514a5b5"
  },
  {
    "url": "assets/js/210.6fc27881.js",
    "revision": "3996b823a3b5bed0990ef39b3b79883a"
  },
  {
    "url": "assets/js/211.36baae41.js",
    "revision": "5e55a725fb75010da6ac85304d9d0174"
  },
  {
    "url": "assets/js/212.c03add6d.js",
    "revision": "e91e6f27cd2c8ff412afc71d4a3eb4d5"
  },
  {
    "url": "assets/js/213.c9f93741.js",
    "revision": "9f33311f16d7c2899b9bfbc948da71d5"
  },
  {
    "url": "assets/js/214.eecb71de.js",
    "revision": "4e249a64d0086eeff82023c190997657"
  },
  {
    "url": "assets/js/215.d3a3a08c.js",
    "revision": "91f0636d5a4025773969b5b70e47b67b"
  },
  {
    "url": "assets/js/216.63c93078.js",
    "revision": "44bc64948e9216935bc010d4768a0579"
  },
  {
    "url": "assets/js/217.36e99ebd.js",
    "revision": "e7936a72ca0542135a7dd2e800a4b38d"
  },
  {
    "url": "assets/js/218.56f9c5b7.js",
    "revision": "693f0dc14e7406b3e9659b9ffb2992ac"
  },
  {
    "url": "assets/js/219.85501f03.js",
    "revision": "ef5eff0ba82f2635735c68bc58952892"
  },
  {
    "url": "assets/js/22.6b5517d1.js",
    "revision": "f4a47e90b553af0dd3360b78b9fa7cba"
  },
  {
    "url": "assets/js/220.b429a2fd.js",
    "revision": "8f49cb1dc7e02b7a6ce449e22343e93f"
  },
  {
    "url": "assets/js/221.c9f760f0.js",
    "revision": "68dddb2a850208a37cd64b1cc77b15e6"
  },
  {
    "url": "assets/js/222.c665f437.js",
    "revision": "6c39dcd1d66a98ca98e54d6726478a32"
  },
  {
    "url": "assets/js/223.285ef3ec.js",
    "revision": "5671d264cc525f7682dfaefcaeeaa3b4"
  },
  {
    "url": "assets/js/224.0af4d60c.js",
    "revision": "8d76e32dd19f98ff6db68497af851be8"
  },
  {
    "url": "assets/js/225.8c4170c9.js",
    "revision": "8ab401b60e4f6e669eb9ac34391f441f"
  },
  {
    "url": "assets/js/226.e54ddc93.js",
    "revision": "256ac65f8bc234fe421f0ac61016d99d"
  },
  {
    "url": "assets/js/227.d64a6108.js",
    "revision": "cb4986625a2ec44521be8299c7ef8a93"
  },
  {
    "url": "assets/js/228.ce9047dc.js",
    "revision": "25e8bb458c2b68e501957b9dfd5969f6"
  },
  {
    "url": "assets/js/229.18f35e41.js",
    "revision": "d4e1f71af71f17d7f236ce6f5fda26d5"
  },
  {
    "url": "assets/js/23.faaa8281.js",
    "revision": "828c63366ce608eec6fe1a59c5eff637"
  },
  {
    "url": "assets/js/230.c73aa106.js",
    "revision": "554b698bf054b3d448783a8eb6b64aff"
  },
  {
    "url": "assets/js/231.34832b57.js",
    "revision": "aa6f428d1464e5e2f33ac1da2ca7d487"
  },
  {
    "url": "assets/js/232.d8c7d978.js",
    "revision": "c9a8ce67ba3e456a982006be26787ecb"
  },
  {
    "url": "assets/js/233.e47d5f30.js",
    "revision": "e87b55907467dd489aad3aac3a2e9ddc"
  },
  {
    "url": "assets/js/234.b30491bc.js",
    "revision": "8f9a52ad4c3806e24fb89f3e03021d2d"
  },
  {
    "url": "assets/js/235.a7bc0916.js",
    "revision": "a758fee521a19274570978dfdd9891ac"
  },
  {
    "url": "assets/js/236.b1288792.js",
    "revision": "4fb4308f193b8de52da8628f9757ab10"
  },
  {
    "url": "assets/js/237.ba35bd36.js",
    "revision": "04f0db4da976e1ba8351c4321e974e21"
  },
  {
    "url": "assets/js/238.3ce433a8.js",
    "revision": "a7067a741e1285d9a9765b17d5e2a893"
  },
  {
    "url": "assets/js/239.7683dd48.js",
    "revision": "16436ef518e031fbb3bf9307e5796606"
  },
  {
    "url": "assets/js/24.eeee996e.js",
    "revision": "52f238e8762725cb67b3cdd62fc207a4"
  },
  {
    "url": "assets/js/240.233432d5.js",
    "revision": "26602078dcf20b61133e61a36a987e7c"
  },
  {
    "url": "assets/js/241.6dffcaa7.js",
    "revision": "012e89f60269c65fd1140bc561da0764"
  },
  {
    "url": "assets/js/242.0246ab4d.js",
    "revision": "478718715fcb2f989c8c1a4883a7e8d7"
  },
  {
    "url": "assets/js/243.a7b64d6a.js",
    "revision": "6532b7f82bd3d34529713263c424e871"
  },
  {
    "url": "assets/js/244.efdca958.js",
    "revision": "a199e266b4add19dcaf5525778fef83d"
  },
  {
    "url": "assets/js/245.11ba1eab.js",
    "revision": "09cf49455d785caa9fa4484aabb4fff6"
  },
  {
    "url": "assets/js/246.8eb15575.js",
    "revision": "f9d8cce4c4faa6eb76c81001dc8faf77"
  },
  {
    "url": "assets/js/247.a068caf3.js",
    "revision": "cebe438848cdfdeec0a31801af7fc318"
  },
  {
    "url": "assets/js/248.e3f31d21.js",
    "revision": "d539fa4c254787d2c28fe013db5ce8d6"
  },
  {
    "url": "assets/js/249.5190a793.js",
    "revision": "7b1c7334f699bce4d388e79d4dde91a8"
  },
  {
    "url": "assets/js/25.3c5e463e.js",
    "revision": "6d55cee4f99e2e553188765973d65ba6"
  },
  {
    "url": "assets/js/250.8f7e9f08.js",
    "revision": "d6b77a3f5e58358ce0516b06f9e9f138"
  },
  {
    "url": "assets/js/251.8918d0cb.js",
    "revision": "2b79567d7477c575b02786ea92e0de19"
  },
  {
    "url": "assets/js/252.b43cbcd6.js",
    "revision": "7de6a4d277c4796b10b024c4a029cd3e"
  },
  {
    "url": "assets/js/253.0937121f.js",
    "revision": "56fbbdc1e7f740446b85392778b8d070"
  },
  {
    "url": "assets/js/254.2d065c68.js",
    "revision": "4c1d539fd8b4627c27c58b38dc3d5593"
  },
  {
    "url": "assets/js/255.8ed06e63.js",
    "revision": "7e8e75227b8753e51115e466f946383c"
  },
  {
    "url": "assets/js/256.32caa50e.js",
    "revision": "df797b03e3b4f7e473c93e42741e3833"
  },
  {
    "url": "assets/js/257.41cdce3f.js",
    "revision": "a996fd23cfa5caeef878c5c3bc05afeb"
  },
  {
    "url": "assets/js/258.6b06092e.js",
    "revision": "7510a39131374ba793b977c0c2c30a39"
  },
  {
    "url": "assets/js/259.7ee7ba75.js",
    "revision": "503a1a88648f20dac09e48e6e19ff3b9"
  },
  {
    "url": "assets/js/26.011182fb.js",
    "revision": "84d7e38a6ae59aa73cea7b42ed51e852"
  },
  {
    "url": "assets/js/260.615ef8ba.js",
    "revision": "4097dd497e85ad88491725cbf10a4cfd"
  },
  {
    "url": "assets/js/261.b75824e1.js",
    "revision": "fede0f9c8c458242f0a3563df669adc5"
  },
  {
    "url": "assets/js/262.e23dc159.js",
    "revision": "3000ea76f3ad18ad38c36f0161e4b005"
  },
  {
    "url": "assets/js/263.e6fcdc48.js",
    "revision": "17df565c97b869f686179783a15df75b"
  },
  {
    "url": "assets/js/264.5be366c2.js",
    "revision": "3d4568da422b003ddea93a4c2de6ba8e"
  },
  {
    "url": "assets/js/265.87e9eff8.js",
    "revision": "4daece0798eea5b67275d3b5b2ea50fe"
  },
  {
    "url": "assets/js/266.55ade6fb.js",
    "revision": "4d548f22b8cfeb0726fd1b3b947b5e05"
  },
  {
    "url": "assets/js/267.83d630f7.js",
    "revision": "79d6de34fe496322c7cafe31fa1d95be"
  },
  {
    "url": "assets/js/268.d7841d4c.js",
    "revision": "34fe56f3448bcf420b2094669ba12357"
  },
  {
    "url": "assets/js/27.513e9e91.js",
    "revision": "20a75c3781dfdbe4469ff7976fc585da"
  },
  {
    "url": "assets/js/28.c48b7313.js",
    "revision": "ce7a569361d846d06870d318c0dfbb72"
  },
  {
    "url": "assets/js/29.1c23cbfb.js",
    "revision": "f1484c9e981f828562213f804138fac9"
  },
  {
    "url": "assets/js/3.4c283562.js",
    "revision": "3c86788cdd80f8ec30f53e2241941a79"
  },
  {
    "url": "assets/js/30.6fe422f5.js",
    "revision": "ac691eeeaf358457a60a05196aa28176"
  },
  {
    "url": "assets/js/31.5b0c48dc.js",
    "revision": "33efb4c5f38a837bacdf1aa273d6e0b5"
  },
  {
    "url": "assets/js/32.3b1e349b.js",
    "revision": "d4860d80c176d5abe429f0229119e917"
  },
  {
    "url": "assets/js/33.76602d9a.js",
    "revision": "68c28f5792dd824cb70318f7d98bb942"
  },
  {
    "url": "assets/js/34.fb4634df.js",
    "revision": "28cadbbccab27b110e84564520d5c254"
  },
  {
    "url": "assets/js/35.e6ec64ad.js",
    "revision": "b97ba53d33de355d43f02686601f01db"
  },
  {
    "url": "assets/js/36.d737de6e.js",
    "revision": "9a9e3d81f19e2c5ee0697e310354cfd4"
  },
  {
    "url": "assets/js/37.f0fde5bd.js",
    "revision": "5ae070f6a7b529f459163aedc61e063f"
  },
  {
    "url": "assets/js/38.d47aa55a.js",
    "revision": "0343bdf0637faf8cb4e99ddf000bf337"
  },
  {
    "url": "assets/js/39.b08ac785.js",
    "revision": "536c6d50f0584bed30fd4970010b056a"
  },
  {
    "url": "assets/js/40.67e89ead.js",
    "revision": "838507fcecc86da53f057865ea269645"
  },
  {
    "url": "assets/js/41.c3f5d0d6.js",
    "revision": "224e25aa15b3ff108445de60e0fe429e"
  },
  {
    "url": "assets/js/42.4c9f2d9a.js",
    "revision": "c2c70eda35a038bbaea9505142b26574"
  },
  {
    "url": "assets/js/43.370fe811.js",
    "revision": "1b193bb348bc534bac6a603655ed2a33"
  },
  {
    "url": "assets/js/44.339ab424.js",
    "revision": "025853a2200c11100e6abadf47ae5187"
  },
  {
    "url": "assets/js/45.32ebffc5.js",
    "revision": "a6104cce8c042734a29d90f4481e8367"
  },
  {
    "url": "assets/js/46.c998ee89.js",
    "revision": "2bfaa9e4288e8b7b0af06fbd8a78178c"
  },
  {
    "url": "assets/js/47.7bda87ad.js",
    "revision": "946d024fc0b375a710268059900471af"
  },
  {
    "url": "assets/js/48.18e42aaf.js",
    "revision": "f66e47e883238257b48427fb49524191"
  },
  {
    "url": "assets/js/49.2797e20a.js",
    "revision": "16e665babd6a123659918a68e64d5a8f"
  },
  {
    "url": "assets/js/5.807f590a.js",
    "revision": "43a608f5509bd20d2c49cf2fcb32e161"
  },
  {
    "url": "assets/js/50.26a5a604.js",
    "revision": "34c92731136ebc0cabb81d8adfa72eec"
  },
  {
    "url": "assets/js/51.6572cedb.js",
    "revision": "dc5e6588a9594111808cd327bd0cf569"
  },
  {
    "url": "assets/js/52.fa093136.js",
    "revision": "ea4190ed869daaedfa908640e70781a8"
  },
  {
    "url": "assets/js/53.706e330e.js",
    "revision": "91e47e95c979222e03ed018bd4e19df6"
  },
  {
    "url": "assets/js/54.01beabfe.js",
    "revision": "a84924eb23aae271bfe975b045ef4b7b"
  },
  {
    "url": "assets/js/55.cbfe8093.js",
    "revision": "d527a0034e0377b2b759a18f74c86daf"
  },
  {
    "url": "assets/js/56.35e52b6b.js",
    "revision": "2a40163dc7a0c815e7bf3c999095528c"
  },
  {
    "url": "assets/js/57.f0625d37.js",
    "revision": "3a5132542d0f1657ad3b016dac286db1"
  },
  {
    "url": "assets/js/58.08ae968e.js",
    "revision": "824ef1e7e710c19f709c4bf60273dab0"
  },
  {
    "url": "assets/js/59.b41838db.js",
    "revision": "bc7a69e8081493b854b55eb91383c778"
  },
  {
    "url": "assets/js/6.03535f18.js",
    "revision": "32fab809386604934b14d07610275302"
  },
  {
    "url": "assets/js/60.4f41decb.js",
    "revision": "216aeb5ab51d82cd793dd5b19a3be8db"
  },
  {
    "url": "assets/js/61.782aa3b3.js",
    "revision": "da79bc48c8cfa4e425b540ddc43e4f9d"
  },
  {
    "url": "assets/js/62.45918fd2.js",
    "revision": "99f6573868f5c1f9151b3e2634b6deeb"
  },
  {
    "url": "assets/js/63.6c9f9857.js",
    "revision": "4308910891af4cacd4d83a6eadeca565"
  },
  {
    "url": "assets/js/64.6917c615.js",
    "revision": "242db2abf7143258de91385de4386377"
  },
  {
    "url": "assets/js/65.b3e7a0a5.js",
    "revision": "33cde3ddeba7f5266b13e457edcf0970"
  },
  {
    "url": "assets/js/66.331c198f.js",
    "revision": "7de278434253ffbd950d5424250a9bd6"
  },
  {
    "url": "assets/js/67.4353ddac.js",
    "revision": "9aa37b385a626597792a163f49fe1c31"
  },
  {
    "url": "assets/js/68.d0ee66de.js",
    "revision": "bb7755594b4ab445ef33ca42c06fa00d"
  },
  {
    "url": "assets/js/69.3eba2b77.js",
    "revision": "a99e66ac826930026b9dd3a614af73c1"
  },
  {
    "url": "assets/js/7.104611b3.js",
    "revision": "40f582f244edbc15b1587c6d92a042fc"
  },
  {
    "url": "assets/js/70.cd567f20.js",
    "revision": "81df8ae93130334d496acf65149ae6e6"
  },
  {
    "url": "assets/js/71.f5f49c00.js",
    "revision": "bdf4a6cb1f9e8519b1ca0cf59d5d4bb3"
  },
  {
    "url": "assets/js/72.164f415e.js",
    "revision": "81307009f55cd65e340f854a66ad8544"
  },
  {
    "url": "assets/js/73.94264399.js",
    "revision": "2ce45cdc0e3289a36b1041d23025990e"
  },
  {
    "url": "assets/js/74.7877f78b.js",
    "revision": "2333b11c89c9101f3aacb58f3b2c0770"
  },
  {
    "url": "assets/js/75.9fda4cd3.js",
    "revision": "b1324fe9952a68f3ae9ee30f3ed528e4"
  },
  {
    "url": "assets/js/76.98a52760.js",
    "revision": "b259036a87727ff1808c84a859b302e6"
  },
  {
    "url": "assets/js/77.78addaca.js",
    "revision": "e07e49abe9a17584663cf5c110681811"
  },
  {
    "url": "assets/js/78.b9f5724e.js",
    "revision": "066bcff0557784e5eea9015b5ed80b77"
  },
  {
    "url": "assets/js/79.2b6b8649.js",
    "revision": "110e6d78f2a967571fbd9de63d662e46"
  },
  {
    "url": "assets/js/8.5e5e1931.js",
    "revision": "8635064fd77e03849d09663461744a75"
  },
  {
    "url": "assets/js/80.7a562b14.js",
    "revision": "e428606622029f8c2ed1e66b21958408"
  },
  {
    "url": "assets/js/81.4f47e5d5.js",
    "revision": "3f278d8ef48f9816d63c7cc794b372c0"
  },
  {
    "url": "assets/js/82.635c064f.js",
    "revision": "247002a6bafa78a720103ca5d44ad90e"
  },
  {
    "url": "assets/js/83.18795438.js",
    "revision": "35c6f7c5147ba863f28ebb967e299c13"
  },
  {
    "url": "assets/js/84.2fdfad3e.js",
    "revision": "a5ac598fa23a848ca5fcf74e38920307"
  },
  {
    "url": "assets/js/85.2ee40504.js",
    "revision": "f00e1c5e83a0240774e4a0d8ae000975"
  },
  {
    "url": "assets/js/86.dbbf64bd.js",
    "revision": "a884ec029c36c3b1dae7a62c6b280e8c"
  },
  {
    "url": "assets/js/87.4a6f783e.js",
    "revision": "ca23562a446ba1ce1ccd6d25a26b42f3"
  },
  {
    "url": "assets/js/88.03aaeace.js",
    "revision": "87cdc789152ebd0a72f0451c9f3535bf"
  },
  {
    "url": "assets/js/89.419ccb4e.js",
    "revision": "f439bd56b33ba8f3ec06f26a0d9cc809"
  },
  {
    "url": "assets/js/9.4b254672.js",
    "revision": "3748445664eadb815685d2cbff78bf78"
  },
  {
    "url": "assets/js/90.eae405bb.js",
    "revision": "3590b76493f44b219a14140bc241bc5b"
  },
  {
    "url": "assets/js/91.75830a13.js",
    "revision": "f7fa55ea373474754a99225bbd8b3839"
  },
  {
    "url": "assets/js/92.f85f643c.js",
    "revision": "ffc14e5f6a5bc5312b8e9bbb818f3845"
  },
  {
    "url": "assets/js/93.4bbdc956.js",
    "revision": "943ad768b58b5f87d5cac4ae80470e5c"
  },
  {
    "url": "assets/js/94.07217e6e.js",
    "revision": "ed361b34b79ec7e777c560e6579b9fad"
  },
  {
    "url": "assets/js/95.8677b864.js",
    "revision": "f84e7be3056ed81c6b8dc4a9f412ef9e"
  },
  {
    "url": "assets/js/96.119381e3.js",
    "revision": "3db3cd5280a4cd4ef4098d2adbaece5f"
  },
  {
    "url": "assets/js/97.6e6dbda6.js",
    "revision": "148b1be3607b28787c2009338eae25e0"
  },
  {
    "url": "assets/js/98.b493a681.js",
    "revision": "1219705e96b6ef5b00f7d39ea229139b"
  },
  {
    "url": "assets/js/99.772f3611.js",
    "revision": "a6c808622b13df03ac1063529c4f1845"
  },
  {
    "url": "assets/js/app.8a1bd620.js",
    "revision": "879703ce3195c444f29550c958f5bedf"
  },
  {
    "url": "categories/index.html",
    "revision": "3bf7cf4b02ebd8da6b6fbe92afe697eb"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "08103826e6f0db0c7fa07f88d1daf2ca"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "89897d9e807b8285b408318e3479d0e0"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "0196889799e9df81d3fb2c1eb3e55866"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "9c04decda9028a039fcfa0eb7594df70"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "ccdbd0f81908a70418b042da4d3c7e6a"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "e9aaa1d2a7dde9b5cbacbb702149ef2c"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "f01e3ab70bd3fde654d527fe6b3f9f9a"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "ac647f4537a501fb879ae2b90f2397ae"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "e3527ad6c75e1f9e430cd3e6a7b1cf59"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "0cff5e3b07f1db33e58fceca73867a7b"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "89897d9e807b8285b408318e3479d0e0"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "7e2e8672d31f261b0d01f059e4ecfa31"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "5821cd1b76d3f3d6560c9e02c4a9e8a4"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "f76c21f5e8e05f0edfa37bdd4b5ca958"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "19b721bb506af9f02fbcbccee7cb3f6f"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "63cc8e7de89c6bf86b5c869f306518c5"
  },
  {
    "url": "cs/database/index.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "54721854ce8a23f95bc4bd1515bad193"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "28701eadc7114068e1f182bee7af582b"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "79cec37aeac1755ae1a5e915e9e9bc1b"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "f794b7123f9099047e613b3bbe532f4f"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "bae64ec6f03beaeb5e9e403404edb52b"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "f756489e80aa68e9dcf9f8a5cdbfe6da"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "60241c1485c2090233bc1b1cbb4d6c76"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "9454259ca388776a83e7d71d34ce7b78"
  },
  {
    "url": "cs/design/command.html",
    "revision": "cee5594387005620fb81477fe83eda16"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "8249f14c5e5f9e5aa20ac88fdcffa766"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "e791927655c9ea123c48fb2da89ffae4"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "9059b4177c6eb4ef6a12ca57cdb3022f"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "c6c4c720d4bd03be037944f6c62c20ac"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "0b089d0e984ae4ed6f7ad0255c6fdc16"
  },
  {
    "url": "cs/design/index.html",
    "revision": "f638998ac804080a4fc46b0f9daacab9"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "2840e7c71e8dcb55000f2b8424eb6497"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "b87f01428c8c753476b7bec6fe720766"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "41e3bccdbb89774d52472b3293fa87d2"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "0e06009eaa9e33f593f383c3ec3876aa"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "e949913391f728ec795ae0b28b1d2beb"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "6cb7c9370a40f6e1ccc9118b6c075c10"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "3834c02d2a2e796b3dec2fd1b8167a7b"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "d74344d26798e917663894ccec429b05"
  },
  {
    "url": "cs/design/state.html",
    "revision": "0635f4e90e4c0766fa82888458ccbd2c"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "7fe1c5a2799537ad40e349ffe6b27ec8"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "14c7058111530e198b0a750a460ca293"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "73a80e4d31a2623541c76ecf0795dc47"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "c44ac18c614c1870879e29e470cdc15e"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "0fd3c05408167ed629ef7cb0dd2d2744"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "768f5375a8ae1f7506be0adf01f801d7"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "a5f092344f19dcf66813c96fa3736f09"
  },
  {
    "url": "cs/framework/vue3-reactivity.html",
    "revision": "ac8cc0aa5d03efbe006274f09deb3a9d"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "e240de922a449de582ff05aeb7a66944"
  },
  {
    "url": "cs/index.html",
    "revision": "13d6881da4be6c220767657852c66165"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/java/container.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/java/index.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "130dc1e3f2890a015346f6573ef1da46"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "c0daccc21b1e970062e676f4970fc704"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "782a0f150fd079166311dc633a752cf5"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "231c0aafabdbf504104058238dfb2ce6"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "cc6f5dedf0451856a6cf3dbd92ddbc5b"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "792ad9e19757cce262a212bac6f444fd"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "94b5d15d00f365d77d3452552b11a80e"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "2359badc94e5a73a6bf1f9374a1b1233"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "e4c930ff3a3a742b07d5869baea0bf1a"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "d3deb16cc7aece971779390ff982d23e"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "7915ba14e7571754f52c0bddeea2b129"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "54ca760527eccd0071c4c67dffe00ee0"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "e4e2eab28058bfc4cc8634e1ce6354ae"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "b12b1372ea3458fc36e197e6e0501a54"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "05674a97de93140812377c510e455000"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "462f3e1c500ae775f5307d702a0eb258"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "67f0d936e676f80e815f036e72e67358"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "06a7e9be062349c58c64c4e359206cfa"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "732a911ec7c17ba26e6ab94783489f66"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "67532f941d21d6cfc42e330476c662ad"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "164acb896217cfdcae676f6320b6f454"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "0b3113656b0f9cfc0ead520a0c6f3ec4"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "e6210f8d908a81fa1de331da9bda64af"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "d67672c8b61a918546e842ee1a9cb2df"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "ba7110dbb16df26b8f6b7fe3efdef961"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "380a456612b70cf7f7db8f638c90bb70"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "9b7696695963d2160d61354f6cefd9d8"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "8aac33cf5dd719bdc8c9363d96c0e348"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "f07263b2e785e0ed7a1e886b5e7a6ce6"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "3eca1fe2d1dff28f1bb98ca9953c6022"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "886c447cce6c427bde016b5a9d798d34"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "3d98b1fa183fe14efd710a463e4ca34c"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "358312385335de78638b01390c053d58"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "9cc59b20a1bcf22bc241766624d46e9c"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "6ba1eec0505e94c2953489171c6dae90"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "61410d0a381b7c619e55637742fff7cc"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "8aa2876f36fd7fd33e5748675588fca4"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "a7c3cade28215ddb9e4ea6910992e98c"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "898c6b9832a230224718cbb5b6c5d167"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "c2caba1269796fa95c4fc8832b789a67"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "9d6eb0f46cd221a76321160953ddccf8"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "acc5ca0612825d26be4e8c9bf66f87e7"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "613c27bf8460c567f54ef6dd461cb3ec"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "dfb0f06eb14e68d2b5d61d3071d8bcb2"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "c25c834d9604aa01bb5f62669c6f89f8"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "b9864ab8141817d6865354d65de82a84"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "bdebbfe4ca04d9e9128235d43ab1668d"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "6cb44b06c18e26617e8b8f2c6ed80949"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "f06f5bbeef4917a115db9fe14a180beb"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "8bf0617c4b03a76d7b0cf72e11682941"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "5f25bb847f7189801052f255d23e770e"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "45245f32d5dad5d4df01778be235181f"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "5683dd417fb59123db84298e55937d58"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "0bb3f7d8562dc9946d58f8cb052f27ba"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "9f684675d9aca9d3950b6e94b5dc84f4"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "79734d9d0e843be3067d14e13b75a449"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "ac4588c532b7bd74e1648ee48f7ff1bf"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "9701ecbbc632c92da92d05e2402d3d4a"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "cb99e945c2918af89e711d501b8d3802"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "0cf64ac41c6c7033b85a0e668380ce89"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "b8e43efd71bd38876d6d46dd52d2b7ad"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "2712100c30ac0f9e067d7d44d3c0fb1c"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "46e4a2d2d0a7ad16ae4a0660fb721fbd"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "f266af7ec1f0a248ef7264c47e62b22c"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "755d84e83908b3abad579488cba58418"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "3dd9c1bf4dd5a386e2deb4137739f59a"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "bf182a5e7ef2e847758562487e2329a3"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "3bbd17756bd4fccf4a3dc59713e316f9"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "3da036f306b59e89efa75adab5005c9d"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "50d40f6f8c27db31350fd70bd0d1c412"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "62472e5764a0596e547dc31ace0984b1"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "1e18cbef463e0d0bef60c3470c33bfeb"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "98df204e89e8666bb8bc625ef48ea437"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "210143f5567d89c82d9de863b6101938"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "4466305de653113c860fd4ad29640b00"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "6067d94e613eb97a1e9841e42716a63a"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "00a3d3206b3aac9e1f37d0a53ddd011d"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "a47c704eb3d3446676e305267c1fa7f8"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "97480101b3e4db13134849cba613c295"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "97cbd089ff11ae012d92c581bc5e8895"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "1868fc2f127d11bad510c072f18b99e5"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "cf09ea30cbd71e0ead4465dfa73db93a"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "573506d259b7b32ef8238a9b1085965f"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "ea02e9239dc2c0e061b5c4289b9c1fa5"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "dfb0f06eb14e68d2b5d61d3071d8bcb2"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "e41c9c17f74f5956fa92d56f4980944d"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "e9075ed60f54502c59a7832abfc377fa"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "89897d9e807b8285b408318e3479d0e0"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "c9f108b8b4be01762b5bf00d9222a8c8"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "de2d084d67ebed8529a44283fb8aabe6"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "4d9202b3e92f7f0eb8c6430a87fe40c2"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "c2c552b547e519039e0cae7bcdcaecdb"
  },
  {
    "url": "cs/network/application.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "a212c6548a5ff92edfabb9c0613653b7"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/network/index.html",
    "revision": "89897d9e807b8285b408318e3479d0e0"
  },
  {
    "url": "cs/network/link.html",
    "revision": "a725e3fec29f8fcdeb69f056bad967a1"
  },
  {
    "url": "cs/network/network.html",
    "revision": "c2fe1a3f8db4c3a08b0d5e0b627b0108"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "6b29c13383d163856624daedaf476dc3"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "c01d489b319c7ac4ab55c63df5b0bd51"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "45e5a1e5b2a7a555da2b196dd47e1bfa"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "11a566a159e0a6fcbc2ed243ab542240"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "d6fb6c7f80e1de325e87ad54db35e91a"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "89897d9e807b8285b408318e3479d0e0"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "b60953776ae4c5defb5b954930dc2fa4"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "61c83d535f4c02adddc563e95f587e04"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "0a6c9d8f36ab12fb9a8d47701decd1eb"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "eeeab4118fc8113e2c13724febe53949"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "130dc1e3f2890a015346f6573ef1da46"
  },
  {
    "url": "cs/web/index.html",
    "revision": "0eb3fefd3d5a5c38298aef650f0d3d16"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "4a5a931f3626f867f016e96d412072a6"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "353dc112aae89536804ea47eae8300f7"
  },
  {
    "url": "cs/web/web.html",
    "revision": "8026def59d8e49c5f1ab863aa519102d"
  },
  {
    "url": "daily-life/phone-lost.html",
    "revision": "3a163a12604e5ede2511739eaf7adc46"
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
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "113236525e9815c3296c9e032958de15"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "95ebc4e62b24ea28f9c656803680f8b4"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "e3d80e5df9890355a5962544cca6562a"
  },
  {
    "url": "language/english/differ.html",
    "revision": "fe7a3a96805b81ce527e7c668978395b"
  },
  {
    "url": "language/english/index.html",
    "revision": "c0daccc21b1e970062e676f4970fc704"
  },
  {
    "url": "language/english/modal.html",
    "revision": "9219662b6702e3fc7e3d0ef7ea66d213"
  },
  {
    "url": "language/english/mood.html",
    "revision": "066ea083323aef4768b30a9aec9c411a"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "a691e3c2c1bd2e0f55a1dc147e607d94"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "3817d05212fd2eac6f7e86125cb659ba"
  },
  {
    "url": "language/english/phonetic.html",
    "revision": "6ad95a2c69be17f4b36d41d500d6905d"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "09a7a2be551bfa67d657b18a2d4fd675"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "a41c20cb416da56a7ff4c7ae2a230d58"
  },
  {
    "url": "language/english/tense.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "language/english/verb.html",
    "revision": "76a5c20b92896f804233f0bc11753680"
  },
  {
    "url": "language/english/word5000.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "language/index.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "tag/index.html",
    "revision": "5d539f5794f92643d2a69f6c66cc8b82"
  },
  {
    "url": "timeline/index.html",
    "revision": "adfcef88090942b87b24a722c01437cb"
  },
  {
    "url": "tools/chatgpt.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "tools/hash.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "tools/index.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
  },
  {
    "url": "tools/test1234567890.html",
    "revision": "a2d8aadfd2ca1ed7070dd6508f285a4a"
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
