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
    "revision": "0f29c2b5ffaa8b5dba116813fe3b592f"
  },
  {
    "url": "assets/css/0.styles.664de993.css",
    "revision": "ba265a56d511a8ecd1f76fe1fca5251b"
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
    "url": "assets/js/1.beaa162e.js",
    "revision": "3da62282867deedd285d0156040e4c14"
  },
  {
    "url": "assets/js/10.4ab5bea6.js",
    "revision": "ba9d912fac24efdf3c78f401ca5f53c5"
  },
  {
    "url": "assets/js/100.ec36c8fc.js",
    "revision": "cd9d04efd890eaf93d99c10933ad6741"
  },
  {
    "url": "assets/js/101.20934588.js",
    "revision": "35b125f8cbc2ba8e1669706ef1e03d54"
  },
  {
    "url": "assets/js/102.9a2e68ea.js",
    "revision": "ec31123e8f7991a93d50f33cef9a114b"
  },
  {
    "url": "assets/js/103.2e825290.js",
    "revision": "8f3e3f0c685f3f34f210a43fa1e7aef2"
  },
  {
    "url": "assets/js/104.945ec568.js",
    "revision": "4de7582ab7dc8610e4786d1c57bedfdb"
  },
  {
    "url": "assets/js/105.257590d2.js",
    "revision": "daff785361de36b0bde244d178caa490"
  },
  {
    "url": "assets/js/106.3c2fd985.js",
    "revision": "e0f8befe3480601e52ba852007945ff0"
  },
  {
    "url": "assets/js/107.a068ab37.js",
    "revision": "059d3587018335ddb6167bc8ce8e1121"
  },
  {
    "url": "assets/js/108.a1428722.js",
    "revision": "a556fab048fae703e0075344cec355ec"
  },
  {
    "url": "assets/js/109.23c489a7.js",
    "revision": "8f5e753efc20dbeeedac429638f044dd"
  },
  {
    "url": "assets/js/11.89ee2a9a.js",
    "revision": "6d535e42378955c4c02cb163c721b771"
  },
  {
    "url": "assets/js/110.83ee9b0d.js",
    "revision": "a5695e9b6dc59108a9f1f5f5ab0ef431"
  },
  {
    "url": "assets/js/111.99aa558d.js",
    "revision": "43a77348947afe0dc0da199ab2ab0733"
  },
  {
    "url": "assets/js/112.e14814ea.js",
    "revision": "9e14a6524a1b5ec7295568822969cccb"
  },
  {
    "url": "assets/js/113.5fc5a9bc.js",
    "revision": "c62725656126fb36c43719158a614cbb"
  },
  {
    "url": "assets/js/114.b6dd28ea.js",
    "revision": "7614c2c169be6345f0ec47e6658015c4"
  },
  {
    "url": "assets/js/115.c252f14f.js",
    "revision": "0b93bfb0e59992e295d78a4e951b5a0a"
  },
  {
    "url": "assets/js/116.d13b779a.js",
    "revision": "92fd60e87f4aa4047e8cd3dfb1bd5636"
  },
  {
    "url": "assets/js/117.74100b85.js",
    "revision": "d874f2505bb6719b42b28426729f5830"
  },
  {
    "url": "assets/js/118.4bf54e9b.js",
    "revision": "7b027e5f65fa2a9d39affe603ba0f646"
  },
  {
    "url": "assets/js/119.dc64e9ed.js",
    "revision": "2738b8ea0f6b631c47dc7f77551db320"
  },
  {
    "url": "assets/js/12.b7068b4b.js",
    "revision": "c40eaa641a00f32781370bc90ba2c18a"
  },
  {
    "url": "assets/js/120.43128e02.js",
    "revision": "4409d7311f658d3f46f875e08df83527"
  },
  {
    "url": "assets/js/121.d7d968f7.js",
    "revision": "71f746e91c8f1959000a70844fbce685"
  },
  {
    "url": "assets/js/122.9dcdb1cb.js",
    "revision": "87707edd8beb6a2e1005f50829a78f4e"
  },
  {
    "url": "assets/js/123.2fe56896.js",
    "revision": "23593576fbd262bf6a89ecb0bb522d4c"
  },
  {
    "url": "assets/js/124.0ea8aa3f.js",
    "revision": "276b4c9de7b536db1a1b0b38eb4e5f8a"
  },
  {
    "url": "assets/js/125.44228287.js",
    "revision": "0ab20cef2006d2ffe643d452bc682cd1"
  },
  {
    "url": "assets/js/126.1cbfa7fd.js",
    "revision": "ecef101ba682056c76405dfeaa75e457"
  },
  {
    "url": "assets/js/127.06ac385c.js",
    "revision": "0e05759a9c47d3061608c919b68f2f4b"
  },
  {
    "url": "assets/js/128.f1324543.js",
    "revision": "f7db9f190e70abfa384b055d1e627e40"
  },
  {
    "url": "assets/js/129.e2afe634.js",
    "revision": "d9316f7291eb288a38dee33909ca4706"
  },
  {
    "url": "assets/js/13.018ee937.js",
    "revision": "c10b070ceed657ddca23534865bdf26c"
  },
  {
    "url": "assets/js/130.fe742d8b.js",
    "revision": "66facf3be5990203dab5f10340fd62e4"
  },
  {
    "url": "assets/js/131.8f7f42ae.js",
    "revision": "1866447c7e441fbe83eab69102793af1"
  },
  {
    "url": "assets/js/132.c2ac3517.js",
    "revision": "cae4e8424b60a6135edd0d9b10b5d75f"
  },
  {
    "url": "assets/js/133.33205285.js",
    "revision": "bcfbba3b433380efbed1ab7cbae50ec8"
  },
  {
    "url": "assets/js/134.4f592a5e.js",
    "revision": "b66231c5cd475d32d810cd2c69907456"
  },
  {
    "url": "assets/js/135.d4b8624e.js",
    "revision": "8682949226157cf1942c4b82abe85485"
  },
  {
    "url": "assets/js/136.c38678b6.js",
    "revision": "54b4bfb728f8ad2299ab6b29ffabd5fd"
  },
  {
    "url": "assets/js/137.6cb753d0.js",
    "revision": "a8aa1cf0fc354bf944168b94ce29e592"
  },
  {
    "url": "assets/js/138.92683557.js",
    "revision": "21a6613bcea454e47f25bad108b6a2fd"
  },
  {
    "url": "assets/js/139.ad06e063.js",
    "revision": "3a79a5a1da6233e90e8b33b30bf0fdd4"
  },
  {
    "url": "assets/js/14.c5e72ef7.js",
    "revision": "4869ecb4089dcf32977d063ee472a77a"
  },
  {
    "url": "assets/js/140.60dfe7f8.js",
    "revision": "c632ec4dd4a8368e5c518b704039dc61"
  },
  {
    "url": "assets/js/141.ae0be920.js",
    "revision": "f3ea361588cfbe6f3a13f8a8b13e6112"
  },
  {
    "url": "assets/js/142.497f7498.js",
    "revision": "3ebb8b22256b7e7cc0d89a60ea2f74e6"
  },
  {
    "url": "assets/js/143.30a77e22.js",
    "revision": "4451bb0ca93e206f8b3909562dcd3891"
  },
  {
    "url": "assets/js/144.0212545c.js",
    "revision": "a9b63032e191f109f00e50f1b0d6f785"
  },
  {
    "url": "assets/js/145.ac538dc8.js",
    "revision": "96be198d2da046ec8320da7b7b54c5e7"
  },
  {
    "url": "assets/js/146.1a0199cc.js",
    "revision": "e3f3217c0491b4980379f201b60c8ba1"
  },
  {
    "url": "assets/js/147.e95f2f05.js",
    "revision": "7cd7a6a0bbeb60d5599560cbf584247c"
  },
  {
    "url": "assets/js/148.9e1b4a33.js",
    "revision": "23341b75a8c56c462f6e7bb419cc50cb"
  },
  {
    "url": "assets/js/149.a4be1a73.js",
    "revision": "50e46b30a7630b950a8459a12c4572dd"
  },
  {
    "url": "assets/js/15.8b2f8123.js",
    "revision": "c9801d6d6fa87feac00fb45fb746b610"
  },
  {
    "url": "assets/js/150.f752410a.js",
    "revision": "cf9e90e85f2fe14420e571751a480f8b"
  },
  {
    "url": "assets/js/151.876ee4ff.js",
    "revision": "a1ec4f4aacc9e224cad434b0d72c4643"
  },
  {
    "url": "assets/js/152.b72d1716.js",
    "revision": "54b4cca4e54102a95958261894c6a364"
  },
  {
    "url": "assets/js/153.30a4edbf.js",
    "revision": "d87c9c839710debd649381e1d2d4a519"
  },
  {
    "url": "assets/js/154.0763906e.js",
    "revision": "923cb9f4abd187d0bd9d06c9fa35b424"
  },
  {
    "url": "assets/js/155.1fb12029.js",
    "revision": "ab6823c8ee4960808b884ce86c6ac4b5"
  },
  {
    "url": "assets/js/156.569bb14a.js",
    "revision": "ad3fdd50165994103a367cfc5064c573"
  },
  {
    "url": "assets/js/157.bd2b0f03.js",
    "revision": "9daf63bd4f803922526cff33a664c6ca"
  },
  {
    "url": "assets/js/158.78a4bb83.js",
    "revision": "cb94eb63b070b48bfc247f0008c8312a"
  },
  {
    "url": "assets/js/159.24b658c2.js",
    "revision": "560a063d386e46be84e9e6bd5c1ee696"
  },
  {
    "url": "assets/js/16.cbe6d248.js",
    "revision": "76c7fd254fb755b273e28a7df4babe02"
  },
  {
    "url": "assets/js/160.ca25adf6.js",
    "revision": "066e1f82f5612e5ea9d07ca86153f240"
  },
  {
    "url": "assets/js/161.ad290afb.js",
    "revision": "f1a79e09c69d70ccb06ba28a497d2b4b"
  },
  {
    "url": "assets/js/162.c1f9648b.js",
    "revision": "3a7fca13923c4a4d5fdeb707cd848a61"
  },
  {
    "url": "assets/js/163.ae2287e9.js",
    "revision": "a9fcd8bb6e788514afec1b78954d2790"
  },
  {
    "url": "assets/js/164.155ac969.js",
    "revision": "682485dbe2bb87b9e39a0ebdb8afbd2c"
  },
  {
    "url": "assets/js/165.f3c1f8d0.js",
    "revision": "4960df86096217b217a5ef4d3889cfff"
  },
  {
    "url": "assets/js/166.62110817.js",
    "revision": "979a6978efa466eb20bc70b570ec8fa8"
  },
  {
    "url": "assets/js/167.d0b0fa3a.js",
    "revision": "f7238d2a2d90dbf88e9a0094a82e8e4e"
  },
  {
    "url": "assets/js/168.4331fe29.js",
    "revision": "08b347eb6b19fc73562b9600bc4a4b7a"
  },
  {
    "url": "assets/js/169.8df46723.js",
    "revision": "2411d337808357724b5c89b2ec570ca4"
  },
  {
    "url": "assets/js/17.427330a3.js",
    "revision": "b3fb2be39e768b66ceeefc4e5722d5a5"
  },
  {
    "url": "assets/js/170.5adce3f8.js",
    "revision": "29a395730968e5b4892fa91391cfe49d"
  },
  {
    "url": "assets/js/171.b9cc7010.js",
    "revision": "147fd8d8245f08155e1cd4121a3fea61"
  },
  {
    "url": "assets/js/172.7050c380.js",
    "revision": "88512043e8cd19e72e51bdb67e6f3416"
  },
  {
    "url": "assets/js/173.9cd4796d.js",
    "revision": "5551a5b2d55d3820851060cf877d74fe"
  },
  {
    "url": "assets/js/174.ea4266e4.js",
    "revision": "0bb2fced78c7ebd08333452faf46f9e9"
  },
  {
    "url": "assets/js/175.19faca92.js",
    "revision": "c93681663d4e42f9200a6aa7c1ade99f"
  },
  {
    "url": "assets/js/176.d219ef1e.js",
    "revision": "725b6ecb93d1b472893a1d535f243202"
  },
  {
    "url": "assets/js/177.0c4b9731.js",
    "revision": "bfc9e69731844eba654c783b2fbd896f"
  },
  {
    "url": "assets/js/178.81207503.js",
    "revision": "a5c190a20e6c68968387389072b8fdbf"
  },
  {
    "url": "assets/js/179.913139dc.js",
    "revision": "c4608fd50ab05706a227229a828353ba"
  },
  {
    "url": "assets/js/18.54a26cfc.js",
    "revision": "f2b092df3a7ec11f00b902063d18f27b"
  },
  {
    "url": "assets/js/180.29de8dd9.js",
    "revision": "3319299483462f222ff3cd576b5a44c9"
  },
  {
    "url": "assets/js/181.41edaefe.js",
    "revision": "6ab6367fdd4f9fd533f2719150aa4d52"
  },
  {
    "url": "assets/js/182.8d2e6936.js",
    "revision": "d66917b4fcc099ccdce6fd7559a2ef0e"
  },
  {
    "url": "assets/js/183.daf7867b.js",
    "revision": "f1cebfba9a2e59d8ae55c90481436597"
  },
  {
    "url": "assets/js/184.35dea377.js",
    "revision": "c61beaa57d8b338330a7782791f942d1"
  },
  {
    "url": "assets/js/185.504d08c1.js",
    "revision": "26acd730be2e11a3523c416ceb441137"
  },
  {
    "url": "assets/js/186.620c0924.js",
    "revision": "b8d557dc0e48cc34fd1c25379d5b39b3"
  },
  {
    "url": "assets/js/187.7758d22f.js",
    "revision": "02605e00f15733043a820326500de561"
  },
  {
    "url": "assets/js/188.472190e1.js",
    "revision": "94b9e990a76c511159c657b6e0cb825b"
  },
  {
    "url": "assets/js/189.eef10a67.js",
    "revision": "8d818c5099817b58c8f8ae40347ae23c"
  },
  {
    "url": "assets/js/19.c75fe9ee.js",
    "revision": "15abdbe8838ca435fee9960418c0cb96"
  },
  {
    "url": "assets/js/190.d86c9eee.js",
    "revision": "ba594340cab5c235dd5b6f7df1d949ea"
  },
  {
    "url": "assets/js/191.3ce124d1.js",
    "revision": "af98066bb931b20e8c7f92b3b8f2d953"
  },
  {
    "url": "assets/js/192.da699605.js",
    "revision": "563546e88d533410f24c23addeb68814"
  },
  {
    "url": "assets/js/193.a513445c.js",
    "revision": "974f60d5d0207878ef669f72c042b6f1"
  },
  {
    "url": "assets/js/194.9530784e.js",
    "revision": "8ac9c037f08d8f09b55fb6638384b445"
  },
  {
    "url": "assets/js/195.0788f387.js",
    "revision": "77f20749d7cf1b651170d1f26dc08c1b"
  },
  {
    "url": "assets/js/196.377d1c8c.js",
    "revision": "e4ac32cfe48561257690b43071e7ad40"
  },
  {
    "url": "assets/js/197.54c798d6.js",
    "revision": "2b5c5c5a409f21f3196d58276b0a3389"
  },
  {
    "url": "assets/js/198.94dfcd29.js",
    "revision": "e69fab7f7883f30af22807adb42f316a"
  },
  {
    "url": "assets/js/199.818e701b.js",
    "revision": "a910ce65fc8b0db6477f835a42251f4f"
  },
  {
    "url": "assets/js/2.350e0505.js",
    "revision": "ce804155c60fa92d9b30cd40f0eb023d"
  },
  {
    "url": "assets/js/20.5877d44e.js",
    "revision": "f74bed3ee65927dd5a5597a250b967b5"
  },
  {
    "url": "assets/js/200.8bb25dd0.js",
    "revision": "3bde7df505c0cb7d480a9d7afbec8664"
  },
  {
    "url": "assets/js/201.f90dc640.js",
    "revision": "89bad009f4842ca847cf4552f6d4d787"
  },
  {
    "url": "assets/js/202.320a04e2.js",
    "revision": "16afb815d45c1aa839aaa4716f96418d"
  },
  {
    "url": "assets/js/203.107a6645.js",
    "revision": "5559a2edd321c1b8930d53bd756942f6"
  },
  {
    "url": "assets/js/204.887ddba5.js",
    "revision": "3590a4d70d311a4862c56ac8cbdd4824"
  },
  {
    "url": "assets/js/205.91f506d1.js",
    "revision": "681451cd3bcdd67207656a8363795658"
  },
  {
    "url": "assets/js/206.275dec01.js",
    "revision": "413961b5d58e4f98e4d1a3d13e65e02e"
  },
  {
    "url": "assets/js/207.d9834db3.js",
    "revision": "fad22aa37cf969d2aae35f74abc18904"
  },
  {
    "url": "assets/js/208.dabfa93f.js",
    "revision": "090a2cec9dff5724e910530aa66af4f5"
  },
  {
    "url": "assets/js/209.eb3cbc86.js",
    "revision": "eb6f0facc77035491f2d9e556ae62531"
  },
  {
    "url": "assets/js/21.fc639277.js",
    "revision": "e08a3e8cf0fe78bbb423e9c3460545c2"
  },
  {
    "url": "assets/js/210.0102e5e8.js",
    "revision": "1a3dcb47743ac55815ae5a0437867543"
  },
  {
    "url": "assets/js/211.9fc3ed35.js",
    "revision": "ece5d2b281655ed2595d6d34b65ecae6"
  },
  {
    "url": "assets/js/212.fbef520a.js",
    "revision": "be49982a574f5601ed587d1ab089d7b5"
  },
  {
    "url": "assets/js/213.b5f3c5d6.js",
    "revision": "1a405e204bdcb34be49e908edc1c1148"
  },
  {
    "url": "assets/js/214.9c1cefc6.js",
    "revision": "e078293c5a628b325bc1a24cc7f085cd"
  },
  {
    "url": "assets/js/215.863a4357.js",
    "revision": "6b29ac7a5bb2167bc071fca79f9894ee"
  },
  {
    "url": "assets/js/216.97fcbcfb.js",
    "revision": "0b63db99de37b4b2503881cf500eecf2"
  },
  {
    "url": "assets/js/217.56e890d2.js",
    "revision": "bb008eb0261261b0b095aeef5061b269"
  },
  {
    "url": "assets/js/218.47b518f3.js",
    "revision": "cd2567724d70deb6e028ebeef5c49481"
  },
  {
    "url": "assets/js/219.5170e8c3.js",
    "revision": "a58a36b0a49aabacee0683b04c6e05f4"
  },
  {
    "url": "assets/js/22.5afa3d01.js",
    "revision": "2087cf2e2b17258359902a2f0f40668e"
  },
  {
    "url": "assets/js/220.021c5678.js",
    "revision": "e62a437bf12f1ad59b6a7f57353ad920"
  },
  {
    "url": "assets/js/221.071bf1eb.js",
    "revision": "d34972d552da3840ad6e967658f34b25"
  },
  {
    "url": "assets/js/222.74bdde1d.js",
    "revision": "ab049af7a489006c2e716f528f5a84fb"
  },
  {
    "url": "assets/js/223.5791d03e.js",
    "revision": "d38596d97fc1bf7e5a61d9c7bd5f0850"
  },
  {
    "url": "assets/js/224.541de956.js",
    "revision": "38fcb1cfe76126408780f0a47d16bc34"
  },
  {
    "url": "assets/js/225.cf349d75.js",
    "revision": "87f9c8c2e8b1c8ab4be34e8e08f12630"
  },
  {
    "url": "assets/js/226.c6df5031.js",
    "revision": "86de043ee6eb98d18763c59b1b8e72a0"
  },
  {
    "url": "assets/js/227.9c72d818.js",
    "revision": "d5887867216a5dd80c67117d9102ad96"
  },
  {
    "url": "assets/js/228.d4a4a171.js",
    "revision": "b6ba652500b04e983842cb25056e6789"
  },
  {
    "url": "assets/js/229.6f04baf3.js",
    "revision": "0a1c5df382649cdfca399da227aa09ab"
  },
  {
    "url": "assets/js/23.b651ba8b.js",
    "revision": "e13e4867c282d0767366a0e8a9588ce9"
  },
  {
    "url": "assets/js/230.5c582fcc.js",
    "revision": "31a3e7fcdb3075e83018b5a01c179c54"
  },
  {
    "url": "assets/js/231.c4776aa5.js",
    "revision": "54012bebd49f6cbe9cbcd882d2192ba2"
  },
  {
    "url": "assets/js/232.386747fd.js",
    "revision": "8f23a815864bc5a1c074aded1426eebd"
  },
  {
    "url": "assets/js/233.ea8262c6.js",
    "revision": "dfbdc0055764baa35a99785b5466c9c2"
  },
  {
    "url": "assets/js/234.efa4d74a.js",
    "revision": "fbdcdec0eda28669b992698654ee0179"
  },
  {
    "url": "assets/js/235.e389b9e1.js",
    "revision": "99b8989cbd8ad50914d755cc51648866"
  },
  {
    "url": "assets/js/236.f3fd6c8c.js",
    "revision": "1e88c91f340bb6fff738e2f9d87f0109"
  },
  {
    "url": "assets/js/237.d831d5f9.js",
    "revision": "417de13f208614d7edb77ab17c12d346"
  },
  {
    "url": "assets/js/238.244240bf.js",
    "revision": "e09dcd35de0e8010395e5c9eb215042e"
  },
  {
    "url": "assets/js/239.b62e310a.js",
    "revision": "5fa66295b63acacec6513ec6c1402a4f"
  },
  {
    "url": "assets/js/24.899dc6b4.js",
    "revision": "930382ba5d0498b1f52d8606282f700e"
  },
  {
    "url": "assets/js/240.aa86f213.js",
    "revision": "fa2935a3be6bb2e1299b9395949318b5"
  },
  {
    "url": "assets/js/241.36fbc3b2.js",
    "revision": "eb29af5307d66bf9e81579d632d0773a"
  },
  {
    "url": "assets/js/242.8a6d8c9d.js",
    "revision": "b6b8f1f268c7330ab8b021da64b82dd0"
  },
  {
    "url": "assets/js/243.1fec2497.js",
    "revision": "39747a6b5a9440bdabb411917bcd8121"
  },
  {
    "url": "assets/js/244.cd1fdc2f.js",
    "revision": "dafb2655e96773403754a3eeedfca605"
  },
  {
    "url": "assets/js/245.7dbf6c53.js",
    "revision": "dd77fcc8592cd8f04538db71996224c8"
  },
  {
    "url": "assets/js/246.5e6a9770.js",
    "revision": "f19ec64d3b800696d42f21e34f731625"
  },
  {
    "url": "assets/js/247.ad20d392.js",
    "revision": "4d48d327b10639e92141743495c71b47"
  },
  {
    "url": "assets/js/248.1d5a4176.js",
    "revision": "1de511c3ebbdd4734c5ba4b861e576e1"
  },
  {
    "url": "assets/js/249.6fb1a9b8.js",
    "revision": "1ec05b79734780f2d9fa0f254d3518a3"
  },
  {
    "url": "assets/js/25.90a4fa9c.js",
    "revision": "1fbdb1f346b5151f0ac2c9ac05198fb0"
  },
  {
    "url": "assets/js/250.59edb0dc.js",
    "revision": "c500aabf04e15f882b221eb0d3d2400b"
  },
  {
    "url": "assets/js/251.50a1d6b8.js",
    "revision": "257a214e7ac535168a762beb825ff4c4"
  },
  {
    "url": "assets/js/252.995fd889.js",
    "revision": "af3fa2296dd6c5548c28c98ac7c02eba"
  },
  {
    "url": "assets/js/253.ac6c0bac.js",
    "revision": "c2390490f3615dfead53f86ff283de48"
  },
  {
    "url": "assets/js/254.db7f9374.js",
    "revision": "92154f801ecac59560509d29ea01395d"
  },
  {
    "url": "assets/js/255.276eb2a1.js",
    "revision": "ea79ac70a53664939ede184ee0ee2a79"
  },
  {
    "url": "assets/js/256.6708f15f.js",
    "revision": "a097b201418325142a419b939cdc758a"
  },
  {
    "url": "assets/js/257.a1696b28.js",
    "revision": "1e3c60f8d4e49fdb6e10a680f1ae8543"
  },
  {
    "url": "assets/js/258.da48e699.js",
    "revision": "486134b5482fe43aa4b2aa71730bd789"
  },
  {
    "url": "assets/js/259.097462e2.js",
    "revision": "c940d73423d38f757c1bd577e4840286"
  },
  {
    "url": "assets/js/26.c4779c9d.js",
    "revision": "8cbe6119b074a1f12f97c47660f1c6ce"
  },
  {
    "url": "assets/js/260.6c11da54.js",
    "revision": "a3bb13a2c8033172e91fe98f130537a5"
  },
  {
    "url": "assets/js/261.454a1a38.js",
    "revision": "c8d6c6b2d1228924a423814ef6801a3d"
  },
  {
    "url": "assets/js/262.1060c5d1.js",
    "revision": "fcc8ef7317dad947ad71f6d05ac2dbf7"
  },
  {
    "url": "assets/js/263.940c7226.js",
    "revision": "6e0c0b3790b8cb71af15fc214e0d45ef"
  },
  {
    "url": "assets/js/264.b156e5d4.js",
    "revision": "39397784ed2d71dabb2838bb603145a4"
  },
  {
    "url": "assets/js/265.5e97f14c.js",
    "revision": "23f244d1752708754a8743305a653fc9"
  },
  {
    "url": "assets/js/266.9fea7e7f.js",
    "revision": "836e58be1282cba82cca5fd3619044af"
  },
  {
    "url": "assets/js/27.8cdca757.js",
    "revision": "e3d1f76e57821954269fdb5c2683143b"
  },
  {
    "url": "assets/js/28.f0a27207.js",
    "revision": "3bb5df4605b4783f12d71f3763eaf0da"
  },
  {
    "url": "assets/js/29.ac749706.js",
    "revision": "d2ca5dfa2853779bd629c8bd388659e6"
  },
  {
    "url": "assets/js/30.7ed8c3a1.js",
    "revision": "492e0552d1f3ee7c9dec0fae5856ddac"
  },
  {
    "url": "assets/js/31.369df6de.js",
    "revision": "b3846e107eace7f593cf3338c71f66d3"
  },
  {
    "url": "assets/js/32.f8fb7d56.js",
    "revision": "e3d55d491812f37c7d6c64c78ef06092"
  },
  {
    "url": "assets/js/33.0d2cad7d.js",
    "revision": "40daa738d7876ebce0c66069ff2b7f9c"
  },
  {
    "url": "assets/js/34.616afd8d.js",
    "revision": "4f7dbf2efc0049a13b9095e914a406ed"
  },
  {
    "url": "assets/js/35.27e24c34.js",
    "revision": "a997d4abe9aa1c95ef84bb01991d2d9a"
  },
  {
    "url": "assets/js/36.7172a51c.js",
    "revision": "28dd667942c52e588aaab67c459d73dc"
  },
  {
    "url": "assets/js/37.42abccbc.js",
    "revision": "c5a6343ab62cab8fe71b036db49049f8"
  },
  {
    "url": "assets/js/38.1706b171.js",
    "revision": "0f2f27e1281dd43ff2e0e47c532dd2e3"
  },
  {
    "url": "assets/js/39.44f866fe.js",
    "revision": "cd5ead28118d2d0904e8afbf1ddd490e"
  },
  {
    "url": "assets/js/4.39362421.js",
    "revision": "39c3cc7a5f423832ffd3ee3115a51b50"
  },
  {
    "url": "assets/js/40.4d06250c.js",
    "revision": "21e90f5e97cf8eca1da180ee39bbeee1"
  },
  {
    "url": "assets/js/41.f2e04dc4.js",
    "revision": "46b2a2828458b87659578ac991c66134"
  },
  {
    "url": "assets/js/42.6c4417e6.js",
    "revision": "0923bb0ad64645e032c5db84d8330cef"
  },
  {
    "url": "assets/js/43.9ddccc22.js",
    "revision": "98074508974915c83a153f45d2ead3ae"
  },
  {
    "url": "assets/js/44.22728351.js",
    "revision": "ac68183d1427027cd2530adf95ddd603"
  },
  {
    "url": "assets/js/45.2553ad77.js",
    "revision": "0a89002598eac4e06814702e515092c3"
  },
  {
    "url": "assets/js/46.301a8956.js",
    "revision": "0f5042d52d3811c6c6b367604e659ecf"
  },
  {
    "url": "assets/js/47.9dc430d1.js",
    "revision": "4bd21322d87c74a7496f0fdf0c8225e3"
  },
  {
    "url": "assets/js/48.81b88a07.js",
    "revision": "a459b6dbf5b58ab8d6b31d57fed73951"
  },
  {
    "url": "assets/js/49.0ef5c3fc.js",
    "revision": "0718d95271ce864051b98422cf1ee86d"
  },
  {
    "url": "assets/js/5.de6160bb.js",
    "revision": "a12ed22b01c440dbbe5aefb2c132158d"
  },
  {
    "url": "assets/js/50.c097b33d.js",
    "revision": "1e2c3b748c0117c11e63a515e84d546f"
  },
  {
    "url": "assets/js/51.917ce988.js",
    "revision": "c4ba59b05a0a7ca6cb2aa7ba3cbda5af"
  },
  {
    "url": "assets/js/52.bc689f38.js",
    "revision": "3a59ae2ab667b24d18f46ccf66bff169"
  },
  {
    "url": "assets/js/53.3300151b.js",
    "revision": "5364c16d8c529528fd37ac9292fa6e46"
  },
  {
    "url": "assets/js/54.cf96c016.js",
    "revision": "9cc5f1e3a014e872ec64537a719bd560"
  },
  {
    "url": "assets/js/55.e69ee65d.js",
    "revision": "b505a58a5b83884a762bbc3e50885c6b"
  },
  {
    "url": "assets/js/56.0123c903.js",
    "revision": "63630107aa5cb271861a80d008fe8038"
  },
  {
    "url": "assets/js/57.b9e5e675.js",
    "revision": "9d7fed23e0fc64532f28bf04e438ad11"
  },
  {
    "url": "assets/js/58.9f135373.js",
    "revision": "2808bf4b26d78a8cdb62bff07ef36ce3"
  },
  {
    "url": "assets/js/59.e5b51960.js",
    "revision": "0ffe3d273d03cd3dc05599071273bf00"
  },
  {
    "url": "assets/js/6.10b258ef.js",
    "revision": "c3d126ed2d8104e1324c997b57e09a61"
  },
  {
    "url": "assets/js/60.e5f95931.js",
    "revision": "3f1215866f6399183ced277df8824461"
  },
  {
    "url": "assets/js/61.c664ad36.js",
    "revision": "3ec21c2e62cd0399a2816811cd1525b2"
  },
  {
    "url": "assets/js/62.b0ae2033.js",
    "revision": "5042449f6ba9b374e51df06cc2e460f3"
  },
  {
    "url": "assets/js/63.e52d1ab6.js",
    "revision": "a6a755ea33713c663b327262c4598de6"
  },
  {
    "url": "assets/js/64.4e897e1a.js",
    "revision": "9cbe2ee80addc30be19fa012e29e9d58"
  },
  {
    "url": "assets/js/65.388f6bee.js",
    "revision": "7a36ffbc1deb44f38f2fce42bc705c7b"
  },
  {
    "url": "assets/js/66.ca19aa9d.js",
    "revision": "e524174bcb5524a4d3d901ad5c1aa52f"
  },
  {
    "url": "assets/js/67.f84a2855.js",
    "revision": "754ca670b606de7502c3565a5fc56a53"
  },
  {
    "url": "assets/js/68.dfc32ca7.js",
    "revision": "17bf527d60ad5adf0af0495e80808caa"
  },
  {
    "url": "assets/js/69.2caa647c.js",
    "revision": "c233613e64e8afde2d1588248cbc8072"
  },
  {
    "url": "assets/js/7.e5189acd.js",
    "revision": "05f95bbb1532de925185e1724d8e48a5"
  },
  {
    "url": "assets/js/70.9a67345f.js",
    "revision": "308fecfe0a002857aac8e1b107386033"
  },
  {
    "url": "assets/js/71.e04110ae.js",
    "revision": "747dbc6bd9db8864de0d2838f6e19a73"
  },
  {
    "url": "assets/js/72.def9e0d3.js",
    "revision": "d7131b2c8227a8027cae63e8f93ef4ef"
  },
  {
    "url": "assets/js/73.2449895a.js",
    "revision": "b62f01e4372c73c67fe34a6756d17ade"
  },
  {
    "url": "assets/js/74.ebd1a407.js",
    "revision": "4cb0cb33129edaeb50b62394283c9d74"
  },
  {
    "url": "assets/js/75.9973afd2.js",
    "revision": "067c6dee7e8358c003002d4d908d037d"
  },
  {
    "url": "assets/js/76.ca1b0b90.js",
    "revision": "0360881c085b38a5413730c3c9597c59"
  },
  {
    "url": "assets/js/77.52e9074b.js",
    "revision": "a319bb3cb82a8e3a24a7898fc5a284fc"
  },
  {
    "url": "assets/js/78.91b061cb.js",
    "revision": "7edd8babe8c6bd16575d62c6b1385b42"
  },
  {
    "url": "assets/js/79.78131e0b.js",
    "revision": "08f28287963100abb2ae3aa9bd6c2a99"
  },
  {
    "url": "assets/js/8.7610ad37.js",
    "revision": "1d22336c18401c4b7df0d9b278db9fa1"
  },
  {
    "url": "assets/js/80.157c0875.js",
    "revision": "2f1f102748c2cbb630ce92a117874ead"
  },
  {
    "url": "assets/js/81.02103026.js",
    "revision": "f55f836083ccb056e0b8baa79a7973af"
  },
  {
    "url": "assets/js/82.0d6dd085.js",
    "revision": "fe7f3d966dfb28ae1edc5b8f69eb8427"
  },
  {
    "url": "assets/js/83.c59cecc0.js",
    "revision": "d23cc75d0d4fe9ec5c4fe132ed6789d6"
  },
  {
    "url": "assets/js/84.ff31ff90.js",
    "revision": "a6d88b607fffc8cdebc7922ce267c367"
  },
  {
    "url": "assets/js/85.08752990.js",
    "revision": "c1ce5794c95e353a4e15f658c9a472c8"
  },
  {
    "url": "assets/js/86.f21c45d9.js",
    "revision": "85f6fc068b6bb25656b85312c4b9332d"
  },
  {
    "url": "assets/js/87.e6e0d8bc.js",
    "revision": "59ef9d7a559c22a2a8178313df675677"
  },
  {
    "url": "assets/js/88.9864a452.js",
    "revision": "e4e59fbf2cc412b14cdef82f46a6c0cb"
  },
  {
    "url": "assets/js/89.c4d53d1f.js",
    "revision": "d054929a41fe4b3b58e29b6fb7847058"
  },
  {
    "url": "assets/js/9.97f7b7f6.js",
    "revision": "8af731f4332f8bcee830adaed3cb4c60"
  },
  {
    "url": "assets/js/90.0cb47c1a.js",
    "revision": "4a4f74ce64e203ea7af8ad8f56d7b63c"
  },
  {
    "url": "assets/js/91.d5d63677.js",
    "revision": "765eb01cf0c0b915a159997726ec32a9"
  },
  {
    "url": "assets/js/92.13141978.js",
    "revision": "f9ca19ae2ee7c23b665f841df23414a9"
  },
  {
    "url": "assets/js/93.9a3d3ad1.js",
    "revision": "db27e23ce349f7d882489850539177ce"
  },
  {
    "url": "assets/js/94.e54ae538.js",
    "revision": "15da5e489f0e2325aca45e36410da36d"
  },
  {
    "url": "assets/js/95.82996d59.js",
    "revision": "f904bb0c97fc75fed7cfc59571f13403"
  },
  {
    "url": "assets/js/96.ae415e21.js",
    "revision": "9e2d872b9e9484047d82b7bbad67c89e"
  },
  {
    "url": "assets/js/97.e5ed6687.js",
    "revision": "ea7d6c507d583e4920054304e770ff79"
  },
  {
    "url": "assets/js/98.ee5d8216.js",
    "revision": "41271b578f8b81f3b7e4559b91209e87"
  },
  {
    "url": "assets/js/99.78a3a3ef.js",
    "revision": "871d0d6a269580e8bdca3155f92c8fc2"
  },
  {
    "url": "assets/js/app.20c2f6fe.js",
    "revision": "99c6b585d304a749f1db90bf196ccff2"
  },
  {
    "url": "categories/index.html",
    "revision": "fe08475fe4db9e03fc4e79d92c78cd2a"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "dccca78653e7198306e64b72f5faddfa"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "b3587d1a213f923f6fe6a065cac990de"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "2c1986d1be6ae4ec2495ab2dd3a9c41e"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "4f06fa037c29262e3472395e5556062a"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "b633183c116d02db7160c55863f83c11"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "166db56fa7f148c1f49b973ee369ad95"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "ca1996efa384f439926fc4aa13dfbf3b"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "9cff6b19f63e01313b15689ed7b62e6e"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "a547a3c2a3c009070609a9a7a7280264"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "c14c4bbe2da561ec883b189c2009b292"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "b3587d1a213f923f6fe6a065cac990de"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "c5d9a9a614aec6d3922238654d37fbcc"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "a66e905c91a55a16c9b5dc424d30d725"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "8db57a46915a894072223e59998bf7d1"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "8a572d9d308d654deec22808d3cc1eec"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "1cbe66115def9f09230c760e46340758"
  },
  {
    "url": "cs/database/index.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "d9f1269db1df0c978743a755bd1855de"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "9c07f93719efa05755c88b00587349c5"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "386f465a1266006eb9a1fde640cd069c"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "17f77d3ba82bb8ca659de072b9e945aa"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "3b814c5aa2b3ac5d27aecbf8e6227981"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "ee86c1dbb0aacb9f6450ddf1330a9cea"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "d7f1e26d81c7bbc76202e4e26b60633b"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "542404be8208933f54d19fd45c21df36"
  },
  {
    "url": "cs/design/command.html",
    "revision": "e59dd443da9701f31d70991e1b3270d3"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "4ccc72422097c400654df5d5b9c3c2ae"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "2f47ec4cdabaa6fa4380864a6ec44cd6"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "e6f5e3cfb13db0aeb03ef05bd201760f"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "75f028fdffc248ad11fbc3559afe8ac5"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "eef11044c4cd9d6c7f16f1be1a4577cb"
  },
  {
    "url": "cs/design/index.html",
    "revision": "6e5d7db9c565e34ac6a55978631dae00"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "3dd336f64412df3d98f35479999eb5b3"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "ed794634345d6e7930de37c8b900ed95"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "44ef06004d269cf63ca7471b7af5c324"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "a7f2f1afbf4212ca507e9bfea4488295"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "2e68eeeefb367f3bee62bd5c52c89c94"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "78ca9154639f31b2470370528a7cbec3"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "c99c4f9199e820389d8fafb28ec067e3"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "c61d98456c4660467ad714ba45dc547d"
  },
  {
    "url": "cs/design/state.html",
    "revision": "4e818119f82f74e98b1aa084dd029480"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "a9c0ae35648dc656f3a6d1f523a29ce7"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "462a1b1def673b9d97641609c959e349"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "f5ab90a900f77359655bfbfc610dac6b"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "141705dd3ff528fdd78c21f17f9717b0"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "743f0f026049bff95e865c31115bd864"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "b121ad10ab0e77e185c1c1a15efbb4fd"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "8b1e5fa607898a8cd4a26d401d010a40"
  },
  {
    "url": "cs/framework/vue3-reactivity.html",
    "revision": "27d65032450c35e112e9ec0f0d49782e"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "78ed1ee6326a4ec6b7edd7cd0ed13abc"
  },
  {
    "url": "cs/index.html",
    "revision": "09e0b6538d73472d0838cfbabdeb1dd0"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/java/container.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/java/index.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "7f9af6b473e30cd76092877d43fa82a5"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "f510f0a13bc420eecc42c0615d6fa8db"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "d5a73efad8d34650b66da5a824aea4c8"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "bdb025d5270a32f3e225f987d03e922b"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "9a963068f450a6c17e3ea46da014092c"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "835d4ba9b4d8c5d516e301d6656ad8d3"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "2924b91a7ad8567de4bea38ba8202438"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "c0747fe0745acd2fa9f7da93b8ccc441"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "b8c1617bd51ee80f3f6b7a5811fb109b"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "6db9374e5d5510afefd1f81a6de97490"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "e137b1d7ad9018b888ef32120a19302f"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "8e3b3b97bcdc88c9509d2873afefc371"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "16966a75814465666ce14f0c49002be9"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "d8d78928e7bcc543c2d3d7ffcb49d1c0"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "2e7f5ebbfab008beb31ec8e3617082be"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "dd82e4e88459287fbba5b04a390d95d7"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "279577d5b5fa1e42f822ab69139a3d28"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "6d1bae424e202d3a8c2fb5a724a68934"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "0c32924f9ca237e7f0ca87497d7d10eb"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "b6f1fb8f20776785c4bbfcf2db16acd6"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "f031bb952ca5859bbd35303ab6e2f081"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "b45899b5026d235d6a613a256353ac1a"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "7b5d0dafaca4dda2cfc7b77e53da00d0"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "2b516157c7a31391c9445bd472bbed42"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "ae878fead7a37e62eb6e7c59ba5ed511"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "8af36a1e1df1f7ca2c60a23822dbb111"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "fa5cc2a286ff25afd900cc3b8330c7b2"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "327adb11805238a21021930e41cd7527"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "f1389a3ec620cdc6648b705246202494"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "233d6e2718c70502ca2627ba54088deb"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "5327af0b03e19a4d44bcc5211ca2eafe"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "b4194f8d4f48921f9b1363d75792e788"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "d4dc193e34241dd2f04ff4b2b2608bca"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "e981019c8c28de52da86b89ee3580f4d"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "c7835bafa494c44141438c78bf934282"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "d05f4818810d1e372b32eb1188ec92cc"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "004e8a28d21d1b57830a2f88fa08f897"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "ebc775ebeba42cb35c7bd9d6e2a64080"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "31788811c112855e240b9c2fba7e94c6"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "faec9535e66603b5c59b9ad9191b9453"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "c6a7cb5449c4422daa52ba818131fea9"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "129b304370ce0b2185ddb74d7d608228"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "b590e103a76282ead250793455b9367b"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "78b57c779466fc86bcd4d845a0b09505"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "cda667b964f0375ee9cdcd052964434f"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "7da1bf38df1e6a1213612551a2279903"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "81a0d64a8c617bbe326a04f34c0af286"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "5a15131ed8d0667b8da76df45150c4b5"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "581818f70d541fea9933d19bd9b4722b"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "ceed24634055948996827f1f4b59cc6a"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "98236f308afd38f403e23a574ec33927"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "18babf691e41f55171fda5117774a67c"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "2d02d470f29470e556c1e0ee60ed0077"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "03bc154a0e5304ed60e307d28b74cd33"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "a5da38ff5a126ff0c8a49c60df78e453"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "b0067d93919ac5826fec4b1315e76336"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "a529e54eaaca01ed613deaddcda08282"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "d2582010c06fcd661071148a5f89ee43"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "dbfb7878309a8be04645fb8e8d0739c4"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "d77bb54516b8c2745ed6dc4fed74a24c"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "e40919ca694b85acc4eaf8b7587c9186"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "86e1c68cd39d034427ac4eb8716baf1d"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "ab0d7004eba3877c30f7d7cca3cb843a"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "9416266420e02dd4054c7a6adab47d54"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "7633a817fd9f3448d29c8e3436a2fc26"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "e0b81b0522ebf56f9205a05573b16745"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "fc224ba305dfdf6dcce627936d8ca90b"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "9a236895053a3dd1432d4b6d3377419a"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "48695a1949f920900ffb6d4c85884fa4"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "cab8e48150f9f1298f26a027e7986ae7"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "f6979ca53c8c5ea6d21af32965d1e096"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "4f6265c28acf7b01356e6193a4759b94"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "60174e967dbb799dc60ddeeff834dd46"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "db013cd394987c6cfe3e24c3c2f57dbf"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "d51b991a4ab7a74fdfff285178abb033"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "449173639339ebaf473ce7b5ee26c85d"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "43a3a76637a682aa16631a16ba7033ee"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "30405441076a3ff049adbea37c29e1ca"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "8996c23ebcb94086914d6be5e9350c49"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "4b0d08cd939b8c182f31232bd6f79c9e"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "9e281ba7cd1264b6a504d95b0bc59a5f"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "64561d3d4d15bfc561441fcb82b09270"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "d053ad949d9ef7b8345b5d1063d26076"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "6e4f118a25e8badb0ccb21e34b709a6f"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "78b57c779466fc86bcd4d845a0b09505"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "0b86d288ddc7e78b65d3183d1bd6b61b"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "adba55c1716cec12b6fa665a990a3784"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "b3587d1a213f923f6fe6a065cac990de"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "d11e5b28097a924112697666e50d97c8"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "7ec7359bcf9d9cdd685fb3d59cd25231"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "ede37707b25bc2a471568ae5bb5c2e3e"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "4622d054877673c820c4b14189803e08"
  },
  {
    "url": "cs/network/application.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "9b8c8b201a18fb8aa6fe3ca4b57560c3"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/network/index.html",
    "revision": "b3587d1a213f923f6fe6a065cac990de"
  },
  {
    "url": "cs/network/link.html",
    "revision": "d066ba0f9368c0fd44d04f8fee44cc09"
  },
  {
    "url": "cs/network/network.html",
    "revision": "c684decaa9766711809f36dde4bd6714"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "6f264459ea98061be86ce6e19255edb0"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "8b42081a9961071f17447138dac332d5"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "1179efd122f9d4eae033f12147e974b4"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "d4d4348777a1017be7eccf271f840500"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "12d86d6f158a8c32f62ed75595b0735f"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "b3587d1a213f923f6fe6a065cac990de"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "07d3765c25f6fccc4c88ada4158c244a"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "fd4ca4ec897abe44e88e6634ff169a41"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "a8448475e6768c87c0e92e125de23b2a"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "7e3d8960d875b78e4a27ee3d4e290ec0"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "7f9af6b473e30cd76092877d43fa82a5"
  },
  {
    "url": "cs/web/index.html",
    "revision": "d7df3c6effd4713f70e2a63af809c5ff"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "6afdfd0028086daf492e8f7444c46613"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "5f98a5763b5a10660a515a2b0dd0d1fb"
  },
  {
    "url": "cs/web/web.html",
    "revision": "e681ad53a8e1883d9e8b8f738cd469b7"
  },
  {
    "url": "daily-life/phone-lost.html",
    "revision": "3c73e39eca82062bb31f629821b3f79d"
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
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "1716a141015bc9452765a5a0ac1a33bc"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "9fdfb1852832c60da872ce7a1e97668b"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "2c0b802e3de5cd3b56f2e89de73809d2"
  },
  {
    "url": "language/english/differ.html",
    "revision": "010755336c0f0d7a2b48419c45dedd04"
  },
  {
    "url": "language/english/index.html",
    "revision": "f510f0a13bc420eecc42c0615d6fa8db"
  },
  {
    "url": "language/english/modal.html",
    "revision": "5c28532e8aeb4071d704604f279b630d"
  },
  {
    "url": "language/english/mood.html",
    "revision": "9ca1a96e6096b4814cfbe8637bd90f62"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "71b7e836cc43cec03486cc61878275ed"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "ecd3fe039e6315bc99dc2777a0a5b430"
  },
  {
    "url": "language/english/phonetic.html",
    "revision": "eb9eefdd80f79351f9cf218fb273d749"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "f01b678b7401a5f2fe442c1aa5656b34"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "9a90d4367be2ee5656c2c79e8b6b4438"
  },
  {
    "url": "language/english/tense.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "language/english/verb.html",
    "revision": "446fe66d8bf78839e82d24a59020c06e"
  },
  {
    "url": "language/index.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "tag/index.html",
    "revision": "c6d40aa79ebe0bcf86ec4a55561c2f7a"
  },
  {
    "url": "timeline/index.html",
    "revision": "55ca550a11b861fc87e6af6c6f5019e9"
  },
  {
    "url": "tools/chatgpt.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "tools/hash.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "tools/index.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
  },
  {
    "url": "tools/nothing-here-but-void.html",
    "revision": "eb08870b0f0a6c8e1b39e6d68902d2d8"
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
