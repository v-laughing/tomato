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
    "revision": "5cf1d8b8c0c51c01651b83fb810732ee"
  },
  {
    "url": "assets/css/0.styles.78cc86c2.css",
    "revision": "f3ac0d97ea3baad5a8bfb21d37f3b1e3"
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
    "url": "assets/js/10.98bfbf92.js",
    "revision": "5a21fb5a5a801084a698267df0f1637e"
  },
  {
    "url": "assets/js/100.19f605ce.js",
    "revision": "4344feb1131a5d296c4dfc825391b3c7"
  },
  {
    "url": "assets/js/101.3dffa76a.js",
    "revision": "674addc6383e3807e8621bff2b518007"
  },
  {
    "url": "assets/js/102.0e1c8a70.js",
    "revision": "96f385e6abad8606538d560ebb123094"
  },
  {
    "url": "assets/js/103.c6d114e2.js",
    "revision": "b7d25af21c56398e02a8aff98a8a9663"
  },
  {
    "url": "assets/js/104.4c5ffdf6.js",
    "revision": "01672d64e50a53919d632cb7208e6da4"
  },
  {
    "url": "assets/js/105.e95075fa.js",
    "revision": "70161288aa638d6fed586e9b3b1c54e2"
  },
  {
    "url": "assets/js/106.bc7c3c82.js",
    "revision": "6d0e3d5f3ef380db96d4ea5fc6daadd8"
  },
  {
    "url": "assets/js/107.a4d7cf6b.js",
    "revision": "a65e021d715508cd8b6cedeb184b2e11"
  },
  {
    "url": "assets/js/108.2b77c093.js",
    "revision": "a889c860e0f55fdcb0f9cbd18bee5d24"
  },
  {
    "url": "assets/js/109.f0ba7fce.js",
    "revision": "2d8fc628e93dd2f9e21cc8cf7f91d84c"
  },
  {
    "url": "assets/js/11.6be05a6a.js",
    "revision": "28bc5fe626d6ddec70538e7c3d0124d4"
  },
  {
    "url": "assets/js/110.ea048fbd.js",
    "revision": "ccc4555e615f6c65112d7d0333a50120"
  },
  {
    "url": "assets/js/111.802ddcd5.js",
    "revision": "cc3e122fa1f0e4fe228b9802ef21b2bd"
  },
  {
    "url": "assets/js/112.282917f0.js",
    "revision": "0d4ff6e94c13528bf6b931e6e3ea068d"
  },
  {
    "url": "assets/js/113.f7a6f246.js",
    "revision": "dfa7adb0700c88078cc06c64d936dcf3"
  },
  {
    "url": "assets/js/114.89e17fb2.js",
    "revision": "60f3676ebf471c83ffc7205d0d9c806d"
  },
  {
    "url": "assets/js/115.3e4c3c91.js",
    "revision": "2d0857b47e8c68a62aec44fad0e50b44"
  },
  {
    "url": "assets/js/116.5b614edc.js",
    "revision": "c5d0e2e2a913fe4c603931c5512508b0"
  },
  {
    "url": "assets/js/117.d2f8af19.js",
    "revision": "088450ed6ffccee07cbb20a17f6e0b23"
  },
  {
    "url": "assets/js/118.42f619fb.js",
    "revision": "9e215f419433e3d8efd2e9ccb52bc0a7"
  },
  {
    "url": "assets/js/119.d97caddc.js",
    "revision": "8fa4a6a11d642120cbf3748839de5459"
  },
  {
    "url": "assets/js/12.64e67962.js",
    "revision": "eb555a4d3a05df50243a5589fcacc3a4"
  },
  {
    "url": "assets/js/120.9f6f5860.js",
    "revision": "c22bbbcc40110777867b213e1c5dc89e"
  },
  {
    "url": "assets/js/121.0a620390.js",
    "revision": "1673ad45632482437e2755ef1f462df0"
  },
  {
    "url": "assets/js/122.4aa9a13d.js",
    "revision": "de3490c774fe894b02d2742e9dddbbbe"
  },
  {
    "url": "assets/js/123.a8aa7082.js",
    "revision": "1ec14c6539a8d4f5ccf2a150247a349a"
  },
  {
    "url": "assets/js/124.242e11af.js",
    "revision": "9427bb891e94923cfda9706d798641d7"
  },
  {
    "url": "assets/js/125.7cce7b96.js",
    "revision": "ffaeaa4588fcc554a690876311ebc9f0"
  },
  {
    "url": "assets/js/126.e6195848.js",
    "revision": "f0b975c27c821877f36cee3e8748bb05"
  },
  {
    "url": "assets/js/127.e093578b.js",
    "revision": "48fa16de2589accb717efc66c9054eb4"
  },
  {
    "url": "assets/js/128.b6d375e5.js",
    "revision": "a4bf466ee129a739d0dc7377567960b2"
  },
  {
    "url": "assets/js/129.9ed22001.js",
    "revision": "08d76f1c9b90f08e71e2ded996b2d9d1"
  },
  {
    "url": "assets/js/13.2de7d659.js",
    "revision": "3031b6b1b5aa7840253082443db07df6"
  },
  {
    "url": "assets/js/130.fba4a4df.js",
    "revision": "7d66eeb3461bfa9c268e1aaccc3ab72b"
  },
  {
    "url": "assets/js/131.4875264b.js",
    "revision": "3585a095e0193bc1b2e213988f1f23ad"
  },
  {
    "url": "assets/js/132.f2262882.js",
    "revision": "454e7253e372dc20c12ab2c8c2938337"
  },
  {
    "url": "assets/js/133.f899ddc2.js",
    "revision": "2317ee7c6c653005de2b28849a08a4b5"
  },
  {
    "url": "assets/js/134.9536b89e.js",
    "revision": "a5f7ba31f6b18ef4ce612e4a6d599ac9"
  },
  {
    "url": "assets/js/135.c49de660.js",
    "revision": "7752f466cdd512f5f01ed44a4e48d8e6"
  },
  {
    "url": "assets/js/136.18932c16.js",
    "revision": "a51245e427d9417736402f026ddd014b"
  },
  {
    "url": "assets/js/137.cc8da43d.js",
    "revision": "68f7c4f739a69e2daccd79f6f069bf2a"
  },
  {
    "url": "assets/js/138.d284dc2c.js",
    "revision": "1aa63dffbc93b8cfa0f2a9c2173f3f42"
  },
  {
    "url": "assets/js/139.3ba2cbac.js",
    "revision": "4ee3b707efc836b0ebbd41968a7f34a3"
  },
  {
    "url": "assets/js/14.611801c5.js",
    "revision": "1f82011f12181b0e70d933873bdfaf36"
  },
  {
    "url": "assets/js/140.b46b6e26.js",
    "revision": "a10277bc7f812e2e98f901304e292eae"
  },
  {
    "url": "assets/js/141.353d887c.js",
    "revision": "8265fe50ebcffe725eb182d6d050f07b"
  },
  {
    "url": "assets/js/142.e038e95d.js",
    "revision": "e59627a54af0a8d67a1fb7f7db17d8d7"
  },
  {
    "url": "assets/js/143.2f4b57a1.js",
    "revision": "8f6e5103bd6e3c62b4fe3be2dabda17f"
  },
  {
    "url": "assets/js/144.ec97e1de.js",
    "revision": "ba9b3442f18fd84ef2a828c7a90a5b66"
  },
  {
    "url": "assets/js/145.47741ffb.js",
    "revision": "02ff16d9b5bbcf7a6cd0c4b04a126f74"
  },
  {
    "url": "assets/js/146.0338555d.js",
    "revision": "810f5750596e73eb51ded3ddbb84ef96"
  },
  {
    "url": "assets/js/147.5260aeab.js",
    "revision": "e9d3a5797081b35a06535b5c9a2632be"
  },
  {
    "url": "assets/js/148.9010b2cf.js",
    "revision": "4acf747d1ec536a9c507d73c1fb1795d"
  },
  {
    "url": "assets/js/149.1fbef31a.js",
    "revision": "2dd899d22e946bc6ea1187681140882f"
  },
  {
    "url": "assets/js/15.5d979bc5.js",
    "revision": "80a39eb78ef5fec1c0712874f9458a65"
  },
  {
    "url": "assets/js/150.52bdad47.js",
    "revision": "0ab151b4cd2fa1a6509cce51ef407ad3"
  },
  {
    "url": "assets/js/151.3255899c.js",
    "revision": "f10102b27ffc11c069bccd04a1318807"
  },
  {
    "url": "assets/js/152.e20b8be6.js",
    "revision": "b7bf38c291717e22b3c547896bded77c"
  },
  {
    "url": "assets/js/153.d477f8c4.js",
    "revision": "f0d1e1ebc98c24a183bc8c65b2038107"
  },
  {
    "url": "assets/js/154.c8ffe4ee.js",
    "revision": "b110f6cfe94410f50f6433a3be26fd36"
  },
  {
    "url": "assets/js/155.dd9725a4.js",
    "revision": "c621b9d45a5e0804019774da89a92de0"
  },
  {
    "url": "assets/js/156.36c391e0.js",
    "revision": "daeaba7d6bfc7839ff496546dfc74c5f"
  },
  {
    "url": "assets/js/157.cd2830a3.js",
    "revision": "5e0f0f8f372bd611505725917bbcbd13"
  },
  {
    "url": "assets/js/158.153dca70.js",
    "revision": "713fc09b19b3ea18c388eb74e2379822"
  },
  {
    "url": "assets/js/159.a05ea68f.js",
    "revision": "8537bd1d330bca2fddb987b2fc9d4962"
  },
  {
    "url": "assets/js/16.704c59bb.js",
    "revision": "57725b819a1212b2d963a32205434b74"
  },
  {
    "url": "assets/js/160.f1e8068e.js",
    "revision": "8ea04b72d3d27c4a304c0deb62bfa477"
  },
  {
    "url": "assets/js/161.35b762c9.js",
    "revision": "e1e26c9afa9d8e78d70927375a23d0f5"
  },
  {
    "url": "assets/js/162.dfa77fa2.js",
    "revision": "cc5a3db4b8ba4715f988b0ec1ca63bde"
  },
  {
    "url": "assets/js/163.7f062df4.js",
    "revision": "dbc78c4376fd10895dd990c478a49a78"
  },
  {
    "url": "assets/js/164.53569e09.js",
    "revision": "2e6fc1c4800e4b847fc35f707c4d6b98"
  },
  {
    "url": "assets/js/165.2f8ce4ca.js",
    "revision": "a35709c57210c67b0774ce142c1d2967"
  },
  {
    "url": "assets/js/166.e81da9f1.js",
    "revision": "b4fdd8f4ce7f8b3f365614debdef45d0"
  },
  {
    "url": "assets/js/167.4beac015.js",
    "revision": "caa600893210d6843823a396744d6b54"
  },
  {
    "url": "assets/js/168.490abc64.js",
    "revision": "3cae18435fea1fbcc2d1004873640829"
  },
  {
    "url": "assets/js/169.c13ab55e.js",
    "revision": "7dd6e7dcc7afded248cfd7149c169d26"
  },
  {
    "url": "assets/js/17.a4eec31a.js",
    "revision": "e717e8a32b3e8bd04d6aa8c44eaffbf4"
  },
  {
    "url": "assets/js/170.1f58c387.js",
    "revision": "589c784b41a9c0d6fdd1909cf4bb1eed"
  },
  {
    "url": "assets/js/171.6d1d3f8b.js",
    "revision": "e57730dff607e42348aafbe689079b69"
  },
  {
    "url": "assets/js/172.25d955be.js",
    "revision": "8ad221cfa55f7ce45a1ad2caae5f0244"
  },
  {
    "url": "assets/js/173.71d56984.js",
    "revision": "15735b113b6abe43ae112cf6087f54bc"
  },
  {
    "url": "assets/js/174.8e180036.js",
    "revision": "4006adbb69e28a314c4b0fafda7cb0ea"
  },
  {
    "url": "assets/js/175.24c75dfe.js",
    "revision": "84d539f93171a6eb2851ebda5909b7d9"
  },
  {
    "url": "assets/js/176.42d5fee8.js",
    "revision": "3565f845b22f2dbf73daf13778b1b7b9"
  },
  {
    "url": "assets/js/177.cee1f3eb.js",
    "revision": "b3afed76a1d665e7a398a550af849320"
  },
  {
    "url": "assets/js/178.4513f8a7.js",
    "revision": "c0ce763aa10880aa97d1f37bca59eaa6"
  },
  {
    "url": "assets/js/179.c17d0763.js",
    "revision": "4a673d0e90bf1851a0e23d6c0683c657"
  },
  {
    "url": "assets/js/18.c8e2c08d.js",
    "revision": "a0c9fe6d4166e9eed50a5bbf093cd3f4"
  },
  {
    "url": "assets/js/180.a0745ecd.js",
    "revision": "92adf0f172f45c532a733c7de4c89f9b"
  },
  {
    "url": "assets/js/181.a7edb0f0.js",
    "revision": "08bfa8242150221c39c72b48d5d9afce"
  },
  {
    "url": "assets/js/182.8c6a4546.js",
    "revision": "dc2245f56c19823af660fb5693dd4135"
  },
  {
    "url": "assets/js/183.25a85bfb.js",
    "revision": "45b07b5d279f21bcd4efea2119b698aa"
  },
  {
    "url": "assets/js/184.57b26d64.js",
    "revision": "c41142ab1b7d0441d92baebf0468ad94"
  },
  {
    "url": "assets/js/185.db6f3725.js",
    "revision": "e166b914727d9a44b3c065f68899ffa2"
  },
  {
    "url": "assets/js/186.633117fa.js",
    "revision": "46a533794476eae98aa0a39196bbe2c8"
  },
  {
    "url": "assets/js/187.f892c36c.js",
    "revision": "a3db8610b335713707f0b547a1f17331"
  },
  {
    "url": "assets/js/188.2470c70d.js",
    "revision": "0b7764909f2bd1ebc0812034a094d485"
  },
  {
    "url": "assets/js/189.f4246745.js",
    "revision": "17938bea7375b5616f66e973a955874f"
  },
  {
    "url": "assets/js/19.3fca805f.js",
    "revision": "6a77d86bee575c687d93ca5cc5b04eb0"
  },
  {
    "url": "assets/js/190.b138273e.js",
    "revision": "c477a8fce3056df802396170946d1ac6"
  },
  {
    "url": "assets/js/191.3047c21e.js",
    "revision": "aa4eed96e84282f10fb5377ccdf388a6"
  },
  {
    "url": "assets/js/192.1c96ad85.js",
    "revision": "d2a0d7d77e5fef16316971a4c12dea67"
  },
  {
    "url": "assets/js/193.6050535f.js",
    "revision": "ffb3b85abff877459a974cba79aa37ff"
  },
  {
    "url": "assets/js/194.98532df9.js",
    "revision": "71f810514bd8cd192c1d97a053d5b925"
  },
  {
    "url": "assets/js/195.1b779baf.js",
    "revision": "58524168fd4ea6bb7d796ad079f4bc9c"
  },
  {
    "url": "assets/js/196.d754849b.js",
    "revision": "1730d12a2fe979c7965d0a9a7336a379"
  },
  {
    "url": "assets/js/197.432ce84f.js",
    "revision": "925ce8c8aa4b5244edb3c75dd395a7ab"
  },
  {
    "url": "assets/js/198.a207ecc7.js",
    "revision": "c5c4cb6c45d76c5dd2576ee056dffd09"
  },
  {
    "url": "assets/js/199.7aba9a80.js",
    "revision": "15fa360f0692379c6c7b39af43bb78a1"
  },
  {
    "url": "assets/js/2.350e0505.js",
    "revision": "ce804155c60fa92d9b30cd40f0eb023d"
  },
  {
    "url": "assets/js/20.eb358ca4.js",
    "revision": "d73551db39f1e6518391c01286b593e8"
  },
  {
    "url": "assets/js/200.77eef2e3.js",
    "revision": "cd664ff4eb593f73edfc549df83fe597"
  },
  {
    "url": "assets/js/201.6b61295d.js",
    "revision": "fe47e2fe5d29ea11a9c99a1d0e4553cd"
  },
  {
    "url": "assets/js/202.a905349c.js",
    "revision": "f0950959e33e288f357f118c47f28770"
  },
  {
    "url": "assets/js/203.60e55e2a.js",
    "revision": "0a868794d1f1b4e578da434d7503cd2f"
  },
  {
    "url": "assets/js/204.7fa1309a.js",
    "revision": "123d2ca054190b31615774efc9de01ce"
  },
  {
    "url": "assets/js/205.a1b64f4a.js",
    "revision": "db8c52c6369143e242fc1d339723e0ad"
  },
  {
    "url": "assets/js/206.bf1e9ef0.js",
    "revision": "946f53c99d2a08e107152cae263cf054"
  },
  {
    "url": "assets/js/207.0bdc30c7.js",
    "revision": "7315ee97349e0f72f807b2f6de49774f"
  },
  {
    "url": "assets/js/208.83717396.js",
    "revision": "50b9dfed1376b3057ba2de086676d146"
  },
  {
    "url": "assets/js/209.2bf76891.js",
    "revision": "27dadcf8d68cc016b78ff865fde514a3"
  },
  {
    "url": "assets/js/21.ca5d0421.js",
    "revision": "564d9dc9ff938fd38720d450b5f223d1"
  },
  {
    "url": "assets/js/210.3161aba4.js",
    "revision": "e4199fa736817d59e61fd6654c95055d"
  },
  {
    "url": "assets/js/211.af80ff88.js",
    "revision": "8b3d08cfc03fe353a9bac08f0d1aea62"
  },
  {
    "url": "assets/js/212.e5777efe.js",
    "revision": "cdb3f81a1f5440871e6b7e2a6368d1da"
  },
  {
    "url": "assets/js/213.42908b3d.js",
    "revision": "43c227c7566e8446bf988126a3c72909"
  },
  {
    "url": "assets/js/214.def10fe2.js",
    "revision": "3831cb2dd01313018bab8b1a3de46ee5"
  },
  {
    "url": "assets/js/215.a3b1d49d.js",
    "revision": "1b1822594d2be3dd20bda30778fa2146"
  },
  {
    "url": "assets/js/216.e343223d.js",
    "revision": "dcce94c0eef8433c25db005a111ef23a"
  },
  {
    "url": "assets/js/217.b2f48999.js",
    "revision": "595775114c68070b8d1fd3d56cf458cf"
  },
  {
    "url": "assets/js/218.5c101dfd.js",
    "revision": "76744c241381dbee9c04e9ad72055fde"
  },
  {
    "url": "assets/js/219.a09af4a2.js",
    "revision": "81fc7c7979865de111f3e3cd78e6d970"
  },
  {
    "url": "assets/js/22.7e69a103.js",
    "revision": "38300d9975292323b364214d7727c56e"
  },
  {
    "url": "assets/js/220.0604d8ad.js",
    "revision": "d8c4170d61aea6b52c059f7386c01d31"
  },
  {
    "url": "assets/js/221.e9684c30.js",
    "revision": "03593c344ec33b5e06a4d5d2f7865f4d"
  },
  {
    "url": "assets/js/222.f4c092df.js",
    "revision": "f638e7ac8988c4279536ea8f43a39516"
  },
  {
    "url": "assets/js/223.1b85df55.js",
    "revision": "77259ea4dd7c9f038ecea068a55959a8"
  },
  {
    "url": "assets/js/224.ea769bb0.js",
    "revision": "743218bc544626801ee552e21377e505"
  },
  {
    "url": "assets/js/225.1be6368d.js",
    "revision": "94f7e75e3100b7703bb0a87e6b4acb69"
  },
  {
    "url": "assets/js/226.d8295d0b.js",
    "revision": "285707a0414f78c439b5878d68b293bc"
  },
  {
    "url": "assets/js/227.315a8735.js",
    "revision": "bb68286300e705beb27afb6795527b69"
  },
  {
    "url": "assets/js/228.c16b616c.js",
    "revision": "39dbeed296ea57900ec4a45d79c4a749"
  },
  {
    "url": "assets/js/229.21966cf6.js",
    "revision": "6931d67bb463438fccffacdff7a26710"
  },
  {
    "url": "assets/js/23.39db1d32.js",
    "revision": "cd569ae4669aa03f0a14ac4ee1e1155e"
  },
  {
    "url": "assets/js/230.135f9ce5.js",
    "revision": "bcda69380df5d93e7eb3d24cd6cbacf3"
  },
  {
    "url": "assets/js/231.9c164864.js",
    "revision": "c07b2d7ed3e3ee18c64e25f2e2b879b7"
  },
  {
    "url": "assets/js/232.e222ae56.js",
    "revision": "e0cb740846475cdf7006ee267cc95912"
  },
  {
    "url": "assets/js/233.2d81185f.js",
    "revision": "607dc433ff68af6aecc343ec8a194dee"
  },
  {
    "url": "assets/js/234.f6df83fe.js",
    "revision": "96690cd1904a63d1fffa43f91a1de132"
  },
  {
    "url": "assets/js/235.19b57309.js",
    "revision": "d423428d9fd4a0380fa970e7f4b371b7"
  },
  {
    "url": "assets/js/236.1ba211ca.js",
    "revision": "5d5c45b1a6c7bfa56fe7b19124506c5d"
  },
  {
    "url": "assets/js/237.4b94a059.js",
    "revision": "cc9b5bc27b614582bf6d7b2d501e6a05"
  },
  {
    "url": "assets/js/238.a37dcf10.js",
    "revision": "3b70bc5dd097317917b76b6b7b8780ae"
  },
  {
    "url": "assets/js/239.0345cc21.js",
    "revision": "c1c61771f1cf24de5b7ab679067cb818"
  },
  {
    "url": "assets/js/24.6f9b4d50.js",
    "revision": "8fe8c4e2d7313033d2d691a6ddb49ea8"
  },
  {
    "url": "assets/js/240.66d03bc5.js",
    "revision": "6a7e7518d4a2f1df0e16de1aa1a3ee52"
  },
  {
    "url": "assets/js/241.469b8dc8.js",
    "revision": "6eeab9c8cd589d4ae190759cbafac8a6"
  },
  {
    "url": "assets/js/242.45f0f90e.js",
    "revision": "91a76eb9767edbe0774b6663706db614"
  },
  {
    "url": "assets/js/243.1781d6c2.js",
    "revision": "c1ba45423d14da853100794a5c5222a8"
  },
  {
    "url": "assets/js/244.f53cef57.js",
    "revision": "090be248d69b3ce1a079ae9ca3d65337"
  },
  {
    "url": "assets/js/245.17839e72.js",
    "revision": "f5548e429ac3039dcafbb1944fec2ef0"
  },
  {
    "url": "assets/js/246.5fb80ac2.js",
    "revision": "0ac6d2677edda9ab9db0e6db5b11bc81"
  },
  {
    "url": "assets/js/247.77aa4de1.js",
    "revision": "2c3e0b7daabeff0bccd3fb57cb172341"
  },
  {
    "url": "assets/js/248.6ca86b8a.js",
    "revision": "da18a12514240a2efc5a784d9b364ab8"
  },
  {
    "url": "assets/js/249.45de7b64.js",
    "revision": "6d0c0c72970ef6caa5a0df3fefc945fa"
  },
  {
    "url": "assets/js/25.337d46b0.js",
    "revision": "bbddeddbd17ce14064a9768294f30780"
  },
  {
    "url": "assets/js/250.6ac743d9.js",
    "revision": "650ceed51a1efcd197cced47fc7ff0e2"
  },
  {
    "url": "assets/js/251.d630f43c.js",
    "revision": "c67a56b0242cdde3b3ef0a33ed50f23f"
  },
  {
    "url": "assets/js/252.a6c0d466.js",
    "revision": "79aef9885107234cb8780e285470537a"
  },
  {
    "url": "assets/js/253.83d43f1b.js",
    "revision": "4c4b217853c844113cf1d68b778d94bd"
  },
  {
    "url": "assets/js/254.7b30c31a.js",
    "revision": "4b66343b5acdc7d82ba9e87f0146f91d"
  },
  {
    "url": "assets/js/255.ecd8ea80.js",
    "revision": "a1f075227f17f292f2fdbf02ef0e8cdc"
  },
  {
    "url": "assets/js/256.ce2a67e2.js",
    "revision": "5c608ed59fb9cb67005e3132a80b313b"
  },
  {
    "url": "assets/js/257.ab18d6c0.js",
    "revision": "a5df36c056bef142497f6111e01243d7"
  },
  {
    "url": "assets/js/258.a5eb57a0.js",
    "revision": "61c222762418946cbb507fc3eb4f01c9"
  },
  {
    "url": "assets/js/259.2443ec28.js",
    "revision": "89aa00acd56cc22c5630a7f401836884"
  },
  {
    "url": "assets/js/26.7660ec38.js",
    "revision": "b47624940879bff8ae088460ff5c70d3"
  },
  {
    "url": "assets/js/260.0ddeda26.js",
    "revision": "a9a120d1a803f9d9b0555e1f504c0fdc"
  },
  {
    "url": "assets/js/27.c989dcb7.js",
    "revision": "023b97a71f8c73eec54d44c164c8512b"
  },
  {
    "url": "assets/js/28.69fbeb90.js",
    "revision": "8ca4174f220bc13162aca14271716fec"
  },
  {
    "url": "assets/js/29.c932eb6f.js",
    "revision": "ae17a06c62e1d5331a1434cd5f8b908e"
  },
  {
    "url": "assets/js/30.42a0bb32.js",
    "revision": "370e6c31d9b81c7a78efdee7ce507fe8"
  },
  {
    "url": "assets/js/31.0070e4b2.js",
    "revision": "627c044fe37eabd52e04f56d3dcf501e"
  },
  {
    "url": "assets/js/32.faaf8588.js",
    "revision": "fdd92d305ce7eb79f56ea8de7aa4208f"
  },
  {
    "url": "assets/js/33.516b012b.js",
    "revision": "b58958d4cd0670e118d520c67876414e"
  },
  {
    "url": "assets/js/34.8c8dc870.js",
    "revision": "2ee8c974e72c5fedaeba27b5bbb9cd87"
  },
  {
    "url": "assets/js/35.28e1c2a1.js",
    "revision": "e5e6f41e997eb9ff8b4eb08531fa0ce2"
  },
  {
    "url": "assets/js/36.b66f8b3f.js",
    "revision": "59234c671fc78c8f3b27526b430ff3fe"
  },
  {
    "url": "assets/js/37.4a602b15.js",
    "revision": "662fa868737718ca35f3f915f7660866"
  },
  {
    "url": "assets/js/38.0bc885ca.js",
    "revision": "6411f6ac626662a4aa5eab1b2e79469e"
  },
  {
    "url": "assets/js/39.876ec1eb.js",
    "revision": "acbf8f4f229d93bef90c083a5c9d2f56"
  },
  {
    "url": "assets/js/4.c5f7436a.js",
    "revision": "5cc933b73073829ece95e2606a6a1a76"
  },
  {
    "url": "assets/js/40.50ef357f.js",
    "revision": "53250a16823b0b69b1e9035de707bcc8"
  },
  {
    "url": "assets/js/41.5d0c2fee.js",
    "revision": "c0a812aa45bd8315db99a85566bc0d91"
  },
  {
    "url": "assets/js/42.c70d02a1.js",
    "revision": "8e58a4b0ae16bac6d4c3ca1824c4b904"
  },
  {
    "url": "assets/js/43.f87d1d99.js",
    "revision": "9c16e78164951f5db32774132a8c9a11"
  },
  {
    "url": "assets/js/44.db69d683.js",
    "revision": "b3bfd7c82661a4f1a84f5b382c750353"
  },
  {
    "url": "assets/js/45.426908ae.js",
    "revision": "91c91d97b6bdbb6b2823d06b7f0e937d"
  },
  {
    "url": "assets/js/46.d1945c61.js",
    "revision": "7aeef4ea088577b2909f772ea2d3b4f8"
  },
  {
    "url": "assets/js/47.c47cf18b.js",
    "revision": "35a768dc39354c291c18a17393e823fc"
  },
  {
    "url": "assets/js/48.31aabda0.js",
    "revision": "1dd8094e33d4c06d809416b487409c1c"
  },
  {
    "url": "assets/js/49.232e3a2f.js",
    "revision": "70cd67ebdcf14e822f4b96e913731320"
  },
  {
    "url": "assets/js/5.9d764c17.js",
    "revision": "26d28e5a9d712378eae2b76d8ed4b464"
  },
  {
    "url": "assets/js/50.3e441331.js",
    "revision": "e61d6870f5fd8e9ee6db5055e1df1429"
  },
  {
    "url": "assets/js/51.556fc4f5.js",
    "revision": "96efd5b15ae25032384e4fa37475bed1"
  },
  {
    "url": "assets/js/52.03d05080.js",
    "revision": "b64e49b91173b6317e1833bc70aa3999"
  },
  {
    "url": "assets/js/53.0ddb3ed4.js",
    "revision": "e0955cc8cf0040c247f511e21f4a7f4a"
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
    "url": "assets/js/56.d226f3b1.js",
    "revision": "aca39287d5dc10f66c2767573d010c7e"
  },
  {
    "url": "assets/js/57.be621908.js",
    "revision": "f0f44f4dad5fe3aae3edb95a799807dd"
  },
  {
    "url": "assets/js/58.49652ffd.js",
    "revision": "b0f5a499e9108d6b648b894c5beb5945"
  },
  {
    "url": "assets/js/59.9128f25e.js",
    "revision": "769deb0204b136a7687c46f3d899273b"
  },
  {
    "url": "assets/js/6.56288f19.js",
    "revision": "2e484f10c840321c37fc2758ff48a9c3"
  },
  {
    "url": "assets/js/60.2652b36c.js",
    "revision": "893c29a119e0ff407620190f1cdeaa94"
  },
  {
    "url": "assets/js/61.02cba866.js",
    "revision": "6d4327d766dd249092e5dc467615399f"
  },
  {
    "url": "assets/js/62.987518db.js",
    "revision": "84a0abdf827c563b8b64e3041f479548"
  },
  {
    "url": "assets/js/63.49ddd782.js",
    "revision": "0a606b3834fef4f9baaf5e4027c1e9d2"
  },
  {
    "url": "assets/js/64.2d4314e1.js",
    "revision": "bd93542b6b651ead46d6d79b1fd25925"
  },
  {
    "url": "assets/js/65.2415f4e6.js",
    "revision": "f212f3d96a526ca172f60775caecf6ec"
  },
  {
    "url": "assets/js/66.9993909a.js",
    "revision": "9ef1a475173f21fec1eed9ab60a586f5"
  },
  {
    "url": "assets/js/67.a7ee8760.js",
    "revision": "0afc8503767be4b50a79b6d7ed6ce50a"
  },
  {
    "url": "assets/js/68.aabb6a0e.js",
    "revision": "1697c1de86f54af93622202f1310dfb5"
  },
  {
    "url": "assets/js/69.b4b26d7a.js",
    "revision": "51b2dc6b57a7818ec498a1bba1cfd3c4"
  },
  {
    "url": "assets/js/7.ed12686e.js",
    "revision": "8821906d4e9b8ad18eb6c10c4c5103d4"
  },
  {
    "url": "assets/js/70.feb9144d.js",
    "revision": "6ff757f9bbafac593c24e554871397fd"
  },
  {
    "url": "assets/js/71.78fafb02.js",
    "revision": "66864986b4520bb4bf290ede88586f10"
  },
  {
    "url": "assets/js/72.003a5f68.js",
    "revision": "851918d8758ae8b9e841a3f9fa79b771"
  },
  {
    "url": "assets/js/73.45796a7f.js",
    "revision": "fe39c66849c56a7b76687f734dcb177a"
  },
  {
    "url": "assets/js/74.41fcb5c4.js",
    "revision": "e158936f0059db66c23fed6693ae0b6c"
  },
  {
    "url": "assets/js/75.4338857c.js",
    "revision": "e86e3ef9f12a505172307a358acdaad4"
  },
  {
    "url": "assets/js/76.ce4f4f10.js",
    "revision": "f121aa846777089dbbe0c8047c6f4331"
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
    "url": "assets/js/79.e099b28c.js",
    "revision": "d6e492548122991f10a5dc16d566e1e4"
  },
  {
    "url": "assets/js/8.e072cf01.js",
    "revision": "33ff2b8086ff0c1d95f9245fcb4b6bb2"
  },
  {
    "url": "assets/js/80.6fc084b6.js",
    "revision": "d2620a5984454b992c51d876900d89a6"
  },
  {
    "url": "assets/js/81.03e67aa6.js",
    "revision": "b6a906ce5000a7e8d50d78f4daf078fc"
  },
  {
    "url": "assets/js/82.4c529ef3.js",
    "revision": "58764621e36f192cb7db37af053fa301"
  },
  {
    "url": "assets/js/83.8e45f24c.js",
    "revision": "8d22046afaebb20cb0aa659ca6dbdbb9"
  },
  {
    "url": "assets/js/84.021849bb.js",
    "revision": "e35a74ea7aaa4315a570640bd88f650c"
  },
  {
    "url": "assets/js/85.99d4bd49.js",
    "revision": "4ec5b474acbfff8a7d61c14c6a0b6787"
  },
  {
    "url": "assets/js/86.889b95d7.js",
    "revision": "92a1e0d6ff696de064926aed63df1054"
  },
  {
    "url": "assets/js/87.35b26568.js",
    "revision": "91f460e5700c384c25b6c2c5ffef86e4"
  },
  {
    "url": "assets/js/88.59299840.js",
    "revision": "59342cac68c0b6b508083452caa8d979"
  },
  {
    "url": "assets/js/89.6672719b.js",
    "revision": "520a501c3d844a16291e5c6153ecc42e"
  },
  {
    "url": "assets/js/9.00613853.js",
    "revision": "1a1d9ccfb21d2b0e86ad8ab2e9ba100f"
  },
  {
    "url": "assets/js/90.9d6ba53b.js",
    "revision": "58321b21de79bc8b962ad7b32048374e"
  },
  {
    "url": "assets/js/91.c604a8c6.js",
    "revision": "ae67861bf32134b5aba4f5edbece4c3c"
  },
  {
    "url": "assets/js/92.5a4a2233.js",
    "revision": "c6d0892dc9c42e3444a022cea103031d"
  },
  {
    "url": "assets/js/93.c7b4ca26.js",
    "revision": "c6538a30b3e1b14f04f04e02cc2c6d6b"
  },
  {
    "url": "assets/js/94.df43a8a3.js",
    "revision": "40185f6a2d53a9b7df039b86c09f8d9b"
  },
  {
    "url": "assets/js/95.5fbd665c.js",
    "revision": "80f48a1877c557ee46aaa61639d6ba90"
  },
  {
    "url": "assets/js/96.7346b225.js",
    "revision": "59504edc12619cf296fef8ec3c222032"
  },
  {
    "url": "assets/js/97.f97d2281.js",
    "revision": "3d7c1a31cd90cb3ce971fa43c51641ae"
  },
  {
    "url": "assets/js/98.33761fad.js",
    "revision": "233faa79ef19111fb7e03cf54d15a256"
  },
  {
    "url": "assets/js/99.61f016bf.js",
    "revision": "6510bcf4794ff453c751ce567165d594"
  },
  {
    "url": "assets/js/app.b6327783.js",
    "revision": "217d741494046724d90569f0c60a9b62"
  },
  {
    "url": "categories/index.html",
    "revision": "0897b712a5950e122678963a5f673953"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "672c0c2e57558612f04522a8916d39ec"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "6c54ba0c977a1d3b55a0b074e1991521"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "3d8dfdac2e42cf1040c782568cf9dc81"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "b9c70e5d359bffa6c3166864ac7efaf2"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "55fb308ec54b9fe0f11c706fd70cdcd8"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "d77b9a3bf713e6d85dcfaa9e7df2ea91"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "6d2f91cc6f78d4f1dbb1ea9cd71904e1"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "435caac1b461344db6f18b4955813f22"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "ef69f0e72169ca883a767b6caebd8150"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "24f0990fbf26e2802a37370c8f005eb7"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "6c54ba0c977a1d3b55a0b074e1991521"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "f0969f0e277b259ef360dbb30a4a5a73"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "a66a5e2a8883e05c475c80f7a0e6d644"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "85fbf82199a9f0290040f9503b889932"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "dd0d1e420409561a2c8915ab971a7676"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "5005132a4739783b0d69e31ab8462c80"
  },
  {
    "url": "cs/database/index.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "f61be9ca2b584d4345376a5b5a5fbadc"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "e5aea57099fcf4b96517c3b9682b3b69"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "2b22c4dbb328a93ca0eabcc4074651f9"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "2a954f576cb1d297216ce2980472c749"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "352ce811cd8afca4149cec07f2909d5b"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "13313ee11745cb0f89030a2a49327290"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "c832d8a804888cdb9a32ab3e15df7820"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "59a5eeabc6fb121fed9292e195a0a655"
  },
  {
    "url": "cs/design/command.html",
    "revision": "a34cf9d8a0fad89e424c7da1448f6b8c"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "dd2e93c36acfb1a35915d669d9488dd4"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "ecca39e4f8033b012e0ad6dc6be19466"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "473646a6b4db267ddd78e69eb3efea67"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "5233c10dc5f7138db839eae8188d0f36"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "bb5b2843cfcb7527a6dd045c0346636c"
  },
  {
    "url": "cs/design/index.html",
    "revision": "b83485bafa9bb5b5dc375ffd1b69e490"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "210a92e4f1b86672d05ff6c431e0db20"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "d0a0279c54e6a88fd79b66e7adbb329e"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "e84dfd50ecb65c236159c9c1ad3ae731"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "96876b8ccce645f01033464fbd876a72"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "ae5acf1294bd2986c25f2a8cb6e09d98"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "4a9b987e2c13f96401e5200ac01887e0"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "de5fa43ef6d3807983acc8ae1883971a"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "eb64d9ffeddddeb77de1597782d6db48"
  },
  {
    "url": "cs/design/state.html",
    "revision": "32b2ce62c9687c0f54a12dec87a4df76"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "8711e52c03b598cabc77fc03372f3f37"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "dba81a44a7d948b5ef4bb1d5a59537bd"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "2e55bb5a0e4fb87c7d0eb7cb155511ca"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "4195ff1f0fd6ce570a729ba5f93441ea"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "cc924cabdb8f2deb1e633b5185275fb1"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "271edf515957027379235fee59e7f25c"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "0d1443a03402d701067193b94351c82f"
  },
  {
    "url": "cs/framework/vue3-design.html",
    "revision": "3642a13d8fecc37db8e7743313a5f2c9"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "88b355d620bfacdaf17e323116637a6d"
  },
  {
    "url": "cs/index.html",
    "revision": "627ae633cac2ecc3db0215aa2c82f8f1"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/java/container.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/java/index.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "3b4a6400b78f0edd034e1b4ce07b6564"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "aad639754d9c8195eaf58d53673f9bc2"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "07cd234f38f7dea33d1755feaab5baa7"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "4932594c4cc06beed4705c35c51322b8"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "493dbc6a52461302e02dbaad7cb27196"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "e9dbfe060e676362e32ba7e65fb27c03"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "7b074b5ba775fdcd21fff11e384df250"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "53dbe3646a4523829212e5fa9e4722ae"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "de206b527a166b2dfb8e11540b2dc0eb"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "a3b867bc9ea07fdfcdd6a7c90919b9b4"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "35788342ffe6d8af4e3318e998a07faa"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "ff29b90bff7564fc335c350fab20ba76"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "8ebef3c75125d5cd22f8891e2ba55b6d"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "969e0c12d2b3b703434afad01447ef5d"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "d048d9e84b8c1ed5b3350c5a217a71f1"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "182a361696d021538105ad5294ec0dd2"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "74ee20e8409e5e3dcd92821c02a0c0a0"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "e65be20a21789ea6b2440b89a020b093"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "5ddb67241e60ea3f6e418ddb9175ebe8"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "47a41a1abe35ef79613cdc0f7010028b"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "36971737d3afdeb76a36c9cd3f588772"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "b7814a2e954ffd235b293328c331799c"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "bf0d8f59feaf106a81b445019a89dabf"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "be89696b1a66548c7904cb798fdec3f3"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "0b9b94a6ae624768638267d332c2969f"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "3554f16ff8a7921cc795a72d6d2c58d1"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "19b13e1b91e97bdbd0abfd3b6a5edb17"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "4f9ab67eadf8d3cc1a2f82c67754684e"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "e88002c352936d02a4a0561767af74eb"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "8e91589042732ae8335e74c2714068c4"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "bb32fbe56a29da74b4c62602e1651cd9"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "890d5e6f95feb99a5f8a3dc782c0f0b0"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "df087d1d468ebefe95e1e25ad822e29f"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "0a2b2ffe4e0618b6552ad75ea39ce3f7"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "9f440f7320497446ae9c43ae867725c9"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "77061a728e799c8945e71bc379d5a05c"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "d8dd9da0c1ce4da87c40f0b246ea6041"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "d8bc6664c4dfc07171c01842a642dc7a"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "61d1a18d2a221ec4c5ccbfb3efbf982c"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "ee40188c3664d2ea95cb23aa86506418"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "67bc95d3badb72ec6ec1e9716b4476a0"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "8df9224d371ffb15e870e1b36fa8fcd7"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "7854ded038774f7717dd4790fc46374a"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "34150885471cee188121b4b2cac71a70"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "b66fd7fe0f4e3579e3f2f36a67c85b2e"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "ca95621bcffedb1aeab976c8d5754f0f"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "838fdbbee5db95652b14a7b4e4b6f47f"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "d95b92563ea694feee2ee39d6dbd675a"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "6f92c942d107a4356f6d1cb293889609"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "8d84907482e4664390dc285bd3cf3f21"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "30a964e278d6ec74473fb64d81674959"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "3f9932ca29dd2bf369c3f9c8c1dfafe2"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "c9058fe7cb7efb99ff5ffec802d6a7f1"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "efecb36ee815f250fc40a65a05870dba"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "1ad1cf0ec9e26d84c9652fbc3b317899"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "15417f28f10dcc6207ab2922ef07ee73"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "2550a5cfe19fd3bcd1d6f577a64a915c"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "573d27b2cbf3e9fc6976151a576ae4ad"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "b6c056a6f90f7fb20a31b938b932d15f"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "760b6ca35130e1a8a9de1f7f17ae78b3"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "475a2a3b18656ae13bbd01470cdbb1fa"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "aa5aab8d75909517f45ef70e7d0c9f12"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "0ef310cce4c18592bee5b73323b28657"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "7de9d2054eed2233868467c70c074d56"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "ba51141070075aeba6a1e7c5ca9c7708"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "50e017ffef2d3a4d507e000ee82bfd7d"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "a38c35488c949610a084225ea6a13a53"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "eb24705bb83a84782aadb787b198851b"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "f550ec94a144fd94e70a9678f2e93578"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "8307a5fb0662f0527fb80312ffd8a306"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "56164785f3218ef8203507fce11664b4"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "cc500188e532c1e10a0f5a4cea5a99ed"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "4a4f1deb86d0d51d4c9029808eebb857"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "c23bcd9753138f51aba7fdbc19c14c7d"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "1ac879f03c44a3dc1b5e0f638259d512"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "57ef428763f3346dde8ec96c297ac643"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "aed2214ed121b2fd4ea387f70c396b40"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "ef89a13e184544ec4c351ce7e6950022"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "b8d79e89ae137a04f86aba28e26c75dd"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "5751e741d34e7b350cef04af2f18bbc6"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "4ac4efa78c443b16c589f3ee2824eafa"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "731faa1e1f21b232dbe349d6dd6ffd5b"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "97f0298b21722058d32f1b9dd8ae084f"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "2d622e9e2679e03dc40ee00f88a4111e"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "34150885471cee188121b4b2cac71a70"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "b01463832e53358e9d744f33b582d150"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "413760e003d26a2ef32eaddbebf54758"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "6c54ba0c977a1d3b55a0b074e1991521"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "41103a2b72329740899e3f548565f24a"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "c58a974150c071320afe25a26a87b838"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "8de8a6308499553050fccee8a4bbf13d"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "8ee6ef430566dba9695583694584bcc4"
  },
  {
    "url": "cs/network/application.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "c76f848c8c885bed3e8e36624f43fd46"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/network/index.html",
    "revision": "6c54ba0c977a1d3b55a0b074e1991521"
  },
  {
    "url": "cs/network/link.html",
    "revision": "89d8d3d74967a2a11f471819b4984bd2"
  },
  {
    "url": "cs/network/network.html",
    "revision": "b0f9f0ac5cfc0b13d89791b22df24092"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "670420990eb9262f7551665e8dc58f32"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "a040b585dc9e1de4c62355c36d7afcf4"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "1af9bd1f05e11975ef22d4301b5335ed"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "90eaa81eae252e0c4a5bbf3dd6fef8cc"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "ba8f896b9a5a3c39f6fcddf8653f7fff"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "6c54ba0c977a1d3b55a0b074e1991521"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "07ac73d9fc73d55472b417f96702a3b2"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "95507e5db419fe3a3d7abe2971e2aaca"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "0c4612599b91755f44310faaa3f50201"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "f8a8130af17a855c435c0a9f321010de"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "3b4a6400b78f0edd034e1b4ce07b6564"
  },
  {
    "url": "cs/web/index.html",
    "revision": "1a1b7fa0b03b5a5534497778c44ded59"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "834b4504d21ce6115270d139ab62d337"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "cb7727fa9209d66dcc917875e9ce9eb2"
  },
  {
    "url": "cs/web/web.html",
    "revision": "7527478c0eee07abc1abe4514ed76738"
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
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "a66cc34a635df85ccbbf9e9ab998b4b0"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "422cfb38359b61815c9254ebf1f7bc5c"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "9142ff89b0ba74692244ff12f069e819"
  },
  {
    "url": "language/english/differ.html",
    "revision": "fb139b250e10105a40ac6cdc99e46369"
  },
  {
    "url": "language/english/index.html",
    "revision": "aad639754d9c8195eaf58d53673f9bc2"
  },
  {
    "url": "language/english/modal.html",
    "revision": "c7a55e248074b09516f96d437efd6e06"
  },
  {
    "url": "language/english/mood.html",
    "revision": "a26a10a26a4ccda33a5450ee4c5ac158"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "2daeea678ce8f9d405d998b788bca309"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "3300fd33875af0a0e42162d5371c9fba"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "a0890df2d22beb638d6f3a91e65fefad"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "0e0b146833442989515262f927da6369"
  },
  {
    "url": "language/english/tense.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "language/english/verb.html",
    "revision": "a7e1d7d7453b159f3321fb003eaa78e2"
  },
  {
    "url": "language/index.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "tag/index.html",
    "revision": "f8ce75109c90ffa65cf307d8c5135376"
  },
  {
    "url": "timeline/index.html",
    "revision": "ca5894391a4e7b603322ac64072d1b99"
  },
  {
    "url": "tools/hash.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "tools/index.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
  },
  {
    "url": "tools/nothing-here-but-void.html",
    "revision": "18813ab12e42589b6bf7190d567000cf"
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
