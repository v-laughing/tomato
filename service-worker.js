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
    "revision": "586291c9d32578e3d8cba18b28f00a49"
  },
  {
    "url": "assets/css/0.styles.60a2aefd.css",
    "revision": "89e46e6089cdcb76319ea2d963a74ce3"
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
    "url": "assets/js/1.a89192aa.js",
    "revision": "704dc905a3b85d5d8ece5657d8ee3c42"
  },
  {
    "url": "assets/js/10.e9ff5e5b.js",
    "revision": "b98ac0194fc8eca49cf162bd33dbc1e5"
  },
  {
    "url": "assets/js/100.2ae1a3e4.js",
    "revision": "923852a47bdc20d8a9a8fc1ae1d7da65"
  },
  {
    "url": "assets/js/101.ac65f208.js",
    "revision": "eb021cb1b8eeed559feba9e56e881f78"
  },
  {
    "url": "assets/js/102.28353a5b.js",
    "revision": "79d4361162bbfb7a24ae00245dcc49fc"
  },
  {
    "url": "assets/js/103.6ba2360c.js",
    "revision": "06b21083865db1dad7dc51636f9f7ed2"
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
    "url": "assets/js/106.bd32da27.js",
    "revision": "7ee072b1aa39ec2ae128016a676bc7de"
  },
  {
    "url": "assets/js/107.0bf84291.js",
    "revision": "caf149c95e1a8a29bcf4fd258420e094"
  },
  {
    "url": "assets/js/108.fd6e76af.js",
    "revision": "2fc12b0c0a3af68314e3695db22443d6"
  },
  {
    "url": "assets/js/109.fa675a05.js",
    "revision": "2d21448a15907eefd47eb3d50d24edba"
  },
  {
    "url": "assets/js/11.69cb9650.js",
    "revision": "1efbd5efa68391feeb6861d6158746b2"
  },
  {
    "url": "assets/js/110.82bcfa90.js",
    "revision": "8fd29d60b8523e289cafbbeb6fb04001"
  },
  {
    "url": "assets/js/111.a0726ec6.js",
    "revision": "4d3e486a6d168274c8054bb069e93538"
  },
  {
    "url": "assets/js/112.c76ecf63.js",
    "revision": "0510c462466e1f7506ae7d94989f5cb3"
  },
  {
    "url": "assets/js/113.1422a0cb.js",
    "revision": "7f6e627f2c8dd1e51d8134845923eb1e"
  },
  {
    "url": "assets/js/114.d5e9d084.js",
    "revision": "16fce8b61b6d73d5fb847e6ae6466d21"
  },
  {
    "url": "assets/js/115.40d4f15c.js",
    "revision": "5f000d441af1c346176ead474210f487"
  },
  {
    "url": "assets/js/116.b81e6dad.js",
    "revision": "bff18f05e9228626460a7eb4bb19f724"
  },
  {
    "url": "assets/js/117.bdac53ac.js",
    "revision": "7101030c11b28dd65dd9c2d56ea3d788"
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
    "url": "assets/js/12.1c06e6c2.js",
    "revision": "87c0f1fe30e551c79b6a4ac7dec5bb6d"
  },
  {
    "url": "assets/js/120.7d7b8b2c.js",
    "revision": "c99df587c76fae0366aa9c8ec27eb15d"
  },
  {
    "url": "assets/js/121.760f62cd.js",
    "revision": "cdfe4190b39940c7f6c2d19b9a36485c"
  },
  {
    "url": "assets/js/122.78ff5d8d.js",
    "revision": "be11b489e699fbed6814c4b6d03b5a87"
  },
  {
    "url": "assets/js/123.ec051c9f.js",
    "revision": "323c30c5775c1e306b6d2a700c24e85c"
  },
  {
    "url": "assets/js/124.428042df.js",
    "revision": "48667d7238173cb2c8dc2f129fc85672"
  },
  {
    "url": "assets/js/125.f44156bc.js",
    "revision": "d6d6d10b59553ae7236b01d5a529cc60"
  },
  {
    "url": "assets/js/126.b3cb7410.js",
    "revision": "36d7fe5dae08a79dfb4c19cb21e1d7fb"
  },
  {
    "url": "assets/js/127.86056613.js",
    "revision": "41822e2ba3a3f89c3abfe180e5f1b8ed"
  },
  {
    "url": "assets/js/128.e513b82a.js",
    "revision": "06d149081e14d5a90331d45d9c69a89e"
  },
  {
    "url": "assets/js/129.0dda1b6e.js",
    "revision": "a442cd1032be1a31d793abf0a1fd07c6"
  },
  {
    "url": "assets/js/13.18b965b1.js",
    "revision": "82fabf1ad81896f9a589874ea1fd0165"
  },
  {
    "url": "assets/js/130.8236ba50.js",
    "revision": "df75884862c561d3b07e9451978ce147"
  },
  {
    "url": "assets/js/131.93684281.js",
    "revision": "09e2b5aa4a3eb8362999d840167dbea6"
  },
  {
    "url": "assets/js/132.7bfec447.js",
    "revision": "e3a31464669ae62498876cac33017253"
  },
  {
    "url": "assets/js/133.24e8626c.js",
    "revision": "df2e52ab66bbce0c08a7b12c4f57beb8"
  },
  {
    "url": "assets/js/134.69bae0a1.js",
    "revision": "716bbd7f27d2d5434095e0031b4a45f3"
  },
  {
    "url": "assets/js/135.44514a57.js",
    "revision": "f8c228d4f61cba251d37669ea02ba99f"
  },
  {
    "url": "assets/js/136.ecf6f6a4.js",
    "revision": "cf1a368dc384d658f63dcf6026ca0878"
  },
  {
    "url": "assets/js/137.0ee4bd5e.js",
    "revision": "443ae823e14fd4b3146cc8bdc1cc50dd"
  },
  {
    "url": "assets/js/138.a704ec6b.js",
    "revision": "751b99fa9c651c81d77e74569df2a8c1"
  },
  {
    "url": "assets/js/139.9a239f81.js",
    "revision": "74018114c9d0bdb1c2e0262655bca427"
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
    "url": "assets/js/141.da08ded6.js",
    "revision": "0176d68a0ae0806e9b102f948ff249f5"
  },
  {
    "url": "assets/js/142.dd27816d.js",
    "revision": "85756c0d3a1c0be4c1397cddc38f1168"
  },
  {
    "url": "assets/js/143.940fe882.js",
    "revision": "1f01f818cb84721ebf635fcde5c86789"
  },
  {
    "url": "assets/js/144.cad93a85.js",
    "revision": "f2b6fd6a8666cde81daea129a7d65f6e"
  },
  {
    "url": "assets/js/145.64b0cd81.js",
    "revision": "84b4405ff2c95da062273f3ac05fb9e4"
  },
  {
    "url": "assets/js/146.ea0603ac.js",
    "revision": "0dbf0bd7def7e3179d01ffe1b3adec35"
  },
  {
    "url": "assets/js/147.5b9b7521.js",
    "revision": "c73a237c1809a1de7ae200484ae6490c"
  },
  {
    "url": "assets/js/148.a268616f.js",
    "revision": "7815ab14dea4982d8c09e7ea1a99144d"
  },
  {
    "url": "assets/js/149.b77782fe.js",
    "revision": "5c6dda3f94e783a5b31357dced1c3985"
  },
  {
    "url": "assets/js/15.69af331e.js",
    "revision": "c6f9211c2e952554cfa05d426edbc300"
  },
  {
    "url": "assets/js/150.2f64d049.js",
    "revision": "90b941ce005e85ca42640d214beb09ce"
  },
  {
    "url": "assets/js/151.e943bb66.js",
    "revision": "5731d289535d50629098205e8f95330c"
  },
  {
    "url": "assets/js/152.db4b5401.js",
    "revision": "461f9f798e1939f598890ddd990807c5"
  },
  {
    "url": "assets/js/153.bd012d68.js",
    "revision": "53d5570cd0a2601d7abcb39c44ce1f75"
  },
  {
    "url": "assets/js/154.792d20ee.js",
    "revision": "8402665fb5e2359b5ed23e5e027cda25"
  },
  {
    "url": "assets/js/155.f4ca698f.js",
    "revision": "91dee54897307f1dbc71d78055a43140"
  },
  {
    "url": "assets/js/156.444d18c0.js",
    "revision": "fb5e46f259a0418b953386a55bac0caf"
  },
  {
    "url": "assets/js/157.edea7d01.js",
    "revision": "e30656dd8d1b434f33c209e09c7472ef"
  },
  {
    "url": "assets/js/158.e163e575.js",
    "revision": "d1cb27cb56458b736140711222ac9d22"
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
    "url": "assets/js/162.84477790.js",
    "revision": "8d6997df19b9def372208bee6adf8ec6"
  },
  {
    "url": "assets/js/163.ed8aad09.js",
    "revision": "c40a580311e28a1f6ab46ebe5777f22a"
  },
  {
    "url": "assets/js/164.d7882361.js",
    "revision": "9f0f1caec2ca6761c4d573f6bb6de40e"
  },
  {
    "url": "assets/js/165.cc2119e4.js",
    "revision": "e0e735b5f5b8853e3cf817e32aa9564a"
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
    "url": "assets/js/168.bd44734c.js",
    "revision": "7982f5924c2229ee4a274b42097423d0"
  },
  {
    "url": "assets/js/169.ef913692.js",
    "revision": "c7c2f25d4e31ff3164b1631b66c10a1e"
  },
  {
    "url": "assets/js/17.18e14a9c.js",
    "revision": "2a3f73085a2b30a335436301d8f42901"
  },
  {
    "url": "assets/js/170.90e23fc5.js",
    "revision": "8f0ce30075830789c453bd1d25ab05c2"
  },
  {
    "url": "assets/js/171.1760c88c.js",
    "revision": "9db4220f71fb62eeb80b499d5d832524"
  },
  {
    "url": "assets/js/172.276e25f4.js",
    "revision": "29eb1ea596e5a18eabe90da8c4afa21b"
  },
  {
    "url": "assets/js/173.121025bb.js",
    "revision": "6b1a8c5c9ff84ccc53a900fc4b8acf7b"
  },
  {
    "url": "assets/js/174.3b5016f2.js",
    "revision": "dc73af1828df6f16fb0f64f6fbb4f521"
  },
  {
    "url": "assets/js/175.a3fe5ce5.js",
    "revision": "9fc7de1da217411d5b1979932ffdba2c"
  },
  {
    "url": "assets/js/176.333ecefa.js",
    "revision": "245918eb57cb64bbbe091dae1aa83527"
  },
  {
    "url": "assets/js/177.1508d4a5.js",
    "revision": "d977089a24feff5f24b5bbd06553b139"
  },
  {
    "url": "assets/js/178.e613c61a.js",
    "revision": "e6df1599a1ecf3db6ce1a2f5724fdfdd"
  },
  {
    "url": "assets/js/179.2ff8c442.js",
    "revision": "93095a92f0e70e3be158f135eda9a835"
  },
  {
    "url": "assets/js/18.21739774.js",
    "revision": "6e6c021325d64826c1d64959bba9d49e"
  },
  {
    "url": "assets/js/180.12da93a8.js",
    "revision": "8c569ebb6539295b444a6ea6db031752"
  },
  {
    "url": "assets/js/181.2ee37877.js",
    "revision": "0420d9143722b4595f78e93ebb199812"
  },
  {
    "url": "assets/js/182.14b4045e.js",
    "revision": "4b005a0471b06fe6e0688e3d2c9e5417"
  },
  {
    "url": "assets/js/183.285cf4a6.js",
    "revision": "c0600c88b08d51b9d3ea0cc43ea0ef58"
  },
  {
    "url": "assets/js/184.1834c6c7.js",
    "revision": "2ca0204c494a18a28a5d7fdd5e521e36"
  },
  {
    "url": "assets/js/185.403df42f.js",
    "revision": "39f914ed03f1035242f5719b36d30147"
  },
  {
    "url": "assets/js/186.d8dbe705.js",
    "revision": "0f4df3b0513a579e74eda8f18557e3fa"
  },
  {
    "url": "assets/js/187.fc95b18d.js",
    "revision": "f451112eb33d3e8720a479ea056616e7"
  },
  {
    "url": "assets/js/188.c1d94d2e.js",
    "revision": "bbba933c84ec89def392ad55dfa13eef"
  },
  {
    "url": "assets/js/189.21a4b396.js",
    "revision": "fb752151bf32713d11e213775128bfd2"
  },
  {
    "url": "assets/js/19.4a99a4bf.js",
    "revision": "b7e55a4c01824d9cfe3b400654539168"
  },
  {
    "url": "assets/js/190.ab599409.js",
    "revision": "02ff602db7cb17e43eb8dc4496c0b2c0"
  },
  {
    "url": "assets/js/191.c2116698.js",
    "revision": "93833f6321da388dfc33242fff912749"
  },
  {
    "url": "assets/js/192.524e13ce.js",
    "revision": "6b5d0ccb583b48429a48232101fde49a"
  },
  {
    "url": "assets/js/193.98205c30.js",
    "revision": "1841758037bfe338fa84454326e0e5c4"
  },
  {
    "url": "assets/js/194.aeab66fd.js",
    "revision": "db78a8231453084bd8abd379c49dfcf7"
  },
  {
    "url": "assets/js/195.44af8582.js",
    "revision": "c8d9a712def55f3dd01061c4d8309103"
  },
  {
    "url": "assets/js/196.94a90d12.js",
    "revision": "0a3bc4ab21f6157f1c70eedef4598767"
  },
  {
    "url": "assets/js/197.00d06552.js",
    "revision": "c9a1bdf690e8aa11ec1bc78b6fa214c3"
  },
  {
    "url": "assets/js/198.ee51bb1c.js",
    "revision": "ecf58a29078b35e7fbf31d3e2b1730df"
  },
  {
    "url": "assets/js/199.f88c316b.js",
    "revision": "1c8ef3a254e7b2c5d311e6ae41ec2199"
  },
  {
    "url": "assets/js/2.df0a64b7.js",
    "revision": "d3d7d8d4b182ba2ba13cd1e7478931c7"
  },
  {
    "url": "assets/js/20.e10c641b.js",
    "revision": "8597f636dc0dde2287bf8cd25034fd5c"
  },
  {
    "url": "assets/js/200.c6d33b5f.js",
    "revision": "d993b6247b2a18592919af7c432cf452"
  },
  {
    "url": "assets/js/201.4ab4c438.js",
    "revision": "b3578ffb070ee1658b2a5f54555dd0be"
  },
  {
    "url": "assets/js/202.bf572247.js",
    "revision": "ccd633f4e3817d21257db966309bf4ae"
  },
  {
    "url": "assets/js/203.fa11109b.js",
    "revision": "a05944982ac2ba38f766c998a6e23a7d"
  },
  {
    "url": "assets/js/204.22fae269.js",
    "revision": "6659fdc578c0debc5cc29ba80b72fb12"
  },
  {
    "url": "assets/js/205.5aa218e1.js",
    "revision": "fa4eb4b8b43d9407c0f4d5cf636dc048"
  },
  {
    "url": "assets/js/206.84cc2086.js",
    "revision": "397cb5ceeacfb7a56e124d6e64809416"
  },
  {
    "url": "assets/js/207.6a296537.js",
    "revision": "a0be95afc7a4666503951f136a70d594"
  },
  {
    "url": "assets/js/208.6d897c35.js",
    "revision": "d827912d5b7f92f081e07efcb4d8263b"
  },
  {
    "url": "assets/js/209.2618c7d6.js",
    "revision": "bbb638b78fc3f425800e31c8406cb5a5"
  },
  {
    "url": "assets/js/21.59b95c0d.js",
    "revision": "cd985f1584e580f631d55b1667f5f4db"
  },
  {
    "url": "assets/js/210.35f746ed.js",
    "revision": "3ca7c0db23b00851e09c2005b2421ee9"
  },
  {
    "url": "assets/js/211.ebdc6c97.js",
    "revision": "3cbcd5c5af2fb7c52da706d562ae2246"
  },
  {
    "url": "assets/js/212.2a088ced.js",
    "revision": "fcab8c07b89d2ecca763736ab88bebf9"
  },
  {
    "url": "assets/js/213.6f326114.js",
    "revision": "142a55f6de71426f26b86bc1725f940f"
  },
  {
    "url": "assets/js/214.88327d6e.js",
    "revision": "c238a48e1f7edbcc6dbc77cd070fa089"
  },
  {
    "url": "assets/js/215.9f0a9683.js",
    "revision": "7732c5d2519e20ae000473471c767961"
  },
  {
    "url": "assets/js/216.87eca3d5.js",
    "revision": "21532cceb378e44e795048469ca3cc50"
  },
  {
    "url": "assets/js/217.253842f3.js",
    "revision": "b1d8505e26abf69de272843089fbe9c7"
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
    "url": "assets/js/22.8e4b7218.js",
    "revision": "b941f3364944162b02e023c3cfa3a7b4"
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
    "url": "assets/js/222.393b2d2a.js",
    "revision": "9ca135c85762f3ac797c3abd48929911"
  },
  {
    "url": "assets/js/223.41efc382.js",
    "revision": "2a39ddb11e649129c4e18138206c1195"
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
    "url": "assets/js/228.d8227051.js",
    "revision": "7f954b4888f7af7dbc70c36ccb15342d"
  },
  {
    "url": "assets/js/229.fad2b81c.js",
    "revision": "baad2904b8f4ffef4b398d1034cb0140"
  },
  {
    "url": "assets/js/23.80862d45.js",
    "revision": "2f962f3b170b15bd1d749a8b680a8f3b"
  },
  {
    "url": "assets/js/230.9f40186e.js",
    "revision": "c46ca4cde8bab9bb7ddaf108c8848745"
  },
  {
    "url": "assets/js/231.9b3ea6a1.js",
    "revision": "1a7300c390e8d01228f889559ed34bdb"
  },
  {
    "url": "assets/js/232.be35d0a0.js",
    "revision": "140b46b85a51008f68adb91743e555f9"
  },
  {
    "url": "assets/js/233.746d3834.js",
    "revision": "d052d1e6773994b8762416bc41525af2"
  },
  {
    "url": "assets/js/234.eaf0e879.js",
    "revision": "bab015c7c7ba227ec3376bce4908adcc"
  },
  {
    "url": "assets/js/235.b46af0c3.js",
    "revision": "5216f30d963ac27d3f8860fe6dd6aebb"
  },
  {
    "url": "assets/js/236.378313ec.js",
    "revision": "f1018ce6aed9065c5dd7e1d78393a8b1"
  },
  {
    "url": "assets/js/237.8a8b5209.js",
    "revision": "23206b279c9d9b40f1685ca70b260836"
  },
  {
    "url": "assets/js/238.f37ed8bb.js",
    "revision": "1f260f5e2d193321a58a6e7f46a03fda"
  },
  {
    "url": "assets/js/239.8fa35793.js",
    "revision": "89d52b694317618ab1f76886fdc4f952"
  },
  {
    "url": "assets/js/24.f6db1567.js",
    "revision": "86279bc975c93c4c180c507467e8b3bc"
  },
  {
    "url": "assets/js/240.fb2974e1.js",
    "revision": "46b48dd41a3a9cc95ace0dc4dad87ba3"
  },
  {
    "url": "assets/js/241.9063b096.js",
    "revision": "4502590e91f6c011618f753d8c303aee"
  },
  {
    "url": "assets/js/242.8a5184d0.js",
    "revision": "1f73685269c91f8751c1034a68bfc158"
  },
  {
    "url": "assets/js/243.dba5cac4.js",
    "revision": "9522a6d8c3190f693b4ccdc0904511aa"
  },
  {
    "url": "assets/js/244.97a74017.js",
    "revision": "9d9214a961118b6b152f48c36f63c575"
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
    "url": "assets/js/25.ecade7e9.js",
    "revision": "c26bd7cb8544f32b1e96f520c3193a1e"
  },
  {
    "url": "assets/js/250.9bef9191.js",
    "revision": "65ebcf9bb14a6b9b1fe8a23fb09da4ac"
  },
  {
    "url": "assets/js/251.7a9de4ca.js",
    "revision": "9e33103daa6f8d771aafe84e8241e4da"
  },
  {
    "url": "assets/js/252.a443150d.js",
    "revision": "f13c4927445ed19d77d7c864a01cb905"
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
    "url": "assets/js/26.32c0f538.js",
    "revision": "fe485c37e51cb1df2d87b5ac32a58ce0"
  },
  {
    "url": "assets/js/260.ea777bef.js",
    "revision": "c3cf28faf46b05cc596b0085b87b4117"
  },
  {
    "url": "assets/js/261.fb955a28.js",
    "revision": "f81b49a7cb504cfd496c3e2c28010208"
  },
  {
    "url": "assets/js/262.5100062c.js",
    "revision": "b485c8d0ae045a5e9e199e80a44d624a"
  },
  {
    "url": "assets/js/263.82446947.js",
    "revision": "c60fed5d489990d22197734add45b6e6"
  },
  {
    "url": "assets/js/264.00f69c6b.js",
    "revision": "ebf46953cf97709b571c2b27da387988"
  },
  {
    "url": "assets/js/265.0ad8a7b5.js",
    "revision": "968a8b9a6c53aec040c7fe9d3aeabe3a"
  },
  {
    "url": "assets/js/266.37b177db.js",
    "revision": "8bfd48ddf7e01d1b9c96afd480105006"
  },
  {
    "url": "assets/js/267.e05e832c.js",
    "revision": "51a5c79c20b64ccbf166a127d7d696e7"
  },
  {
    "url": "assets/js/268.1cad3e94.js",
    "revision": "f6694cfa5a95047dd832c03ef5c82a0d"
  },
  {
    "url": "assets/js/27.654992d2.js",
    "revision": "bda5ee4ec6d9d7ea96a16544e913e153"
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
    "url": "assets/js/31.e8a4f7d3.js",
    "revision": "7f95c495af0dd05f98769bc40c514537"
  },
  {
    "url": "assets/js/32.a9530951.js",
    "revision": "128d3d8898ff1e80545d7d6873e6e882"
  },
  {
    "url": "assets/js/33.b52d6b2b.js",
    "revision": "f0125aa426070154fbdcc516a58b2f5d"
  },
  {
    "url": "assets/js/34.0ba3f6ca.js",
    "revision": "d9720d6b41f48eb4e3354e6e357feb7d"
  },
  {
    "url": "assets/js/35.e1696c2f.js",
    "revision": "96ee2ba924581ba852f73dd5004934c5"
  },
  {
    "url": "assets/js/36.8e4e4344.js",
    "revision": "f2577507e2e0c8ddcda22618712717ec"
  },
  {
    "url": "assets/js/37.c37a8e45.js",
    "revision": "000934aeb85d93bd76dcd9876bd2f75b"
  },
  {
    "url": "assets/js/38.930aa910.js",
    "revision": "c7ae6e4f602ae441abe2dd4b219c0fb3"
  },
  {
    "url": "assets/js/39.de73a800.js",
    "revision": "e0900d662850db6f624ab32ca2a8259e"
  },
  {
    "url": "assets/js/4.e3f9bb1c.js",
    "revision": "ffff2f3af1b3765b1f06d1d1afd4621c"
  },
  {
    "url": "assets/js/40.4c3f44f0.js",
    "revision": "247683e257a497ca94da36512585d85c"
  },
  {
    "url": "assets/js/41.10370b59.js",
    "revision": "707830f1d3686967641979261ed92e91"
  },
  {
    "url": "assets/js/42.06c4a2bb.js",
    "revision": "9625265713df7947d9622e33d0db32c1"
  },
  {
    "url": "assets/js/43.cb1e2bde.js",
    "revision": "d234e7cdf12423cf660f3a9b41cf27aa"
  },
  {
    "url": "assets/js/44.2ad31292.js",
    "revision": "673fe92e7f7629e806d04d94c388458a"
  },
  {
    "url": "assets/js/45.63602c56.js",
    "revision": "b44bcf64f92b6ca3fb8d5f8b5f9ca473"
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
    "url": "assets/js/48.ffcb0fe3.js",
    "revision": "367595767e7b508b4e902e52f846ab30"
  },
  {
    "url": "assets/js/49.1a437ad7.js",
    "revision": "f632053ae6c2ed9c77dfffc7a716c8d2"
  },
  {
    "url": "assets/js/5.a2dda00f.js",
    "revision": "1e1842140e3a56666ff879f4fc17ac27"
  },
  {
    "url": "assets/js/50.1cf1c0db.js",
    "revision": "072c5ac9e92dbf0ea0d2ae004b5b9dcc"
  },
  {
    "url": "assets/js/51.2d98baea.js",
    "revision": "0af17b9f9f900fe5581709e6169c3157"
  },
  {
    "url": "assets/js/52.7ce05f8f.js",
    "revision": "543d45e2a00c90e1820ed4e99e2575ba"
  },
  {
    "url": "assets/js/53.8efeb6fa.js",
    "revision": "23e0524bdcf1e16a7f6bad7a4ebf09e2"
  },
  {
    "url": "assets/js/54.b4bf55cb.js",
    "revision": "fe0d7c1e48a321324bf4e18fa65f725a"
  },
  {
    "url": "assets/js/55.df926923.js",
    "revision": "4fe3f58817cd17c1d9bb04e084522de7"
  },
  {
    "url": "assets/js/56.2dd2bedc.js",
    "revision": "d6e3eb18318a50235e3079003bc5cc88"
  },
  {
    "url": "assets/js/57.d239a334.js",
    "revision": "157d2ae86eb0b33856805f2b55e11610"
  },
  {
    "url": "assets/js/58.c6bc4535.js",
    "revision": "27723fb544c666bf89009cbe089d0866"
  },
  {
    "url": "assets/js/59.1fb5eb85.js",
    "revision": "505099aa95852f6b3f83b4bd86ec0841"
  },
  {
    "url": "assets/js/6.f075cc5a.js",
    "revision": "235461252d2f247a9c94b37b6fef5649"
  },
  {
    "url": "assets/js/60.f4717670.js",
    "revision": "fa86cf1f9eb9a88d4f537dbfd0966ce4"
  },
  {
    "url": "assets/js/61.2a2599b5.js",
    "revision": "e27499cf596161fc583d4de22ec77e56"
  },
  {
    "url": "assets/js/62.84a4019f.js",
    "revision": "611ded105d247e043e9f1ee39ba9a65c"
  },
  {
    "url": "assets/js/63.0abd2f4c.js",
    "revision": "231d6eaab755b0e19f46d95873dd4370"
  },
  {
    "url": "assets/js/64.13866d2d.js",
    "revision": "9f1f99d15eb48e28cb4e111934cc9115"
  },
  {
    "url": "assets/js/65.d867efb3.js",
    "revision": "6f61b30a8da8e67cae1fb32e9f4ec2b3"
  },
  {
    "url": "assets/js/66.0aab4658.js",
    "revision": "e754394ca6f878e559bd8fbcc323b2d3"
  },
  {
    "url": "assets/js/67.4e42d55f.js",
    "revision": "31fb558df33990e56e3ff68875370339"
  },
  {
    "url": "assets/js/68.d9b34fd1.js",
    "revision": "1bad4031bc897efd3d956a24032962c1"
  },
  {
    "url": "assets/js/69.5801e333.js",
    "revision": "de7c97f95f9b4cfbe6c46ce054c232b8"
  },
  {
    "url": "assets/js/7.b9d96109.js",
    "revision": "c9669b4e3fa56057d7eaf509c996906b"
  },
  {
    "url": "assets/js/70.f42d422a.js",
    "revision": "53b032f4b5c545d5c66e78b4b29f70e5"
  },
  {
    "url": "assets/js/71.687299dd.js",
    "revision": "64c52f9dd0e0c42c32aa8750cd1426f8"
  },
  {
    "url": "assets/js/72.8b2d95a2.js",
    "revision": "25cae7fb718c13d77a60dd06cd94b58a"
  },
  {
    "url": "assets/js/73.f66ea52c.js",
    "revision": "0af984312e14f547e2e214531a63959b"
  },
  {
    "url": "assets/js/74.4fae4bee.js",
    "revision": "daf2eeae886e304d1b6a883045449349"
  },
  {
    "url": "assets/js/75.21b2a364.js",
    "revision": "eebd05064f3c4c7166329ac260983f48"
  },
  {
    "url": "assets/js/76.96a28600.js",
    "revision": "a395ee1a554224de367afaba205d765d"
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
    "url": "assets/js/79.b8e309d8.js",
    "revision": "80e0d21817a1b77f421ae0f543f0bffc"
  },
  {
    "url": "assets/js/8.ee606630.js",
    "revision": "0757bde56b5762cc8a67220764e08b9a"
  },
  {
    "url": "assets/js/80.09b49a73.js",
    "revision": "08913b4ed315c36a7cc9f86be72df906"
  },
  {
    "url": "assets/js/81.bb2dff7a.js",
    "revision": "6053f037b90dd8a5c93d23cfdc4ab718"
  },
  {
    "url": "assets/js/82.6b8fe916.js",
    "revision": "41fbdfa1515bcc719d073bd01b20c5f3"
  },
  {
    "url": "assets/js/83.4c509814.js",
    "revision": "fc3e2669da866cea51b556929e4f0f17"
  },
  {
    "url": "assets/js/84.8ab51a6d.js",
    "revision": "cadce865ec8d1f3c125668617e473907"
  },
  {
    "url": "assets/js/85.5f755057.js",
    "revision": "490b3b32b6a750a1f9fa153e1e08dc29"
  },
  {
    "url": "assets/js/86.94faa527.js",
    "revision": "ba6cbce3529a2469ba9f2d02fe151531"
  },
  {
    "url": "assets/js/87.8723752b.js",
    "revision": "42d62a7cbdae5a100f896674697f6c1d"
  },
  {
    "url": "assets/js/88.2fc329d1.js",
    "revision": "d214dc34ddadc0f10517e81e3028413a"
  },
  {
    "url": "assets/js/89.2faf6554.js",
    "revision": "2df018940a4a82ae8b806b2201bf84fc"
  },
  {
    "url": "assets/js/9.833696c1.js",
    "revision": "06391e1179f426a6c7d4053d9a7a44df"
  },
  {
    "url": "assets/js/90.a7feacac.js",
    "revision": "05477526aa06f47a354697927b37d3c0"
  },
  {
    "url": "assets/js/91.e4badcea.js",
    "revision": "356ebd9c8982e011996ae17eed7791d6"
  },
  {
    "url": "assets/js/92.307293f7.js",
    "revision": "aea5c9baf0a8843ca013c802a7cd94bb"
  },
  {
    "url": "assets/js/93.b7360735.js",
    "revision": "c77ca47c445e2ca62cc237a0a63c7404"
  },
  {
    "url": "assets/js/94.0095ade1.js",
    "revision": "da24871a6ebaf45c54cbde25730cc5d0"
  },
  {
    "url": "assets/js/95.4594717e.js",
    "revision": "31f564d4ade42efcf1d85c252027894e"
  },
  {
    "url": "assets/js/96.73703580.js",
    "revision": "5d8067118bd85ba086d9c8cff59c3409"
  },
  {
    "url": "assets/js/97.fd291da0.js",
    "revision": "da27f3394370734ee597290773e41692"
  },
  {
    "url": "assets/js/98.d5ca8723.js",
    "revision": "7ced425bffb68ee35c30e2c887714156"
  },
  {
    "url": "assets/js/99.e72f743d.js",
    "revision": "1c541aa54274d238a2e6c79c9af4ca5a"
  },
  {
    "url": "assets/js/app.81ee9297.js",
    "revision": "8b8a522f7eb86c799e508fe6af0bef50"
  },
  {
    "url": "categories/index.html",
    "revision": "8fb864aa28f15f7a073327af26a7fb95"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "7511b637df7fd596ffd1a5669ca34b69"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "93523ee6ed9ae9594e37554fd41e47c7"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "f24b900b2031ca46ae20c72c955fb854"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "fa123f722c02d383774567f78c4a1739"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "e1cb63694ca929ec60c1ac8dd85e6baa"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "2b485766f24b101b08d6fadafbaf0aaa"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "42ec3433bc20a3e0e28f7b9f2532722c"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "24fb188ec8283f99f3428d8c3afaebce"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "8dd3d7c047ecf0a576c501dd0e2e3811"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "37db33bba8ccebc89bed86d2685e385b"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "93523ee6ed9ae9594e37554fd41e47c7"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "4cc8609c074d274da3b50c0b85c20007"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "439208195c8dff8f4d40484ea7383aae"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "4d41fbd925ecd18b75412c7b964db09c"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "de9dc5ecbe2e03f68de7fefaeff5f7f0"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "daaaa1d3e75bbcc7a61aa4f0fb5a4e0b"
  },
  {
    "url": "cs/database/index.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "a763ca6c09e1904d05ddd9ca2fb5ffd4"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "96136c68630506f6b61a0c438b66c405"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "c8aa4d213e3284d4a49e9d58c208de3f"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "9e60fcb9c833c94c0ef68d866e14fa7b"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "c75b1a880baa70443bdc4f61fdd3a690"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "3652240e195fb8de4c8ae38a169e89b4"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "6759f781e4255f603157733ba5e9f4e4"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "c08da785db745f9ca09a9b019e6e835d"
  },
  {
    "url": "cs/design/command.html",
    "revision": "b88a5ea78626893f48ab71476caf867d"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "1d0df58c58f5fb5cb597b26675a64e4b"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "92ad4e0962d0b84607a3dfeeee722975"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "1791e025e8d7e7611ce73274a8818f7f"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "a19f9049b20eeccad4cfd4a7728bc29d"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "ff03594aa9c5ed3845b12294539ea2ed"
  },
  {
    "url": "cs/design/index.html",
    "revision": "dc8b18b110815dd3a94fe8c45eb88d17"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "ce585f45841398d547a4bcd5c749c57e"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "1f8e387415d5f75050cb44ed275a09e4"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "e97e81d616f8ef480f7decad6012eb8d"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "4ab2c25cb40b680dd644498dfc77a66d"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "7a182d7bf7f0cca19ab67de46cd89a83"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "d60765df051c4a6a92ba1b52c06a0a94"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "23fb1dc8cbbaf33de412e1726929e1ba"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "059e5bcd115002c91a9b023815f466a2"
  },
  {
    "url": "cs/design/state.html",
    "revision": "badeca3e6a4212d5eab4858a805307f6"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "b454d53c38e5ca2181b499e1040525ec"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "a706cf543a478f708b4a03616353ef20"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "3e0429ce4be221012c282a8dbc3d9db6"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "6e531a8354a855c96e79e2aa307b3a54"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "f8110116991039f945af6ca75fd28b3e"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "61597b386b9306b5c4bdb623ae7553dc"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "d909dabf2e0882d1524d67d3ee842663"
  },
  {
    "url": "cs/framework/vue3-reactivity.html",
    "revision": "4a4d5bcb51485bb8dcc97ce0fd3b556d"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "75db2ea6b80d96db335a70a1088a9c32"
  },
  {
    "url": "cs/index.html",
    "revision": "e99b910118d701e9aa960fa142f3ff02"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/java/container.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/java/index.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "a08d0a7f1f77c0b0873d25e5eb1a75ad"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "f4be587820a90002ee10b9fb5d6b91d0"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "a310c7531979ff057c7ee5ee6e965007"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "211e72ebc10aec188c114a8f208a64f6"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "be2d71e6575760b28702df2a24b91034"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "3aaa6e7e6c41f7afdb90182a9237413f"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "58d05d5c21637741367a5b40e71fe89d"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "a4118421d07a2ea9ee658063c41dc677"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "65f9b85ca661ba2073269bc7b28cceec"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "871138c14a776f35e4f036f2a83d221d"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "dc63597f67f3c99c0ab8ab6379353678"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "95fe5a62716f2c51cb06c3c9724e8b8f"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "f7dfc525bf70f8405216ff900fe6686f"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "d80198f3e91ca607d76f87a582a6406c"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "20f8a6cb92f92a24417e17f199c4f4ad"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "908dbec46b69a26bce969f396be94135"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "cf99f56aff908fd5237968dbdb09489a"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "369c2d17436b3e01eb691641a468931c"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "16ad872fc3dc313f16fd708d27519fd6"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "d7e484d13b8d14e02d53b16bda6324dc"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "b8f16550da440aebf956f2ebe62c47d8"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "1b9ae0c40332d84f8dedc19ba17cc98c"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "619b170bc7f04df9b96aeaa7d63d945a"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "760d2aa1971083e18b99ae6272105d0e"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "173780c6d10751e7b158d2819521349f"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "16e2a19c11f3bf24dd2d91e5667abb3f"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "07c9f8a8baf3d8de670be42ded96b3d7"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "1c29f8f55ae4ea4b2f24977838075072"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "7bf7ab56a061255c0a51e1a231cca98b"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "b9ab68a346e62af7b6e8abe82a0ac26a"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "e2f59259b7825cddd55e9c3d1d5a9caa"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "29dbe724ea01de69d4fc6929018fe47a"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "41658e45d1f7c38e7ac322695304d8f6"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "25598a54e2ea9b59dfd38ae99894bfe1"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "65e9d1697b6c074436e73056c4a6f40b"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "97d2df883303b6feb65b35f37e10c8a6"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "165ecb5086596ed8dffc8c0fe82e9185"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "350fad3dbeccc896d8db31887f5f814e"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "40b964424f2b4cd69ac03d835996242a"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "9ebc36a3db7650e9af20200b55edb3cd"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "98b5bd3b8e531d2252204083bc534cf1"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "15d43514807705e9414a05b1114ce46c"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "cc7cc28f87575a02d38a1598b34852ec"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "d32dc395df110e11e766c9871862ff7c"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "e73c62f7d7c1d3bb4ec64dc8f9aa3bd8"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "0797ce5c666afcdda5e5319dc8edb340"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "3025715a74487ecf7b7ddf87e4fb9754"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "5cdbb79f577df3341e65869016eea818"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "0ef061397eed04caccfe392f7ee86f5c"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "9a02f058e1dadb0eaaa7dd654d537258"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "a08dac139f8a02b36cc8175f0cc4c661"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "89a2bfb44d22767d9e0a26482d29a8f4"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "f03391e5b1a9044025ce4b1b71b58fce"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "08d207cc73affef8f296d22d1d392791"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "14b5e29c4ce32ff397d1d314369c49ce"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "321d128dd4c7fcd1d11009bdf6bdcd71"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "7c79647bf63159c393eda4e3e5583324"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "ac757de6482ee928119751b4d3611357"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "c87e4169c77199f926ce7ed6df8411e8"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "ac18a41c49a97a00f627c6047e3c4516"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "521c5a0a8407e0b2be48567eec8450ea"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "bb42c9ff345163a4d94232b482abbdde"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "91e3018bac96011aad662cfbb28a5025"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "397b431f3c86c1dbdbd1b10e8b55b774"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "9f785d850bae9a456519ef37d222cfbb"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "ffb995f56b887f74b9faa43b9901a47e"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "6df01f39f89024a4b60df7fbc077fbab"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "f8f332eef22008f3279aa0976ca171df"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "bed0b847cff02446337e3818749d0251"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "9f3a93a3e56161f586a2c469791bd5a0"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "97d8e60e78ebb4395a1518760affd730"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "2d4b9d174292e620e8b5791362dbe086"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "28800d29488861584e06f6273e6cb6f7"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "39493f4002b1ff4a2338b0361e2c9091"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "560dd331d3b3ce312892bd87a2c3c66d"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "acafca7234b1a0e78bbca268cf9a8636"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "8a794b1d6a2654d37d6b82c36d055a98"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "3fe65d3f618fc6c85971c3bb97eee92e"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "6c2fb7af61529a175b0c75d72facc051"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "5a30dc6c619a1d21e3da23c346567768"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "b64157658f7dc36bc81351e0d1060b2d"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "94f36d6ce66db47e981f3c872977c966"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "8fb9b74f14b49fa1eb8a5b242cb43d94"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "7daa11d5317815177f7d9e6563275606"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "d32dc395df110e11e766c9871862ff7c"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "ab9ebd8ec2d9aaf18a00c6b0b6627a50"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "f88eb7bd88701a3422edccd0897cb436"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "93523ee6ed9ae9594e37554fd41e47c7"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "e02728ce648a25cd1042542d35a78d26"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "49bb465a07ec43ed827eab27ee79fb63"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "414650292b991aee5d0bb1432c41667a"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "3af431ca37bdf747eacb3e69c66118bf"
  },
  {
    "url": "cs/network/application.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "27ad47ffce3d12ab9d5600071d0c5400"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/network/index.html",
    "revision": "93523ee6ed9ae9594e37554fd41e47c7"
  },
  {
    "url": "cs/network/link.html",
    "revision": "803a744b2df352087d7356f49700112c"
  },
  {
    "url": "cs/network/network.html",
    "revision": "5574cc6aeb59f4355df47d9a44996fe3"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "258dc0b89918a36dce523b9d0aa74501"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "f94f2425ca1ef6e97bffc513d38675c8"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "3b8bdb16ae5a41e517d1c4d01aa07c9a"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "371a965a5d789093800c12935a8e9955"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "097ce1f335450c53377ebfa17ecd4c47"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "93523ee6ed9ae9594e37554fd41e47c7"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "ee03c5765dd48aab92696633e75d3220"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "713a727a56275b94554b7ff34120663e"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "de0b5c6ebf75ef2b1045a2b437f7e691"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "29b8cb7a9d7a96b53748a0eb1d5adf44"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "a08d0a7f1f77c0b0873d25e5eb1a75ad"
  },
  {
    "url": "cs/web/index.html",
    "revision": "f96a64d8478fee6f4835bcb9c7482228"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "2adf9b16c1c584e267d4b8aff79ba25f"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "f92e8026d2b9721546b88a4b78fe48e9"
  },
  {
    "url": "cs/web/web.html",
    "revision": "aa3e7b131be850602a7c6f7069f9f567"
  },
  {
    "url": "daily-life/phone-lost.html",
    "revision": "4d9a7353898fa4a8449dafe57d8e526e"
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
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "4c7bcf78a2bda47d4c9212576d23c276"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "a0696783595df36dcf58a057ceef8000"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "9b51c3b0301039107bec231185b655c0"
  },
  {
    "url": "language/english/differ.html",
    "revision": "b34837df95e1d665409d3d403c86e0f2"
  },
  {
    "url": "language/english/index.html",
    "revision": "f4be587820a90002ee10b9fb5d6b91d0"
  },
  {
    "url": "language/english/modal.html",
    "revision": "ec9ead8965cccba5ef0a2a0e579ea504"
  },
  {
    "url": "language/english/mood.html",
    "revision": "ed65d7b62f061538cc53c73bebe140b0"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "e42877022c9fcbbb3bf2a46834b429cb"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "304b8160eee727fa2817f8d9d9128526"
  },
  {
    "url": "language/english/phonetic.html",
    "revision": "f2900a26eacbb0beda63135fb31a53fe"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "2d0673123b2038f5d51863e4ad0bb61b"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "64a83dd9bdb845bdd654c6c9629c61e0"
  },
  {
    "url": "language/english/tense.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "language/english/verb.html",
    "revision": "4b05133786b02e1d289758039545e01c"
  },
  {
    "url": "language/english/word5000.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "language/index.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "tag/index.html",
    "revision": "9d9dc0dfbb1c9e4c3756b2b3b9f55226"
  },
  {
    "url": "timeline/index.html",
    "revision": "6156a69ba53a16b0acbfaf26d6763b40"
  },
  {
    "url": "tools/chatgpt.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "tools/hash.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "tools/index.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
  },
  {
    "url": "tools/test1234567890.html",
    "revision": "517c09b5f3ac0fd89fb249c868f1d173"
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
