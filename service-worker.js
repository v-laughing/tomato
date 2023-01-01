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
    "revision": "8ccca6017e0b7bf5329cb6a3ac94c236"
  },
  {
    "url": "assets/css/0.styles.130693aa.css",
    "revision": "04fbc7ac164baccb1858560487b0a18b"
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
    "url": "assets/js/1.4917d519.js",
    "revision": "14dcac81db1a7ab4c1e0444324ac5966"
  },
  {
    "url": "assets/js/10.879081e6.js",
    "revision": "ea60ecaa8e82214f55570f1bd45c72db"
  },
  {
    "url": "assets/js/100.3a136eca.js",
    "revision": "952f76010e7ab8ad8e3a4cce2d919cb1"
  },
  {
    "url": "assets/js/101.15651862.js",
    "revision": "c498029f103efceef6c3940cbcf8485b"
  },
  {
    "url": "assets/js/102.3983e76a.js",
    "revision": "28ee43e369acf17ee29968a0d55d9e0e"
  },
  {
    "url": "assets/js/103.269f9f52.js",
    "revision": "5391aa597167fc28172ee7548d406f06"
  },
  {
    "url": "assets/js/104.4cd740fc.js",
    "revision": "6335cdfe2a507ee7b00edf0463da5b0f"
  },
  {
    "url": "assets/js/105.c431128e.js",
    "revision": "f8cbbd6d557b61753945526cb9a36be5"
  },
  {
    "url": "assets/js/106.02ea853d.js",
    "revision": "0c6f1090bb6d3346f6160de88b46b1ea"
  },
  {
    "url": "assets/js/107.35f3f771.js",
    "revision": "4558f7d3790fc9f12c750f4f1a11fd82"
  },
  {
    "url": "assets/js/108.a2663538.js",
    "revision": "acc1995024084609e4c34b5f8eed3dad"
  },
  {
    "url": "assets/js/109.274305c1.js",
    "revision": "b76b46c85b4bb9fc57393a0daddcec9c"
  },
  {
    "url": "assets/js/11.b43459e6.js",
    "revision": "38b6d33bdd6f0046ea5e1e46743091e8"
  },
  {
    "url": "assets/js/110.09fd2a12.js",
    "revision": "d412a6f9859846255eb2c73fbd938bfc"
  },
  {
    "url": "assets/js/111.57fc9139.js",
    "revision": "1b02da84ff852b229ba759ddbfe68f77"
  },
  {
    "url": "assets/js/112.82d17875.js",
    "revision": "170662994c11ffda19919a7b86ab55a2"
  },
  {
    "url": "assets/js/113.a45cae9b.js",
    "revision": "b7d128999dcbec607e1e0c3a90e6069d"
  },
  {
    "url": "assets/js/114.56bb680a.js",
    "revision": "65f99ade80bd4ace1d74530fe939e6e4"
  },
  {
    "url": "assets/js/115.89a0f956.js",
    "revision": "ae51a2be95690ea6da315a6d581cf12c"
  },
  {
    "url": "assets/js/116.ae58f02a.js",
    "revision": "cee0c85890440123a6666830be4d3190"
  },
  {
    "url": "assets/js/117.1e05f2b7.js",
    "revision": "433359d57d09495d4d32904a971b818a"
  },
  {
    "url": "assets/js/118.95f254a7.js",
    "revision": "ae4da19f072c4c4eb31bee6cfae574a5"
  },
  {
    "url": "assets/js/119.a9b4e9b8.js",
    "revision": "deceb24a51560e5481d15e72a034d13f"
  },
  {
    "url": "assets/js/12.ebeb56f5.js",
    "revision": "aecc57dc4486473376338cf9a8aa8e71"
  },
  {
    "url": "assets/js/120.13dbb408.js",
    "revision": "6e542c73d50f5465601e45aedc6dbdf9"
  },
  {
    "url": "assets/js/121.1d3fcef2.js",
    "revision": "88cd3296e07c5cedf20cace126c8da8f"
  },
  {
    "url": "assets/js/122.e16cce57.js",
    "revision": "a82022c3c58b24e042dd5a19d2fd852b"
  },
  {
    "url": "assets/js/123.987638f3.js",
    "revision": "bbc4f196f496bbbfd7a4626fe4a5fb52"
  },
  {
    "url": "assets/js/124.24788ee0.js",
    "revision": "84e4130ccab361ecc50240d3cb42366d"
  },
  {
    "url": "assets/js/125.2ac4d90d.js",
    "revision": "2340dace202663dac8a675a1e86acaa8"
  },
  {
    "url": "assets/js/126.3addaa34.js",
    "revision": "beea317fd23a86cba3240d738ec60c12"
  },
  {
    "url": "assets/js/127.0b59c848.js",
    "revision": "3c18641e47c9e694c52c7ac2ceb9a458"
  },
  {
    "url": "assets/js/128.ccfc8a58.js",
    "revision": "18a04628980075bc07b2cb717fd961e9"
  },
  {
    "url": "assets/js/129.06655c90.js",
    "revision": "0860c6878eebb735f4a001d97f3165bc"
  },
  {
    "url": "assets/js/13.c0064bea.js",
    "revision": "7f7f537747dc7839ae2d75a36a5e4e91"
  },
  {
    "url": "assets/js/130.4bd27bfe.js",
    "revision": "61a61e273b9506b7d5c6284d5bf4ae44"
  },
  {
    "url": "assets/js/131.79ec27ee.js",
    "revision": "f4203aa1d3d9f309169b6956986c2308"
  },
  {
    "url": "assets/js/132.6f25364c.js",
    "revision": "a50ee06a206a3f967587fdebaf16b563"
  },
  {
    "url": "assets/js/133.d85d27f0.js",
    "revision": "ccec0f035e739cccd2b6e1012a0ebc8d"
  },
  {
    "url": "assets/js/134.bd53c615.js",
    "revision": "e5577a9841819475e7cc68f1ff3b629f"
  },
  {
    "url": "assets/js/135.71ee7f5d.js",
    "revision": "dfcc86adbac5b977b6434ed27efbaed8"
  },
  {
    "url": "assets/js/136.62459109.js",
    "revision": "e18230c01b0376bdd52dbf3ee3757772"
  },
  {
    "url": "assets/js/137.88dd238d.js",
    "revision": "b6095717dcdd46750c43782d1f59070d"
  },
  {
    "url": "assets/js/138.5aed61a0.js",
    "revision": "66a2fa2890ffc0f35389470dc0fe8cd5"
  },
  {
    "url": "assets/js/139.eb5692be.js",
    "revision": "a2ee2a7067c6775d9b1a61d2b2ab0c43"
  },
  {
    "url": "assets/js/14.325f4f01.js",
    "revision": "dea282867c8560a4e9cd314d32273ca3"
  },
  {
    "url": "assets/js/140.714cb2f3.js",
    "revision": "e3af6b4ce8273e36159a837b5e98a1f8"
  },
  {
    "url": "assets/js/141.2f808f09.js",
    "revision": "9841388938927dba1decd7e212857878"
  },
  {
    "url": "assets/js/142.511e07b3.js",
    "revision": "abcf26c081c141b249ae737695aac6a2"
  },
  {
    "url": "assets/js/143.55c01501.js",
    "revision": "ac34406c7acc4063c8ed816a0d1d01f6"
  },
  {
    "url": "assets/js/144.1c86e66d.js",
    "revision": "f42da3526c156bb82be344a09f393d9a"
  },
  {
    "url": "assets/js/145.7ebbcb08.js",
    "revision": "27e94095c3d667c1e26a115b11fabcb0"
  },
  {
    "url": "assets/js/146.52f3dc34.js",
    "revision": "732e3d9e6860ea3ce8710b6390cd41c1"
  },
  {
    "url": "assets/js/147.65d10d70.js",
    "revision": "cdb764a9ded6983a7a89bed2f7ad8b49"
  },
  {
    "url": "assets/js/148.9ee60cf3.js",
    "revision": "19dc576af378bd60171b840d3ea27de4"
  },
  {
    "url": "assets/js/149.c8e33cd7.js",
    "revision": "aa07bb60661803809a91265fa33a512f"
  },
  {
    "url": "assets/js/15.9e830222.js",
    "revision": "7b073f515bf239619c1819d3d13c8936"
  },
  {
    "url": "assets/js/150.52f9c546.js",
    "revision": "3069b2ca939d8e038193f6133def16e1"
  },
  {
    "url": "assets/js/151.8c821c55.js",
    "revision": "7b12572f0c478123ea899d1939ed68c8"
  },
  {
    "url": "assets/js/152.c3a57649.js",
    "revision": "c1049aba1bc88ff4148babbcd947475b"
  },
  {
    "url": "assets/js/153.98494106.js",
    "revision": "fb72052ad080117d7a6fa8a7e098b164"
  },
  {
    "url": "assets/js/154.b3368824.js",
    "revision": "835a1198de566f4207e0b81cdbb80e2a"
  },
  {
    "url": "assets/js/155.4d95ba5d.js",
    "revision": "4fd75312914f2990fc84158eb36d211a"
  },
  {
    "url": "assets/js/156.da734cd6.js",
    "revision": "b3e5a85f0cc633648d4a0191455a42b5"
  },
  {
    "url": "assets/js/157.e8a39d96.js",
    "revision": "cb55b12a6e5531189f01877692848e73"
  },
  {
    "url": "assets/js/158.c6d1eaf6.js",
    "revision": "64a3218c02cbad9c590f6522f546d31c"
  },
  {
    "url": "assets/js/159.25d6f87a.js",
    "revision": "b5cfb0433373dbdfa01cc84dab311913"
  },
  {
    "url": "assets/js/16.5f35dccd.js",
    "revision": "4cde4d3454a0f3329f87f2aba7ecda3b"
  },
  {
    "url": "assets/js/160.ac85cf25.js",
    "revision": "4ce4598c29b50bb1b0118b46bfaa25d4"
  },
  {
    "url": "assets/js/161.a28b593a.js",
    "revision": "641ed29ecf7ae80258984aac314f4001"
  },
  {
    "url": "assets/js/162.b2aa902b.js",
    "revision": "36dccc60cbe67ec24536724fe94cd0ff"
  },
  {
    "url": "assets/js/163.231ea48c.js",
    "revision": "98abd6b5b0bf145aecea190c14f5f934"
  },
  {
    "url": "assets/js/164.885fb79d.js",
    "revision": "38e456d5a036d2e3119654e0d480152c"
  },
  {
    "url": "assets/js/165.7a557bd2.js",
    "revision": "328c66a67a796d2450b0646f70939c01"
  },
  {
    "url": "assets/js/166.679fe687.js",
    "revision": "db2dc2a90fce419f82383cbbca5ec17e"
  },
  {
    "url": "assets/js/167.173d9a8b.js",
    "revision": "a5e89582cf11b47650c43641b6bde03a"
  },
  {
    "url": "assets/js/168.bd2cd0fd.js",
    "revision": "d19926043f6dc4933daca4ed3857915e"
  },
  {
    "url": "assets/js/169.6d1f0fee.js",
    "revision": "3ad2b975d6e98e9addc04ca2181228dd"
  },
  {
    "url": "assets/js/17.8878effc.js",
    "revision": "4cf053ccfc35b97bd3b3763e0c3a6054"
  },
  {
    "url": "assets/js/170.a413b1a0.js",
    "revision": "01f0b002ea3bbac75faf60c8ddb25635"
  },
  {
    "url": "assets/js/171.7a9c7336.js",
    "revision": "eb5b188b0390da0834c1cbb69b87de7b"
  },
  {
    "url": "assets/js/172.615a547c.js",
    "revision": "45babdccb8350c20e8607346d3dbbea1"
  },
  {
    "url": "assets/js/173.294285ba.js",
    "revision": "b1e393b9403de614b0782c383abc3c7b"
  },
  {
    "url": "assets/js/174.fc76b375.js",
    "revision": "867e1cd48ef89b8844baff6ebc966f38"
  },
  {
    "url": "assets/js/175.7c2d2e83.js",
    "revision": "2bad5593ea8325b2c059e98e18765a50"
  },
  {
    "url": "assets/js/176.91c875e1.js",
    "revision": "5a989797387fceb674055155b3b77c39"
  },
  {
    "url": "assets/js/177.6ef7d5b2.js",
    "revision": "b1007ee8cdc0caf681042406ed31099c"
  },
  {
    "url": "assets/js/178.63416c8d.js",
    "revision": "e1c4827bf5a416e410564841c49ff3ca"
  },
  {
    "url": "assets/js/179.d4f4ea56.js",
    "revision": "2789e2429dc507a3b417adf61848c5a5"
  },
  {
    "url": "assets/js/18.af5cd55e.js",
    "revision": "5cec87a39776d1b504fba388ef97885f"
  },
  {
    "url": "assets/js/180.e3d05ace.js",
    "revision": "c3e3ef48d3178cfb86bc8d46bc526cfa"
  },
  {
    "url": "assets/js/181.45c3d3de.js",
    "revision": "dec40788308f0e60d5d4a55a69310b68"
  },
  {
    "url": "assets/js/182.59058869.js",
    "revision": "21661f937132b3d2916f238330757a3d"
  },
  {
    "url": "assets/js/183.2b928873.js",
    "revision": "fad01f02efc85affbfedd367dc5ae1f2"
  },
  {
    "url": "assets/js/184.2a7104a6.js",
    "revision": "c1ff946fb6b0bc1844b3ff49a4678c02"
  },
  {
    "url": "assets/js/185.de0ef6a6.js",
    "revision": "8cfca235afa38cc0d051ea8191355927"
  },
  {
    "url": "assets/js/186.e7aaa25a.js",
    "revision": "371c85be907275e06ac0c58aa21de4e7"
  },
  {
    "url": "assets/js/187.5ae87001.js",
    "revision": "557bab76d826819f5c3546f14e6e1297"
  },
  {
    "url": "assets/js/188.73fe3206.js",
    "revision": "23f8a47918eee396af84a92610a2b70a"
  },
  {
    "url": "assets/js/189.1c3f0f4e.js",
    "revision": "af3fce16a50eaf5bd5ae740258d3e482"
  },
  {
    "url": "assets/js/19.593ae0f5.js",
    "revision": "46da017babfd966ddef581df787ae862"
  },
  {
    "url": "assets/js/190.8e0fd3cd.js",
    "revision": "ae0be788381cdaf3d12813b998da3798"
  },
  {
    "url": "assets/js/191.075fbe3c.js",
    "revision": "a85652935516c4457958fc10ac5f55b1"
  },
  {
    "url": "assets/js/192.83423785.js",
    "revision": "e6fe17b2d5eefe516f4eddbcb2d41671"
  },
  {
    "url": "assets/js/193.e6950573.js",
    "revision": "c374688dea3864ebab78057c70aadd53"
  },
  {
    "url": "assets/js/194.12aa611f.js",
    "revision": "a7400f69a334234feb7a422394d0c963"
  },
  {
    "url": "assets/js/195.7a19cc8f.js",
    "revision": "41833f50e6c464937ceb06d02d3d71f6"
  },
  {
    "url": "assets/js/196.4bc888ca.js",
    "revision": "4a3916ef412a9218db87f65382434c7f"
  },
  {
    "url": "assets/js/197.afdc698e.js",
    "revision": "79d68741dcdb2710b4918963c7f4efa9"
  },
  {
    "url": "assets/js/198.0fa8db60.js",
    "revision": "4ef9d3bd74b2dc350fa35365ae6144e8"
  },
  {
    "url": "assets/js/199.10cbe9a2.js",
    "revision": "bf26c3f683af1a3799003108eb560a43"
  },
  {
    "url": "assets/js/20.a138384e.js",
    "revision": "6756ba8305f5ea35d920df731da7dc3b"
  },
  {
    "url": "assets/js/200.53f00016.js",
    "revision": "dcfaded2d228ea1e5eef3e20a84415bf"
  },
  {
    "url": "assets/js/201.440bf151.js",
    "revision": "93d699710dd52cf67ed9403ca6cb660b"
  },
  {
    "url": "assets/js/202.5429ba30.js",
    "revision": "52c210c5fe868e62a3dada12535f5bd7"
  },
  {
    "url": "assets/js/203.d8767ed8.js",
    "revision": "d9e4e54236bd767b871b8a3495a909ea"
  },
  {
    "url": "assets/js/204.bf3965e5.js",
    "revision": "142dad5e461c23ea0d6e65b10bdd6107"
  },
  {
    "url": "assets/js/205.d976f3a9.js",
    "revision": "7260a632387f5f350cb6641513e34a64"
  },
  {
    "url": "assets/js/206.c7017521.js",
    "revision": "b9b5a3298f0b08e200f5d089743ab33c"
  },
  {
    "url": "assets/js/207.4646f834.js",
    "revision": "6555b4f2919be759c81cdfde8136c5da"
  },
  {
    "url": "assets/js/208.6489e956.js",
    "revision": "662a7795f4664327ec3565da8d77ed29"
  },
  {
    "url": "assets/js/209.73af8b23.js",
    "revision": "cd0b98a873b844ce276628b665b99398"
  },
  {
    "url": "assets/js/21.5e3fd50e.js",
    "revision": "e7d5bbac2c7b2fe379ce45e59abe2ef8"
  },
  {
    "url": "assets/js/210.e5f368bd.js",
    "revision": "40f3d89202b3e9a715ce75e4a3cbc8de"
  },
  {
    "url": "assets/js/211.3793a34b.js",
    "revision": "70368d92feca44834d53c96cc931d73f"
  },
  {
    "url": "assets/js/212.821ccede.js",
    "revision": "35774714c929bacee8288aadcb139c0e"
  },
  {
    "url": "assets/js/213.7df74ba4.js",
    "revision": "705ed29f0ee605017980feb2b4ea7bf0"
  },
  {
    "url": "assets/js/214.623a8fe7.js",
    "revision": "8b329865408cca1f0d4e0620cd23123e"
  },
  {
    "url": "assets/js/215.0286d967.js",
    "revision": "fe9b92b9676bab95ef7a407dd081b18a"
  },
  {
    "url": "assets/js/216.de6422f5.js",
    "revision": "f66c913656f0d321be9966305b2df98a"
  },
  {
    "url": "assets/js/217.e7f4e0d2.js",
    "revision": "53384a1f068cb2206cba3f1bdcd47c7e"
  },
  {
    "url": "assets/js/218.8dc3b404.js",
    "revision": "111340d35e47ed5777ed963fb16f09d4"
  },
  {
    "url": "assets/js/219.c3755901.js",
    "revision": "ecb27a86d8422a9dda5d81f24d9b6eb8"
  },
  {
    "url": "assets/js/22.ba7f0a23.js",
    "revision": "f3e0b9025d8f34303139e64c8d9ad60a"
  },
  {
    "url": "assets/js/220.cdfe3db8.js",
    "revision": "c72bc4f713a2e67136c68f52fc80f256"
  },
  {
    "url": "assets/js/221.0dc39124.js",
    "revision": "49d618f70ef3a0817d537c91ed49d195"
  },
  {
    "url": "assets/js/222.42625b6a.js",
    "revision": "c477a2dc4fed16ba23db0b3dd0d79470"
  },
  {
    "url": "assets/js/223.9a21ad83.js",
    "revision": "de5c6d7c04ab8da06f16959d5df17ea3"
  },
  {
    "url": "assets/js/224.7430d980.js",
    "revision": "9185595cbbdf37f6ec37098fd83f423e"
  },
  {
    "url": "assets/js/225.a53b6c4f.js",
    "revision": "84e370439355697c1e8de2dc54571232"
  },
  {
    "url": "assets/js/226.73b5da94.js",
    "revision": "868ca50903e79c7e079d7b8a1b49543b"
  },
  {
    "url": "assets/js/227.21b8965f.js",
    "revision": "4b7f479c706a3b9aa74e99436db0b0a0"
  },
  {
    "url": "assets/js/228.bd80f2e3.js",
    "revision": "2e6fd0c4bcc9c9d864f24668ffd484f0"
  },
  {
    "url": "assets/js/229.5612c2bc.js",
    "revision": "c62bb654cd24c5683c96f20203723a3b"
  },
  {
    "url": "assets/js/23.7b25db18.js",
    "revision": "26efbd4e1d0c8ed80f391b83acdbc11d"
  },
  {
    "url": "assets/js/230.e8e336e8.js",
    "revision": "d1686bb1c005e36bb75708f9bf88518a"
  },
  {
    "url": "assets/js/231.d2d4faaa.js",
    "revision": "5819decc5206da7e9a98bb7b381738a5"
  },
  {
    "url": "assets/js/232.7e0941e1.js",
    "revision": "186cbd2c214f34daf42ed30c44f36c55"
  },
  {
    "url": "assets/js/233.d160de52.js",
    "revision": "64f19a7d8a33d24afcdf595ad2b9ec42"
  },
  {
    "url": "assets/js/234.aee1b0ad.js",
    "revision": "9b7fd7d4743e694e472ee0927672bdcc"
  },
  {
    "url": "assets/js/235.848a94f5.js",
    "revision": "14b53210f014bffea3fdb6de2a9219ef"
  },
  {
    "url": "assets/js/236.176be72f.js",
    "revision": "c0555f71b6c8e6beadc637a19fa922b8"
  },
  {
    "url": "assets/js/237.606338e9.js",
    "revision": "0e627f488cf89d12ff82e2fa19b4705b"
  },
  {
    "url": "assets/js/238.23a8da2d.js",
    "revision": "a711d27d706676fe499884039aaa3222"
  },
  {
    "url": "assets/js/239.a5a29a0f.js",
    "revision": "3203ed3b509cba2d29fd6a408099d413"
  },
  {
    "url": "assets/js/24.3923a878.js",
    "revision": "e817194f1dca8e3902af19c82334f58a"
  },
  {
    "url": "assets/js/240.c49625e6.js",
    "revision": "7a65ffa087febdff65737550230def42"
  },
  {
    "url": "assets/js/241.7a6e5422.js",
    "revision": "43389e2d2db297d212655d4a38cb9789"
  },
  {
    "url": "assets/js/242.9aeaa35b.js",
    "revision": "795114bb440927c1919e699313c91d5f"
  },
  {
    "url": "assets/js/243.5e8b1c03.js",
    "revision": "895185d801dbc991626edf917624c8ed"
  },
  {
    "url": "assets/js/244.11f541de.js",
    "revision": "864e29151b6e46267c97248a97fba8c1"
  },
  {
    "url": "assets/js/245.af2f0b1b.js",
    "revision": "34a35df9a5339f721771b2c2bec3deb0"
  },
  {
    "url": "assets/js/246.cac49568.js",
    "revision": "ddde8e6d93ce09098c4b4201f9f488ff"
  },
  {
    "url": "assets/js/247.19454102.js",
    "revision": "bcd80c6427eadc479e63393356984ea7"
  },
  {
    "url": "assets/js/248.7b58c15c.js",
    "revision": "5853c98f24ebe17eac58d3d831ccb9c0"
  },
  {
    "url": "assets/js/249.87f9eae5.js",
    "revision": "40365423ff0cb79ff69b985d7beb1caa"
  },
  {
    "url": "assets/js/25.3a923da7.js",
    "revision": "72400cd8a24ab381c43df1cff26f3adb"
  },
  {
    "url": "assets/js/250.09469879.js",
    "revision": "ac7b3c16b5fd383064aea04b300a35fc"
  },
  {
    "url": "assets/js/251.b825da56.js",
    "revision": "fa18cdf63d82f0bb38f0e46a34d125c3"
  },
  {
    "url": "assets/js/252.42e94bea.js",
    "revision": "278bd73491b18dee033db15ce7c4f70f"
  },
  {
    "url": "assets/js/253.cc7f2276.js",
    "revision": "c96d0b935c9d9fd7f3c29d862d63c0e1"
  },
  {
    "url": "assets/js/254.bbecb9c0.js",
    "revision": "687e4b87395d60e6342ae5dfee5a8e76"
  },
  {
    "url": "assets/js/26.5d7149ec.js",
    "revision": "76cedce9e33f930d2733e3678e9790ec"
  },
  {
    "url": "assets/js/27.e93041ff.js",
    "revision": "d29b8772b99618a47081ff971c321e8d"
  },
  {
    "url": "assets/js/28.c3c213c2.js",
    "revision": "506b57e2fdf05c99be4e600f62aaf3c8"
  },
  {
    "url": "assets/js/29.2f2d8337.js",
    "revision": "5f02f74f5fdebff973e674a646d7a911"
  },
  {
    "url": "assets/js/3.7ba9eac3.js",
    "revision": "8007e7a41cac641f9528c23d2880a3ab"
  },
  {
    "url": "assets/js/30.3e327230.js",
    "revision": "661fd540e7722cc8c9d697c2df67f5e7"
  },
  {
    "url": "assets/js/31.ff56f3b9.js",
    "revision": "cc88bb4247bedbd074ec0824e839edba"
  },
  {
    "url": "assets/js/32.dd050e0a.js",
    "revision": "6f51005ec8451e24d63ec67022442ed7"
  },
  {
    "url": "assets/js/33.97533646.js",
    "revision": "890cd26a357579bd44af14897613be9d"
  },
  {
    "url": "assets/js/34.f25733f0.js",
    "revision": "fa3f570d8c39f9e543d5d040bf8cf786"
  },
  {
    "url": "assets/js/35.6d1d11d4.js",
    "revision": "55d433512d75a49cafdfdf118f76a86b"
  },
  {
    "url": "assets/js/36.b682d90e.js",
    "revision": "b014d3f8d758bdfbfc8be6b6eb8b8359"
  },
  {
    "url": "assets/js/37.ac93ecb8.js",
    "revision": "ab80e662d2ecdddc74f5e5af22076eff"
  },
  {
    "url": "assets/js/38.8aa0c61c.js",
    "revision": "014c369d42cf24b562565e3b4810cfab"
  },
  {
    "url": "assets/js/39.7324b78f.js",
    "revision": "316cb5f2e1688e76516a3485ee02eab9"
  },
  {
    "url": "assets/js/4.853e2326.js",
    "revision": "add98b20936a6e24a96dad711817f86b"
  },
  {
    "url": "assets/js/40.e0074a29.js",
    "revision": "9dbd7fc7dc11ef1d20ed802184b4f499"
  },
  {
    "url": "assets/js/41.32df4bd6.js",
    "revision": "b4aa6927c75306356bd34cb225b9bf0f"
  },
  {
    "url": "assets/js/42.90c2395b.js",
    "revision": "aa41a22c3cc468cf5e1533ca4f6b1048"
  },
  {
    "url": "assets/js/43.2ecc5937.js",
    "revision": "2fa282ce5d7e793494d1ed722d1248be"
  },
  {
    "url": "assets/js/44.80458dd1.js",
    "revision": "16dda23f060a4fe436b43d580838e7fb"
  },
  {
    "url": "assets/js/45.8107bf53.js",
    "revision": "9d34670c5394df9108ae8ec8b18a09ab"
  },
  {
    "url": "assets/js/46.54ca5c31.js",
    "revision": "a7a45ea5b1cf6246d86783437a521953"
  },
  {
    "url": "assets/js/47.97a12178.js",
    "revision": "38420d9e44fd7acc4ac11ae0e50748ca"
  },
  {
    "url": "assets/js/48.f3b7d45b.js",
    "revision": "80022127ed3c1f9e2f9d0812670deaaf"
  },
  {
    "url": "assets/js/49.d3007828.js",
    "revision": "136dd7481b0f5b2b706356205d429b08"
  },
  {
    "url": "assets/js/5.d89542f3.js",
    "revision": "1b3e8099b24ec92895f05dfbe662a109"
  },
  {
    "url": "assets/js/50.4b97994d.js",
    "revision": "1d2bf2e7bac07844fb5489ab6e426252"
  },
  {
    "url": "assets/js/51.6377d72c.js",
    "revision": "45064852943720379c26422319bc6e1d"
  },
  {
    "url": "assets/js/52.f940e8d7.js",
    "revision": "96bcaacd97d5f084a4334a974c1791dd"
  },
  {
    "url": "assets/js/53.ea3465cd.js",
    "revision": "502b17ce608186b0dfa49a37b6a9a35f"
  },
  {
    "url": "assets/js/54.bbbc1f72.js",
    "revision": "81b10ce919267c50e31e048dafea3284"
  },
  {
    "url": "assets/js/55.70c6d683.js",
    "revision": "fd9734ae2f556e0738e2ec60d22eb376"
  },
  {
    "url": "assets/js/56.44f958ef.js",
    "revision": "9f0727d8c5086834bff1e91aba2e522c"
  },
  {
    "url": "assets/js/57.5ae99df0.js",
    "revision": "6eb3550517d1e795859b550e8ce7d7c1"
  },
  {
    "url": "assets/js/58.4dc1abe5.js",
    "revision": "be7f939c3c0606cfe417f3b5470b31b4"
  },
  {
    "url": "assets/js/59.c4f7d992.js",
    "revision": "46fdbddc89061d5ec797221994639d6b"
  },
  {
    "url": "assets/js/6.aeed5f1e.js",
    "revision": "3b0c85384ca12bb48e68a5d1fbd112ee"
  },
  {
    "url": "assets/js/60.51fa86b2.js",
    "revision": "f4e1d93caf6f4b72c9ae2cffcc4fbe1f"
  },
  {
    "url": "assets/js/61.a3792d70.js",
    "revision": "c9781929b80407096c4a5df1d2fe98d6"
  },
  {
    "url": "assets/js/62.e007b5b6.js",
    "revision": "ea9a1ff77a45a5e9aac89e11b413adf8"
  },
  {
    "url": "assets/js/63.08c8033b.js",
    "revision": "db15538bd4d5bd935642e500130ea650"
  },
  {
    "url": "assets/js/64.72757e87.js",
    "revision": "d055bf415380bf47ff6a2701f015df4a"
  },
  {
    "url": "assets/js/65.ed5b194b.js",
    "revision": "92bc121b6925606e6f4e7a747d91bf33"
  },
  {
    "url": "assets/js/66.c9d3a9d4.js",
    "revision": "49d3fc5c8b6e9e4158db080e4bf68d73"
  },
  {
    "url": "assets/js/67.b38f230d.js",
    "revision": "c53b5989b646be6969802c8b7884eb59"
  },
  {
    "url": "assets/js/68.edd3db1a.js",
    "revision": "50eaf3823466426678baea3f2cb1144b"
  },
  {
    "url": "assets/js/69.cadaaa7c.js",
    "revision": "fc193124278b7ca63a4f7632d4fc299d"
  },
  {
    "url": "assets/js/7.e87e6363.js",
    "revision": "67ee2a9de26b9f98a49eb3417e691429"
  },
  {
    "url": "assets/js/70.845c8eee.js",
    "revision": "57194f0d1c7368537f8a46bae6b198af"
  },
  {
    "url": "assets/js/71.72d60eaa.js",
    "revision": "32fb643d8e4aef1e29e57b16a187ee2a"
  },
  {
    "url": "assets/js/72.85da19d6.js",
    "revision": "c70002d97e7bf85cac345c073c2f70e5"
  },
  {
    "url": "assets/js/73.217d6f7a.js",
    "revision": "49793388706d3c0cb26c442271ad3974"
  },
  {
    "url": "assets/js/74.f12ec564.js",
    "revision": "f02028872e11b16c783519c1d8e80320"
  },
  {
    "url": "assets/js/75.0d22cc7d.js",
    "revision": "6e9d8fc03ebfdbf201c00783c8619402"
  },
  {
    "url": "assets/js/76.3f32017a.js",
    "revision": "20f63fd8e9f7087e644bec1fc0ddc4b3"
  },
  {
    "url": "assets/js/77.5e542cf8.js",
    "revision": "7822b925d054a5c82e18958c60f36b78"
  },
  {
    "url": "assets/js/78.1c69bad1.js",
    "revision": "e0547554183d76674a84c3b0a43bcdfa"
  },
  {
    "url": "assets/js/79.4160b673.js",
    "revision": "721e6767a49e6e8fb006905446166cdd"
  },
  {
    "url": "assets/js/8.8501d3c4.js",
    "revision": "8a5f9cfa8a31616af88a01559c0ab189"
  },
  {
    "url": "assets/js/80.2574bf61.js",
    "revision": "a78e56140b0478f90389454ce5eedcfd"
  },
  {
    "url": "assets/js/81.5991cbb1.js",
    "revision": "ce558e1471199f5330542be4d353a49c"
  },
  {
    "url": "assets/js/82.5ed451cd.js",
    "revision": "33fa1c2b56d4e7be80e5d62fd73f8fa5"
  },
  {
    "url": "assets/js/83.213bf440.js",
    "revision": "c986045951259f5eea789eff2b796f25"
  },
  {
    "url": "assets/js/84.338c5210.js",
    "revision": "b69d7884358db727e315983e8f47cae2"
  },
  {
    "url": "assets/js/85.cdd966ae.js",
    "revision": "95abf9bbff07cc48d37266ae3aa4c5b3"
  },
  {
    "url": "assets/js/86.769bdb1e.js",
    "revision": "546fe8d2b25ae8445ed7ae2c2ff86e70"
  },
  {
    "url": "assets/js/87.95f7debc.js",
    "revision": "6db18f067e021b979e664aa3a3f34563"
  },
  {
    "url": "assets/js/88.64b396d3.js",
    "revision": "9d4bd71e872edf999c46faa3ed3385d4"
  },
  {
    "url": "assets/js/89.0df16349.js",
    "revision": "b022ac4af223a7dc4d3e2a46b48afc7c"
  },
  {
    "url": "assets/js/9.4e82f882.js",
    "revision": "c4976deaebf0222ac21c5c6a9be0b671"
  },
  {
    "url": "assets/js/90.e9cb1d5e.js",
    "revision": "1677eaa3d9321bbd8c9ac74c9f362e29"
  },
  {
    "url": "assets/js/91.d145dfc3.js",
    "revision": "f234556ac22026bb4a35dbf643da204d"
  },
  {
    "url": "assets/js/92.55830123.js",
    "revision": "40da273ec49f7be4a6d185189a45b2d0"
  },
  {
    "url": "assets/js/93.8c3853f2.js",
    "revision": "38a3de5369166b834db4e75741d0e97c"
  },
  {
    "url": "assets/js/94.f95d8c66.js",
    "revision": "03d1d573d8e68aa15b7bef6c64521fae"
  },
  {
    "url": "assets/js/95.6f35984b.js",
    "revision": "c7f919b08c79941e5fcf443eef9f797d"
  },
  {
    "url": "assets/js/96.6501e36f.js",
    "revision": "0a8936be34658b408a8078f2ff099b14"
  },
  {
    "url": "assets/js/97.ff3145a3.js",
    "revision": "87ddc5166b58133d434ab2edc97e5f3d"
  },
  {
    "url": "assets/js/98.4b371080.js",
    "revision": "7dacf516bafc983a45836855dec76b4b"
  },
  {
    "url": "assets/js/99.72eb5401.js",
    "revision": "858fc192b505bc974a0708f84926568c"
  },
  {
    "url": "assets/js/app.25c8695f.js",
    "revision": "ebf9078635f1c2aafd41f1a456716b42"
  },
  {
    "url": "categories/index.html",
    "revision": "411d6dd37fb9a954178600d45ea73044"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "b1ade2320612da60133fc65c7fec8079"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "65c99907a72805cea2501672ac8ce4cc"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "e97c63c79deaafce69fec9799e517d51"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "c5f8e769be08e7e2c4be3942b8166b81"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "320c58e6e99346e5c76bfed19aadeb7c"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "3aeb6b7055a15f58d46c621bb43a299e"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "ffbb517b7bac4718026c233a545ce50c"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "ee429eac8449f9dad7b52bcfc59572df"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "a8f57e56a2fa59b2171e77edff0acf27"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "65c99907a72805cea2501672ac8ce4cc"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "4e6e60996ffe0f3ffb680b6ba13243ab"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "5765328363fd2ef8b4d496cf12548084"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "8296ad9c573a6c770cfb57d0f0a3be0b"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "7f2d904b17dfb6e7b91ce0ea9dd9bf38"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "6537a563aedeb54a75b25e4afbfbc1e9"
  },
  {
    "url": "cs/database/index.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "4d79cd409aca3c844bd3a30e21815199"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "8352d849a82cb639a1bd131ec9f70dac"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "aa5517d2d3c33776b873a01909dd642d"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "fd27dfee88e537853a4f173047ad3fd3"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "3be5c89f053bceefef5a575697226d3f"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "be16988320a86dd7a0ca15961a8d4984"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "2ce9e1a434c4f6a94c52c387219b3b39"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "20fbfec487251e56d350f10d2f8ec41f"
  },
  {
    "url": "cs/design/command.html",
    "revision": "62edf332ed9add33109cab6ea1c7de70"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "902b25948aecf16601ea14efc75eca47"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "caaf3a6bb1224f4411558ba73f244454"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "5390999f42b1fb3cd856ae6725639ad0"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "23efa5b02aeba550c41b0285ab9bb2ff"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "b6d2ff87289dcad633a767755f7d16e2"
  },
  {
    "url": "cs/design/index.html",
    "revision": "b3cdf4b221c575422739b7ae37ac06c0"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "504da027adf560bdc3ab9eaf4d5fbff3"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "b32da6198ba5d5a4e10bcbfa0500fbd7"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "a467cc716c8478026a7d8b8441bf46e8"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "f625c7b36532f05a2af39cff4044ff90"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "9490407587f57627e976b68134b4b99c"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "db7f6319b2edb48f418934924e9ee598"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "e2e3d5476aabc9f0c68534936e3b787d"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "1cdde69c5de1bfeba5093bed5d62f547"
  },
  {
    "url": "cs/design/state.html",
    "revision": "3c1470e9d5fab64d1e68fb434d60b138"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "45d6a792ecbc451751eb6ba33716f552"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "5657c11f34fc6a9be8ee2ef3a814bfa4"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "b929c66c541c0a73528b4b2fd429e8fb"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "926321e36f547c974c0af8e56826fbb4"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "96c02e02b121198b139439376e953fa7"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "68976dc3c0b6565283ed1a6375a99e38"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "cf4171ab6673c4a748e4a273517535e7"
  },
  {
    "url": "cs/framework/vue3-design.html",
    "revision": "d5737f552cf62501a69450bfd59bf70a"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "300fcc9fac5bb6ca62999173e56617a3"
  },
  {
    "url": "cs/index.html",
    "revision": "2297c0b51151a75845b5b9750df4e1cf"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/java/container.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/java/index.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "57b593b1702be344268a86d30a7af2f6"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "f358e1945a025e19a538721c3b14b915"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "cd29845a1263713c046069b9d23646bc"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "dba0069281ce39f6a10a34f1d57e193c"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "0a50ae9b9b48de40479df8312333919d"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "70c60ac594b870b7ebbdc6ddac04ea64"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "03e04cdbe28cbebe31aa22e0f4d60524"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "7a6fc4116e9a0f5afbe6d77a64b05433"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "113d9021f6d479de4a7afc9d772ad9bb"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "0191483568556e1fd9d76c8f9a970e22"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "ea12197c1a024a94b4bbc6b29cd14da5"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "a9f66887fb8ea7e98d967186be58cafc"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "b77b377c5fb2e0075fe80dc8f0cb6432"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "dd43df1c09f58b8f23fedaf290dd8ea4"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "cc5fde93dc4c2783dd3bceddf2943b9e"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "7432ce8df4839b80fcd3cd8484712a5e"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "7942e09219ed56bcb19d90041c62c3b3"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "4fe570864f441b320df728e19a1ed98a"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "f22be7646e8456d55995783ac0da398b"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "a359818a0fbf9959ec16cb983a6a288e"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "726aaa161c7b50f771e985b56c37d5cf"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "ff0c2e03b7f3a590e4a59907c7d935a9"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "ef104d3a784276b3a4aae8c912538b95"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "9f0c6ab1685aa6e165a263a99b7dd88b"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "4c9f8408eb6105a156b1930aeda5b987"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "55837d961f544c88331b6b296114011c"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "45151e03db79b7327b19706ff360238f"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "e666be87e185e33699cd3416aac84030"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "6fc00814dccca2a51d1815225dd6b7c9"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "1a3b324eceb8247f661e5a4f15752edf"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "9c78eb6313ec2b946703cc85bbfc5337"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "56148607b84b3253182d52d4883ba7ac"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "685c9f5e74a6feb95173d6cc84c9b1d2"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "3f14fcafc8b4e8c30a79bc44c333fe28"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "a415a7a307a958a62d2850afd86397bc"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "61a3a536ae105d525bfc71ace52479be"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "9340109ca4861410e47777c13cd2079b"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "332b6bd5d0b79d99ca290d4be81943e8"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "1224b50ad5a8979f5f5e617f572c7b12"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "fe07a52b231223b95fadc5d711245367"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "d3fbf3ccd5fed228c388ec31b57b161e"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "061fdfcbd90fdf32664abaeaff2a2cd1"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "ef7316bc96abbc0a51218f678dc41035"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "b9e1d0ac239b3af58dc7bac2db75428f"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "0d007def9d744c4d682d772a83686503"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "5960bf7c254052f9453ce9aff9c12640"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "8d46f78e5cfe33fafd12d9c740002696"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "fbf84631a54de9f115d031200699625b"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "64e1b7a2d807c5b86b13a77649881f55"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "07ac1020bf158fecfe5f6df4b8a3ae7b"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "1c1b64a3b11c54fccaacce5e1b5c60ca"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "0d44e836f87969e505bd549e7b746d0f"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "96ea78514073f642dc19371aa6c37cf0"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "5ea7979f48192cf3d6088856e4574895"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "91431752d995e17b9981fa3a69ac4ea6"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "4bab5dd27ba8ea7bd319e4757d08995c"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "3e5997dee7dbae13e49329232b0be05a"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "70cd8a9b816e580ba92c19f431ab53c5"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "85e1f3dcf3af1f5a7c3daf7f85452919"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "1337c6144a22774f92e0924b3c2c7a00"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "0ff178f08c902a4f84df4c9f3c4ce015"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "75606f4457a75eceae578e943253f0aa"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "2ce02461066736349e7886e5806fc527"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "21acff666d6ff0e30fa1c112f7b2a35e"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "a34b13c6426f6e4efff5cd3c200d7838"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "27c2d7520a4696f3e2c7ad6e28bd97c2"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "5b114dfce4879a07e47abf8e976db554"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "199cf8d098fd855ad5b1406ef733a711"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "b1f80145ac32501a2b7b1b396c4548e4"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "49311a157a74bf7b39caf5c421f37f37"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "c7dc4f7d1f85fc0ce5cceea0ff685096"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "0b60dcfc3e0347df0489899440f702d3"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "0b3092cb3a18c4f5bb50b3120581a919"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "24e8b8569a035bca75c890a8f7724108"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "e68af3b9d8351c6bea4ab62089668856"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "fb9363506aad3f899618a61e604a37af"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "8a8ba49746f843c325956f1bd2951ded"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "11127b8143d4baeceed0d12a5af5f3c4"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "1f0f74d8a0069cc71968a8d3ae3b9735"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "ae95975c1c2506bf170b72896a02e2f3"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "c73779739dde2704b84d1ba8351fed39"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "9ced15a3ccafbd7cc622040edfd21f48"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "1ac0cdd557ce4889b2b86456bcfd086b"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "dbcb54e127bf0b870ebd722de369079f"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "b9e1d0ac239b3af58dc7bac2db75428f"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "f74d7235490a46c32b559d036693b799"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "b05f56eb7b49f3575664a900259e3f82"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "65c99907a72805cea2501672ac8ce4cc"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "3a26f9b3bc2eed903620208b88d9b9aa"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "0a725f5eb9cd00d322be7be0e44b872f"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "96d59fd43b70074882da660887e2e2b6"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "21378587275c60c18dc1c84dccee9122"
  },
  {
    "url": "cs/network/application.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "ade5eceaf8e6690823740acd06896e94"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/network/index.html",
    "revision": "65c99907a72805cea2501672ac8ce4cc"
  },
  {
    "url": "cs/network/link.html",
    "revision": "dd1dd48701298319f7dc0fdd98a89412"
  },
  {
    "url": "cs/network/network.html",
    "revision": "f8eb43e5492ab36480cde14dc52e8d29"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "bbd839567c58fcc01e9f20ae518ea778"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "f5e3fed40c6230aee8edbb91f38bafcd"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "109a72236c3b9d42e21e2599d0a9aeea"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "fc32d892b22c44a710f4b2446f9aee4d"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "1f495b6b95af668a23647f1bc0bae68a"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "65c99907a72805cea2501672ac8ce4cc"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "3ed4b1f6a0af730e61b8e7c22f594a4c"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "db39b16902961670d04ad3f97fd18599"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "3dfb6f72dd349fe8825073067987fb49"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "f86c9517ecf6a45eae11f1ec4463668d"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "57b593b1702be344268a86d30a7af2f6"
  },
  {
    "url": "cs/web/index.html",
    "revision": "37f523bab0c9faebaad819d97a7847b0"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "ef6fc7d7dca4f17f78623d9af1f1fc21"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "c77949ba6766c47b633a027a27a7ca8c"
  },
  {
    "url": "cs/web/web.html",
    "revision": "242b9b95220cfbfc28982ac3f7d0ae08"
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
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "fd04359c00b7ee685eb35bc03e3fd6d6"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "58ba9d81611ad7cb0e75843f263fae9d"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "404b2be701c482cf2943bf93cf00ab85"
  },
  {
    "url": "language/english/differ.html",
    "revision": "26bcfb5909707bde31f50753ca9fb7e2"
  },
  {
    "url": "language/english/index.html",
    "revision": "f358e1945a025e19a538721c3b14b915"
  },
  {
    "url": "language/english/modal.html",
    "revision": "2b063053c4bdcf2ceae2587e26ef74f2"
  },
  {
    "url": "language/english/mood.html",
    "revision": "bd30c3eb9f0703ee837e161d7bfa009e"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "0ea8dec31724335a72d80eb878d30943"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "a2116b2dfc6af176dc32532549946ee4"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "8788bc1b451346ee79ff93221c33e51c"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "ea96babfb3fea7b34489b619743bba6f"
  },
  {
    "url": "language/english/tense.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "language/english/verb.html",
    "revision": "23ccdd5bf886f8852365d3c08821dca6"
  },
  {
    "url": "language/index.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "tag/index.html",
    "revision": "5b525316e2c0add4f0b840ad263c00e3"
  },
  {
    "url": "timeline/index.html",
    "revision": "7e6498bd2d66c4197f13e0f2a3da353a"
  },
  {
    "url": "tools/hash.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
  },
  {
    "url": "tools/index.html",
    "revision": "5b6d82910552e7efd7187ee9f65081b3"
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
