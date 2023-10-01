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
    "revision": "143c9cc84ce298f608f98d84924113a1"
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
    "url": "assets/js/1.f4c0c26a.js",
    "revision": "1d46b4f970fe597e8a81c28cc77e9353"
  },
  {
    "url": "assets/js/10.9c6ec81c.js",
    "revision": "ddf79e67af8c18c21db6b587e0a05c31"
  },
  {
    "url": "assets/js/100.bbd17d5a.js",
    "revision": "919f3616417d000444c7abd92b235d47"
  },
  {
    "url": "assets/js/101.919d476c.js",
    "revision": "52a37035ba9634e2cf8f00f1637ae5f8"
  },
  {
    "url": "assets/js/102.13187805.js",
    "revision": "8f49371189a9144d4320114f097bb620"
  },
  {
    "url": "assets/js/103.344b9ecc.js",
    "revision": "30643d83c3554439174bcdb8b15beecd"
  },
  {
    "url": "assets/js/104.4dcd2025.js",
    "revision": "dd42caae487408746844e3dfcc1ced03"
  },
  {
    "url": "assets/js/105.9098cf14.js",
    "revision": "e5e0db57a5fed7b0cf57b7a878e4bd95"
  },
  {
    "url": "assets/js/106.cf7f2934.js",
    "revision": "f7bd2566a4a149c84bccc8e12f97418b"
  },
  {
    "url": "assets/js/107.0baf2a29.js",
    "revision": "894f96f387b12c95a08d55b5fc7f57f2"
  },
  {
    "url": "assets/js/108.bd7e0ff9.js",
    "revision": "91f2e7c8a21badb0c30fc69d97fc6614"
  },
  {
    "url": "assets/js/109.9f8d6db7.js",
    "revision": "fdcb2c50a710ad6b390035d665296b01"
  },
  {
    "url": "assets/js/11.1a04ac82.js",
    "revision": "8d02bec1db0ec71c06f587bfc0ea7a47"
  },
  {
    "url": "assets/js/110.2b532e85.js",
    "revision": "43cb6bf74677c340fd34aaa082455e63"
  },
  {
    "url": "assets/js/111.023bc229.js",
    "revision": "288a2d1ea9680250741642b23ae41cc8"
  },
  {
    "url": "assets/js/112.43953863.js",
    "revision": "5752919a4d5fe721624f42bf8cbc5a66"
  },
  {
    "url": "assets/js/113.f669bd6f.js",
    "revision": "5fcac9312768c571b5a740bd5e9ef189"
  },
  {
    "url": "assets/js/114.cfd58cc7.js",
    "revision": "174a8716bb15b746786bf6fd681d2d09"
  },
  {
    "url": "assets/js/115.6bd34d45.js",
    "revision": "76c223d14197f3b07321a8dbef3ea887"
  },
  {
    "url": "assets/js/116.ecda2cae.js",
    "revision": "effd7a2afe0f5656a6a0b15869c9e11b"
  },
  {
    "url": "assets/js/117.26508ee8.js",
    "revision": "e191d4bc0a1123bcf9f448d3863a3e8c"
  },
  {
    "url": "assets/js/118.fa2677f9.js",
    "revision": "aa8d73d37b219a49fafaa2f5de1402f0"
  },
  {
    "url": "assets/js/119.ff71e9ca.js",
    "revision": "5527d36756e02b94d3cc28925be2b9eb"
  },
  {
    "url": "assets/js/12.ca59b3b0.js",
    "revision": "9578c21e5494eb923f579a27d47a302e"
  },
  {
    "url": "assets/js/120.a10802d2.js",
    "revision": "4fa495c9bc7e76d21d7fd836d058b3f1"
  },
  {
    "url": "assets/js/121.4cdbf2e6.js",
    "revision": "7a4ce014544eac293bbd0ab84c9cfe01"
  },
  {
    "url": "assets/js/122.fdf24fd5.js",
    "revision": "60c32e720b07b1f3d70abaa8d5e41769"
  },
  {
    "url": "assets/js/123.d5d9a6a1.js",
    "revision": "9be8522ab39fadfd4224290b5ebfe068"
  },
  {
    "url": "assets/js/124.4d8d9bb6.js",
    "revision": "464b908d48267da488829b8f58fcf501"
  },
  {
    "url": "assets/js/125.ee534eaa.js",
    "revision": "5999094418474fbdb2325cc550a683eb"
  },
  {
    "url": "assets/js/126.bf9a6785.js",
    "revision": "926085f86ce589fc9e99423a80a8d6de"
  },
  {
    "url": "assets/js/127.eb92ea32.js",
    "revision": "670b14f15bfe33341e63b07bd9e4cf62"
  },
  {
    "url": "assets/js/128.57875d0e.js",
    "revision": "d262b3c534d801a4d5cc550afe7ebef0"
  },
  {
    "url": "assets/js/129.5db2350f.js",
    "revision": "dbce7642667bab67c5b4edee70918bc8"
  },
  {
    "url": "assets/js/13.b2d4790f.js",
    "revision": "2e6c5de69e071c11c07e3d393b8fab6c"
  },
  {
    "url": "assets/js/130.3e39c231.js",
    "revision": "b845eec301942882adc0c5f343e9793b"
  },
  {
    "url": "assets/js/131.a17d3c09.js",
    "revision": "dd2ef2b25d07e82cf1b9c2e1c98b58a5"
  },
  {
    "url": "assets/js/132.bac7ff70.js",
    "revision": "a5ec237b523061791f60c710a10725da"
  },
  {
    "url": "assets/js/133.b26248c5.js",
    "revision": "9437d49a228b8a860c0b6a0a94241570"
  },
  {
    "url": "assets/js/134.b699ac1f.js",
    "revision": "908e833b2e3e1d9b2825ad8bd6e3f9f6"
  },
  {
    "url": "assets/js/135.25676140.js",
    "revision": "a2e7ad836af7bd6d4d9e0145d164159a"
  },
  {
    "url": "assets/js/136.6f15def9.js",
    "revision": "49d5782dcefd7b7b30d7f3a95040a922"
  },
  {
    "url": "assets/js/137.cbb21e9b.js",
    "revision": "0c56e7500b3048de92d1343b5d5c5b42"
  },
  {
    "url": "assets/js/138.28c1e351.js",
    "revision": "ec726cda3adf8bfec0695b48e607f00b"
  },
  {
    "url": "assets/js/139.effbe254.js",
    "revision": "aaeda0f66b331e2f7047cafb22bec3c2"
  },
  {
    "url": "assets/js/14.75347621.js",
    "revision": "89646b30223db69b1603f9e2854313f8"
  },
  {
    "url": "assets/js/140.ccdacf2c.js",
    "revision": "d45f458ddd4bac77d8b8809065621b0b"
  },
  {
    "url": "assets/js/141.f6ceecc9.js",
    "revision": "4c59385c904db6bcc308be81b930f892"
  },
  {
    "url": "assets/js/142.4e531aa0.js",
    "revision": "dbea57048683bc41c39d0b072d565762"
  },
  {
    "url": "assets/js/143.59d058d5.js",
    "revision": "b237199d13e40b05632984ec0e027e14"
  },
  {
    "url": "assets/js/144.e756384a.js",
    "revision": "259a2b600e9705fad4dc7f78be1be8f3"
  },
  {
    "url": "assets/js/145.b3e4fbf1.js",
    "revision": "f95a53b79ddd72926c1668314d02bd21"
  },
  {
    "url": "assets/js/146.588f8d0b.js",
    "revision": "4b771528adad1c0c12363ee9fa8a57bf"
  },
  {
    "url": "assets/js/147.c46e577d.js",
    "revision": "422bc346a8054a616041219a479b66ee"
  },
  {
    "url": "assets/js/148.af29576b.js",
    "revision": "3da04d849ff8fd3197046d1b25dbe748"
  },
  {
    "url": "assets/js/149.9fe64b13.js",
    "revision": "aeae453beb116cfdaf19f9e13dd67db5"
  },
  {
    "url": "assets/js/15.41c4f073.js",
    "revision": "9ce2a3667839b274fcb288cb653ba762"
  },
  {
    "url": "assets/js/150.8a49ba4d.js",
    "revision": "ef8969657dbcb04e7eb512319d37299a"
  },
  {
    "url": "assets/js/151.904673d8.js",
    "revision": "2938ba8deb58a3d9fd079a942389d3cd"
  },
  {
    "url": "assets/js/152.ef0c95bf.js",
    "revision": "e552db519a719d43839a22108bc77e68"
  },
  {
    "url": "assets/js/153.fc792c33.js",
    "revision": "bb41b9f862c4820ba3c25a97d74e0f3d"
  },
  {
    "url": "assets/js/154.578782bd.js",
    "revision": "e10ab8a8b45b83023f83085449fade19"
  },
  {
    "url": "assets/js/155.7a2d65e2.js",
    "revision": "81f8a2a37b82688b45c29effa09c6ace"
  },
  {
    "url": "assets/js/156.1b23b90c.js",
    "revision": "1a9f530f84369eae7ae57467086ff0fe"
  },
  {
    "url": "assets/js/157.c7e69739.js",
    "revision": "51939d83b809b8bc5eda29451ffee4ac"
  },
  {
    "url": "assets/js/158.32e08545.js",
    "revision": "a0cac55f998ce481510219af98d9bab1"
  },
  {
    "url": "assets/js/159.6273c64b.js",
    "revision": "c1b076c1bdbba262de4c651f99a8d0f3"
  },
  {
    "url": "assets/js/16.91c58339.js",
    "revision": "8f830bd91f0f5d2399701dd8adc9c51e"
  },
  {
    "url": "assets/js/160.3e3cfed0.js",
    "revision": "151d907694a8af46d1bc142f153db297"
  },
  {
    "url": "assets/js/161.31ce02e6.js",
    "revision": "25545e2265e5c9d0d16fa4c625052903"
  },
  {
    "url": "assets/js/162.f9f34238.js",
    "revision": "a3f243973a34a3fcd4b2b818656a3698"
  },
  {
    "url": "assets/js/163.d135fc2a.js",
    "revision": "bdda64384aca1e82d90b18439ff11f0e"
  },
  {
    "url": "assets/js/164.69ff6160.js",
    "revision": "e9dff270ed69fd831fae1ad257aab4cf"
  },
  {
    "url": "assets/js/165.dc2df2c1.js",
    "revision": "2ef93de07824820af4feb84ed47a0b06"
  },
  {
    "url": "assets/js/166.90d6c18d.js",
    "revision": "24bca48b51b97a9e1416ec7b6dbd894d"
  },
  {
    "url": "assets/js/167.fdfbfcc5.js",
    "revision": "9f3588e85b1b83d8265190790407809f"
  },
  {
    "url": "assets/js/168.c65f9d2d.js",
    "revision": "dc8a4e6acecf371ff8cf642d31d1c6be"
  },
  {
    "url": "assets/js/169.9860bb36.js",
    "revision": "b73acbe005e98cf91a156e2e2047ec3f"
  },
  {
    "url": "assets/js/17.01fee677.js",
    "revision": "f4ecd754ab90b57679610f84a2acfb82"
  },
  {
    "url": "assets/js/170.7bce477e.js",
    "revision": "c9c40d2659a96615a33807a488f36c00"
  },
  {
    "url": "assets/js/171.e4ec965f.js",
    "revision": "6751e86ffe456d0ece7dd8a1eae8d03b"
  },
  {
    "url": "assets/js/172.c5b428fa.js",
    "revision": "73299327e87bcdfbed70daa990facc7a"
  },
  {
    "url": "assets/js/173.6e093299.js",
    "revision": "8039d5a1a37bffdaf7aabc2cf96d17a7"
  },
  {
    "url": "assets/js/174.5fec1545.js",
    "revision": "112c6c5d091cf2d83c9a432e3c646048"
  },
  {
    "url": "assets/js/175.40e987b3.js",
    "revision": "0cbc98a2839af4d91a61623d9ffab4a7"
  },
  {
    "url": "assets/js/176.98762b32.js",
    "revision": "0ff933a23832af7245d095a505e21267"
  },
  {
    "url": "assets/js/177.5f4239e8.js",
    "revision": "66a162cd728ac5332ee604084ed84b22"
  },
  {
    "url": "assets/js/178.606c0a5c.js",
    "revision": "9e2dbb81e77f15274b5fa811da9f1f4a"
  },
  {
    "url": "assets/js/179.0d8e5e4e.js",
    "revision": "88ce72df85dfbf955dfd3ac87b755484"
  },
  {
    "url": "assets/js/18.0e1fa401.js",
    "revision": "3c90b43ed2a31f445f7e02bee96ed922"
  },
  {
    "url": "assets/js/180.8979de30.js",
    "revision": "4f0f1537177a1593b884cf234170e6f2"
  },
  {
    "url": "assets/js/181.d6b5bda9.js",
    "revision": "d8935fa08caeba52000d1d0374a22dcd"
  },
  {
    "url": "assets/js/182.fa7fe562.js",
    "revision": "3661809e6a0f5aa4db57c568d8844f65"
  },
  {
    "url": "assets/js/183.1310a96e.js",
    "revision": "36c01ea1a2c7e55c3266a975fdca724a"
  },
  {
    "url": "assets/js/184.74a344f1.js",
    "revision": "42a614e01fe74d6da300b0de26dbac8b"
  },
  {
    "url": "assets/js/185.dad44328.js",
    "revision": "907f177be5ae3dea538016bc6efdb0a7"
  },
  {
    "url": "assets/js/186.f4d9eb8d.js",
    "revision": "1f1e598b7db18d8717a723e3399d74c0"
  },
  {
    "url": "assets/js/187.f170f1a0.js",
    "revision": "f4dc7dfcd27c07f1117a73752f6a3469"
  },
  {
    "url": "assets/js/188.2c17b45e.js",
    "revision": "1483f630e23857015ab99c6fe807f8a0"
  },
  {
    "url": "assets/js/189.5b77dbe5.js",
    "revision": "7cb326c17d7f4021562de72e6d64ce07"
  },
  {
    "url": "assets/js/19.45d3933c.js",
    "revision": "818abb96f4f341517f6d9c6167ba7329"
  },
  {
    "url": "assets/js/190.fff58753.js",
    "revision": "a2dc157f4e49f384d0dfc1d31985cf5e"
  },
  {
    "url": "assets/js/191.99e1bafa.js",
    "revision": "fda2929d09ebdde345ca366de5550748"
  },
  {
    "url": "assets/js/192.0bbdc62c.js",
    "revision": "de162513a0159ab2fc79c54df7c77837"
  },
  {
    "url": "assets/js/193.97012a89.js",
    "revision": "c1ad51b9c458248d3034ed75be791579"
  },
  {
    "url": "assets/js/194.c6c3ee10.js",
    "revision": "c11ed697f318cc807a14968080bd3a49"
  },
  {
    "url": "assets/js/195.0d14630c.js",
    "revision": "48a9741762f2785616d805f10eb2a55f"
  },
  {
    "url": "assets/js/196.f073af55.js",
    "revision": "51c0d9e9c1d46c01472b1ff9e287b2d2"
  },
  {
    "url": "assets/js/197.a8bb0a8c.js",
    "revision": "63a7f251ca8150e3aa203c0c9c818c05"
  },
  {
    "url": "assets/js/198.f4dba59a.js",
    "revision": "f4a6348e8c346f307892e0e5b2a7c524"
  },
  {
    "url": "assets/js/199.b7e2d741.js",
    "revision": "6a457bfd255b1783a579a972901afdbf"
  },
  {
    "url": "assets/js/2.a95a1716.js",
    "revision": "3faa2bd72b0f1d1fa3cddd8f7a30f127"
  },
  {
    "url": "assets/js/20.513b7293.js",
    "revision": "b74441b296a14149ca09737dd09b7d39"
  },
  {
    "url": "assets/js/200.e3ae1b7d.js",
    "revision": "a193aa7b7c48346853ac8a6d4915331e"
  },
  {
    "url": "assets/js/201.10fb871f.js",
    "revision": "4f187d09b6b3f548f1a900f224d49a79"
  },
  {
    "url": "assets/js/202.c506c1ee.js",
    "revision": "680afc82ea56b633ccb3e6d2a85e32d3"
  },
  {
    "url": "assets/js/203.e53e3f0c.js",
    "revision": "15cbf7bac9f45e75a5f91e77173003b7"
  },
  {
    "url": "assets/js/204.9ec2491c.js",
    "revision": "a059177f7ba52af4470582c7ba666724"
  },
  {
    "url": "assets/js/205.077b7cbb.js",
    "revision": "ad4d7f19fa8364997bd143afc6ffa778"
  },
  {
    "url": "assets/js/206.5dd6cb65.js",
    "revision": "5052e738691081fdefb5e3039c26170d"
  },
  {
    "url": "assets/js/207.a37e1202.js",
    "revision": "b1899125889f99f80fdaabc68bb5b622"
  },
  {
    "url": "assets/js/208.83e37e78.js",
    "revision": "47845472f8aa7c7a13a814d156584de8"
  },
  {
    "url": "assets/js/209.1d808d66.js",
    "revision": "c38381760eaf5b69acf3b8965fcb900c"
  },
  {
    "url": "assets/js/21.0b6c5d8f.js",
    "revision": "875ddb71397157816b0d987a3fb90a6a"
  },
  {
    "url": "assets/js/210.4fc782e0.js",
    "revision": "143575548d2bb68a23793c4c17ed1fa3"
  },
  {
    "url": "assets/js/211.ee842eb8.js",
    "revision": "70f18948f8ec8e120d60fdf66844ea45"
  },
  {
    "url": "assets/js/212.7b340f78.js",
    "revision": "4a64a426b4df82074f3ec42441fda912"
  },
  {
    "url": "assets/js/213.5987fd1e.js",
    "revision": "e8a82a97fa0cf7b818bcd66029c91a9c"
  },
  {
    "url": "assets/js/214.b96520a6.js",
    "revision": "40275a073e8b49d5b3f97a2502a571c0"
  },
  {
    "url": "assets/js/215.63b1c562.js",
    "revision": "16dd568cfe3575f7ffbc896b5912dca5"
  },
  {
    "url": "assets/js/216.652fd336.js",
    "revision": "fb7138f4b0aec6958f10ea8aab8b39cb"
  },
  {
    "url": "assets/js/217.9e68994c.js",
    "revision": "089807773578d6f9a081ab56c58f7e22"
  },
  {
    "url": "assets/js/218.9e4ea48f.js",
    "revision": "c031e45caa6fbb45d2a10e9c5afd5d9d"
  },
  {
    "url": "assets/js/219.8e1fd401.js",
    "revision": "462aeacae2ad38a55d4506fb7b4749f3"
  },
  {
    "url": "assets/js/22.98cfb8c2.js",
    "revision": "6b60a7437f4da82a71165f523e7a1f0d"
  },
  {
    "url": "assets/js/220.70f842ce.js",
    "revision": "2b4411ba58de906856d5e063166209a6"
  },
  {
    "url": "assets/js/221.3d9e3830.js",
    "revision": "d3f73cb33272fcf999f3a52428c50bc1"
  },
  {
    "url": "assets/js/222.b0c212c8.js",
    "revision": "a2b2b1ea9e8f164e98d7d4c2aa5ca1a1"
  },
  {
    "url": "assets/js/223.b3c0773b.js",
    "revision": "c98d5b801879bcc5d26b948653304efa"
  },
  {
    "url": "assets/js/224.d56cac0d.js",
    "revision": "5926fea79445bdcf5be9b45a1d247b9f"
  },
  {
    "url": "assets/js/225.bd427aa3.js",
    "revision": "17650dbe100c8818aba83395a1550a6e"
  },
  {
    "url": "assets/js/226.8e2706b2.js",
    "revision": "56b41420fb07e2337384528949f9c7ed"
  },
  {
    "url": "assets/js/227.5a4faab0.js",
    "revision": "028ee8959ad878e425c88e1d7531eacd"
  },
  {
    "url": "assets/js/228.41bc70f2.js",
    "revision": "644ba7c6f33d4a3c07fdb354da13d321"
  },
  {
    "url": "assets/js/229.4fcd4324.js",
    "revision": "8858d8f262ba162e76e27ed2fc8fd5bb"
  },
  {
    "url": "assets/js/23.91cc6f2d.js",
    "revision": "a17bc9a846ac96ebc2ab770f62a38e83"
  },
  {
    "url": "assets/js/230.c0b01166.js",
    "revision": "6f317c6757555c464fd21ba6e6ee1282"
  },
  {
    "url": "assets/js/231.12a997f8.js",
    "revision": "e6a9917560e5035f55746b53db07a777"
  },
  {
    "url": "assets/js/232.a9154007.js",
    "revision": "13ae35aead720fa10c7ae683ce5b3310"
  },
  {
    "url": "assets/js/233.96910b47.js",
    "revision": "0b5c5858ab746b7ba3535fcdb00d6757"
  },
  {
    "url": "assets/js/234.8b52b6f5.js",
    "revision": "f6fa7dd959d7e43aea0371ecae2894c8"
  },
  {
    "url": "assets/js/235.378131bb.js",
    "revision": "5122717ad58cf88a27ab760f81826527"
  },
  {
    "url": "assets/js/236.83de5e8e.js",
    "revision": "2923be5f78a8721512152bd7faf4105d"
  },
  {
    "url": "assets/js/237.0beba765.js",
    "revision": "16b5c23b57c7627fb35e059b3afe5009"
  },
  {
    "url": "assets/js/238.f19bdb45.js",
    "revision": "68ce443208f22dd0df2247079ecbca75"
  },
  {
    "url": "assets/js/239.d6c24de6.js",
    "revision": "93ed47dbf597a5b9c5d43667c91272f8"
  },
  {
    "url": "assets/js/24.e658e8b4.js",
    "revision": "fae8ca404aaebeaf9a357cd44c86ce1d"
  },
  {
    "url": "assets/js/240.31d98b8e.js",
    "revision": "62defa95acc33849112616743fcc649f"
  },
  {
    "url": "assets/js/241.63e824e3.js",
    "revision": "b3786c6a58f64e22b4e0af0c6472bb9a"
  },
  {
    "url": "assets/js/242.f617b567.js",
    "revision": "9ca32da2212b6bed30eb66bdd94b37b9"
  },
  {
    "url": "assets/js/243.84f6799a.js",
    "revision": "dd54ba45c1f0579fa24a84cb5ed26f96"
  },
  {
    "url": "assets/js/244.5800a383.js",
    "revision": "edec3cdec7e5cb17883baf565b3072b2"
  },
  {
    "url": "assets/js/245.d336ec80.js",
    "revision": "f8e94e275c25cc29a58e38479a3a646f"
  },
  {
    "url": "assets/js/246.40fbbc01.js",
    "revision": "eebb0c6f53c9b613d583bfc87a14e36d"
  },
  {
    "url": "assets/js/247.b3a9443b.js",
    "revision": "7e7ed71d328dac472ae34a29f8cf73ad"
  },
  {
    "url": "assets/js/248.7bad9737.js",
    "revision": "e2923bc6f72a88ed30435119af3b06b3"
  },
  {
    "url": "assets/js/249.2285aa62.js",
    "revision": "e55af7f55dd67316ef9ab61d7ac6fff5"
  },
  {
    "url": "assets/js/25.d8e12005.js",
    "revision": "673a62fdcd666b34d13f4ca15b9ab226"
  },
  {
    "url": "assets/js/250.89f13ad6.js",
    "revision": "0ab3b72e103634797bb599906b5b14b3"
  },
  {
    "url": "assets/js/251.5a6ad237.js",
    "revision": "66059f3856446ac93d5010dec85df40e"
  },
  {
    "url": "assets/js/252.d0cdf9a0.js",
    "revision": "4a3c93c70c93abf71eef5b3ea4f501e8"
  },
  {
    "url": "assets/js/253.f86d0498.js",
    "revision": "36983499b39d7dcb29541a61443870db"
  },
  {
    "url": "assets/js/254.c3482aa2.js",
    "revision": "da87d2c9725b33a52097102ac69edae0"
  },
  {
    "url": "assets/js/255.afc7a366.js",
    "revision": "90b56235752d593a6d87be88092cc01c"
  },
  {
    "url": "assets/js/256.2d417bf5.js",
    "revision": "62e505cd1157f05bce1366fc181f7bb0"
  },
  {
    "url": "assets/js/257.3cc2b7ef.js",
    "revision": "a1215aa528870d5d409c63792f36edcd"
  },
  {
    "url": "assets/js/258.9deb1946.js",
    "revision": "2a0dbf895c4c4e2e604b655e746bedf6"
  },
  {
    "url": "assets/js/259.534bd070.js",
    "revision": "ff83e04c980314f72757cdd813a66d31"
  },
  {
    "url": "assets/js/26.bc095f87.js",
    "revision": "e24048fe4a8930575713aab4a0c6c939"
  },
  {
    "url": "assets/js/260.fbec5a2e.js",
    "revision": "e38c6d036505334cce008312cbbbae52"
  },
  {
    "url": "assets/js/261.5a06c24f.js",
    "revision": "d6d34cab0a89061dba6baa89140b782b"
  },
  {
    "url": "assets/js/262.605d2be4.js",
    "revision": "300c85e1151bf779e9c1319b73948cc5"
  },
  {
    "url": "assets/js/263.9eff3770.js",
    "revision": "826354a840abaaddf5c8a20e35f60497"
  },
  {
    "url": "assets/js/264.755a04d5.js",
    "revision": "f9a4e74c0c28cd8096c61d45dc2c6e18"
  },
  {
    "url": "assets/js/265.397f506a.js",
    "revision": "5f750ec9946c96110cf7661d8e50e321"
  },
  {
    "url": "assets/js/266.cb4eb541.js",
    "revision": "ddb0bc5c60c96b6e51c2e5a6ce55700b"
  },
  {
    "url": "assets/js/267.990bd61f.js",
    "revision": "aa9b54d829ff564b4b77b23cd4709a42"
  },
  {
    "url": "assets/js/268.e638301b.js",
    "revision": "e4d385fc34ed51d6fed77720afb61eef"
  },
  {
    "url": "assets/js/27.2429a188.js",
    "revision": "5e2a2dd3c8cd0313e767dfd54798f1c1"
  },
  {
    "url": "assets/js/28.ec1331db.js",
    "revision": "bd7a9179ff9afbfb3084843c9a362060"
  },
  {
    "url": "assets/js/29.0c686e18.js",
    "revision": "f2c8b43d995f7eee574750a35bb5cd29"
  },
  {
    "url": "assets/js/3.4c283562.js",
    "revision": "3c86788cdd80f8ec30f53e2241941a79"
  },
  {
    "url": "assets/js/30.de8d0ce5.js",
    "revision": "ff57b719a0054fafe5a90fb2826bf52b"
  },
  {
    "url": "assets/js/31.3b81dca7.js",
    "revision": "13620188d1cb02b565d622f9097697d7"
  },
  {
    "url": "assets/js/32.82ae1835.js",
    "revision": "b6a8182cdcdd33e68f8ac20d381ea2b8"
  },
  {
    "url": "assets/js/33.da25a873.js",
    "revision": "f945a487731f752bc21c42bb0e2b72da"
  },
  {
    "url": "assets/js/34.116b7c02.js",
    "revision": "25cba8593bc5d07dd56fc5d6b82f9bc4"
  },
  {
    "url": "assets/js/35.5a1eac63.js",
    "revision": "cfd178a64d8565db8d0f513c7d9c77ef"
  },
  {
    "url": "assets/js/36.92b5ca17.js",
    "revision": "513ceb82014e654facfb7b7be7a5cf7c"
  },
  {
    "url": "assets/js/37.f4afd14a.js",
    "revision": "d086d528447f352bf8926e73ab635169"
  },
  {
    "url": "assets/js/38.84ba182d.js",
    "revision": "01c5b5c8f2c2d8008178ba5f2db5080c"
  },
  {
    "url": "assets/js/39.af4a548e.js",
    "revision": "4565af42118cc2cd7987ac3d3692c849"
  },
  {
    "url": "assets/js/40.2cd34c66.js",
    "revision": "125f75c7f8c48102a170673801a6a86e"
  },
  {
    "url": "assets/js/41.8d3f5b49.js",
    "revision": "46d097e9bc62bab62afb47011d8768f6"
  },
  {
    "url": "assets/js/42.d3659c64.js",
    "revision": "45b014645feb20c6a4def4f962516b9b"
  },
  {
    "url": "assets/js/43.b87bd77d.js",
    "revision": "cc8451865c8a7f39cdcb69a88a3f165e"
  },
  {
    "url": "assets/js/44.672fcaed.js",
    "revision": "2c5af0dd11e593132a7f5d679017fb16"
  },
  {
    "url": "assets/js/45.098b1741.js",
    "revision": "822c38ff5b70c0b1836603a39dc11d89"
  },
  {
    "url": "assets/js/46.8ef941cd.js",
    "revision": "ac5b75db83709f5eebb8b00d02204ca6"
  },
  {
    "url": "assets/js/47.881252c7.js",
    "revision": "b2d69408610333bf27e8f569d29b2068"
  },
  {
    "url": "assets/js/48.3a1ec3d3.js",
    "revision": "f79c022d3cc2847b191b12c3c80cf8f8"
  },
  {
    "url": "assets/js/49.35f9aa18.js",
    "revision": "7c5ff989e9d70084e54f038a3fb5a3f5"
  },
  {
    "url": "assets/js/5.47ce87fd.js",
    "revision": "0f995089659b5e30fd7f762f2c23f4a5"
  },
  {
    "url": "assets/js/50.7b60545d.js",
    "revision": "7c7b168e859d2908a2b9046aa06acdb1"
  },
  {
    "url": "assets/js/51.4667910a.js",
    "revision": "c0653d179cc36bda9e0feb7f6f498069"
  },
  {
    "url": "assets/js/52.c911ac47.js",
    "revision": "65ce2091be71dd08c026b4b6da156b89"
  },
  {
    "url": "assets/js/53.83a30f92.js",
    "revision": "7b4bebc02c19aff11197509418f5b7e7"
  },
  {
    "url": "assets/js/54.ee2bba87.js",
    "revision": "dd97d5c6a903c24a58d952237dff3ef9"
  },
  {
    "url": "assets/js/55.0b53766f.js",
    "revision": "2f493f6fe82a1ab5bf75fb99f0f5d4d5"
  },
  {
    "url": "assets/js/56.6816d407.js",
    "revision": "5f8f7b9fc9667feb0e27dee8affbbb58"
  },
  {
    "url": "assets/js/57.2563013c.js",
    "revision": "6284d3fceca0718775cdda2c6cd79e5f"
  },
  {
    "url": "assets/js/58.f1757c59.js",
    "revision": "13c8c0dff116e3793c83e24d6ed1086a"
  },
  {
    "url": "assets/js/59.5573b637.js",
    "revision": "49ec5e62c76be30bea6b69a0795e59eb"
  },
  {
    "url": "assets/js/6.ea926c96.js",
    "revision": "4aa83f83149280f0a562ff527e81b741"
  },
  {
    "url": "assets/js/60.8728e66d.js",
    "revision": "35ff686696ca44b93c5a53e860bb1ecd"
  },
  {
    "url": "assets/js/61.e8a270e3.js",
    "revision": "b8128995c69d4c51486a9722fec4ba22"
  },
  {
    "url": "assets/js/62.4c5c9cd8.js",
    "revision": "7eea966956fd3f70e6f9fb1a6dda9db6"
  },
  {
    "url": "assets/js/63.cfe2d397.js",
    "revision": "087fc4d6a9f31169a9ae5cd9900ca319"
  },
  {
    "url": "assets/js/64.ddc21357.js",
    "revision": "a3e5b0479e102544cfab8b9467f1e952"
  },
  {
    "url": "assets/js/65.7d430191.js",
    "revision": "86194f28d4c6d8520141647073fbd1fd"
  },
  {
    "url": "assets/js/66.d6212991.js",
    "revision": "e0e0b92ebd9aa65c51447cc0730cc398"
  },
  {
    "url": "assets/js/67.b65b871c.js",
    "revision": "bfbfa8a94b7c7511133f398959db561d"
  },
  {
    "url": "assets/js/68.ded00080.js",
    "revision": "26e7688a66a039db473db916b73b7413"
  },
  {
    "url": "assets/js/69.ac65eda3.js",
    "revision": "3da7a7e5f89f1561423187f82b688280"
  },
  {
    "url": "assets/js/7.02291346.js",
    "revision": "b8ef2c76b08e60d8906e5710edc6764c"
  },
  {
    "url": "assets/js/70.0c90f333.js",
    "revision": "666e28860a346d7ec1f18b950d5264b6"
  },
  {
    "url": "assets/js/71.ab208d2f.js",
    "revision": "5dc93e159b2e2f590348df3b0c3f75dc"
  },
  {
    "url": "assets/js/72.1a82f74e.js",
    "revision": "6eb5884325f4372bef3f3d9f0b27765d"
  },
  {
    "url": "assets/js/73.fb305aad.js",
    "revision": "8c924d91e1a7df9e9c9d65cdae4bc317"
  },
  {
    "url": "assets/js/74.d9026a16.js",
    "revision": "eed4330dca96655d07fa2fb702c3783b"
  },
  {
    "url": "assets/js/75.7d9c740a.js",
    "revision": "752f4b8a9ea6a228eaf97bd5aa2d7a27"
  },
  {
    "url": "assets/js/76.01b53d40.js",
    "revision": "0e13cdbe2e65a82fffbc4b8171ab714a"
  },
  {
    "url": "assets/js/77.98f3e159.js",
    "revision": "a5c026cd1a003331e34e40e196e3fc47"
  },
  {
    "url": "assets/js/78.b49081d2.js",
    "revision": "16b2e0c6c29f15d007b062b60e19698d"
  },
  {
    "url": "assets/js/79.abe9c6b7.js",
    "revision": "f8d25d7df9b7a42f42ca076b46fa2422"
  },
  {
    "url": "assets/js/8.9d6a08aa.js",
    "revision": "38125b3882fe76dd8d896eb3cb6de150"
  },
  {
    "url": "assets/js/80.885bef7a.js",
    "revision": "60eefcec31d99fcd80835dc9950b0e17"
  },
  {
    "url": "assets/js/81.287d782f.js",
    "revision": "89f576c0657bfaae58d42309d076ff6c"
  },
  {
    "url": "assets/js/82.e845440e.js",
    "revision": "f72569b75e74bd0a3b5362555377bd64"
  },
  {
    "url": "assets/js/83.3599641b.js",
    "revision": "6f7ad715f8695db07f350b0b638a8a81"
  },
  {
    "url": "assets/js/84.5e3c859f.js",
    "revision": "69f52b53392c3c7233137293b9d3ea3e"
  },
  {
    "url": "assets/js/85.c7a31422.js",
    "revision": "fe457b04fa414165699c0ce83a00924d"
  },
  {
    "url": "assets/js/86.27819414.js",
    "revision": "a931526549f65a8b4ff212eeffa73a3d"
  },
  {
    "url": "assets/js/87.560eb70c.js",
    "revision": "0e58b912172d575ffd42bd5a908aee93"
  },
  {
    "url": "assets/js/88.701d449a.js",
    "revision": "92fb7e88728ce097ae93d6c02d4a655a"
  },
  {
    "url": "assets/js/89.d8866805.js",
    "revision": "01edba8b452efa40b198cb22572695e7"
  },
  {
    "url": "assets/js/9.9fc51e15.js",
    "revision": "aab4540c3544b5ca6ba69edbf39c9738"
  },
  {
    "url": "assets/js/90.2432f3d3.js",
    "revision": "3bb0bbfe93bdcbec2becf24ebe5225bd"
  },
  {
    "url": "assets/js/91.44a350ec.js",
    "revision": "71f832c69a79e5417ace46e966c3d354"
  },
  {
    "url": "assets/js/92.1bb761eb.js",
    "revision": "5cf1e1d35a3b7453c074cda8dd972419"
  },
  {
    "url": "assets/js/93.ef3d10e2.js",
    "revision": "c7462e1c1120a8f6232a14499c7b485f"
  },
  {
    "url": "assets/js/94.d31e327d.js",
    "revision": "49f3d2291272c8561c98e82f64252125"
  },
  {
    "url": "assets/js/95.da02bc0d.js",
    "revision": "85f8bbe45c125a9f766e725f7c76a769"
  },
  {
    "url": "assets/js/96.a3332d6b.js",
    "revision": "e73b4f00465d3f6a44739cefd142ebc5"
  },
  {
    "url": "assets/js/97.1e9ad9f5.js",
    "revision": "e3316505d10cc00bb43c869abab3ff10"
  },
  {
    "url": "assets/js/98.46848461.js",
    "revision": "b622c8ecc1d399ad33eb46a169235efc"
  },
  {
    "url": "assets/js/99.57bfecc7.js",
    "revision": "5e6b49f560b24be080eef25de349bb94"
  },
  {
    "url": "assets/js/app.d1809d29.js",
    "revision": "ccb2acb2be4d13685a86c5cf401770da"
  },
  {
    "url": "categories/index.html",
    "revision": "27bd25d23779949cf65ccd8dba29711b"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "4cf47cecbe7e2dc74c5c7e87993daaaa"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "1c1250a9dcabe5ecb8526db199dafba4"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "71e73e3ed82816d07f9ce2867bcad58c"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "084bee8e4670ba3804d8ff2285710b43"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "bbbf266604e23522fc19cc368fe2b8ad"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "f60eb060dd3e4c377ee5abcaa306ab8f"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "4d3540e0b27a9ababd5fcb6f529488b5"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "f6f71f1d532847b6bd4a3ee9d8379eb5"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "a16603d64251dc9fa689793c4995eb01"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "6ce36ae989be6eb3b3aecb4f6245dbf6"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "1c1250a9dcabe5ecb8526db199dafba4"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "16c8c3fdec7425b6d69b87a63917081c"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "6052972fb1a13fdf1d54695d259f1d92"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "7759e875bd639a4454a830e5be314c6f"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "0c2f2826ab0e8c46314ff02b1d0488e1"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "ab8e471dbd4820e436c86c8ed8cbfffe"
  },
  {
    "url": "cs/database/index.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "6d90f96825307bee65db7f6b4883f8d3"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "18a38d8bd3f5ffc3dc333ff9cd7a25be"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "f50754b0b75068f53c82863307137c0e"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "0ce89f3ec992b50bd1f423dfd63de299"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "ca7e164d074d5c5e364f097a2d817907"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "abf414eb50173060dc449859cdab7440"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "7d502c3cc183fc57cb95ddf2b6f7fb40"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "bf72d2421d962c4f5c04d51b73e0c2d0"
  },
  {
    "url": "cs/design/command.html",
    "revision": "96b508e0f09fd498a37f8a219848b5ab"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "e8edf4e3e3fd4e43dab7bf697f1062e9"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "2d194d349ce9c119d873785b748443d2"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "4a3c8cb1bfdda74e9d45924b150fe7e2"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "ce5e7a600c07aa2cd7fdd29be7af16c1"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "44c86e37abf2d03e7c80921da13275a6"
  },
  {
    "url": "cs/design/index.html",
    "revision": "26de831cf23a5474d1adeb06820c0b3c"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "4ef4ee4f5710b18c0a7d2f26167e132b"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "61aae058cb99dac6e82ace663291575b"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "dcbd4c3783b4e93a61fbb3520318914c"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "aad5d58948e9e15058a80fc1b4452cc9"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "209104f37522cdb0efd69ff48eb06e2f"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "9a59bc4602548895847af9ac862b47b8"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "6accc5f5566b0dcd8c1a103520e065c9"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "eab43e02dfe806a5e002b8536dae6a72"
  },
  {
    "url": "cs/design/state.html",
    "revision": "c12d98ae0023c28ec2056ef0e823184a"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "2cd9e0c466c5b15923d3567f25781f9e"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "58ce7914dc4cca5189b5404908338ede"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "ebdaf725d32aca6500ea60a1ed9e7128"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "4bf785134ebdc8dc5899c97bf030bbae"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "eb3685eb1ec2dccead26333ce4a4fa22"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "ccd8e02d38e5bd5526aedbd46ac04256"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "43ccd2f8fe54bb59239670161cb6755e"
  },
  {
    "url": "cs/framework/vue3-reactivity.html",
    "revision": "538ed3097b02c3d7082b76fabba6a35a"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "c036f9b6adfc16793d2c49bcda49e6f4"
  },
  {
    "url": "cs/index.html",
    "revision": "3975175ed6ebbaef637fa7bd3e001dde"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/java/container.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/java/index.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "8353288d501d50fc7885d1b057cb54ed"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "374d8834b792bd4f924e75802885ce0a"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "3b90d4b35ee85f7cbcc5425c62673dc8"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "8eb48eb5592532eb1529a691a1566767"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "a9603dccbc05b82bb168911ae1f44b3f"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "b802dee1d8b06907298fbd718460f696"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "939ee2a1598079594951937817174343"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "24ef976f12ea0d149b1138674d862347"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "0420c546f21df07c785b42232d101aa1"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "c8a02d8f493a75291dc2d1894a3ea1c3"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "19591e8ef32189d5dfdf245c793b2820"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "45e1195feb61ad22f1ef38d7011daaf6"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "3b80b1eb49fd64b16108300a8c471666"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "c488c27819b01560f92c29065bd9b12b"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "340c9bcc2a4971b46536dc068807d904"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "93a4c5760cf6f7a3722cb991dfaa6786"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "101d551e6cc8d02c0b88f2e20ebf8bf6"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "4222ebc8852bf75fe4352f7ab5f52ccd"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "26c6327fadf3400d2b659a7938ad2a2c"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "a35125dfe69a0e8f83d65c26609e17b8"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "077d517d50e3efef7b66a29bc2f0878c"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "f0e3d54ac6bb2ed70e65f96b9d66c30a"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "510d86ec09e54f568b3adbe586d17ca9"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "2a759e8d14f7618f7ba99c392f2718f5"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "ad3b12a9c7846510bb01bd8c9074efef"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "8dd2cb3f0b8dbc31ca4a8ba353346b0f"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "0fb6caa9421b04d3146e90ec0e20ac8b"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "a2bfc0bd993591f297aa393f4f61c533"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "b06bad36afc9689b8f511be7f18ed396"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "7f5bf0684d279d7997ffb208d0814989"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "39371938385dde237c1f64e69457a180"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "3033b9973f349e79ffc6d5153e9f2969"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "40019704b4ad3a3041f7458af45212c7"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "1d9bf9207d9f40c9f6a22d701acb85f6"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "05e6d69ae2388ea351b799285955a248"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "caa99f5895dcb99487536b1aee651817"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "dca9ad39d31cbcf96dd727c61f3216d6"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "865db109f5ee38b8433a25b01473bff1"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "17c4d5747928b899e54568dc8fd7a19e"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "6927c188b7eae59a2adb43e7dbea95ca"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "277c01576defa1a8a5608209ca309bc7"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "dfcdbaa6394225b834b2ec66656cb180"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "b45c4c58b56ba46c57416967f27a1539"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "1f9c29e50c4353a7ff331f59fe62d5c4"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "92fb6f6413252b635e96e9e7c92f0c16"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "73cdad2c6a525536b8ff1681969fcc71"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "be9f55abf17c9f39d56d72d58e8de527"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "beadf5f0731454504410720aac986aea"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "13b719eb915b8c74a6f18b961cf3febe"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "c4fa261e7f70847700152fe8b6bca9e7"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "51f4c51ce983afb0d44ee2f98e76247c"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "f8cdfaf17d6a81fbf609d2f44129c8dd"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "05cea62475ea4c9a8a30dda21065bded"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "53704ffc7cadbbe40e6b1ba65744f227"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "c30e964e7b8a4d12cffdacbf1a64ff99"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "1aa374ada9185f6ac81030d32506679e"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "c56c36d3d439e647e06dd6f90dfb0648"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "fc0ae17305509ef2e27eb29b60b4ca87"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "a0a55f904081fe8c2ad21794f9528744"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "b3d9b819869948c44ac0f69075953c30"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "9b26b73662da8102c2da08bce192f286"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "88f135ea328569f5cc96a3aced4d10c6"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "3f19bd43910343b83bcf57cbf18f9553"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "1b20f2ba9e3bba74229a2c4a03baa055"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "df563217949d8f1005d56665903cd960"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "192af10f3e8bc11a66a7c97d935b3131"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "09bfef19633252486bc9cff61aacb49a"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "a5f30a5819da56cbdb84b80b45adcf6a"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "6baa45cb6f98378e52213ee6ca01dc3c"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "89932b96c572d92f28d6ff3e1a8627c4"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "278b40bd3a99718cee302cd7e8721b7e"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "2d4fa0026da13ff3d700b638481e13dd"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "3b87d0290ac19d96d293033595a222b3"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "8e7d6ebaff795c00b8f5fb0a708b9072"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "6b9cb85393a0225c5282a8c1941d764d"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "a941076cb5fdfa7514c7932e32fc5ce4"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "583f1d7dfa728d0a55a20d93ef0e6bbf"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "85e94107202278e21cdc6c2ebb6dc815"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "4ccff33b27b91ce8e324fe6a05af38ba"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "b9ef0346c2e958fa49d4af19af0d04ee"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "d39cd9e70903dc5929a866df7ea5d6df"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "fbb04d142d65e406c5bb3c265d08afb0"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "e6c49064c4e8e24a9c8b31d02af80b5e"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "a8d1089638f11b8b996e52002df4051e"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "1f9c29e50c4353a7ff331f59fe62d5c4"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "5e46019982d52d4404c44ab061ca02ad"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "cd83abf93ef0c447ba4612a4dd3a40db"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "1c1250a9dcabe5ecb8526db199dafba4"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "40410a285cb0c3348bdda9156d060110"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "6ea98104e22b9acf62207d63f1375866"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "ec4a8eddb9a1b1e5c9f3ab4332a548f4"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "088e70007f8e2cf4b863ff9517e0a626"
  },
  {
    "url": "cs/network/application.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "74f27fec30c810c079f078e702706441"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/network/index.html",
    "revision": "1c1250a9dcabe5ecb8526db199dafba4"
  },
  {
    "url": "cs/network/link.html",
    "revision": "1e5f4d02640b66ad9abe002bf361c5d3"
  },
  {
    "url": "cs/network/network.html",
    "revision": "aefb8011035d1d77897f36aaeda120c2"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "ad1e2417651f5e3cacdc25eef6a828fd"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "b3c5f9850a5a5bf7027b360f85b6df6b"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "67010f471af60282014285a72bb15a4d"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "8ba31d88e2a02c19e0de4951a7e36525"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "95c6a71bd7b5162806a6d82c7e3359cd"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "1c1250a9dcabe5ecb8526db199dafba4"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "c9f3e86d4ca88d113ad59c58b3abb263"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "55b56766a902b2eb3512d441f9c279c2"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "7ca82f1207abbc722ceff05753629568"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "5c42dee4a44edf451a0877ccaf6bb723"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "8353288d501d50fc7885d1b057cb54ed"
  },
  {
    "url": "cs/web/index.html",
    "revision": "6ae2debe2f0d89ce0358b0e957777e0a"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "9e114a65d7da365483baaf6e28ae432f"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "c97f31881482d094f2cf3a305d2adf04"
  },
  {
    "url": "cs/web/web.html",
    "revision": "91481081a93b0779e85a43652e969878"
  },
  {
    "url": "daily-life/phone-lost.html",
    "revision": "572bf6a407373fb9ebf483968ac47d64"
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
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "3f4a6b8e3199ef18edba538605a0dcf2"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "25c4899363d4fd403f5eff538d743e44"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "3d66e214bef7a786cb5e24f53ae32ef7"
  },
  {
    "url": "language/english/differ.html",
    "revision": "4b9d7105c68559a41c6266e7dc064578"
  },
  {
    "url": "language/english/index.html",
    "revision": "374d8834b792bd4f924e75802885ce0a"
  },
  {
    "url": "language/english/modal.html",
    "revision": "c1ffae3eaf749a60141d6b62ee62d109"
  },
  {
    "url": "language/english/mood.html",
    "revision": "3077e74ddf2d2175ed0e57bc5e6fc63b"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "73e49fe6780e057fd6bbef47b913265f"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "e2ca9dcebda10210b7165385b4ccc89f"
  },
  {
    "url": "language/english/phonetic.html",
    "revision": "3564ba72f97bb5d0b10bba796221be06"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "5cedfe9fa8d637f68170a7e36aef2a33"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "70cb86e55dc29f03944910d72683948b"
  },
  {
    "url": "language/english/tense.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "language/english/verb.html",
    "revision": "e7dbefa0a475816e1e34d38ba8ba456c"
  },
  {
    "url": "language/english/word5000.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "language/index.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "tag/index.html",
    "revision": "b84ef18ac97534b827ac9972eb0b3c82"
  },
  {
    "url": "timeline/index.html",
    "revision": "5bad4a8d54d35cebf742172666214373"
  },
  {
    "url": "tools/chatgpt.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "tools/hash.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "tools/index.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
  },
  {
    "url": "tools/test1234567890.html",
    "revision": "ab91cb9f59e3a4899df676e57e6ef78d"
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
