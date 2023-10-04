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
    "revision": "a36361cabe04256bb41ef0841095387b"
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
    "url": "assets/js/103.e31b795e.js",
    "revision": "d627f37e63d63068247f571cda69fe1c"
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
    "url": "assets/js/106.8afb0393.js",
    "revision": "46e333214725d9d719cab508cbab353b"
  },
  {
    "url": "assets/js/107.04cd9065.js",
    "revision": "18e1d41c763e0e111606abaef9f68c79"
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
    "url": "assets/js/13.6c451e6e.js",
    "revision": "3214f00beaa5750690c789b3c97ebcd7"
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
    "url": "assets/js/133.9bcc75ae.js",
    "revision": "e56865a59fcb79379d40db889126a180"
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
    "url": "assets/js/136.aa5593d7.js",
    "revision": "9c646a6213f6b76345de89fadb440727"
  },
  {
    "url": "assets/js/137.5d918d3c.js",
    "revision": "da1deab3ae69dd912f224ae2107765c9"
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
    "url": "assets/js/152.2c970f01.js",
    "revision": "930cf9278c47107fe5bf60a9b58da3eb"
  },
  {
    "url": "assets/js/153.6654ff3a.js",
    "revision": "7878d039d2915e881eea7e7728aa4788"
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
    "url": "assets/js/159.e60c27f9.js",
    "revision": "700e7d5e7bc95baa29a5242e578b2bb4"
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
    "url": "assets/js/163.a83e8344.js",
    "revision": "acdbc1fac87716f344740f2e389fbe8b"
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
    "url": "assets/js/166.fcf3c47b.js",
    "revision": "b9493adc1d5c51d6a6bbfcab9cf95efa"
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
    "url": "assets/js/169.80c54b45.js",
    "revision": "a5633cbb0922a5eda43cd18db2cb77ec"
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
    "url": "assets/js/172.79afa5ad.js",
    "revision": "49afc08791cab26c49ce604c8171a008"
  },
  {
    "url": "assets/js/173.3e272e2a.js",
    "revision": "592dab0610d12aeee48eacf0d08ef15a"
  },
  {
    "url": "assets/js/174.58e1e26a.js",
    "revision": "08aa98ab03807a27fcf6c03b9189d2d4"
  },
  {
    "url": "assets/js/175.5cb8c614.js",
    "revision": "0e68dfcf60eecc0520075903e1a1a3cb"
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
    "url": "assets/js/18.6280f9fe.js",
    "revision": "779ceaac4ade772dec19e0ec8c8b486e"
  },
  {
    "url": "assets/js/180.e579fd45.js",
    "revision": "ff23372f30677e33d6613e4a95e57a11"
  },
  {
    "url": "assets/js/181.a49c78e1.js",
    "revision": "0b68f0380ef1c9b670133e9807052e36"
  },
  {
    "url": "assets/js/182.fd60a717.js",
    "revision": "139dba9eb33bfbff0ada418d7e73a216"
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
    "url": "assets/js/185.ab38591b.js",
    "revision": "482fd269df4718ea45d08ee452385f59"
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
    "url": "assets/js/193.4e732097.js",
    "revision": "b2a353cf5638f0a058fb245485f2dcf7"
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
    "url": "assets/js/209.91779666.js",
    "revision": "bff4672cdb4e25dc1f0fcce6d2f459db"
  },
  {
    "url": "assets/js/21.0185579f.js",
    "revision": "730d65ee6a9c668140d857b9404f7344"
  },
  {
    "url": "assets/js/210.7977f931.js",
    "revision": "2632652496de0365120a8342a08895c0"
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
    "url": "assets/js/224.f25818c3.js",
    "revision": "1610e13f9d3e37d39550978e55889d86"
  },
  {
    "url": "assets/js/225.ae437888.js",
    "revision": "de35d0dc236cb4ca61ccd94cf97a4740"
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
    "url": "assets/js/231.8607b838.js",
    "revision": "f03bce2bd8a6391a05cc9d7d67ab9565"
  },
  {
    "url": "assets/js/232.67ab87f7.js",
    "revision": "6cb1e271161258316573bbaac46bbde1"
  },
  {
    "url": "assets/js/233.00a47390.js",
    "revision": "50ced66c6befd89f6c4c316f5e6c88d3"
  },
  {
    "url": "assets/js/234.24a2aefb.js",
    "revision": "84ae2ab65dccd6a3ce6efdbc9aad1ef6"
  },
  {
    "url": "assets/js/235.577c7f40.js",
    "revision": "59a3adf2e9c7cfd8f8bbd8fca393c394"
  },
  {
    "url": "assets/js/236.5820054c.js",
    "revision": "05e6dd3c19bc20db03aa07003ce80f0a"
  },
  {
    "url": "assets/js/237.3d520896.js",
    "revision": "c7101a582e677724735c04cdad2095bc"
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
    "url": "assets/js/240.1ca17ba1.js",
    "revision": "e3343b6942fecb21c11baf711a3acecd"
  },
  {
    "url": "assets/js/241.df8421fc.js",
    "revision": "620bd28f10807e6133067342e5077d94"
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
    "url": "assets/js/252.aea1acd4.js",
    "revision": "26f2303cc3696ba13ecfbc53aff12539"
  },
  {
    "url": "assets/js/253.f275a34c.js",
    "revision": "9f3aa99cbb2cd688f0d31a67b49b138f"
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
    "url": "assets/js/258.7d260987.js",
    "revision": "77cf60e8597673bea1927fe88f79b013"
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
    "url": "assets/js/262.f0f800fb.js",
    "revision": "f7b7afbad59837c8d7a884e368b2b0bf"
  },
  {
    "url": "assets/js/263.e4992af8.js",
    "revision": "ca3730f800b008171182b17f5ff81a8e"
  },
  {
    "url": "assets/js/264.6f35e391.js",
    "revision": "4b8067714f50b89587c1494bf0f49a36"
  },
  {
    "url": "assets/js/265.fe3ba8f1.js",
    "revision": "6ea2e53bf70dc6549ec0493a8824686f"
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
    "url": "assets/js/30.8952f8c1.js",
    "revision": "f08c2a1d22cfc22330029b305b2d6da9"
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
    "url": "assets/js/37.4766c33f.js",
    "revision": "bdcf50ac4aa743ed0afff0689ea9e6ef"
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
    "url": "assets/js/42.2fb55343.js",
    "revision": "a7e8ada7e603488f3e6b703268adbe64"
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
    "url": "assets/js/46.ab0ee216.js",
    "revision": "3f1258c62042ec7e99449d29cdc3a4c1"
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
    "url": "assets/js/49.da467ad2.js",
    "revision": "abb6045a3a92ac2a6efd5cdacea33e9f"
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
    "url": "assets/js/57.b12bd38f.js",
    "revision": "1526d34b3eb0e33280a73292766b4bc2"
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
    "url": "assets/js/68.f9cde035.js",
    "revision": "279f5124b3f7e3409740889b3d52d373"
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
    "url": "assets/js/79.8cf0da5a.js",
    "revision": "bc629124c48025429d95733703fd3cb7"
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
    "url": "assets/js/88.729b18db.js",
    "revision": "623f4392dc7f824674fcf929a9f7e18a"
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
    "url": "assets/js/98.93b2d822.js",
    "revision": "80ebd99361b81bd671bc1b945a96d003"
  },
  {
    "url": "assets/js/99.badcd5ce.js",
    "revision": "c1d8006d85e1e0513155b342cce7cf6b"
  },
  {
    "url": "assets/js/app.dbbfa2bd.js",
    "revision": "ab42ab5eb18b5fc4f6430f779bdf5978"
  },
  {
    "url": "categories/index.html",
    "revision": "c35f321ab5cfaf55fea5718aa739820e"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "babd627a198c1ba73a07c85c76aa372b"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "69da1a691df1969b34f1b4e81ba7f2de"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "b6b7f890eb14275d9780b6fc4d644a7b"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "eb78ff4a69f9daaae69db1dbadb6a343"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "95d975ff3b397691224595c2ee92e3d5"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "705efe5da9ff1f1e7e51aa984163e4a4"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "2826481f3d0ca80f51e5f781219f0721"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "0968ea007ebd4134c81d8b693a01b124"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "a641ccf4e0ff340be6a5e84f3734b8a9"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "e8b7bd1144307a924a37b1fbedcd2185"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "69da1a691df1969b34f1b4e81ba7f2de"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "8b7e92851c51ffc99f8e37d703591a1d"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "7a55404566bfb810757a47b6ba192286"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "ded4fed9b5b5835c148406cb87472e16"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "98c352126b15f34f60cf9d2059b78f97"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "fcf4456892dc913241d224373bea240e"
  },
  {
    "url": "cs/database/index.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "2d40115d87d69b1e63f9802bdfa91e2a"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "7cfd9ae88bfb9f6043355970f092b4af"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "20bd512edc872b7dd3e43c9fa97dbdeb"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "3df66e200e0cdcfa83d52968f2222853"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "19427c5c3a72a61e5477e910beac8f45"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "922a83314b681571dd3d97af379bb870"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "aa2f1f3afaa5f2d0ddedce16100b5faa"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "70a6bf224d84a3027a53648a003fc28e"
  },
  {
    "url": "cs/design/command.html",
    "revision": "43fda1e21867158c668f5276013ab72d"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "05ebb498d8557953ace772ce4d5266c4"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "54ee5f39ab851593d43aab1bc620295b"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "dc9dbfdad3c5ff6f28c01c62123b0e31"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "a216b1bb5fceaafb226d3781e35e860b"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "1bebf72d0f715e9f8336d0a4ce26e194"
  },
  {
    "url": "cs/design/index.html",
    "revision": "cac73050150bb25b93ad445716d9a326"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "cb53839a3bb6475365a898fab5c60b4f"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "8236c686cb770c7ae8e76112fd0147fd"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "b4fc4a3349cc59bd83c511798b00e429"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "aa5d2bd76f8f49a60b2e303c30fbdcfc"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "103cad56288aee301b3be68541dd9144"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "685aa64181fd14c2cbfc3e846ac8d4e6"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "d7aba55ce38344800e6c25e1a11c1e5a"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "419f51e41ea7de5656a9a01d633a7d95"
  },
  {
    "url": "cs/design/state.html",
    "revision": "1a0823e70a1ff4c1d28a15d0fced3bc7"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "911ca8d19bcd921e6842052dbe27dead"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "cf42b822348a83b6b71dc4bffb8f920d"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "b27cba27e094d5c0b09b0da0f0639971"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "62f34ac6cd411187465ef939d743d277"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "d34a2d81a990c8176f450fdafa873a52"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "51b30988c98ca3c54f51aa1f2a82a643"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "7adb07048ae25ba086a01a3b5fd33ca7"
  },
  {
    "url": "cs/framework/vue3-reactivity.html",
    "revision": "6c22537f50d310043bec24540d82fefb"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "d5065f1b9cde396549c98fafcf446b60"
  },
  {
    "url": "cs/index.html",
    "revision": "58f60ca75426ebe007f8b5c48513c9eb"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/java/container.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/java/index.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "7f7cff42135ff994bc13e05143451815"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "595603971afb1dbe05f9b7393be9e8db"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "0faae036f1dd736677c18d5f7e46635c"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "733006615b25c2652110989e883a41d3"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "6c0f56f785722f70b4f0e93052006314"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "ff782ec712dac9fd24d09a5c2ca7168e"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "4e195c73831b15837178efe405356e8f"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "a45c8ca9b9195e83ca7f3276e57a79e8"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "818e7a61261399b7176c1a85e28ff98c"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "fa7d8c813cc739ec08fcd033cc009c4c"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "d3c2055c9195536a8bfcb7467ab1ca22"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "3ed14bbc6ec7bf9a4bd6ee2c2f40c3ba"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "b9b3746a9582bdc6540fac9545b78cea"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "f4e0405c7286305da38f83b58c4b2e80"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "631e636c437b79a68a7c421c06c8af8b"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "099a8b8551d62185b23736123e863346"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "b9ede126a574207c9bbfbcdf5fbb804b"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "02bda6761af4cbc906ed3bff64c25e41"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "700309bee693c33904150a23e31836ae"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "4f5627f438fad94d7b822614d80ad700"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "9889416036f140a2d941beea387305c0"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "a12dfa8f7d8e173fe9ced2664987132d"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "db2901121784842f02ce05d659b3bc4b"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "137b78b6a774254552e52e7912927c42"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "f570f5425adc92b49c1e4e7dc6816a40"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "9c6e206ba52dfc560c01a8a80a63fe14"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "f889dba8a1abaa03b340179bac20dc42"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "9b9a7f6ace7db338c59ad0eec18a5488"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "48924b62fa95c3f62b98cb3256097c7e"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "0963fea090a37784c6a54caf04df7d5f"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "3bb91fa774dfdcbb0a96a5a2587ce8e3"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "cb6390b9b6050817b5ff9c433523f6f7"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "0072dbe011aef8c59bf7c7e586c04637"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "15903fc883b9a93b2d17ed0b6c571c55"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "74562fb4c780a0de9bac05e619393ef7"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "7604ceb9737745c462a556f981197cad"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "a0ebf65f81c6f8fd737f798798ccf21a"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "ed616eb118d7422d042cad65c0c3da65"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "90de75385d64c64a14fffdff6732c5d7"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "242e8cb6067ea43f7a66c41c84c83085"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "651bba67fdbe44ff52cffc6e115f346b"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "87f3652f3278176e5908b2e473a27aff"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "e60b6aa45b2dbcba51df87138ccb72c1"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "addc46dfa2a93d1afaf483d45e43a790"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "5e8638f0b1afcf8cbe1635d8742e68d4"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "b5faf77e2c47e2f41ae07495ebd28eab"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "b4f854c0eb00bcf894fa7fd73be8604c"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "191a3aa92ad90ab454fdd742f4cc345c"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "5d6fcb19b4e3986793b9d64b1ed8c0e1"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "4f5c2dacebb07461d59e64c83240129f"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "3e562a16da08d3a5d39fc65aff41900e"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "1f503679ab137647c3797cc8ec7d6b06"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "ce77ce8f42e6a5c417ec7599317066bd"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "6d52b9f1b47371f3846d151dac721083"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "7e209ce3591ac40fbe587d18cd9ec6bd"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "0a0086419fc346847811b9947c1f6035"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "dfab9fb099b215bd171604924c299c4d"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "e3f97991cc1bbd94ce3ba4b5e3026925"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "596457b400a19a11b2233965f8fbaccc"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "7bce317e9763778ff8c1f05d999a95ba"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "b5f359431eea4eb1291d01595d160c74"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "d057a885c6ae1bac6ef9e846bb5eb8cb"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "9624ee002d002712ae7b46dabd5dd0b9"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "b0d8102b9856da442f99c28b98f09a78"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "f4079b6c89fdc3475a53cfaeaeae5364"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "bd609a2df3eb5a5a34b68c5a15043c5f"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "accebd515e7360c4a5ad205f4b6f95aa"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "3f54959b1d065abbe72c1117a47ce6d8"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "ecb9798cef14b8cbd67b18d1261aabaa"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "bf7c700c592e16bfb8e233b2c2bc4659"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "9c847c213b843a8836461002303180a5"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "02d5b1cb9a1ea13dd5e54173bfbe9f8f"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "c6b20202bbce85e5cf391697d10bb8f5"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "9878337e58d92af57dcd98ce0d7f3bd4"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "9c22e8c4d79b0179b5732a62e2b2e2f1"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "2e35c49d3bb1c5f194d635de94e8e7ca"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "0d6ba68b3cbe3e29dfc07c9e5a1dd00c"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "ab89d608ce8a0634860edd422fbe311c"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "66ec4fe58eb6803a75d9d61045e0396a"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "25898a014f88ef11d01881e9548f4779"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "560864366d1f94ca22017a384ee0359e"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "a6695e4891476fca4ed95ee929672148"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "262d4fa2669dc4655ce876bd0c890319"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "05acc2942d81de3ecebbe15808224e34"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "addc46dfa2a93d1afaf483d45e43a790"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "fb2343ad25fedd3b268a3891fd9a8f24"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "40cbce74d67c3f2dc9dbb4e9d066e0f4"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "69da1a691df1969b34f1b4e81ba7f2de"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "43312454e9f8acf1d77a0b9ea2ee1da3"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "bfd145c8d95e2c5e592ac88c869457d3"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "74e7ec1fb76d9de2b773c12f4a1e69b0"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "ab798110fc576883ea2aad35ab46711d"
  },
  {
    "url": "cs/network/application.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "6260ffd98c824aa62e6a640161b1a7a0"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/network/index.html",
    "revision": "69da1a691df1969b34f1b4e81ba7f2de"
  },
  {
    "url": "cs/network/link.html",
    "revision": "91038c25a4c7b8b7383bc02c04f61776"
  },
  {
    "url": "cs/network/network.html",
    "revision": "8805889edb1de28e2db5e89e94ac582b"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "e95dc6f2c453c9fc442ab30756cf5b9d"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "de2b7dfe4ef58fb18ead44fe5ca00602"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "1bf38257009ac2251f7c39e37466fb70"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "e73dca330312e8eb15802b93b7ce54fe"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "afaca61af37aaa02546e4821b6df98cf"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "69da1a691df1969b34f1b4e81ba7f2de"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "8f0334d4b2c4c4e45223722345b769fd"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "c6621d3168b020a0e26c1f97c5d3c28f"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "678c7cb3e286488a6118992c44dfc842"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "f3d7d22d1f58f081eabf07181ad4814c"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "7f7cff42135ff994bc13e05143451815"
  },
  {
    "url": "cs/web/index.html",
    "revision": "2d423fd4ab726143ccda2034f5ca530d"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "fa7e385f591120bc4fec9dfd76824c15"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "beb56c096edb1bdda3b6ea38fce7c424"
  },
  {
    "url": "cs/web/web.html",
    "revision": "2ddbfc39d4906ca0b418c50656617bbf"
  },
  {
    "url": "daily-life/phone-lost.html",
    "revision": "b450cb5126030be302b736d2eeb7507d"
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
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "7fbe88d46f1448677e59f2e4749bde94"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "0a113688d53c7134394095496b10b28f"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "f140056145b973dd50a2ac5ff6ee2c22"
  },
  {
    "url": "language/english/differ.html",
    "revision": "a82f3b1b91760cc779e14db7ad12c3a2"
  },
  {
    "url": "language/english/index.html",
    "revision": "595603971afb1dbe05f9b7393be9e8db"
  },
  {
    "url": "language/english/modal.html",
    "revision": "0a2dfe0ef32402dd7e619df2f00b9278"
  },
  {
    "url": "language/english/mood.html",
    "revision": "3c0878cc345e69e122116549b99bc337"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "6699a5bebc7d9cad3b2d7e646aa758c2"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "ae6e8786aed09eb6c786727d8b14a273"
  },
  {
    "url": "language/english/phonetic.html",
    "revision": "bccfcd471a608efd80d3b3803c02b713"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "19ab1b84f572215c50b167946eeb1c4d"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "291834e359b7375c8b7a3a2d632f52ff"
  },
  {
    "url": "language/english/tense.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "language/english/verb.html",
    "revision": "adf57d0260eb8f927fcd1baabc51f0e7"
  },
  {
    "url": "language/english/word5000.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "language/index.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "tag/index.html",
    "revision": "de6953c6b6b4a7d15a1622172147ce17"
  },
  {
    "url": "timeline/index.html",
    "revision": "b213ddf68eae98131bbff8509995662f"
  },
  {
    "url": "tools/chatgpt.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "tools/hash.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "tools/index.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
  },
  {
    "url": "tools/test1234567890.html",
    "revision": "6f297977537d51c0a7d1068dd8bb5b54"
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
