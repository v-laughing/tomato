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
    "revision": "f059b2b6eac30cfc77cd11967c1c7198"
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
    "url": "assets/js/1.9b997d88.js",
    "revision": "4f0733c36b80843d9146e0f8da831262"
  },
  {
    "url": "assets/js/10.abb55e68.js",
    "revision": "046392241639d147bc6775435eb77968"
  },
  {
    "url": "assets/js/100.4f8ff2e1.js",
    "revision": "9bacfb0602d5ebac58791be5dbde7b18"
  },
  {
    "url": "assets/js/101.604ce726.js",
    "revision": "09bde24a43a1471afbe499b3b712f9b7"
  },
  {
    "url": "assets/js/102.bb7e7cd4.js",
    "revision": "783dafc4bc8123063b3a4900119fd18d"
  },
  {
    "url": "assets/js/103.16fa175c.js",
    "revision": "ebf21506842e5ed058dc589bee263d65"
  },
  {
    "url": "assets/js/104.0eaec449.js",
    "revision": "3b29e97383498f6150164fa526e9bf64"
  },
  {
    "url": "assets/js/105.81b86f3e.js",
    "revision": "c4e9bdef898d7ff350ebfcdd661be1ca"
  },
  {
    "url": "assets/js/106.311930a8.js",
    "revision": "869d598dfa5653260554e16db58d2545"
  },
  {
    "url": "assets/js/107.0bc09551.js",
    "revision": "d320c5cb8fd8968c34adcaf069cf460d"
  },
  {
    "url": "assets/js/108.c6284900.js",
    "revision": "b646a812b88f760aebd78e8daf43e7e6"
  },
  {
    "url": "assets/js/109.7081ae12.js",
    "revision": "9b0170106fc8f94f6d238630d24db007"
  },
  {
    "url": "assets/js/11.89ee2a9a.js",
    "revision": "6d535e42378955c4c02cb163c721b771"
  },
  {
    "url": "assets/js/110.185c53bc.js",
    "revision": "1a982c490ca1fef01044f97e564a98c0"
  },
  {
    "url": "assets/js/111.4ce3dbd9.js",
    "revision": "294ff8b82100067876ff31844af83b0d"
  },
  {
    "url": "assets/js/112.0a91f817.js",
    "revision": "aaafa272d27392ed5bb3f85a4292f36e"
  },
  {
    "url": "assets/js/113.d4388a55.js",
    "revision": "544596627cdb58a42131c1424539a919"
  },
  {
    "url": "assets/js/114.371cbeee.js",
    "revision": "bf8f2d946a4f64680bce3de8a231bb4f"
  },
  {
    "url": "assets/js/115.c1735e8d.js",
    "revision": "84aecca863c1d5d6096617a9d6c5db0b"
  },
  {
    "url": "assets/js/116.6d094818.js",
    "revision": "5b666b1bda9d492bd2723101a91cc6f3"
  },
  {
    "url": "assets/js/117.be52cf6f.js",
    "revision": "e7cdd8bfc3abd09b70da075086ea6168"
  },
  {
    "url": "assets/js/118.6ff115ab.js",
    "revision": "0001e0b7584f9a596f452457084baddf"
  },
  {
    "url": "assets/js/119.1eb58c08.js",
    "revision": "271bc75acb1cfed351ba5d921aa8ec34"
  },
  {
    "url": "assets/js/12.b7068b4b.js",
    "revision": "c40eaa641a00f32781370bc90ba2c18a"
  },
  {
    "url": "assets/js/120.7d7b8b2c.js",
    "revision": "c99df587c76fae0366aa9c8ec27eb15d"
  },
  {
    "url": "assets/js/121.8d62d171.js",
    "revision": "9b150d05781a4e04a8e5ba54263dc8b6"
  },
  {
    "url": "assets/js/122.78ff5d8d.js",
    "revision": "be11b489e699fbed6814c4b6d03b5a87"
  },
  {
    "url": "assets/js/123.d7b4c1c8.js",
    "revision": "d945ae0f15d7d73c46a41e98e577d9d9"
  },
  {
    "url": "assets/js/124.1a7efa89.js",
    "revision": "f119ba1757a2f027d05e0cd9a1749a49"
  },
  {
    "url": "assets/js/125.12366c66.js",
    "revision": "4dc4b6365a9f659b4a6bc9c0a716258c"
  },
  {
    "url": "assets/js/126.2179ac01.js",
    "revision": "5366c21631e44c0f5cea4d90f83ae7bf"
  },
  {
    "url": "assets/js/127.99650ee8.js",
    "revision": "89f83b9b58fba44816db8aa946e7befd"
  },
  {
    "url": "assets/js/128.db76cb58.js",
    "revision": "4d93017e1d7f50471586f253fce9e243"
  },
  {
    "url": "assets/js/129.19842e36.js",
    "revision": "33c8674dfe3ce698a169fd2984cad433"
  },
  {
    "url": "assets/js/13.340e8865.js",
    "revision": "2d012d4b15a47186608d5519513802d4"
  },
  {
    "url": "assets/js/130.0f3127fa.js",
    "revision": "aa9f3adc9bd1e746a761a7659c43770a"
  },
  {
    "url": "assets/js/131.b4354994.js",
    "revision": "3161b3868dcb7af0583a8980fe6a8aac"
  },
  {
    "url": "assets/js/132.cf4201a8.js",
    "revision": "2d2e317ceed7deb0d96bbb7fca71b9fd"
  },
  {
    "url": "assets/js/133.f4bd2ae5.js",
    "revision": "6281656d0e3acb5b7e64fba2dcc008ba"
  },
  {
    "url": "assets/js/134.8a66128f.js",
    "revision": "e48725475471898c5e0a2b67342f2c8c"
  },
  {
    "url": "assets/js/135.1d3db6da.js",
    "revision": "f8a86dcd6950fc0d3254798f7832c7ee"
  },
  {
    "url": "assets/js/136.83ce9f6e.js",
    "revision": "75592d25e24bcf1c015fcf31de403c6c"
  },
  {
    "url": "assets/js/137.b82fe897.js",
    "revision": "a2727fb30f9fdbe7ec480d06cd5a269d"
  },
  {
    "url": "assets/js/138.90eaa2a4.js",
    "revision": "0ee96d486e3c73d39aad8466dab17da8"
  },
  {
    "url": "assets/js/139.fac0caf2.js",
    "revision": "12afdfcf8b19224974c9bcf41a69a69f"
  },
  {
    "url": "assets/js/14.88c7e37d.js",
    "revision": "d3fb8dfd1a40ed3e8aa79225bd8b990c"
  },
  {
    "url": "assets/js/140.c9e7a673.js",
    "revision": "055eda0f51e63f996be077faed70e33a"
  },
  {
    "url": "assets/js/141.91f138ae.js",
    "revision": "0a632184b346492edc0b98a805970f94"
  },
  {
    "url": "assets/js/142.8594e5f3.js",
    "revision": "327252ab37035916052b621552dbe856"
  },
  {
    "url": "assets/js/143.dfa4d5d1.js",
    "revision": "d1b70b21c970ca7d0e336a653e652dcc"
  },
  {
    "url": "assets/js/144.606ca434.js",
    "revision": "59c80ff0c5aeb0cd6b519104a24ac4d2"
  },
  {
    "url": "assets/js/145.00a9c2ef.js",
    "revision": "753c15546f81285acecd706991285d12"
  },
  {
    "url": "assets/js/146.e4a0e05a.js",
    "revision": "7b53cea1cd3b385705f4c23be1e4ba06"
  },
  {
    "url": "assets/js/147.849f63bb.js",
    "revision": "e7dcc5d3e6807650eb4255d7a92e13f6"
  },
  {
    "url": "assets/js/148.7c61daae.js",
    "revision": "b47f130eb732c9a7bf75a7e4ad4c1b6e"
  },
  {
    "url": "assets/js/149.ecb54872.js",
    "revision": "7a1a900a78b571945d8b2c1844a76a73"
  },
  {
    "url": "assets/js/15.6c9feee7.js",
    "revision": "f84c19234c842c891394f377ad805fbd"
  },
  {
    "url": "assets/js/150.811955e9.js",
    "revision": "4e67a829737914e6bfd1a70e3a77f0e6"
  },
  {
    "url": "assets/js/151.c88419c2.js",
    "revision": "8f046c61c0be3e565d38edd6f69d5297"
  },
  {
    "url": "assets/js/152.f341c021.js",
    "revision": "20e953385be2ec552bcf7b2daf35e8ce"
  },
  {
    "url": "assets/js/153.a9b3bbd1.js",
    "revision": "52054f57c020af7734e4c4084e07b429"
  },
  {
    "url": "assets/js/154.3966f4f5.js",
    "revision": "3ea1cecc5e5015b4ee0f7ff4889809e2"
  },
  {
    "url": "assets/js/155.3748243c.js",
    "revision": "00628ebe5be8fe1b1871e32208cd6d86"
  },
  {
    "url": "assets/js/156.5937ed43.js",
    "revision": "bb5570f4168d27531f3e52dfb006526a"
  },
  {
    "url": "assets/js/157.638f5023.js",
    "revision": "6757f020098fb8c20cebe8bea494d2c4"
  },
  {
    "url": "assets/js/158.c42011dd.js",
    "revision": "3ae5e10e6ec142a7b12b9dba8c354d7f"
  },
  {
    "url": "assets/js/159.6796371c.js",
    "revision": "af29b605bf29a2e2b6b5f472582d55ea"
  },
  {
    "url": "assets/js/16.f5181128.js",
    "revision": "5088c7d46c629c118dfdfcef0a60f2b2"
  },
  {
    "url": "assets/js/160.0b0b3fe8.js",
    "revision": "a9a52c49e2b247cdf564ee20b4b038ac"
  },
  {
    "url": "assets/js/161.b5cd0cc4.js",
    "revision": "241b9f24b02c2a6ce362456f23ee01c2"
  },
  {
    "url": "assets/js/162.853fc4ab.js",
    "revision": "3ac3eb5647b145d5829438fa7c45d366"
  },
  {
    "url": "assets/js/163.99f07b45.js",
    "revision": "3dfd4a9f91a8605b179e69fd2621ce76"
  },
  {
    "url": "assets/js/164.8566e1f5.js",
    "revision": "7fb613722cb6399796f9adc1c235c039"
  },
  {
    "url": "assets/js/165.a4c4bb31.js",
    "revision": "2f3f23b82d9a3b5a6fe7154cb3378875"
  },
  {
    "url": "assets/js/166.73233608.js",
    "revision": "ac3e07793c6f20febe7030b0d23aa04e"
  },
  {
    "url": "assets/js/167.6a88cd48.js",
    "revision": "f254b8312bdb54fb9fe48e800900b099"
  },
  {
    "url": "assets/js/168.b1d5c75d.js",
    "revision": "693b2e9b8d2734d6585123a661a1d877"
  },
  {
    "url": "assets/js/169.a61c1e10.js",
    "revision": "493fa166ee72600633c915dc9eea67b2"
  },
  {
    "url": "assets/js/17.fce18738.js",
    "revision": "df8f2f32aeea5e07fc7dc2504673a35f"
  },
  {
    "url": "assets/js/170.7e90080d.js",
    "revision": "e2431e7989aa7040676f7243159fff8c"
  },
  {
    "url": "assets/js/171.82e63983.js",
    "revision": "df0f2d0377b9a5277c569d2899a04aa4"
  },
  {
    "url": "assets/js/172.36d60ee5.js",
    "revision": "38687dfd70172b18822b10f294e55038"
  },
  {
    "url": "assets/js/173.ce6fc227.js",
    "revision": "be61089eda7452d1cfb6983d2e4aab8d"
  },
  {
    "url": "assets/js/174.6c7c8498.js",
    "revision": "43e57ef5a16f3fd688b6a28d6d927d2c"
  },
  {
    "url": "assets/js/175.f0399eba.js",
    "revision": "8852156ab5aad3d62954305d1c9232db"
  },
  {
    "url": "assets/js/176.7d3365ff.js",
    "revision": "dafef664ae2789308395f00da3a0cc9d"
  },
  {
    "url": "assets/js/177.8624fcdd.js",
    "revision": "564f87a4f5b5f88bd73af2e089910f59"
  },
  {
    "url": "assets/js/178.f51431f8.js",
    "revision": "1175afa34f8357802d7381f828a8252d"
  },
  {
    "url": "assets/js/179.6b7e45ad.js",
    "revision": "99522def32e1727dc393f526dbe44052"
  },
  {
    "url": "assets/js/18.1f294290.js",
    "revision": "b237275d2a9f9a3cc85fd429015f542b"
  },
  {
    "url": "assets/js/180.e76d9048.js",
    "revision": "a02a2a267ba834ce12b844787b642eb7"
  },
  {
    "url": "assets/js/181.faedaed0.js",
    "revision": "9c3bc43560608430579d1b427b931c62"
  },
  {
    "url": "assets/js/182.daa31dbd.js",
    "revision": "21661f937132b3d2916f238330757a3d"
  },
  {
    "url": "assets/js/183.060d2484.js",
    "revision": "1e538b8a98b13362dd9a3ce3701007ac"
  },
  {
    "url": "assets/js/184.1aa7c155.js",
    "revision": "81f29c94327af774e49cea8a439f4151"
  },
  {
    "url": "assets/js/185.403df42f.js",
    "revision": "39f914ed03f1035242f5719b36d30147"
  },
  {
    "url": "assets/js/186.aea8ffd1.js",
    "revision": "74d3b1e11ac45c36da3c32576551a1f1"
  },
  {
    "url": "assets/js/187.a8749b3c.js",
    "revision": "b2bcd5cbe4776fb138eed712d4429f53"
  },
  {
    "url": "assets/js/188.35c7363b.js",
    "revision": "916c6936abd0e92a7437e012a3409b15"
  },
  {
    "url": "assets/js/189.86291755.js",
    "revision": "bbc475a9695f7fd7c9a569ffbc9210f3"
  },
  {
    "url": "assets/js/19.fe163b3c.js",
    "revision": "008ff3d45dd28f379e4ba02d5caaf54d"
  },
  {
    "url": "assets/js/190.f3092e39.js",
    "revision": "fd26e0e52212025c9c75f6c98f534d32"
  },
  {
    "url": "assets/js/191.60c16948.js",
    "revision": "45206f67399dc024228b0bdb98e1c8c1"
  },
  {
    "url": "assets/js/192.df5d50d9.js",
    "revision": "fc5d538a6e31fdb73974708a982f09c4"
  },
  {
    "url": "assets/js/193.84f8fb93.js",
    "revision": "1fdb01395321a3cc888bd7e48275e12e"
  },
  {
    "url": "assets/js/194.80daf796.js",
    "revision": "5dc6f96acefcb05693bb7b5b881658cb"
  },
  {
    "url": "assets/js/195.f8f5c7b3.js",
    "revision": "21cec124cf60fd17527ca760eeb8df6c"
  },
  {
    "url": "assets/js/196.8b1ab835.js",
    "revision": "9f76eaba9ba8a36e2287f7448b95f324"
  },
  {
    "url": "assets/js/197.d6ca0724.js",
    "revision": "ae4a8f510e55f947ebf090bd7577dab0"
  },
  {
    "url": "assets/js/198.23f0dc48.js",
    "revision": "17adf359ac85e87629fdfbd2081bf7e1"
  },
  {
    "url": "assets/js/199.a4eea7a0.js",
    "revision": "ffe82bb75006b1bdb0896e7478b8ae8f"
  },
  {
    "url": "assets/js/2.df0a64b7.js",
    "revision": "d3d7d8d4b182ba2ba13cd1e7478931c7"
  },
  {
    "url": "assets/js/20.5877d44e.js",
    "revision": "f74bed3ee65927dd5a5597a250b967b5"
  },
  {
    "url": "assets/js/200.c0bc6eb3.js",
    "revision": "0719f2dda46d6e1612f265af40615174"
  },
  {
    "url": "assets/js/201.f3e6e2ed.js",
    "revision": "111bb8e69a1e4208ac2cbc4e0d7addd9"
  },
  {
    "url": "assets/js/202.2692fc51.js",
    "revision": "00f006288cf114edd30fb45b5a244e7a"
  },
  {
    "url": "assets/js/203.f3e8fadb.js",
    "revision": "56bc65729a375da29f2ae1b40123faa0"
  },
  {
    "url": "assets/js/204.6ace5d76.js",
    "revision": "3139dc3e25cd5534f4bb461fd0d653f6"
  },
  {
    "url": "assets/js/205.abf2c7f5.js",
    "revision": "5c65e435a0466de6026c7c5cef1e11b8"
  },
  {
    "url": "assets/js/206.6ad643e0.js",
    "revision": "ecd0374fc705d3e3bc731bb7d356cd8b"
  },
  {
    "url": "assets/js/207.05a411a5.js",
    "revision": "45265ddf604acdd197f41b03ed51d11c"
  },
  {
    "url": "assets/js/208.5579e356.js",
    "revision": "83c1e004acb7693d8b0fb18c390f12dd"
  },
  {
    "url": "assets/js/209.3f19801d.js",
    "revision": "65416ceb51b5976d622ab69a1271d1e9"
  },
  {
    "url": "assets/js/21.fc639277.js",
    "revision": "e08a3e8cf0fe78bbb423e9c3460545c2"
  },
  {
    "url": "assets/js/210.d9e02371.js",
    "revision": "e749b4583cbf8604dddc2658928299de"
  },
  {
    "url": "assets/js/211.29700fb5.js",
    "revision": "c55e32b2ea89e1b0110ff08d0a280739"
  },
  {
    "url": "assets/js/212.c7099b3b.js",
    "revision": "c6dda1e2484f328af89a87b3ee5408d0"
  },
  {
    "url": "assets/js/213.d623b365.js",
    "revision": "c778f9c2e2d9e2614615bf78835584b5"
  },
  {
    "url": "assets/js/214.eba8bbde.js",
    "revision": "a469cd44727fb643fcf0db2ad8d80e96"
  },
  {
    "url": "assets/js/215.bdd49761.js",
    "revision": "6dd8fd1d5e6ac0ae473034954121a46d"
  },
  {
    "url": "assets/js/216.0cc95051.js",
    "revision": "21025e6ee3bf1bfeb047df0fa6b4b989"
  },
  {
    "url": "assets/js/217.345aa9de.js",
    "revision": "f83b5964e1e27221516b66f525315d98"
  },
  {
    "url": "assets/js/218.492b3fc3.js",
    "revision": "0abaf7d2b12decf1e6f0e7f70530f7e7"
  },
  {
    "url": "assets/js/219.73158147.js",
    "revision": "6c9df816058daedb048149d26c0fa260"
  },
  {
    "url": "assets/js/22.f4d550bb.js",
    "revision": "d292602b1af4f139c53af5273254a082"
  },
  {
    "url": "assets/js/220.581c8e16.js",
    "revision": "a7d0d17a2a3c5a923373ee8172b6ba17"
  },
  {
    "url": "assets/js/221.028b3f77.js",
    "revision": "e8183764d5262dfaee158ed43e15b891"
  },
  {
    "url": "assets/js/222.9bf2d20b.js",
    "revision": "d6d84eeb13debc0ef2c41351a8640d24"
  },
  {
    "url": "assets/js/223.df8839fe.js",
    "revision": "813a03f113568d4f6faf510f438108c1"
  },
  {
    "url": "assets/js/224.d1d4b9b3.js",
    "revision": "4b94520f30773d6011a811542b1c4717"
  },
  {
    "url": "assets/js/225.7176978f.js",
    "revision": "9a3718cd22b21131a85f37df64a50439"
  },
  {
    "url": "assets/js/226.24547823.js",
    "revision": "864343e8b66465be7cb68af5887c84f2"
  },
  {
    "url": "assets/js/227.50c943b4.js",
    "revision": "7d2221561655378036111f3284539d23"
  },
  {
    "url": "assets/js/228.1546e3f8.js",
    "revision": "bad59856b9259b300f5af09a1dec17de"
  },
  {
    "url": "assets/js/229.3fb02c82.js",
    "revision": "dc4314ea0c0cbdfe5d2c8d0d260c9730"
  },
  {
    "url": "assets/js/23.da3f98c9.js",
    "revision": "0a2f173ca029b066a02f66e5970c0cf3"
  },
  {
    "url": "assets/js/230.58a80085.js",
    "revision": "ff0970c0e89e1b72a1bbca18f23cc395"
  },
  {
    "url": "assets/js/231.ca45cd15.js",
    "revision": "cb3d602908fd86ab7df13bbc2c49ef1e"
  },
  {
    "url": "assets/js/232.3f25a4e0.js",
    "revision": "821f3060ce321303ed3741a0116dd44f"
  },
  {
    "url": "assets/js/233.820820c7.js",
    "revision": "ccd7be671fb99be9e3b511e13918bb35"
  },
  {
    "url": "assets/js/234.6cf928c3.js",
    "revision": "2e46eadf95c1a21d3503b7d6b7cf80ce"
  },
  {
    "url": "assets/js/235.9a5b2af9.js",
    "revision": "ccb004f9c668d709bfdf1cb570584fe1"
  },
  {
    "url": "assets/js/236.b989ff63.js",
    "revision": "2cec7b40bc2363d64770c9aa3da76830"
  },
  {
    "url": "assets/js/237.76a301d9.js",
    "revision": "a02751819c026186b8ab9c188dddfcab"
  },
  {
    "url": "assets/js/238.0f417b67.js",
    "revision": "a0118a277fa9bff1c034b0d9ff1800f9"
  },
  {
    "url": "assets/js/239.d1c4afed.js",
    "revision": "b4f1c174cfb10b769e8cad61198a1a30"
  },
  {
    "url": "assets/js/24.942a225a.js",
    "revision": "9553aa71108d01797591ce5cd344b2fd"
  },
  {
    "url": "assets/js/240.8f73ab55.js",
    "revision": "bafa630e3a47fb67692541620a98eb7c"
  },
  {
    "url": "assets/js/241.697f3896.js",
    "revision": "a97d77f0a590a71f6a3687d6100cc5fa"
  },
  {
    "url": "assets/js/242.c545c4ec.js",
    "revision": "a8b02cefac90b6184b8d25ca613253b7"
  },
  {
    "url": "assets/js/243.71b71f3e.js",
    "revision": "dcb4079608a23f8b43ecf7864c7c33e2"
  },
  {
    "url": "assets/js/244.35cd6d6f.js",
    "revision": "626e3b49cf4d1ef481b27ea17ac5b360"
  },
  {
    "url": "assets/js/245.2ee1ae2b.js",
    "revision": "75a61a647afd05d30b192d682a316937"
  },
  {
    "url": "assets/js/246.d72b7b88.js",
    "revision": "63f2f1290eec74a4674b4bd54282dae5"
  },
  {
    "url": "assets/js/247.0f558055.js",
    "revision": "8a05ccb946168b5577c057c890f48382"
  },
  {
    "url": "assets/js/248.813aec55.js",
    "revision": "53d45a4c30a691935e673d7f09cd801c"
  },
  {
    "url": "assets/js/249.ebf04cdc.js",
    "revision": "70922fbe9a2b36bed191e8510d49ea48"
  },
  {
    "url": "assets/js/25.67005a01.js",
    "revision": "ca2f3085a912728a90105b9065b9d982"
  },
  {
    "url": "assets/js/250.7160a8f3.js",
    "revision": "27133f1d5d6a2e8d27dab946c741193a"
  },
  {
    "url": "assets/js/251.7b5bcc6a.js",
    "revision": "f58681eb991c495bc247d462063fd57c"
  },
  {
    "url": "assets/js/252.3653cda5.js",
    "revision": "566d8d83228b19c9ed31fa9918848024"
  },
  {
    "url": "assets/js/253.44828735.js",
    "revision": "e885df0ec271774bc9a9a36b379364ef"
  },
  {
    "url": "assets/js/254.05e31d06.js",
    "revision": "2c767fc65630fd56cb714f206b819346"
  },
  {
    "url": "assets/js/255.1c9a139e.js",
    "revision": "5c02e7749ad63c24c273056dafa18b63"
  },
  {
    "url": "assets/js/256.ced2171d.js",
    "revision": "f21a7167d7c0d8a17e22abe19a371fc5"
  },
  {
    "url": "assets/js/257.557480c9.js",
    "revision": "57e366be72218ab36e6231544e69edf5"
  },
  {
    "url": "assets/js/258.c81dbe5a.js",
    "revision": "a0f43481391648ea2b62f9a825881e9a"
  },
  {
    "url": "assets/js/259.21c6ae7f.js",
    "revision": "9a4c02e1c5c63f7c3cf43beed311830e"
  },
  {
    "url": "assets/js/26.c20b091a.js",
    "revision": "72329bd6bbebd96956a6c14546518104"
  },
  {
    "url": "assets/js/260.73cf1d75.js",
    "revision": "f0c508ba6c06c6c724c6514b9cb60891"
  },
  {
    "url": "assets/js/261.f0149b22.js",
    "revision": "877aa7e728274184fc5f05ed1c7c227a"
  },
  {
    "url": "assets/js/262.5100062c.js",
    "revision": "b485c8d0ae045a5e9e199e80a44d624a"
  },
  {
    "url": "assets/js/263.8e26cff5.js",
    "revision": "aa457dfd0c53c511e4c8f9c32d82b730"
  },
  {
    "url": "assets/js/264.e4750796.js",
    "revision": "6235dd6a0608915fcaea099e278c168a"
  },
  {
    "url": "assets/js/265.0b0a5b52.js",
    "revision": "2a286f945dfc972d68947300f689e503"
  },
  {
    "url": "assets/js/266.720ec960.js",
    "revision": "19bb356837791ee11b5cb95f058eade3"
  },
  {
    "url": "assets/js/267.9c46695f.js",
    "revision": "55fe01b4956ba6e48999f6de34bfbdc8"
  },
  {
    "url": "assets/js/268.f0b27549.js",
    "revision": "94ba65555e5ec99b89cb87e68f85bc2d"
  },
  {
    "url": "assets/js/27.8cdca757.js",
    "revision": "e3d1f76e57821954269fdb5c2683143b"
  },
  {
    "url": "assets/js/28.5b4a0480.js",
    "revision": "44912764240a82bdffd5846bf465561f"
  },
  {
    "url": "assets/js/29.dbb39737.js",
    "revision": "bcf70bc9bdd8854acf1ee5d36acaf6e4"
  },
  {
    "url": "assets/js/30.09182ae0.js",
    "revision": "7b1f84e08575c2df54aacff25b5631d1"
  },
  {
    "url": "assets/js/31.369df6de.js",
    "revision": "b3846e107eace7f593cf3338c71f66d3"
  },
  {
    "url": "assets/js/32.dc79cac7.js",
    "revision": "a5d40eb8169ee5fbddc4e46b6ef0a4bb"
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
    "url": "assets/js/36.ccd92cfe.js",
    "revision": "7ae55cf37061c6314f675a5dff0e40ac"
  },
  {
    "url": "assets/js/37.42abccbc.js",
    "revision": "c5a6343ab62cab8fe71b036db49049f8"
  },
  {
    "url": "assets/js/38.67b947f2.js",
    "revision": "59a2d6252563be5dd86d4d3eca909f6e"
  },
  {
    "url": "assets/js/39.bcb09e7b.js",
    "revision": "bfc51e1c4c3653efabaa54c4f78b4007"
  },
  {
    "url": "assets/js/4.9d58ebe0.js",
    "revision": "77017c5682537ff3775b8d9ec58c82c3"
  },
  {
    "url": "assets/js/40.4d06250c.js",
    "revision": "21e90f5e97cf8eca1da180ee39bbeee1"
  },
  {
    "url": "assets/js/41.6479de53.js",
    "revision": "fdaa54472438fba6923ddb31faf7120b"
  },
  {
    "url": "assets/js/42.25f26ec5.js",
    "revision": "5044add9f993fe67bf40e2a70c262f72"
  },
  {
    "url": "assets/js/43.9ddccc22.js",
    "revision": "98074508974915c83a153f45d2ead3ae"
  },
  {
    "url": "assets/js/44.ae2d6ce4.js",
    "revision": "c69cdc149a94f7103022c4d0bf11b195"
  },
  {
    "url": "assets/js/45.3bcc5f70.js",
    "revision": "d1d17ddd5775a0514c52c57e19a80029"
  },
  {
    "url": "assets/js/46.d827122b.js",
    "revision": "9b28868beffcf74e56f297063766766d"
  },
  {
    "url": "assets/js/47.54d6bb49.js",
    "revision": "529ba7c25b091d5261cd0bafde0e466f"
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
    "url": "assets/js/5.a2dda00f.js",
    "revision": "1e1842140e3a56666ff879f4fc17ac27"
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
    "url": "assets/js/54.5e845a8a.js",
    "revision": "e1198333c32130bd34dcf577e72466c3"
  },
  {
    "url": "assets/js/55.a5c0dab3.js",
    "revision": "01d87d3480904c1ec012149a438a5821"
  },
  {
    "url": "assets/js/56.ee03cb44.js",
    "revision": "c01815f92c9050f8209f86d7636df9ff"
  },
  {
    "url": "assets/js/57.dcd064b8.js",
    "revision": "5b273c9a2ec95d2c4ed467b6c746c614"
  },
  {
    "url": "assets/js/58.bde849d6.js",
    "revision": "5f2ede39c23df28e97caecac5d7358a2"
  },
  {
    "url": "assets/js/59.15a1b138.js",
    "revision": "080b798ec203f5b7ee4f00ecc9e54ebd"
  },
  {
    "url": "assets/js/6.8234ae38.js",
    "revision": "e7b5b5b33671271dbe41659b36187fed"
  },
  {
    "url": "assets/js/60.9e05d513.js",
    "revision": "a1cc6da2f8e443ae23a1339a2b7227a2"
  },
  {
    "url": "assets/js/61.e076609f.js",
    "revision": "10865b82f90a10cad1c11705dfff0920"
  },
  {
    "url": "assets/js/62.1ebffd01.js",
    "revision": "306584bf7d9e2e4e2784ef2f6a8260ef"
  },
  {
    "url": "assets/js/63.82a03885.js",
    "revision": "e7157e6045b6d515ced287c3a8b48ad5"
  },
  {
    "url": "assets/js/64.11bdad32.js",
    "revision": "f0b3dfb450c92d716cf71ead75723cdd"
  },
  {
    "url": "assets/js/65.1f086639.js",
    "revision": "fa35855b9e94e5dccb2d155765b56284"
  },
  {
    "url": "assets/js/66.44874e5f.js",
    "revision": "f9b94833e238733cb4d1ca549a8b7906"
  },
  {
    "url": "assets/js/67.fe940c4e.js",
    "revision": "2338595aef109e00c7be749cef91bacb"
  },
  {
    "url": "assets/js/68.0bdc2271.js",
    "revision": "3f3fb18f1c6caad5fa550e738b0c49c1"
  },
  {
    "url": "assets/js/69.b9df4763.js",
    "revision": "c3776573837182b19845e0c101dc10c3"
  },
  {
    "url": "assets/js/7.e5189acd.js",
    "revision": "05f95bbb1532de925185e1724d8e48a5"
  },
  {
    "url": "assets/js/70.fb0f670a.js",
    "revision": "04c3d3a73a19f34f48ba279597ef0e11"
  },
  {
    "url": "assets/js/71.b77aaa0f.js",
    "revision": "bd8c33aba79b7f8815f98bb23a42641c"
  },
  {
    "url": "assets/js/72.ea034f5a.js",
    "revision": "c1a08b1ce599ef207b1711ef43ef096e"
  },
  {
    "url": "assets/js/73.69e3e7fa.js",
    "revision": "c5ab392befb980f6bad11dd1da962060"
  },
  {
    "url": "assets/js/74.2b54fdd2.js",
    "revision": "fb329979ac24752ee3617541c7827aaf"
  },
  {
    "url": "assets/js/75.4c808212.js",
    "revision": "cb912c4ad7eba0f064929e8c0bf6aaab"
  },
  {
    "url": "assets/js/76.1271017d.js",
    "revision": "cf4af3d630a7f9f63ab8bde8f9b79f87"
  },
  {
    "url": "assets/js/77.20ab3c41.js",
    "revision": "c5afb7d5f95fb84d808580a933791d80"
  },
  {
    "url": "assets/js/78.03cf76e5.js",
    "revision": "bb20d4de65f2ba24f7eeb649aea36485"
  },
  {
    "url": "assets/js/79.f49f2b4a.js",
    "revision": "8d352143e2b697b5f165f707612f4c68"
  },
  {
    "url": "assets/js/8.850821ae.js",
    "revision": "4d65e8871ceef38340fcb7feb1eac103"
  },
  {
    "url": "assets/js/80.e8d08951.js",
    "revision": "50001eea46c9921098ae2f836dcf3819"
  },
  {
    "url": "assets/js/81.bb2dff7a.js",
    "revision": "6053f037b90dd8a5c93d23cfdc4ab718"
  },
  {
    "url": "assets/js/82.cb4e34d5.js",
    "revision": "9fd4781b2a31b15fdc68bcaf06b26c18"
  },
  {
    "url": "assets/js/83.b2586c98.js",
    "revision": "6e9321e2bd6edf4369a06c0c0d7d6510"
  },
  {
    "url": "assets/js/84.6508a74b.js",
    "revision": "d8b4c33458449a27bb52c51d5ccba826"
  },
  {
    "url": "assets/js/85.35d461e7.js",
    "revision": "e7073bb894e6853ce30b394d72f3aff6"
  },
  {
    "url": "assets/js/86.c0163a19.js",
    "revision": "c63335d38f6f0464412f8f7558eac154"
  },
  {
    "url": "assets/js/87.e3c29d81.js",
    "revision": "9bace6eb4466c8f2b05424638ed6e48e"
  },
  {
    "url": "assets/js/88.5b88a6db.js",
    "revision": "75e2125433fd8e624553311d0f63964e"
  },
  {
    "url": "assets/js/89.eff34b46.js",
    "revision": "63508dc3fb34500279c324d8f6a3f79f"
  },
  {
    "url": "assets/js/9.97f7b7f6.js",
    "revision": "8af731f4332f8bcee830adaed3cb4c60"
  },
  {
    "url": "assets/js/90.c4837257.js",
    "revision": "ad5f4fdb4ba4ab84c47acb9287486375"
  },
  {
    "url": "assets/js/91.cf03a8a8.js",
    "revision": "6b3627525e0afe268b47eff95dff584c"
  },
  {
    "url": "assets/js/92.82000912.js",
    "revision": "7b6fba95f8d7a442874023adbf7c2417"
  },
  {
    "url": "assets/js/93.03cf3423.js",
    "revision": "3317261b9ed4e7ecdab1b8e63ce89331"
  },
  {
    "url": "assets/js/94.d5bfb163.js",
    "revision": "6e71510d99a832204e39680bb0680298"
  },
  {
    "url": "assets/js/95.4721c6bb.js",
    "revision": "ab5bdba055db83cbc6176065d16da92c"
  },
  {
    "url": "assets/js/96.e35c4d48.js",
    "revision": "facfcff5fc5c86f2eecd5fd645900f9a"
  },
  {
    "url": "assets/js/97.3640cd23.js",
    "revision": "7354f3e1278f89bf48b4df36728e8940"
  },
  {
    "url": "assets/js/98.d44b54fd.js",
    "revision": "59a13ad6703f6c7536ad9fef7cb6f3c1"
  },
  {
    "url": "assets/js/99.8f371d8f.js",
    "revision": "0059ccd8c792816367267a97a7d8084e"
  },
  {
    "url": "assets/js/app.ea2b06f5.js",
    "revision": "7665c99e9c9efe88ba329913ef506c1d"
  },
  {
    "url": "categories/index.html",
    "revision": "1c4de9584d176d762360f2eac1af957c"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "44fc382e0203fe63f71559a53c5f55cc"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "7baa5ecea5dd8d53c2f87aa188a8db86"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "2209bec78748a04e54cd86105a406147"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "46820619c5af382042c0d0c7c81490e0"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "74f88f3bc48faec5c80d27b9e78c778d"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "806a1a4c8ca5e35bfa7289dcaf931136"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "e0cb7ca15770fe8c7acb977f15d1c392"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "c32a0623f096d608d8d828b465996e5f"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "959b9df35136a90be382ce162d2150f2"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "55a93cb4e1ac04a5736c4f759dfc3f7a"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "7baa5ecea5dd8d53c2f87aa188a8db86"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "f1dd6c9779a922148ff0d4ace408a904"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "2d4060e4379e3e82dea1b79577b24468"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "c880b52a9e7bcd4cbe6b944fd8d61257"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "26721a1b6d3bf3378441dc3a61f630b3"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "66b215343859fd5d7974681874909a89"
  },
  {
    "url": "cs/database/index.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "4c72408ed789ac966b28fba34bfca8ae"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "c74f6e6a46ba6e35485654824cd5f47f"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "c01053da7d28c1004a25d9c0f3be1e4c"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "089ec97fba07913d6369a7e2c80f15bd"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "462577ff0637d2f0c0b78dd3ee0651da"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "4adb670b7899ad0d09009b790e849d32"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "3909dfdacda93a2df4cf7862ea5f51d5"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "a1e5434d8cf17df392bc664ee419d3c0"
  },
  {
    "url": "cs/design/command.html",
    "revision": "ecd0421aeca6eae17d54ea21c7e5acdb"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "3c9e55f402f5716b734238d8d791fcd7"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "741677ed958bcbbb38ac697f7a6100ea"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "c97d7f9284e9d45423d874b04cbce946"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "b0a1b63e984c69f100cbd2e5c265c55c"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "03d0fb229ca7ef490a5a8d550f4c643f"
  },
  {
    "url": "cs/design/index.html",
    "revision": "f5c17f400fb8bf6ecd07a8753aa8390c"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "725b2bd01f79d469a7b6db0fd9fb24a7"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "a6b354cbb581af291db1afab9169882d"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "1f9e386e2abe36c7bf154492a5c2471f"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "cfcf5ea5d59369f6be3ea1858f2b87f8"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "9fab27d4803dec5f0e91ed48d751609e"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "78992fe9b6c59710c68241f3c1215b0a"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "a486679ae9e1c91b6c898b084e45701b"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "a5261bf87c3fb9110bce57ce4c2ca1bb"
  },
  {
    "url": "cs/design/state.html",
    "revision": "5a59a40d21be0ffa40c614a584dc5736"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "03d28def435b9363b1d966edb6cd8847"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "44bde04bc546883b461a7f47c5588e8a"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "b59d632eaa6dda024a46a4c2aa5a4529"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "033981bb6d787e4a788dd010150ac840"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "1510e03a91484f119a587f8305152a63"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "05eefce1471b5dc3d1a4164ad39bd966"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "f812699b81e6bac56eb6049bedb1e84b"
  },
  {
    "url": "cs/framework/vue3-reactivity.html",
    "revision": "6e5f920e999a77edd80819a0017895d4"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "74628300cfce5c1c8e1b1b165087be72"
  },
  {
    "url": "cs/index.html",
    "revision": "0f2eb081a0b158aa381c401e09246657"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/java/container.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/java/index.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "8405d9a473a94e76ccc49fd717de4a84"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "4690d94cabf58942da186ac781d8510e"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "903ce78ea4d2cc410ee29fcc39ed4013"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "a379b8a36da8a10d75d0962b6fdc9a05"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "4531a0578e48abde8d4dff4963a0a97e"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "ff203bb623ab0f1ae8b2cd02459339ed"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "7b98526cfe9e0be2b52a2e76748d1922"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "685b6d7cc9311d4c34e425e962f37fb3"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "a32595bbaaa6c17a8a23fe7bc5cbebec"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "1b435b158834286487db436adfba41b9"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "d96796e4ec9a1ce39f863ed7247c4e92"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "eb594a6dfe86ab71c2fc63b5f9967522"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "624400cd42d3feb5e3020d406c0d9ea4"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "4e149e32bbc2ba429374c7ff1dd699d9"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "3ffc4bebb393f460e58e3b2d6916e7d5"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "051404dac62a29b69b87a8a12111232c"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "f1080682beed54837d25af6c1da30f31"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "1a197eb2146fe60df26805c18751a502"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "b2da4e2145a9ee8a7c7625ffba969ce8"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "a850a8de4352d19ecec77a36448f0e1a"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "675f2d044204a4ffe8c5ce62a41e0154"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "6291e3220c52a16deb72e0f51a1214f5"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "308cd58f0ed0ab495aad5446986bb70e"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "1ab902c55083cefc0a08b7c6921a7dcd"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "0c8d98cd9b9977b0cf12f43c0b3e0090"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "91663909316859f637ecb57cacb80dad"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "ea09db976385277af08890a73d03a960"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "19ef3416a7433962643c4420acfaded6"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "547fccc9042ba04dcfc873042d850e2f"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "db09d042d74d552f289b4381485e48eb"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "c921892d9acdb3bc7819bdda861db429"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "a826630d89d6163b198ce568f5e26e3b"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "f7224eec63430186200e19d06c3defb5"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "0f36fe8d85288bcbc6237313cf16f7b6"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "4697a665216ae619bd65cbd1f8581d7b"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "eea58b540640bcc72cc30de4c79b83d7"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "3fa6a5c4bd744de39d9500dd57314b0d"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "bfe4e361c821a9c73de98f3ec8957757"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "03deb6756c1b01154c3f2bcd555b61fc"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "8d552c4dd1a197e697be9c8584bcc348"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "56ed41a79cee3d522bec5e143cd6b327"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "c07589e3e46732582d1b2c28777edab7"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "626b259a39c792b626e309dd2c8e6a3e"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "30876c5e0b667286a26bc3c732492087"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "47a9acdf29df8a48ca69b67c3db01f91"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "6b7a7cb6fe318038337c67d39ccea655"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "eda86173f7c3043cbbdab128e68aae85"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "ef1eea5057627fce27354b4037803ce2"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "6158d887e8b02c3312056feb39141e71"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "36cd3ed0339b4ba88e73b7bbe6da258c"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "a8089b13136553a96f96612b29e8d849"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "b161b5f41e9d66689ede9d86811239e8"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "5e407ef7c6dfb3c8bb70e1a0b07da8b7"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "c834b0cde57445ab3235979184107d65"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "9e3cb0dfe374ea86c6ffa1483f74e081"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "0ed7db9786796fc5f2e090cb23ee4d7e"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "b52e1d4fa20c9989a6f8f2ba9c3cd703"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "645fa1f2aebebe526017ca35b4a2b6af"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "2cb350f98d2a18b9c05ae600b3c6831b"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "5e9e96f293ba42c5d02e79b146650d89"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "e63cfcedf23181122435bc31136f3ebf"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "70d335583f7c996a8a4a5433c8c60cbc"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "53821fe61df7b852d35717aa07e178cc"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "dc828451111ac22fa0362471f5018b12"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "5967cf05c8430aaa36602e24855b407b"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "484022c20e6ef462209b44079a4288d7"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "352932bf9019d305aaf74598679113f4"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "a114af3d763a1a9cc21ac838542342b7"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "1ce3018aa3576fc339a884f41ee0a9f4"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "17fad38b5b4347cb3d3f2f38226fb9b9"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "4d6d045c2632c278d039a8aa458d3c87"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "aa24a6703d15e250be0f5b129e468d65"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "42229ed3ea8442ec282dc812b6a94d78"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "a344abeabbd682af32c783a44110a3ac"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "c730a4253575f8c0ee7809a1586e4639"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "3d2dfd48e6097cef8dc861b78c5e4b75"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "ba453186029b0b38a21c739cf8c73975"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "a2fbb1e95c814d0f34c710aa76f613e4"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "da6b13ca2a450db1943d21734a0f930b"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "1c24a323721a120d0e5fea5e11a937d6"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "b7597d1e93949e93eb427add98b01391"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "555e87443f1dde8b58edf74aafe42c60"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "9ab19de0025d5dbfca3f604f24037a29"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "9c4639f81943bc69acb59c018ea6b418"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "30876c5e0b667286a26bc3c732492087"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "606296ee491747726af2843f62739d3f"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "38d53a77e06e7307eefcdb115195b308"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "7baa5ecea5dd8d53c2f87aa188a8db86"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "ba20bec0c196ecae1fde10a433ed7c2e"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "d41135fa3fcdc5675fd64a52f9da8fcc"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "900c61deac637f8b165792ab4f02743d"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "4ee0e0ec2a702af00c19a8c09a3f1514"
  },
  {
    "url": "cs/network/application.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "69d8acd82ab1220a51c8566e9ef67685"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/network/index.html",
    "revision": "7baa5ecea5dd8d53c2f87aa188a8db86"
  },
  {
    "url": "cs/network/link.html",
    "revision": "377fa9ad6a6bc33adc98490520080547"
  },
  {
    "url": "cs/network/network.html",
    "revision": "cf85d78415479fe0d4976e0d99881eef"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "930b96cbda98c9e021019a1bc48404dd"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "20690f3438c341de730f573f1564f6f3"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "cb895e88e8cf59482d9f70434149cde8"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "8af348c0d43c0cc9889bdec1a47922e2"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "651a342f6bd0a1b1c9f2d51f2998b9ac"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "7baa5ecea5dd8d53c2f87aa188a8db86"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "da8a1ce5802e25723ed277cd70bf88b1"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "a2d518ace261d1c0c268412a0ff84974"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "61055d26ce29d9004ec749a1df77abbf"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "b91a7f5b70604936d0246d7edb4278f2"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "8405d9a473a94e76ccc49fd717de4a84"
  },
  {
    "url": "cs/web/index.html",
    "revision": "747f333d497075c50b023e8b16030d5c"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "23f1240b9efd1d82940e73bcae51bb42"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "ccffa5a6b2a374867924b3ebecb2bd37"
  },
  {
    "url": "cs/web/web.html",
    "revision": "c7fad546aca9dffe6175ded15ffe356e"
  },
  {
    "url": "daily-life/phone-lost.html",
    "revision": "fbd955357d3584b51cc485c7bf745090"
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
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "565c5b289ac19d1509de8c11da250e26"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "2412588df4874eb53a4ac4b6e6fd45f9"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "0808edb21c6a9639acc83c3d04913f15"
  },
  {
    "url": "language/english/differ.html",
    "revision": "29f014233a634c6441a53a75addbd781"
  },
  {
    "url": "language/english/index.html",
    "revision": "4690d94cabf58942da186ac781d8510e"
  },
  {
    "url": "language/english/modal.html",
    "revision": "b96ec8f4066a924d5bbe5ff9baabedbb"
  },
  {
    "url": "language/english/mood.html",
    "revision": "90a85f436f94fc51ad1e6aa3ab5d2542"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "e4cb2dbc5c94725b03eddde2239482db"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "1aba652b258ad45b8d416c71bcfe3446"
  },
  {
    "url": "language/english/phonetic.html",
    "revision": "bb921797a8c3d19d60eb4efc19a7bac6"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "3d1bf29bbfdc037cdeb1085b0f814ea5"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "69c9c909fe971b0bc014e11a59a332b9"
  },
  {
    "url": "language/english/tense.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "language/english/verb.html",
    "revision": "43c624ae84bea5cbb5f858fa29d2b6ea"
  },
  {
    "url": "language/english/word5000.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "language/index.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "tag/index.html",
    "revision": "159aee4354a324da7efbe4458590dad2"
  },
  {
    "url": "timeline/index.html",
    "revision": "fb12b88832c590c17bcb057c75b06209"
  },
  {
    "url": "tools/chatgpt.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "tools/hash.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "tools/index.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
  },
  {
    "url": "tools/test1234567890.html",
    "revision": "5df85faaaf0fe333371d869f36ad6326"
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
