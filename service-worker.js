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
    "revision": "56c8d5e20960f876cfbb4caa9710f59e"
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
    "url": "assets/js/10.e8d8cdcc.js",
    "revision": "7983e4ab80fcf0a9c544cb8c1126cf79"
  },
  {
    "url": "assets/js/100.824a13ce.js",
    "revision": "8875a390dfd660024af7bd10e3cf7a6e"
  },
  {
    "url": "assets/js/101.82bc0999.js",
    "revision": "9771294f308cee07dc70bd939a845534"
  },
  {
    "url": "assets/js/102.edd61a04.js",
    "revision": "bab85d15c1af6a21810fa0ac89366a1b"
  },
  {
    "url": "assets/js/103.15b15105.js",
    "revision": "07fa29fb4f2ed15cf2e21008ecdceedd"
  },
  {
    "url": "assets/js/104.7e19d154.js",
    "revision": "74e912e573bc3bf6817ece60bc872bb1"
  },
  {
    "url": "assets/js/105.caadff10.js",
    "revision": "fe177ea161e99e6cb71cc41f402d1b05"
  },
  {
    "url": "assets/js/106.d4bbe673.js",
    "revision": "b0fb8f4c5cf5e5d1a6a1689a63f21e77"
  },
  {
    "url": "assets/js/107.644e0028.js",
    "revision": "ad3049b15eba1a0c3fdd96701215d558"
  },
  {
    "url": "assets/js/108.cf2eebb4.js",
    "revision": "d0874c5965e9cdca14fd1b2142c80b19"
  },
  {
    "url": "assets/js/109.f8a738e1.js",
    "revision": "ba87811b4ba80c780ac7295508970e5a"
  },
  {
    "url": "assets/js/11.e6ca50ec.js",
    "revision": "4d3034843e81379ec16c5062793086a7"
  },
  {
    "url": "assets/js/110.ac18f63e.js",
    "revision": "6143947804afa9010b950e9f6a668552"
  },
  {
    "url": "assets/js/111.05209c2a.js",
    "revision": "33b101f70fb706673ade2828310c51d4"
  },
  {
    "url": "assets/js/112.f1e99bd2.js",
    "revision": "c2cb34dbe4761fbcbf4c13c8a29c7e77"
  },
  {
    "url": "assets/js/113.ec5e679b.js",
    "revision": "bfcb6ee474a087cf82060a52d48beb9a"
  },
  {
    "url": "assets/js/114.2a664371.js",
    "revision": "01642343dc450f06a7f66d04a08fa327"
  },
  {
    "url": "assets/js/115.532f2eb5.js",
    "revision": "397123ca199400a6ecbe4f263daaeb92"
  },
  {
    "url": "assets/js/116.60792b42.js",
    "revision": "fda901458bfd1dbf37bae35c2ef5cc48"
  },
  {
    "url": "assets/js/117.f33d4eaf.js",
    "revision": "a83160890560d9cf949bbe14b7ac9cf5"
  },
  {
    "url": "assets/js/118.a1a0312f.js",
    "revision": "e0c7b72b0e73ff78b41be3de3ffcfbf5"
  },
  {
    "url": "assets/js/119.48db8afb.js",
    "revision": "8c2d5cbb713667808e8a0fbebb8e720f"
  },
  {
    "url": "assets/js/12.54cb9c17.js",
    "revision": "6906633893baa8a7308238ca22b001a6"
  },
  {
    "url": "assets/js/120.57dac89f.js",
    "revision": "01355450cb2489e2e58e3d34eb91a339"
  },
  {
    "url": "assets/js/121.b55cd8c0.js",
    "revision": "dff93bacae1a5cd34ba259df3f479266"
  },
  {
    "url": "assets/js/122.0c59c72a.js",
    "revision": "d46293dd0f8fd9614b8ded5fa0177350"
  },
  {
    "url": "assets/js/123.9e5c41d0.js",
    "revision": "2a1e73c37e7657a252da47c0a6dd211d"
  },
  {
    "url": "assets/js/124.f4be50ec.js",
    "revision": "d7cb37e9f874b4a9dd8e4eee952b1a9e"
  },
  {
    "url": "assets/js/125.edfc6cca.js",
    "revision": "00457cd7bd0e71e39597155e2c045df6"
  },
  {
    "url": "assets/js/126.ef67e725.js",
    "revision": "88515d187cb10279c56fcded9d8b6b44"
  },
  {
    "url": "assets/js/127.97788e27.js",
    "revision": "fecaccf86c9a0ead3097dd6c6cd7ba97"
  },
  {
    "url": "assets/js/128.0be93946.js",
    "revision": "c1589b143541053ce64891ba0d4eaf11"
  },
  {
    "url": "assets/js/129.1d2679ba.js",
    "revision": "b216b20c937d81cb2ea7f144cf70b729"
  },
  {
    "url": "assets/js/13.dea67025.js",
    "revision": "a3d5049283c0bf9222b9de2484aeb2cf"
  },
  {
    "url": "assets/js/130.27b56821.js",
    "revision": "c17f9a909f2c4b806c02acaa18c41a9d"
  },
  {
    "url": "assets/js/131.3d232210.js",
    "revision": "3c9b0b7c84ce80b84fe00172f01653ab"
  },
  {
    "url": "assets/js/132.4606ba6b.js",
    "revision": "f1b64f46bdb264d456462254d1d5b32f"
  },
  {
    "url": "assets/js/133.ec2c978d.js",
    "revision": "ff8018d200b5ee3ec177749aa7079dd4"
  },
  {
    "url": "assets/js/134.92e21b08.js",
    "revision": "352fbc51db5d04d30eee71e1f930532a"
  },
  {
    "url": "assets/js/135.bfbf2032.js",
    "revision": "7625534cf5dba621ca033e05ec676795"
  },
  {
    "url": "assets/js/136.b51821a5.js",
    "revision": "0821fc7bc76a274bdcde09c71ce7ab16"
  },
  {
    "url": "assets/js/137.8055543d.js",
    "revision": "e2f74a570d2794ab68fdb0e120db9071"
  },
  {
    "url": "assets/js/138.8ed99f4a.js",
    "revision": "6fae7e43d21ecd84f60aac414f4facfc"
  },
  {
    "url": "assets/js/139.fc77d1f5.js",
    "revision": "576e367347d11b6604123027b7004541"
  },
  {
    "url": "assets/js/14.55b1dd14.js",
    "revision": "ae9214759a0172e5b45515993cdda1ce"
  },
  {
    "url": "assets/js/140.b1bd138c.js",
    "revision": "eb83a065b6a13713fb99aeb4d8d53824"
  },
  {
    "url": "assets/js/141.e97c0fc3.js",
    "revision": "76702b07e4a7e3c21e6ee21236f2d2a2"
  },
  {
    "url": "assets/js/142.37796cd3.js",
    "revision": "0090b3fa71c235b3ca9ab47b00b076cd"
  },
  {
    "url": "assets/js/143.e0ead464.js",
    "revision": "097e5d2f516e4a9bebe45a665dcb3a9f"
  },
  {
    "url": "assets/js/144.8c4c506a.js",
    "revision": "f13a48e3e2c6d625697f93174719d5c2"
  },
  {
    "url": "assets/js/145.d5fe0dfa.js",
    "revision": "354ca8824366adbd341a596aaef12395"
  },
  {
    "url": "assets/js/146.0475ff41.js",
    "revision": "757319991c2ae4c2768fc89496cf4e2c"
  },
  {
    "url": "assets/js/147.a1b7c730.js",
    "revision": "6633f9995a29a9fe1eae2f8f69b85859"
  },
  {
    "url": "assets/js/148.f3400600.js",
    "revision": "dd760de53a4a172924f4949cc3e7bf4d"
  },
  {
    "url": "assets/js/149.88976f06.js",
    "revision": "88a385cc0f9db2f9580d01691edd403e"
  },
  {
    "url": "assets/js/15.e56983e2.js",
    "revision": "e96aa6e436896553c6b94aace9872a33"
  },
  {
    "url": "assets/js/150.dfb467ca.js",
    "revision": "e5880dc5512ddc1a7c87aca12f6fae67"
  },
  {
    "url": "assets/js/151.2a57af56.js",
    "revision": "81b5d6fec8cf77256404cd7b7a290e06"
  },
  {
    "url": "assets/js/152.2859e5c1.js",
    "revision": "9c4450ce51e6dff2b8282d31f6e4ada4"
  },
  {
    "url": "assets/js/153.99d9564e.js",
    "revision": "d65ab0fa2457996bb6f4fc5a4c1135ac"
  },
  {
    "url": "assets/js/154.bdf5f73a.js",
    "revision": "0846f92c9fee379b20cb3325f5533463"
  },
  {
    "url": "assets/js/155.a0c30139.js",
    "revision": "f0273bf58dbda4f0e5223371b9804601"
  },
  {
    "url": "assets/js/156.c8905bf0.js",
    "revision": "684f05278c2d9807616ed03721fef682"
  },
  {
    "url": "assets/js/157.bf63a804.js",
    "revision": "0bfea72754764443d7ad982452fd7017"
  },
  {
    "url": "assets/js/158.5eee278f.js",
    "revision": "66431bdeb50cdaa76b23a1012d745d8a"
  },
  {
    "url": "assets/js/159.f69a3ed7.js",
    "revision": "a4407e9c929a5e7faedeba37ea5b899f"
  },
  {
    "url": "assets/js/16.90dd7867.js",
    "revision": "c93329fa84adaa85e9e517909a1d074a"
  },
  {
    "url": "assets/js/160.c6ec4898.js",
    "revision": "39adc3d98a1e5ee0c27544739b9f4d8b"
  },
  {
    "url": "assets/js/161.c40ce8e5.js",
    "revision": "9ee3f2176a7a3ca981707a3964a49525"
  },
  {
    "url": "assets/js/162.72921a5c.js",
    "revision": "f84285b59fe23ed0f17ba1d11e32bd90"
  },
  {
    "url": "assets/js/163.7cda3e5b.js",
    "revision": "820f3c44d436112efd828e1ea9024b18"
  },
  {
    "url": "assets/js/164.c99e5bf9.js",
    "revision": "8b14a7ddfef2bd2e00ced997ed4a4b65"
  },
  {
    "url": "assets/js/165.42465240.js",
    "revision": "f3b18661943e5589735a1faa28d21317"
  },
  {
    "url": "assets/js/166.2d319c32.js",
    "revision": "88fcb1635a9bdb215e35f66b6925cf17"
  },
  {
    "url": "assets/js/167.9f329c50.js",
    "revision": "72d16d601f56c249254a2be9bd1016ad"
  },
  {
    "url": "assets/js/168.53cbc754.js",
    "revision": "e7ddba509886e7d58ba6815a5d83b535"
  },
  {
    "url": "assets/js/169.db65cba9.js",
    "revision": "b2488b10cffd0898edd36776789f3ea9"
  },
  {
    "url": "assets/js/17.0c5576fa.js",
    "revision": "6586064759171aca7e344c44541fb470"
  },
  {
    "url": "assets/js/170.5797def4.js",
    "revision": "a2f59f29d74074426a838fc19b819448"
  },
  {
    "url": "assets/js/171.943b594b.js",
    "revision": "5c2fdfb2c2507c1fd6f64ee5a87664df"
  },
  {
    "url": "assets/js/172.61c44a4d.js",
    "revision": "f060e262d308443d0e83c9e82f314787"
  },
  {
    "url": "assets/js/173.c2e7cc6b.js",
    "revision": "7d27196355dc0be43ede657e5aa80aca"
  },
  {
    "url": "assets/js/174.58e1e26a.js",
    "revision": "08aa98ab03807a27fcf6c03b9189d2d4"
  },
  {
    "url": "assets/js/175.6e9a6cb2.js",
    "revision": "62753ec87bffd64949622e68f3cda3c3"
  },
  {
    "url": "assets/js/176.03176a12.js",
    "revision": "911952c7a833415d0e6fd17e7fa886cf"
  },
  {
    "url": "assets/js/177.dc8ef840.js",
    "revision": "eba470be183473cfdcc7098262e2c6dc"
  },
  {
    "url": "assets/js/178.b237eed0.js",
    "revision": "28e45ac1fa36ac6126bae096bb7d5626"
  },
  {
    "url": "assets/js/179.d2a4fd74.js",
    "revision": "04454b8c8d439654c95d499709359613"
  },
  {
    "url": "assets/js/18.530c3438.js",
    "revision": "86e158e7edb92a4664b8b45759d7e7b6"
  },
  {
    "url": "assets/js/180.e579fd45.js",
    "revision": "ff23372f30677e33d6613e4a95e57a11"
  },
  {
    "url": "assets/js/181.51a0a67d.js",
    "revision": "1798826ed24b6806efea35b30f8c1e60"
  },
  {
    "url": "assets/js/182.3c62e256.js",
    "revision": "e1579fe166377dd30ab10abf50648709"
  },
  {
    "url": "assets/js/183.8fcadbbd.js",
    "revision": "3d372b04f30919bbed5447219d6b6d63"
  },
  {
    "url": "assets/js/184.f9b98df9.js",
    "revision": "2557ccbf0cfbe1cc332b07be4f30146b"
  },
  {
    "url": "assets/js/185.743bd8b4.js",
    "revision": "9a2d778a59ddc8928a36fb77d0bb0a9e"
  },
  {
    "url": "assets/js/186.c5d4ed46.js",
    "revision": "a9892d863d3017728edaf9cd996b0cf0"
  },
  {
    "url": "assets/js/187.0d902a15.js",
    "revision": "37fcc6f725b092b48cc4db8248820be5"
  },
  {
    "url": "assets/js/188.0efacb45.js",
    "revision": "9dc561a7027582fa9aef2f12b748e1c8"
  },
  {
    "url": "assets/js/189.2b484ec6.js",
    "revision": "4bfeb9631b841447f7e232f9e517206e"
  },
  {
    "url": "assets/js/19.18f28625.js",
    "revision": "6f672e0baec99846c0fd458af75407dd"
  },
  {
    "url": "assets/js/190.b1983c8b.js",
    "revision": "47a8d266957d744a2e01924507ca5021"
  },
  {
    "url": "assets/js/191.a2c36fdb.js",
    "revision": "22ba01391827d8d9c86b78605685eb16"
  },
  {
    "url": "assets/js/192.04583248.js",
    "revision": "be577bef30b19a13a486c56755900190"
  },
  {
    "url": "assets/js/193.6c6e8be2.js",
    "revision": "195b6f2105b914b51155a30da9d1398d"
  },
  {
    "url": "assets/js/194.fd906ba9.js",
    "revision": "f6f2fc38be77a0b21a8906e83a43bb9c"
  },
  {
    "url": "assets/js/195.83deae2e.js",
    "revision": "e6f82e1a6a6d83ee862d2437a473a9a8"
  },
  {
    "url": "assets/js/196.dfc2ff3c.js",
    "revision": "c2cd57668d85281cbf73e010bfad2952"
  },
  {
    "url": "assets/js/197.d6452647.js",
    "revision": "526b507524d6070ff6aa4aa24d09292c"
  },
  {
    "url": "assets/js/198.ad0877d8.js",
    "revision": "6b747c342fccce97481292a836cd7f04"
  },
  {
    "url": "assets/js/199.4c063dfd.js",
    "revision": "e9d9adfdacee74129fdff8273bd4f171"
  },
  {
    "url": "assets/js/20.0d93c773.js",
    "revision": "86076a000673edbf2d7bc0ea3054df95"
  },
  {
    "url": "assets/js/200.be15f25d.js",
    "revision": "773db0f628fd5707bea0d76d74328fe3"
  },
  {
    "url": "assets/js/201.9dc9037d.js",
    "revision": "117668d5f2d0fead54786f6904d34713"
  },
  {
    "url": "assets/js/202.760c35fe.js",
    "revision": "1abcc7ff9946e54711d8d9f993daf3f1"
  },
  {
    "url": "assets/js/203.6a1d687e.js",
    "revision": "45904bef51c3039a3bae988cd558a5a7"
  },
  {
    "url": "assets/js/204.e24dc36b.js",
    "revision": "497523fc19a678ce67b08b615235c6c2"
  },
  {
    "url": "assets/js/205.ae589956.js",
    "revision": "5530c5ca5e8a26ec9ddccee642c0cb42"
  },
  {
    "url": "assets/js/206.08dd2a6b.js",
    "revision": "884489d731011b74b04db3d13340c822"
  },
  {
    "url": "assets/js/207.0bcde910.js",
    "revision": "b3a92a661bfcc0641e2a229dce67aa61"
  },
  {
    "url": "assets/js/208.4039dd36.js",
    "revision": "dd80cbdf316ffa5aac876746b26e4f5e"
  },
  {
    "url": "assets/js/209.0813f49c.js",
    "revision": "8dde8098cd1fad13e4d33012d8506dd3"
  },
  {
    "url": "assets/js/21.0185579f.js",
    "revision": "730d65ee6a9c668140d857b9404f7344"
  },
  {
    "url": "assets/js/210.c072de88.js",
    "revision": "416bef542d74ba331f3df87582b7bdfa"
  },
  {
    "url": "assets/js/211.39a5fff6.js",
    "revision": "e7ffeaebc0920c38e2f413b5abf9fe7a"
  },
  {
    "url": "assets/js/212.0c04add7.js",
    "revision": "8ce1bee78f41bc3d83f3295f1ff21806"
  },
  {
    "url": "assets/js/213.64a04103.js",
    "revision": "25ef8d6845579a0e1236976f9c2f5ff5"
  },
  {
    "url": "assets/js/214.a7fef958.js",
    "revision": "63202556739944cfaffa247882e7dc3f"
  },
  {
    "url": "assets/js/215.06a1b53f.js",
    "revision": "cce17174a31e7a174a2240dfbbdc3c11"
  },
  {
    "url": "assets/js/216.5b2bfd36.js",
    "revision": "b152118af1c855c660fbf70543a1063f"
  },
  {
    "url": "assets/js/217.d97f06a4.js",
    "revision": "00c3847dfdd03d5a437d7508d4f20776"
  },
  {
    "url": "assets/js/218.7ff0c4a0.js",
    "revision": "63116b802de5eac96713eaa278e150b0"
  },
  {
    "url": "assets/js/219.acb0868f.js",
    "revision": "cfe4807452677d440c096564cb468ab0"
  },
  {
    "url": "assets/js/22.e2ed3b85.js",
    "revision": "c2e8a529fd32ebe9358dce7631584f67"
  },
  {
    "url": "assets/js/220.76cc2c10.js",
    "revision": "29b17eb2f50b90e3fb1fcc13f2681716"
  },
  {
    "url": "assets/js/221.33f7e78f.js",
    "revision": "bcd89f88a8e8c68d20e3e5ce3acfd79f"
  },
  {
    "url": "assets/js/222.d29357a1.js",
    "revision": "159b79349438a55f69f9d4eea5e1b978"
  },
  {
    "url": "assets/js/223.86e8bb0b.js",
    "revision": "79a6756618f7d490488cddc328df9403"
  },
  {
    "url": "assets/js/224.5afb6596.js",
    "revision": "7f15fb0e0876b498881a688d28fa6e0f"
  },
  {
    "url": "assets/js/225.386c88b6.js",
    "revision": "b6ead92ee32c939abb5e0d7de1327059"
  },
  {
    "url": "assets/js/226.1d5fe1e2.js",
    "revision": "85810e53191ed2de10d1fa0cdf679b6a"
  },
  {
    "url": "assets/js/227.9aaa0a8d.js",
    "revision": "c80eb04b7f1f4cee5aff2a1f7cb3dc6a"
  },
  {
    "url": "assets/js/228.fee48c0a.js",
    "revision": "1b18e1fda4da37772b3471adcb9d6f5a"
  },
  {
    "url": "assets/js/229.e381c93b.js",
    "revision": "b5ddc267377a8fe404a5078a2d34edd0"
  },
  {
    "url": "assets/js/23.013d930f.js",
    "revision": "99d300f8766d06923a58ae7441769847"
  },
  {
    "url": "assets/js/230.b79503a4.js",
    "revision": "6a0b5c6bb0e89341975ba8a542353a09"
  },
  {
    "url": "assets/js/231.25e82712.js",
    "revision": "72efc71a03d2861ba25b982963eba7c3"
  },
  {
    "url": "assets/js/232.1aef7760.js",
    "revision": "edf90efffe904bf3da6e667f8b273799"
  },
  {
    "url": "assets/js/233.00a47390.js",
    "revision": "50ced66c6befd89f6c4c316f5e6c88d3"
  },
  {
    "url": "assets/js/234.3d4e0a01.js",
    "revision": "9aea76f05938afce51559cf6c2eab3ca"
  },
  {
    "url": "assets/js/235.e5a8c1cc.js",
    "revision": "6d369eb000929920023fa026551bf3b9"
  },
  {
    "url": "assets/js/236.5820054c.js",
    "revision": "05e6dd3c19bc20db03aa07003ce80f0a"
  },
  {
    "url": "assets/js/237.1f7292ee.js",
    "revision": "37c419f74d13de7ec54ffff066313a1b"
  },
  {
    "url": "assets/js/238.8d64c72f.js",
    "revision": "bd0c8296ce16d8a3f6bed41d6ec9ba7c"
  },
  {
    "url": "assets/js/239.fe67e84d.js",
    "revision": "4530d9d7d135fd3373e54f6cd942cd1c"
  },
  {
    "url": "assets/js/24.acf53d5d.js",
    "revision": "241e2bdbddbf780d70b5656073cfc006"
  },
  {
    "url": "assets/js/240.57fabc28.js",
    "revision": "b5e98ccd24ab8dd3bdc98f47a808d291"
  },
  {
    "url": "assets/js/241.e928212e.js",
    "revision": "199a8e6775a1c053790f8846fae0c2fb"
  },
  {
    "url": "assets/js/242.09497008.js",
    "revision": "c869f9599161bf6b32b4974ef729ad81"
  },
  {
    "url": "assets/js/243.d39cdaa4.js",
    "revision": "49b7dadd014e3cc0868bcf450ab0545f"
  },
  {
    "url": "assets/js/244.aa9a9c29.js",
    "revision": "ac121777dfaf29557e6050713e161ce6"
  },
  {
    "url": "assets/js/245.28dfb7e8.js",
    "revision": "e64fbd35695332bf654cab0112c64ba2"
  },
  {
    "url": "assets/js/246.e7851847.js",
    "revision": "4fea86343e58a7b441069fb01301f82c"
  },
  {
    "url": "assets/js/247.557e9759.js",
    "revision": "7e0ecb777e7d78bbbfbbfb8e74e64aa8"
  },
  {
    "url": "assets/js/248.5d5dd323.js",
    "revision": "e3032ac67b2224c3b6bdf632dc771c1c"
  },
  {
    "url": "assets/js/249.c2ea37a2.js",
    "revision": "becee9c02c86f3dc164259914ed92fbd"
  },
  {
    "url": "assets/js/25.731cab89.js",
    "revision": "d700361080c423904370055bdda5b630"
  },
  {
    "url": "assets/js/250.5d03a8c4.js",
    "revision": "fa7f87fa74cbb6ca1510535774f86de8"
  },
  {
    "url": "assets/js/251.5c1b06b5.js",
    "revision": "5cfdd8f464635022017043e4e29f2c54"
  },
  {
    "url": "assets/js/252.e9d4fea8.js",
    "revision": "0b30d1d90e0400392e3b452d7382bc0b"
  },
  {
    "url": "assets/js/253.0d92de20.js",
    "revision": "ea6ea811c410cd5179df7bc642f1c1f6"
  },
  {
    "url": "assets/js/254.3c7edd7e.js",
    "revision": "8b71603fd5cfbf91ecf5d59d1b29298c"
  },
  {
    "url": "assets/js/255.00807048.js",
    "revision": "2c56e53c97b085fcc9fc0becb689689c"
  },
  {
    "url": "assets/js/256.ca7c5220.js",
    "revision": "8f7cb2bac600e305be3c2ac3ce51644f"
  },
  {
    "url": "assets/js/257.7cf29042.js",
    "revision": "331e142cecef602e2169f9530ebb181a"
  },
  {
    "url": "assets/js/258.b8591fed.js",
    "revision": "6cb344f99b4626b2920ed133f27c1589"
  },
  {
    "url": "assets/js/259.64dcb0e9.js",
    "revision": "ffd7c535b6df3b168146a3d8561d42c4"
  },
  {
    "url": "assets/js/26.39a4e33e.js",
    "revision": "ab0df6b811b1a16f51763293c98cfbd5"
  },
  {
    "url": "assets/js/260.0ee36b4b.js",
    "revision": "4663c4c42ab9a0e7a3dbd29f1239d520"
  },
  {
    "url": "assets/js/261.72d14dc0.js",
    "revision": "cddd8f9251096d8d4ecf34ffe9d7cd09"
  },
  {
    "url": "assets/js/262.03972744.js",
    "revision": "d2db5f0395b2ea4aa567a88d326eb6b6"
  },
  {
    "url": "assets/js/263.e41fe698.js",
    "revision": "204f9c0d9b7863a634790cdf4705e3e6"
  },
  {
    "url": "assets/js/264.a3dffda1.js",
    "revision": "cb0471fe1fd0a29316cd3540c74b2a61"
  },
  {
    "url": "assets/js/265.7cd3a67b.js",
    "revision": "260505c7fe4c9dd6ad0a8c3847659f03"
  },
  {
    "url": "assets/js/266.17d66134.js",
    "revision": "9d91714b4680f7f20512c7a97d7cd61b"
  },
  {
    "url": "assets/js/267.c521f1b3.js",
    "revision": "6cb2df6804daaef74db89ca68e533228"
  },
  {
    "url": "assets/js/268.b776a084.js",
    "revision": "f73834cd2b754a1375beabff089d89a9"
  },
  {
    "url": "assets/js/27.b643ff2b.js",
    "revision": "19a146e0e96f869a38ee182761a4c49b"
  },
  {
    "url": "assets/js/28.2778e75e.js",
    "revision": "850c8192c22bf97fed61ac8e6fd24d3c"
  },
  {
    "url": "assets/js/29.30a7397f.js",
    "revision": "c2053f3af56713e962e1c29ede5f6d41"
  },
  {
    "url": "assets/js/3.4c283562.js",
    "revision": "3c86788cdd80f8ec30f53e2241941a79"
  },
  {
    "url": "assets/js/30.f6dcabe3.js",
    "revision": "f0da65ac848d023ed7f27d90f1b7574f"
  },
  {
    "url": "assets/js/31.5df748f8.js",
    "revision": "e67c13be9411aa74e3c9a1ad4cf8e8ed"
  },
  {
    "url": "assets/js/32.a45bd46d.js",
    "revision": "84bc6f35564f03b21640efcab3f93b0f"
  },
  {
    "url": "assets/js/33.7bb34fd4.js",
    "revision": "337c54b5daf85792999b224713979bf2"
  },
  {
    "url": "assets/js/34.636bb1e0.js",
    "revision": "a048be09be411db61c9f723d8069decc"
  },
  {
    "url": "assets/js/35.b4836492.js",
    "revision": "fb3d5938cb4056fb5452ee4c8d165e6a"
  },
  {
    "url": "assets/js/36.a3021b57.js",
    "revision": "3962f37eeeee358bc8cf05eea1849892"
  },
  {
    "url": "assets/js/37.ef3ec167.js",
    "revision": "a1c6ba1aa470e5db1cc57aad36bf1f24"
  },
  {
    "url": "assets/js/38.b0a0d70f.js",
    "revision": "96630b638ba67d030ad8127203d99399"
  },
  {
    "url": "assets/js/39.29676883.js",
    "revision": "d2fba5dd6398d809d40ff661021fc112"
  },
  {
    "url": "assets/js/40.5212b210.js",
    "revision": "06e2465b4a9201fdf144005bda7ab860"
  },
  {
    "url": "assets/js/41.b52574ce.js",
    "revision": "bdf2bb2c50b79e206565fdea26302a84"
  },
  {
    "url": "assets/js/42.ea399164.js",
    "revision": "727395a070eccace9ebe41450a446cd3"
  },
  {
    "url": "assets/js/43.536bd4d2.js",
    "revision": "32d828da89aa62021c6da3a0636f197f"
  },
  {
    "url": "assets/js/44.ccaca4d2.js",
    "revision": "444f8dbeff1176b88993c4f9c73325d9"
  },
  {
    "url": "assets/js/45.2b285277.js",
    "revision": "f4d57a5ddbda8e8aa6593f75e0ea0473"
  },
  {
    "url": "assets/js/46.77f5d2bf.js",
    "revision": "d9e8720c919d039aa55ada8880cd136a"
  },
  {
    "url": "assets/js/47.952f004f.js",
    "revision": "b1e40d7e89b577024cf4123632ec8a7f"
  },
  {
    "url": "assets/js/48.af977597.js",
    "revision": "3ab262ade5743afac36cbda0f3eca082"
  },
  {
    "url": "assets/js/49.dee54b67.js",
    "revision": "eb48644a71c56cd51b5e995cde34137f"
  },
  {
    "url": "assets/js/5.66acc830.js",
    "revision": "e36bf192af0dbf7ab1655bd9876a5e36"
  },
  {
    "url": "assets/js/50.0f381f93.js",
    "revision": "1b0d38362cb0d19257bb5588c47dc994"
  },
  {
    "url": "assets/js/51.1c8d8ee9.js",
    "revision": "f296bb36c1644f60a4cf0146407b95d8"
  },
  {
    "url": "assets/js/52.2cfb656c.js",
    "revision": "28f51ef7b7018388b4fa6a00c67ea7f5"
  },
  {
    "url": "assets/js/53.0181fc43.js",
    "revision": "54603eb9e245b0aa2b9df02f3c8a25a7"
  },
  {
    "url": "assets/js/54.b912a217.js",
    "revision": "6791578bc4734fb0898f328757554cfa"
  },
  {
    "url": "assets/js/55.d770753a.js",
    "revision": "0aa04648c6acba0e3114fb02149ab9b1"
  },
  {
    "url": "assets/js/56.0939b19d.js",
    "revision": "88eddeed920944cb65764407f69afb8a"
  },
  {
    "url": "assets/js/57.4fedf0b3.js",
    "revision": "5eb90a434a8abe8cdab08d6c527bb093"
  },
  {
    "url": "assets/js/58.b1919b7c.js",
    "revision": "5a5cf9921e25e366e881f5ac1683e35f"
  },
  {
    "url": "assets/js/59.c4997c59.js",
    "revision": "72b1072c51e592317342155349182dab"
  },
  {
    "url": "assets/js/6.ea926c96.js",
    "revision": "4aa83f83149280f0a562ff527e81b741"
  },
  {
    "url": "assets/js/60.bfa2fc2c.js",
    "revision": "7a6f265b64b2f7200f4b76fd48cfd4b2"
  },
  {
    "url": "assets/js/61.9cc2e388.js",
    "revision": "78fe68449d63f99f410346f87f8afffd"
  },
  {
    "url": "assets/js/62.c01b1336.js",
    "revision": "e13977bec6c968b42528f2f09d0640c4"
  },
  {
    "url": "assets/js/63.15f2a8da.js",
    "revision": "cf1c14a24f0c7a3ca821481f9bb60581"
  },
  {
    "url": "assets/js/64.8d2f6ddb.js",
    "revision": "4a06eb30cfd5856d29f9f726ad99f45d"
  },
  {
    "url": "assets/js/65.bda5284e.js",
    "revision": "d9804a6fd0482fbc38b8068577da3b18"
  },
  {
    "url": "assets/js/66.76c73a02.js",
    "revision": "8e034b68a18db29512ccdb9a5009e3da"
  },
  {
    "url": "assets/js/67.bb54adae.js",
    "revision": "f4865f7c4a190d2d574ebee5e36fd103"
  },
  {
    "url": "assets/js/68.8a348513.js",
    "revision": "154b71af84f1c931f176b7614ed2f4f9"
  },
  {
    "url": "assets/js/69.d708faf0.js",
    "revision": "49a250374a8e366c2d5151dda468c23a"
  },
  {
    "url": "assets/js/7.90986ad5.js",
    "revision": "2c44ce4319676f6171a62390ae5ae39c"
  },
  {
    "url": "assets/js/70.295145f8.js",
    "revision": "465defd33f80e90bf1e61eea4b52c882"
  },
  {
    "url": "assets/js/71.f73d1ef6.js",
    "revision": "a90dae8bf92135deb736f127db9f8a96"
  },
  {
    "url": "assets/js/72.ef3cb3d4.js",
    "revision": "ea0872341e434071e98e1907e5673e3b"
  },
  {
    "url": "assets/js/73.3a702109.js",
    "revision": "e9187e25fcb123c7483aa118ccf120c2"
  },
  {
    "url": "assets/js/74.7a5e9eef.js",
    "revision": "c55cc6a0244a5dd9ae406129f3ea3958"
  },
  {
    "url": "assets/js/75.73cc29dc.js",
    "revision": "aa1275171ff1257dbf7ce42acc58690f"
  },
  {
    "url": "assets/js/76.c0e95587.js",
    "revision": "48071dfda1aace009266d2d4ae46b949"
  },
  {
    "url": "assets/js/77.1d744ebf.js",
    "revision": "98f22ea1f9b156d9cfc3049de4a6e723"
  },
  {
    "url": "assets/js/78.c49506fc.js",
    "revision": "8557fd08d1a99e06b343678a0895fd81"
  },
  {
    "url": "assets/js/79.539f2a5a.js",
    "revision": "006975a792cb6ecb479857580f5a2e43"
  },
  {
    "url": "assets/js/8.6cf8686b.js",
    "revision": "6f6a77781bde780333c162dc94a7fd46"
  },
  {
    "url": "assets/js/80.7bbcb61f.js",
    "revision": "a7b3c9691c287a4b724e9159f36c3544"
  },
  {
    "url": "assets/js/81.00b654aa.js",
    "revision": "c6a42e3267569f7083d15c37d2506c37"
  },
  {
    "url": "assets/js/82.4f062f30.js",
    "revision": "9eb64262bd63a29268e685adcb198280"
  },
  {
    "url": "assets/js/83.37b48cb1.js",
    "revision": "45d4f4d8d0fc840f930e251c27298811"
  },
  {
    "url": "assets/js/84.b9a3c080.js",
    "revision": "1b4c2f8fc8ac02d9abe17612d3923b53"
  },
  {
    "url": "assets/js/85.f29484b5.js",
    "revision": "05e018c748fdcbfa8a6e7c3a6ad638b1"
  },
  {
    "url": "assets/js/86.31a55941.js",
    "revision": "5029592d4da9abb6935c2d1ce3784e4f"
  },
  {
    "url": "assets/js/87.68089ef7.js",
    "revision": "b12a18574e959c56c3643aecbc4fb072"
  },
  {
    "url": "assets/js/88.6acbd67d.js",
    "revision": "2e19ec04d157cf6a85430d4c28cccf2d"
  },
  {
    "url": "assets/js/89.68bb122f.js",
    "revision": "2a9208946e37f973870097540d5b0e24"
  },
  {
    "url": "assets/js/9.9cae101c.js",
    "revision": "a30352e3fd3b4b8e19a32b7e1dba6b77"
  },
  {
    "url": "assets/js/90.f30a885b.js",
    "revision": "9e2dbd1b8f8d365e9c73a1c6e1822cdb"
  },
  {
    "url": "assets/js/91.6ecbea8d.js",
    "revision": "7a68cf1df1b753264af72acf492ef678"
  },
  {
    "url": "assets/js/92.86d93a6d.js",
    "revision": "96a9076e5279ffb75101f4031479b070"
  },
  {
    "url": "assets/js/93.52b0bf6a.js",
    "revision": "3e5c1c6d0f780497069d79dc8fc6f7ed"
  },
  {
    "url": "assets/js/94.66148cec.js",
    "revision": "ae193b7d4b20d58f54e42f37b421d69b"
  },
  {
    "url": "assets/js/95.dc01b128.js",
    "revision": "408b1f502081f8643ea14eb72aa018a2"
  },
  {
    "url": "assets/js/96.cf4ac8ee.js",
    "revision": "03deee25c905a41a563d7d93988df2de"
  },
  {
    "url": "assets/js/97.7cb29035.js",
    "revision": "90d94a2c976b0940ba728f07508736dc"
  },
  {
    "url": "assets/js/98.67dcacb5.js",
    "revision": "0e8eeed84be706a41d91c6047ff4941a"
  },
  {
    "url": "assets/js/99.badcd5ce.js",
    "revision": "c1d8006d85e1e0513155b342cce7cf6b"
  },
  {
    "url": "assets/js/app.a3ec2994.js",
    "revision": "0192602869e82a0b416cc0a6e4dddb15"
  },
  {
    "url": "categories/index.html",
    "revision": "df4aceef3851a67db84ac5ac448cfe90"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "8a1c7fe5ea86b9ffbabe5fd065e428d3"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "cbd3ed76a7ea37d3327df96bfe549da9"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "6db13729d37f7552311881ffbf37ef70"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "199c4b2f21e1292bd912661f228a72fc"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "41f94243720f2f188d19af57910592d3"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "19ae5684ce156f8875185654b82414bf"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "88c00d7e80d58a295257bc65a468d8df"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "3f38b46425d8a70173d8ee6cd2956ceb"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "3b5f59e5c6b7dc483f7e4d9904f2beff"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "b39539d25b534349667159bc6b8273fd"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "cbd3ed76a7ea37d3327df96bfe549da9"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "6cbbe4850c89c8f072df8cbb7dd95bb1"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "3c198a2965b2ee3885bb2d12af1f9ef4"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "3ae9170cb02a807420713196f8137a5e"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "b0fefc2f6d81272a64b4fae2f8d051c8"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "d4500b3798b01b91a8cc9ae3a06312e9"
  },
  {
    "url": "cs/database/index.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "ed0779c6d72dd7c13daf458ed7980fba"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "011d3296a29eaa6fdb276cbba7139aa7"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "b21a2d6765a0524a21a155cd63a35255"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "accddec1d465929ca27c8345a200bbc7"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "b9218ebebb762ab3166eea5640b468c5"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "2a2594b6849016fdc162668652e0afc6"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "48429796a897fbbe6166b43f4037eb1a"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "6bc1ffbd328dc3f4e2dacc99b2d03fae"
  },
  {
    "url": "cs/design/command.html",
    "revision": "546add161ab9d165fc4ffa8d8ab15d97"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "fc20db588ba41f51d7e8fe41532efbcb"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "745e6ccaeed85aeccec249ae5fc93f06"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "33ca53d199ff609edc5fdc4be262f206"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "655060a03fe43dba3aa8a81ca9435191"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "b8b76d85eeaee1f1cb1897e3bd8c7924"
  },
  {
    "url": "cs/design/index.html",
    "revision": "e402cf5679a4c90da148faa356ffb358"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "1a9d5275d8c3bd496c0c1d1c97500e9e"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "28f4bd9ec9659b35eb7dbdb0afbacb6a"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "7376ad6625cc8bb0098d9571cb1793b0"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "d67e9f4e12526c71af3f2712e3f7bd00"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "714f14b29b0d0c9e32fb86e39cedf4c7"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "2afa7ffab64402c3469087c7bb344ee4"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "fdedb2c90b7974883316cb07981b26af"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "0fc198c43b18a39530a8db2196f3dd76"
  },
  {
    "url": "cs/design/state.html",
    "revision": "92de75dc5686b7d4ef8d90719f22cf64"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "35c5cb9f8727888bd2f2fbb217baaef3"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "05a9c50215d1680ed83f6e5f1a67cbb1"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "a187dffa6072099809e4d2244e9491c4"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "962c83659aabea06287600f1a46308d1"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "2afdacc6c5452cf98feaf6dc9b5a5169"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "df2ace9732e16b6ef2a75d04870673ee"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "66b633e4bb9caaf63f5ede22e6b7e9eb"
  },
  {
    "url": "cs/framework/vue3-reactivity.html",
    "revision": "3a50cc9266e97fac06a4b6fdfaabf099"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "d0dec1c9a63d20d96d6b86c534c39cdd"
  },
  {
    "url": "cs/index.html",
    "revision": "8b73601de9f3c9ec1384a870a49634db"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/java/container.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/java/index.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "a0115576eae5460fd47c035f52a8402a"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "fcb806771da256debb237aa1582287e4"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "487dcd66a62533ea59c18c3b94ff03f8"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "7141a1899770b8f82b3ed47203d5f187"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "62fa9e9d527dafdf5b02cd55257ff571"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "6fd26806380d30a6148cafa66827f95b"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "a27bd5841db1d1b26641e4d223b717fa"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "fcb322be994e4fd1866821d743624c20"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "f18a43774a7908aba07f91c29c830dc1"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "cf9045330dd31e9c32990c03be01edab"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "f94a0a8f940e02c58b349cf566f50489"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "f2623bd788c4d30d3c32a186a1ffe414"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "24557ca503336303f21dcdad8e4cccb3"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "c2c45d21a2b7da0d91afdaefe1771e0b"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "d767fe106f77cc3bff8ed1b2029ed666"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "17cdd48999ccb88664d9b24c95889f12"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "4c3590f518b4ec1fcfc53336d2a3adf7"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "b6a9e3192f00e5b1ec8123a8edccaf94"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "a68831c32e89d64cad905a263717a4aa"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "57d3b1e740d1a007c41150a10180ddbf"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "58ecef34388c6086ebe80ee548c0759c"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "89d498efab43c3988a822d87c8f6a5f1"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "0235841763c12c1c60d9a9a70d491d7e"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "424bf2f281c0d10cdecc378097b0412e"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "4af51b576ced03ececa259104b5c8c26"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "bd7c49f6a12e73ba89b3b5d975951ce4"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "907d393a12adf750386aaaadecb4c3d3"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "4a741ac08e371064b8bba73c2c087b8e"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "c32647fd66892751ead23a6ca74c2ed4"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "1eeddd7ea606769855b226da007501e0"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "eff77ac0afcb8bc2484af73e29b5b8be"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "e113deee26adef1994f86591f8f7b2c7"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "728cff2e0bb54ff945db1cdf6e65bc38"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "255b7cc373ebe002f3b2ad47cef09bc4"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "2d059cb82c5ec07f648e6dfc01dd8f90"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "21d1f867139d25087fe7df3e4cae90cf"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "447216b6127a6f4972ea9440c796ace7"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "a1c40b96d8d8ca2a4ecdb583748f3897"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "1da398c279653dc5b4de56b8b461d89b"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "00f256647434340c9c77698ad30f4dab"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "52c0c3861c98d183ef01044ee39ea8b1"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "8a06b872bc299781e09f0c99172fd526"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "ca9e2317afb1c8fa8763a36783ac0503"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "f337923ff58fa0e674c34dd64738d163"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "dc6cbd8a8238b6f4448ca0343899b140"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "3502dbd050b3649498770acd687db017"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "aa999732b8f855c257c8493c2507b7a8"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "55fbc5f993e184e328a4a2cb000ad70b"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "d033e09b4ca079bf4c072e550e8a2910"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "510f104cd8a9a7b851181e2f29016b9b"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "7c14e4a47a0a9733988f538186668648"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "3b02798b4ca8dbce49781ba900ac42de"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "a893da283bc261dc97f4a45fd7b5df7f"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "748d4674ecf2f209e74d32bc92fc9cf4"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "3a6770c58a98e7e26eee7b51c3cc1d9f"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "4785a2c7d7f1729725e42c8c61dffcce"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "69281754a1003324c3deadbc2504042b"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "ba9b7dcce1981bfa27e22223c59b57a4"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "62b5a5f88d086215c98b027093e8c7db"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "4b81ba2027391f85e8dc1cf39998a121"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "8f203eae57d6df28ba61be522e27be36"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "bf7c3ea1f50b52a11f353f8d3fd4ff8a"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "be74a2d0d3f2e285fa197eaed6cfc079"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "c9cfddea7e5e5424c56fb8fa8e18b300"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "2ac78d2e43a326cd37bd36cb2466b55b"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "4a1b33082667bf7b8a3ac2614489d840"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "75c04cc4404ebef9c60059de47ba6a35"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "abe7da2e886c7897175c64088df30d6b"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "6946035e64c3c88d5d7cc3315dc32f1c"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "49e205398b6c8cfc329e3d27c9f3ab9b"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "a4916c18d12f9669a3a9f835d6f83946"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "3455a330363334f03fc7fdec0c9a2847"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "10ce867fc5f580505b1bbe1e39fce81b"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "4702e5efd5e6eb9d3f89030c12dfdf6a"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "73b2b97c9c4be5dca4408b2d92aa6ef8"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "993d34f45e5c2b988e183744243d835b"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "5b5c6d9582535c4cae6e7fa367bc894f"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "65807ee843fb42e228cdd18e33e40a6b"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "16b1524b569d0448347a600c54ff9287"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "14a860954ca66066d2961a241e6995e3"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "21fc56826398c8cd1fc591eeb8fda440"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "20304a7dcdb4660f119a362714d58968"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "99bf82723abe5fc6232d757389fdb64d"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "484caff04f6e0cf4a526ff07bed6652f"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "f337923ff58fa0e674c34dd64738d163"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "7d003872b6a3504e013c931f557e498a"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "cfac4be8c83ffceb6426235a1c97cd5c"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "cbd3ed76a7ea37d3327df96bfe549da9"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "2cca8ba350d13921657450c5630d9a61"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "c0f83a0ec749cc4745ae1ec622d17e66"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "c6936e74fd9f76ceddafaf8b7314b4bc"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "76b487efe9befdfca196e0eb180c2940"
  },
  {
    "url": "cs/network/application.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "8a1ffb0ca661750056127a16d0f8eb8d"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/network/index.html",
    "revision": "cbd3ed76a7ea37d3327df96bfe549da9"
  },
  {
    "url": "cs/network/link.html",
    "revision": "42e5b1daa88ccb69dcd148dae33c4ee1"
  },
  {
    "url": "cs/network/network.html",
    "revision": "5c7b26aaf06a652973d7a6511fb2d437"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "38062d9a15c5c252af1bb4fcbbb17c42"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "335a78b1d4bd6e805f7a2fce9b19e461"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "404ab00d38dde02c267809d282e4ac64"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "e75b15d676ae43144c0dba2fb949dee5"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "419aedb41284aa7f0cf3d8c72305450a"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "cbd3ed76a7ea37d3327df96bfe549da9"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "2b1b4ad2a33a3144adbf36b44452e9f6"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "0e663a1c2b4dbf3802e50784d5115099"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "a3044be74eaee5c8674d1a2b0fec27f3"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "8432a9054ce94ce53fecfcb80725b27f"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "a0115576eae5460fd47c035f52a8402a"
  },
  {
    "url": "cs/web/index.html",
    "revision": "7938ce439e81d079e7d718e148d6360c"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "4bf9fb470bbb9977e1842a0c2a82104c"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "69b5c3105732a88b163572f429d81dca"
  },
  {
    "url": "cs/web/web.html",
    "revision": "1dabaa4c37c30641ed87501584db445b"
  },
  {
    "url": "daily-life/phone-lost.html",
    "revision": "e540584ff2c748da9b24f173e3bf8050"
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
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "5b9b85c38435acbe1c4b2a577b66fc0f"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "cb07797dd0968066113bf0071c8022a2"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "b199b1a13f34edeaa46a64f98ebe8b2f"
  },
  {
    "url": "language/english/differ.html",
    "revision": "dc08dbc8789ae95d68e0e04328146d93"
  },
  {
    "url": "language/english/index.html",
    "revision": "fcb806771da256debb237aa1582287e4"
  },
  {
    "url": "language/english/modal.html",
    "revision": "97eaf9467e323f27e75b998882e42f72"
  },
  {
    "url": "language/english/mood.html",
    "revision": "d38a1ae17818e9c5f04747ee54656f2b"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "038615205068d18cc986402b17fdb273"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "dbfddbe8b1c14e601dca745ff90954e2"
  },
  {
    "url": "language/english/phonetic.html",
    "revision": "4cd62ce44c8a6c606493c93c02a4d57b"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "225718e59f72729b3f483aeada36f772"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "580397989f59395f7e5f5164df5f71d7"
  },
  {
    "url": "language/english/tense.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "language/english/verb.html",
    "revision": "a2023a5d8bec7c4813dbae05e57a65c0"
  },
  {
    "url": "language/english/word5000.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "language/index.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "tag/index.html",
    "revision": "df1295a70dabe6f49819f64d880dc5a9"
  },
  {
    "url": "timeline/index.html",
    "revision": "c82d89c5a131dd9983731edf8be9fa4d"
  },
  {
    "url": "tools/chatgpt.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "tools/hash.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "tools/index.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
  },
  {
    "url": "tools/test1234567890.html",
    "revision": "575f8a4ab8fff09f52a23c9a32f4581d"
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
