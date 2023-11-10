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
    "revision": "abda38799d65d237457968d57883da36"
  },
  {
    "url": "assets/css/0.styles.d1853dda.css",
    "revision": "47c3023d625e6839d984e8b920253fc7"
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
    "url": "assets/js/1.cb54a108.js",
    "revision": "41ec6c7026b76664917a3db87dfadf1a"
  },
  {
    "url": "assets/js/10.4439ab47.js",
    "revision": "1aab67452383229903d6f379a9d11eb6"
  },
  {
    "url": "assets/js/100.7d69f454.js",
    "revision": "a1d2646f30978ac7b7d1a52673f61367"
  },
  {
    "url": "assets/js/101.b05556e4.js",
    "revision": "4fd1bd3984fe420fc252860210914064"
  },
  {
    "url": "assets/js/102.de3fe7aa.js",
    "revision": "e21cafc25c84f0c33dafeceb21ef3585"
  },
  {
    "url": "assets/js/103.dae54588.js",
    "revision": "3c0b58b7e1afad6c679b648926936475"
  },
  {
    "url": "assets/js/104.29bcb7cf.js",
    "revision": "684c9edd06f94df331b70451165236dc"
  },
  {
    "url": "assets/js/105.00c8858d.js",
    "revision": "717f83d4aca97fa4758708991d185666"
  },
  {
    "url": "assets/js/106.f78d5fe5.js",
    "revision": "85782704a732cfe02086ed243502957c"
  },
  {
    "url": "assets/js/107.1425c89f.js",
    "revision": "ce8ba676d7903fa2e28eb97655d2c3ff"
  },
  {
    "url": "assets/js/108.1a532dbc.js",
    "revision": "403533dd13aaec48e13aee5f9b3f4d8e"
  },
  {
    "url": "assets/js/109.ccb47800.js",
    "revision": "d80d075b1cad2cfbcc984ab608adc42d"
  },
  {
    "url": "assets/js/11.5bbe5535.js",
    "revision": "92e9121a37ad4e00f7354d1f2a3f5774"
  },
  {
    "url": "assets/js/110.a19509e4.js",
    "revision": "0144f2a1dd38e0cc34d5f2cd4698871b"
  },
  {
    "url": "assets/js/111.2af75f65.js",
    "revision": "5312c0c9e0372bf29e6f6fa18cae120b"
  },
  {
    "url": "assets/js/112.ac0bd7bb.js",
    "revision": "9c4f57e0b1dc1961f53a419d7b8b2a6c"
  },
  {
    "url": "assets/js/113.ef718812.js",
    "revision": "972c52b80f44461106a0ce9c0090f740"
  },
  {
    "url": "assets/js/114.edf381bf.js",
    "revision": "98837e608a0aa54e62f368dbbbda87fe"
  },
  {
    "url": "assets/js/115.7088d3db.js",
    "revision": "8beef95ee953469c30d7126315f8ae41"
  },
  {
    "url": "assets/js/116.49b73473.js",
    "revision": "e8a406634ea69989eb132bfff45dacbd"
  },
  {
    "url": "assets/js/117.d6d617b5.js",
    "revision": "58126a913349b7fb8d48775e8f8a3725"
  },
  {
    "url": "assets/js/118.c98bf3d4.js",
    "revision": "5bffabf83e7072e320ebb62156437d0f"
  },
  {
    "url": "assets/js/119.6f541719.js",
    "revision": "26b8b55ab894c522b3745fe37fefd360"
  },
  {
    "url": "assets/js/12.511c22ce.js",
    "revision": "8e6906704c18aca1cc936fe4f3ce2f5f"
  },
  {
    "url": "assets/js/120.ab16a919.js",
    "revision": "4b8c218125228cb17123078e6cddf669"
  },
  {
    "url": "assets/js/121.890948da.js",
    "revision": "bf369a491af84d5d2a8e087982ce1d72"
  },
  {
    "url": "assets/js/122.d70e1d28.js",
    "revision": "4d44a74de67d2718c014e1b6147191ca"
  },
  {
    "url": "assets/js/123.6eba3696.js",
    "revision": "52519e0c19b3686a2902cc4e19017d30"
  },
  {
    "url": "assets/js/124.69c2ccc2.js",
    "revision": "4341485ece6dca80fb7879efd35611c2"
  },
  {
    "url": "assets/js/125.2a818b6a.js",
    "revision": "3ae7120c3e5c2f505dc159622a25c9d6"
  },
  {
    "url": "assets/js/126.a3184052.js",
    "revision": "2a20eb5fdb49ba47946e09709f63e0fc"
  },
  {
    "url": "assets/js/127.02f96c09.js",
    "revision": "539c7ea02f5bea127210a79c92f0f452"
  },
  {
    "url": "assets/js/128.cfd73d2b.js",
    "revision": "2ca29bc65336aea4c93fc1fcd4dde35e"
  },
  {
    "url": "assets/js/129.5c564121.js",
    "revision": "b96688ab7e6d7a059bee4e99db40a7a6"
  },
  {
    "url": "assets/js/13.8d4f5cf2.js",
    "revision": "8a420768fe0aadf4ef7e010f14f805af"
  },
  {
    "url": "assets/js/130.f3e6ed01.js",
    "revision": "1d3abcefaf4353b1eacc09b370074fcb"
  },
  {
    "url": "assets/js/131.fe0a05a5.js",
    "revision": "4e5faf4329b4e34b1442bdf620f8d650"
  },
  {
    "url": "assets/js/132.73fca395.js",
    "revision": "268e9b1a795b5535602f34e7ef9d6179"
  },
  {
    "url": "assets/js/133.eee127c7.js",
    "revision": "4e207cbb8c44be725eb2ecefc443c963"
  },
  {
    "url": "assets/js/134.a54b11e9.js",
    "revision": "1a753d8bb0ec30418deff6fd3247c372"
  },
  {
    "url": "assets/js/135.4dc235d5.js",
    "revision": "f4b63f55a3c002803afbf2c7d2c2d5c3"
  },
  {
    "url": "assets/js/136.8c45b066.js",
    "revision": "006c8beeeb5df0d5ff7255de3e12b832"
  },
  {
    "url": "assets/js/137.e0da1137.js",
    "revision": "e159bb584f2e54226b69bac8e5786739"
  },
  {
    "url": "assets/js/138.04444aef.js",
    "revision": "97baa54a11374f472a30053327e73b3a"
  },
  {
    "url": "assets/js/139.f7b1fe1d.js",
    "revision": "cae1906998cc634bb1b888896b07df87"
  },
  {
    "url": "assets/js/14.2b0bf86c.js",
    "revision": "85844da1cdfbd2e5f730af9023ce8b5f"
  },
  {
    "url": "assets/js/140.4c7e7085.js",
    "revision": "d8ba8a37e5e68817a931cce916a8a029"
  },
  {
    "url": "assets/js/141.9712935a.js",
    "revision": "4bf1c1231aa0db344e5d2e9080dd9ca5"
  },
  {
    "url": "assets/js/142.cfd3cc3e.js",
    "revision": "9a51b6d519a5e74f2018148064f0de33"
  },
  {
    "url": "assets/js/143.8110b638.js",
    "revision": "96ff23bc05f0d8cb9f2f907c6472dd5c"
  },
  {
    "url": "assets/js/144.6f24b184.js",
    "revision": "75bbfa4db926fce1a63e20d135355c20"
  },
  {
    "url": "assets/js/145.fb70042b.js",
    "revision": "4ddf0d8de0741e2fd4f7ba97f1336596"
  },
  {
    "url": "assets/js/146.b6d33ac5.js",
    "revision": "28161d05b1e6503f0b8f0c85b423f053"
  },
  {
    "url": "assets/js/147.f24f28e7.js",
    "revision": "14697f9a724e446abee57eda7307b471"
  },
  {
    "url": "assets/js/148.73b36f92.js",
    "revision": "c674ce7e0f83376fdcbdbf9e95e0a2ba"
  },
  {
    "url": "assets/js/149.b31aa3a8.js",
    "revision": "49561a20e86a3b8b5dfcf648b346dda1"
  },
  {
    "url": "assets/js/15.e95ccbc1.js",
    "revision": "13964e336a12c45a4554dca1571e9672"
  },
  {
    "url": "assets/js/150.6027663f.js",
    "revision": "6134a81672b062edd68af8f943eeb6ec"
  },
  {
    "url": "assets/js/151.a6da23b9.js",
    "revision": "4928e19238168a9596de0e06dc1d9495"
  },
  {
    "url": "assets/js/152.4451bc04.js",
    "revision": "a4106494d36180cc329571f2678b4238"
  },
  {
    "url": "assets/js/153.ad9c0220.js",
    "revision": "ba7489605905ac71d062d643354933db"
  },
  {
    "url": "assets/js/154.8a55e946.js",
    "revision": "26d1bdf3d977531315ea0c5790237817"
  },
  {
    "url": "assets/js/155.a3afaebb.js",
    "revision": "5ba7b5160cf17702fb8d26d2d779638d"
  },
  {
    "url": "assets/js/156.6dafbda0.js",
    "revision": "2da3769e4dd31de313d07e8a306d909c"
  },
  {
    "url": "assets/js/157.1f811c00.js",
    "revision": "8fdd41ef4b7bdaa6be53b173eb88435d"
  },
  {
    "url": "assets/js/158.00031c74.js",
    "revision": "fcfcfa9db82f0cd37bd104be3c952db7"
  },
  {
    "url": "assets/js/159.1ce9de4e.js",
    "revision": "0de74938ca3ecb232b373235a86d7d1d"
  },
  {
    "url": "assets/js/16.971d9b5e.js",
    "revision": "5e9686715270453fa04435215cf5c7f0"
  },
  {
    "url": "assets/js/160.d64aa81e.js",
    "revision": "51c1481a94cc17a2fa9f4f27cc5783b2"
  },
  {
    "url": "assets/js/161.03f0e384.js",
    "revision": "7d5a735552b52136ae78436c89edb360"
  },
  {
    "url": "assets/js/162.f87780d1.js",
    "revision": "57ad91b8b1e0137ade399ac40e112c9b"
  },
  {
    "url": "assets/js/163.dd039e7d.js",
    "revision": "cd1cf559c9cc315bc3371bd2ddd6ddbf"
  },
  {
    "url": "assets/js/164.a9f7e403.js",
    "revision": "3b22e73a4e5f90b2e20d4749c29226d5"
  },
  {
    "url": "assets/js/165.62d9b402.js",
    "revision": "03152942b3c8ade5d524adcf7c5e3b5d"
  },
  {
    "url": "assets/js/166.9c4caa24.js",
    "revision": "ad6684451f46b7fd9776c66d3bc6db24"
  },
  {
    "url": "assets/js/167.44573d62.js",
    "revision": "77ba91513bdb3a908724a6bcbbdc558b"
  },
  {
    "url": "assets/js/168.a0517d1c.js",
    "revision": "a6f995dc4d59dd3db54fb54dd8edea67"
  },
  {
    "url": "assets/js/169.64630909.js",
    "revision": "5f754ffce9da4e7d903ada8e86923b02"
  },
  {
    "url": "assets/js/17.346ed904.js",
    "revision": "deaddd02f8b50b5189c21e482a9f5070"
  },
  {
    "url": "assets/js/170.540e6ec2.js",
    "revision": "d6fa6150f66f55edb7149029232120cd"
  },
  {
    "url": "assets/js/171.f63a8af9.js",
    "revision": "977a1a6eb145f7411c12b71aabfa778d"
  },
  {
    "url": "assets/js/172.e852ce6c.js",
    "revision": "3cdf93521ab1509a7c95a712600e4ae6"
  },
  {
    "url": "assets/js/173.093af823.js",
    "revision": "fea0de03e584f0e5d7a1bccf20f568bf"
  },
  {
    "url": "assets/js/174.e48d7fcb.js",
    "revision": "715a83e836ce5c675fc9de03e4656de0"
  },
  {
    "url": "assets/js/175.cac592c2.js",
    "revision": "26f08d505d423cfdb0db34e5b903a4b2"
  },
  {
    "url": "assets/js/176.e763e44d.js",
    "revision": "02b532cc655bd2128a267bcb69ea2b18"
  },
  {
    "url": "assets/js/177.09cf41c6.js",
    "revision": "72df72a3b4a7db9779fc3593f5ed508f"
  },
  {
    "url": "assets/js/178.81c216ec.js",
    "revision": "41ae3a14aededbd321c27f5db1a0faee"
  },
  {
    "url": "assets/js/179.02d5bc9c.js",
    "revision": "706305800bd8d1acc3574fe1962a26a9"
  },
  {
    "url": "assets/js/18.23ce7753.js",
    "revision": "cfef0152e62cd2b4c7a5a535eb3fbf35"
  },
  {
    "url": "assets/js/180.97c74fdd.js",
    "revision": "d4fce70ac7dc6ea4743f967a0a43f153"
  },
  {
    "url": "assets/js/181.ed709f81.js",
    "revision": "4c58fe5690975bea84d67a5c4fc54365"
  },
  {
    "url": "assets/js/182.cd2404ef.js",
    "revision": "a55c935e943d0a970f4a66c42bc9ca58"
  },
  {
    "url": "assets/js/183.63ac7132.js",
    "revision": "e6cfe28b50e7ffb718ea243f8124d497"
  },
  {
    "url": "assets/js/184.f7e32a93.js",
    "revision": "1f284309fcfaa0206274cdf4d77926ce"
  },
  {
    "url": "assets/js/185.1728b8ee.js",
    "revision": "b9601d6d62e4d13be994f248324a12d3"
  },
  {
    "url": "assets/js/186.117e7448.js",
    "revision": "73c7b21eaadea2981728ef2b24f1fcdb"
  },
  {
    "url": "assets/js/187.ed61d9a3.js",
    "revision": "d97a25b88ae00f7caa5ee0b70735fa2b"
  },
  {
    "url": "assets/js/188.baaa5101.js",
    "revision": "368737375459b418fb6ef0de412c9241"
  },
  {
    "url": "assets/js/189.a0809b62.js",
    "revision": "e05a6dddc59ba323c206150aaceb5485"
  },
  {
    "url": "assets/js/19.2ef6e769.js",
    "revision": "a8d884f569fd52c5cf4edaaab3c09016"
  },
  {
    "url": "assets/js/190.0c878c19.js",
    "revision": "24937ee9a6406abab757f2ced6c5616b"
  },
  {
    "url": "assets/js/191.cca9bba6.js",
    "revision": "11586215f3379e4ce110355878bcc919"
  },
  {
    "url": "assets/js/192.7455b72f.js",
    "revision": "7eecf237a3cde3dafa7ab0d0e05e5c90"
  },
  {
    "url": "assets/js/193.43d849df.js",
    "revision": "fd2dd3d0895ad20cb8d9bd74f53b8910"
  },
  {
    "url": "assets/js/194.84fb0fd0.js",
    "revision": "199c32a7a40083c478efed7fcc6f08cc"
  },
  {
    "url": "assets/js/195.3894a12f.js",
    "revision": "c9d324d9f285870a49cfcfe9fd25e29d"
  },
  {
    "url": "assets/js/196.8dd7496f.js",
    "revision": "7673f5cbb52aca2dc20d4383778cf9da"
  },
  {
    "url": "assets/js/197.5b38719a.js",
    "revision": "07d58d171885265c399d69abfd51ff7b"
  },
  {
    "url": "assets/js/198.98088150.js",
    "revision": "5e035c63fb99b58e48254ae1cd3355d0"
  },
  {
    "url": "assets/js/199.a3023965.js",
    "revision": "0ec02e0201c76e8576db15728602f535"
  },
  {
    "url": "assets/js/2.8c802a48.js",
    "revision": "ddef852228aa5a69222d932dfbccf369"
  },
  {
    "url": "assets/js/20.fb9ffc47.js",
    "revision": "afeb692edb97bd19faddacb15ba5a586"
  },
  {
    "url": "assets/js/200.460b1710.js",
    "revision": "e46bbd29bbf0b281eb0f53aecdcc29eb"
  },
  {
    "url": "assets/js/201.02d12dae.js",
    "revision": "a7ce573369a7f722c53c2eba8b1c0567"
  },
  {
    "url": "assets/js/202.ca90bc4d.js",
    "revision": "6639d84f32d63fb2e9ac0316ebcc8c9d"
  },
  {
    "url": "assets/js/203.29edec84.js",
    "revision": "22631e853d6614ca0688881e0c38eb66"
  },
  {
    "url": "assets/js/204.a34c59f0.js",
    "revision": "440eede416f5b5c2f2617e3f5928485b"
  },
  {
    "url": "assets/js/205.28e54ad3.js",
    "revision": "a200ce96344c64d62a35d9f704fb857b"
  },
  {
    "url": "assets/js/206.86a8fcb6.js",
    "revision": "9cf2ae157514fd4cbe02b96f478c8d36"
  },
  {
    "url": "assets/js/207.5936edfa.js",
    "revision": "06e88350a8e554848269a6ea96503c25"
  },
  {
    "url": "assets/js/208.19e2f4ef.js",
    "revision": "1364f3212982b8f1f99ba9d74f40ec7d"
  },
  {
    "url": "assets/js/209.d35277e5.js",
    "revision": "f2427635d3d735cfd02f31ac4b08d7c8"
  },
  {
    "url": "assets/js/21.f767a25e.js",
    "revision": "359d61efb59372beaa8de65cf2181781"
  },
  {
    "url": "assets/js/210.b6450a17.js",
    "revision": "effacb39fef4a7c9188467e33049ee99"
  },
  {
    "url": "assets/js/211.c5f61af1.js",
    "revision": "9a991a847fbf4c564628132c65626b75"
  },
  {
    "url": "assets/js/212.c0c19433.js",
    "revision": "2ddd384b71def38868a2c06598195f8c"
  },
  {
    "url": "assets/js/213.e757ed51.js",
    "revision": "255d9bb688363906dfbee4cc1ec77eed"
  },
  {
    "url": "assets/js/214.1b718aa2.js",
    "revision": "b1fbfc05029f66862f07fb7d5646a474"
  },
  {
    "url": "assets/js/215.1b06f405.js",
    "revision": "175a4ec5d651ef66875639afb470bd99"
  },
  {
    "url": "assets/js/216.3e1833c7.js",
    "revision": "6b7113f5db7ccc0c892a20b209e37cbc"
  },
  {
    "url": "assets/js/217.e7a072f5.js",
    "revision": "a34b548bc38eb715c43584d31d8be42d"
  },
  {
    "url": "assets/js/218.72fc84c9.js",
    "revision": "41b37b48e5a5d3601798cb2da81ba24c"
  },
  {
    "url": "assets/js/219.4da45525.js",
    "revision": "b54eb9cf5d022b1eb8b42a7d01beecd1"
  },
  {
    "url": "assets/js/22.56225067.js",
    "revision": "7c92c0f3340479120e688a6e3b81f7ce"
  },
  {
    "url": "assets/js/220.4f40e613.js",
    "revision": "71528f5eba270369a1a07cfb2b607984"
  },
  {
    "url": "assets/js/221.288a11dd.js",
    "revision": "ddb4e24d3632165483e9db1a456a14c0"
  },
  {
    "url": "assets/js/222.06a633fb.js",
    "revision": "7eb103fc27ee4742e92a19c24240f9d4"
  },
  {
    "url": "assets/js/223.55673671.js",
    "revision": "62aa8bd91c9a5f7f5e961a5c3b03146a"
  },
  {
    "url": "assets/js/224.a8d93524.js",
    "revision": "df0134c0db1db52f7a539b3631573689"
  },
  {
    "url": "assets/js/225.a2369cb3.js",
    "revision": "d0cd78a082f83042334e1827041d8e3e"
  },
  {
    "url": "assets/js/226.cebc6195.js",
    "revision": "396dcfe623c79bbbe1078ac6b76068d6"
  },
  {
    "url": "assets/js/227.fb840c62.js",
    "revision": "4837fd5bb1a56c089b7fe8b78148104c"
  },
  {
    "url": "assets/js/228.763e0f68.js",
    "revision": "39de26e2062768a09a7a2a1313b1d4b7"
  },
  {
    "url": "assets/js/229.0d7bf716.js",
    "revision": "fb9ba659467700c2cdfe07be62d7027e"
  },
  {
    "url": "assets/js/23.be326246.js",
    "revision": "0a6cd112c65c476b392599358ccdf940"
  },
  {
    "url": "assets/js/230.08605b03.js",
    "revision": "7c47d8958d5dee301b4946d3dbe47e5d"
  },
  {
    "url": "assets/js/231.5f3cdeee.js",
    "revision": "d3220176a9061a31af49dd1b4d9ef024"
  },
  {
    "url": "assets/js/232.03b46ea2.js",
    "revision": "af2e5122dc98181fb22bde1ec4b16109"
  },
  {
    "url": "assets/js/233.f6f1b44b.js",
    "revision": "94b21cc8925e0d31c345a59a561060d8"
  },
  {
    "url": "assets/js/234.a78235ff.js",
    "revision": "6cf58442752418a2b0ac40d1d227195a"
  },
  {
    "url": "assets/js/235.eaccae57.js",
    "revision": "66c24876352182ed5020ca764178cd47"
  },
  {
    "url": "assets/js/236.e909c94e.js",
    "revision": "85abf4e11bc3f4fca8ff6422e1107a37"
  },
  {
    "url": "assets/js/237.488e5fdd.js",
    "revision": "150e248e34a2bc8ae2c76f9c3c0acf95"
  },
  {
    "url": "assets/js/238.3c33aa3f.js",
    "revision": "463b8feb414069adc3a26e6ad54852f9"
  },
  {
    "url": "assets/js/239.dd1e869c.js",
    "revision": "697b1c5eb88b4756a9df136f9398b2d5"
  },
  {
    "url": "assets/js/24.f4cce620.js",
    "revision": "930a433325776b6a3b90b2d60d06c580"
  },
  {
    "url": "assets/js/240.2d025ad9.js",
    "revision": "d34ac5ef2b8ab706ef82f39ff28fa36d"
  },
  {
    "url": "assets/js/241.e9eb825d.js",
    "revision": "aff16a11a6692ef4a9b7f2a713f95757"
  },
  {
    "url": "assets/js/242.06bf4c9c.js",
    "revision": "19274dd8417a9ef61dca65a93cb13362"
  },
  {
    "url": "assets/js/243.8cb55232.js",
    "revision": "e96a61878d531eb8c4eec6a11e794536"
  },
  {
    "url": "assets/js/244.ac8179aa.js",
    "revision": "71ae6013c5bac04aab11d19fb7b91f04"
  },
  {
    "url": "assets/js/245.247ef538.js",
    "revision": "d44f086302c3561f93d6b703eafabb9b"
  },
  {
    "url": "assets/js/246.3c060de4.js",
    "revision": "450e67f1098b37fae57ded1bae9ad3f6"
  },
  {
    "url": "assets/js/247.5e78aa41.js",
    "revision": "cff301bd454ab6a1d8853f5233490c67"
  },
  {
    "url": "assets/js/248.d63aed18.js",
    "revision": "75e7e6610c0172f24ec79ba4a243218e"
  },
  {
    "url": "assets/js/249.ff94699b.js",
    "revision": "6c0fe878866d2638b12bb12c7faa0b4d"
  },
  {
    "url": "assets/js/25.ad5b5aa2.js",
    "revision": "aec66322271acd641ae032ed9d12a8e4"
  },
  {
    "url": "assets/js/250.671b6409.js",
    "revision": "b79fefc2e4b64161aa2b0b6aa287363a"
  },
  {
    "url": "assets/js/251.72d3ef6e.js",
    "revision": "ccb9dc14ff7853d0e38e4604cd7887b0"
  },
  {
    "url": "assets/js/252.4ababe3f.js",
    "revision": "82aa4d94af43af6eaabfefa23458d6c0"
  },
  {
    "url": "assets/js/253.88ceeb75.js",
    "revision": "08b1d7528f99f75ec8c180a2b4770897"
  },
  {
    "url": "assets/js/254.5e2e8eda.js",
    "revision": "fe76d0ad2a7a288d394dbb9a2eb74787"
  },
  {
    "url": "assets/js/255.70ed091b.js",
    "revision": "1f6caba6c35cf6a86e1c1e1d3cdf9b1e"
  },
  {
    "url": "assets/js/256.0a28dbbd.js",
    "revision": "40083822740d256d920734303872e992"
  },
  {
    "url": "assets/js/257.edea863f.js",
    "revision": "ff54178f8205f029f3a92357deb6f279"
  },
  {
    "url": "assets/js/258.7647b96b.js",
    "revision": "6bb2b65bf8531cd8a602e7a7f9e547f6"
  },
  {
    "url": "assets/js/259.39b29588.js",
    "revision": "ad20b818a0dd01278327355d90673772"
  },
  {
    "url": "assets/js/26.6dc7f715.js",
    "revision": "ecb4e50cd8a94ff830f91dd2b646c013"
  },
  {
    "url": "assets/js/260.39140a8f.js",
    "revision": "2685810856163689316a75e2316beba3"
  },
  {
    "url": "assets/js/261.7bfe7fda.js",
    "revision": "3fc0f8ca949c0eb108b333ddec56a769"
  },
  {
    "url": "assets/js/262.1939c210.js",
    "revision": "dfbc33e6c2660ebca990041eb3f46cae"
  },
  {
    "url": "assets/js/263.524775a5.js",
    "revision": "7578b0ec30fe20086ecc4340f58eb1a4"
  },
  {
    "url": "assets/js/264.28932490.js",
    "revision": "f1db3247e21570fa55a49994b1f3d811"
  },
  {
    "url": "assets/js/265.96be11fc.js",
    "revision": "21a23e5006dd5aa05bc3c28827fb0850"
  },
  {
    "url": "assets/js/266.b4a93d73.js",
    "revision": "846c0b63639e69961093f3075acd90c1"
  },
  {
    "url": "assets/js/267.81ced10c.js",
    "revision": "d9a1bc21c7430a1a4c344313ca3fab6a"
  },
  {
    "url": "assets/js/268.77f8e63d.js",
    "revision": "e53941773f32bfbc005314591406e468"
  },
  {
    "url": "assets/js/269.9dade3ca.js",
    "revision": "f882b8f0947b8a8d6b1d8c141994db5c"
  },
  {
    "url": "assets/js/27.a860a525.js",
    "revision": "ab254db783fdb6310e2883d2c875d834"
  },
  {
    "url": "assets/js/270.ad3ad704.js",
    "revision": "53dcfa8929d17a81a711b8ed0cc1da77"
  },
  {
    "url": "assets/js/271.dee9e9ca.js",
    "revision": "a6d25ca1ca7b6f0540ea759a5b4d8902"
  },
  {
    "url": "assets/js/272.5c7b0d18.js",
    "revision": "73708019291d6bc4515dc1d5ab636407"
  },
  {
    "url": "assets/js/273.04335efa.js",
    "revision": "d222d0a876ed16b3a14d4d9440b27fb8"
  },
  {
    "url": "assets/js/28.81b917d7.js",
    "revision": "f27ae0db3f997877d2a307ecb0065e93"
  },
  {
    "url": "assets/js/29.2ca694f0.js",
    "revision": "c70bf4fe3bf6bc9e57e808cb71513aec"
  },
  {
    "url": "assets/js/3.bb9c69c9.js",
    "revision": "b8a849bfcbb3f9d9c62bc4b8a6052695"
  },
  {
    "url": "assets/js/30.ecf4373f.js",
    "revision": "519fb36f2d7686a13da16dfed5c84103"
  },
  {
    "url": "assets/js/31.30e24ceb.js",
    "revision": "18f370423b54e87cf8c46d4e5aaa307c"
  },
  {
    "url": "assets/js/32.11994869.js",
    "revision": "212223c35be61b2305e7f7794ac05be0"
  },
  {
    "url": "assets/js/33.c0617e15.js",
    "revision": "394b742fd7f48b32ee29ef2de659a1c4"
  },
  {
    "url": "assets/js/34.9531f762.js",
    "revision": "c3f2e2ae847ed3e25d78fb5243a81d93"
  },
  {
    "url": "assets/js/35.be1eb63d.js",
    "revision": "8fc2774f023c26882e973c0e08273bb9"
  },
  {
    "url": "assets/js/36.1e216e9e.js",
    "revision": "b6efda87120ed4da3f767ba6b4e3a59f"
  },
  {
    "url": "assets/js/37.b1bcefd6.js",
    "revision": "970f82eefa85e2ed1036f8312d7a8467"
  },
  {
    "url": "assets/js/38.a520f0e6.js",
    "revision": "bee4530f372969d4ec4b1d5c05148a21"
  },
  {
    "url": "assets/js/39.f7d3d4e9.js",
    "revision": "406ee4bd394751ebc66c0f605ee9428e"
  },
  {
    "url": "assets/js/40.20aa1d52.js",
    "revision": "6d3e7791b5a4fb63e336746c8b52144b"
  },
  {
    "url": "assets/js/41.4b99b709.js",
    "revision": "cfaf1e313ee0208ffc9149f1b6f6a4b1"
  },
  {
    "url": "assets/js/42.872d8ba6.js",
    "revision": "7c0639565b3240b46761f0773aaa62fa"
  },
  {
    "url": "assets/js/43.b0ad2449.js",
    "revision": "8ce104985db84987e8158e4e2e1497ce"
  },
  {
    "url": "assets/js/44.a485b834.js",
    "revision": "d18a125a394e1f5d5a9774ff95405bef"
  },
  {
    "url": "assets/js/45.8c490a60.js",
    "revision": "48f25b0e55edca4e8e6948eb61020a43"
  },
  {
    "url": "assets/js/46.ab9bf609.js",
    "revision": "c736891a933b81557c6e9c07fb95cd23"
  },
  {
    "url": "assets/js/47.87d1e405.js",
    "revision": "ff3bfe8a89b424dbad6c8c6985047169"
  },
  {
    "url": "assets/js/48.59ee6130.js",
    "revision": "5d14a774a775c727807b346d298b5309"
  },
  {
    "url": "assets/js/49.ac90fd88.js",
    "revision": "90ad7af8902520ece6001aae65b8a81d"
  },
  {
    "url": "assets/js/5.e9727b56.js",
    "revision": "be54821f8e62e97a6b7f948a39373922"
  },
  {
    "url": "assets/js/50.df16ffc6.js",
    "revision": "f8625868aaff56f1adb4d3fd1f3c86cd"
  },
  {
    "url": "assets/js/51.f0a8b040.js",
    "revision": "9fa3991609c6b5042433310957d7dcb8"
  },
  {
    "url": "assets/js/52.67185c98.js",
    "revision": "7cd9d888a0254ccea4e4355fc8049859"
  },
  {
    "url": "assets/js/53.4e7eb660.js",
    "revision": "6ed696bb694ac8d45429a27ee2c81bf3"
  },
  {
    "url": "assets/js/54.220aaa25.js",
    "revision": "f1c3278277dc11160a5133cb804d5983"
  },
  {
    "url": "assets/js/55.1fe2259d.js",
    "revision": "478209b1dd13a382f50424bf832420a9"
  },
  {
    "url": "assets/js/56.86178ba1.js",
    "revision": "f7485e0619a34fedcfbd4d888cff1a4c"
  },
  {
    "url": "assets/js/57.eee21ece.js",
    "revision": "97802537a484d3c71f1024306bf0070a"
  },
  {
    "url": "assets/js/58.5b23e6f1.js",
    "revision": "7156239a6ac8ff9d1e43c26076e68ce4"
  },
  {
    "url": "assets/js/59.acf3b876.js",
    "revision": "c7de5acb974a99ae049552cacfee749f"
  },
  {
    "url": "assets/js/6.edb0a826.js",
    "revision": "60b515bd465b4a7f7d7fddfa7190b193"
  },
  {
    "url": "assets/js/60.7cc19c3b.js",
    "revision": "23372f307abf481b663f10e0d2776781"
  },
  {
    "url": "assets/js/61.70b1e8d4.js",
    "revision": "4d1f7d35e2f31981f288dccfe75fffed"
  },
  {
    "url": "assets/js/62.39317423.js",
    "revision": "0aa850506f45824fc7bc82b25d479dd5"
  },
  {
    "url": "assets/js/63.2e8d74ce.js",
    "revision": "9a2e50f98dd19c72455a30c153faf96e"
  },
  {
    "url": "assets/js/64.f0300c42.js",
    "revision": "6b6c6c26ca1e42ef6c6c536b6a8f3386"
  },
  {
    "url": "assets/js/65.311fd560.js",
    "revision": "fe96985f19581601e7ff8cf11ca3649e"
  },
  {
    "url": "assets/js/66.88fe0c65.js",
    "revision": "87bf22e31d15b7a3a88d738801af7859"
  },
  {
    "url": "assets/js/67.d5729736.js",
    "revision": "306596b3c06f7e1069fbd17cf1d92b90"
  },
  {
    "url": "assets/js/68.59756c2e.js",
    "revision": "bcc5cab418cf63e02702c35e7dcad4ab"
  },
  {
    "url": "assets/js/69.db86f299.js",
    "revision": "db43ba3f6b0d9d59fe90a81f4c6c5217"
  },
  {
    "url": "assets/js/7.c7defcd7.js",
    "revision": "fff341f25a6ec9045a6973c839ed0d36"
  },
  {
    "url": "assets/js/70.402cd0f7.js",
    "revision": "00a1447a8c31504df54dc57f227f7d5b"
  },
  {
    "url": "assets/js/71.06a8f368.js",
    "revision": "15aeb791319b9efaa3eb0c86331688b9"
  },
  {
    "url": "assets/js/72.a96b36a2.js",
    "revision": "57bb64f3937009d214326d6c0a255a72"
  },
  {
    "url": "assets/js/73.1142688a.js",
    "revision": "d4cd904fc834095ffb4e96a06f6438d2"
  },
  {
    "url": "assets/js/74.d3ac4466.js",
    "revision": "b79f2a78fb4db768f7b277b97bc53ac8"
  },
  {
    "url": "assets/js/75.9edd57bc.js",
    "revision": "66b2318167b1f0742ecdc5291ea9980a"
  },
  {
    "url": "assets/js/76.f86778ba.js",
    "revision": "efdebfc843c58ac46ac5917d468750ac"
  },
  {
    "url": "assets/js/77.43484c84.js",
    "revision": "e26ac074a8a3f21f7829442a4b5b096d"
  },
  {
    "url": "assets/js/78.2866bd10.js",
    "revision": "0b9fb022c6e13a726020d5ef43d25740"
  },
  {
    "url": "assets/js/79.486f2163.js",
    "revision": "3bc83abfe41d0b16a8d4cc0f8fda1a72"
  },
  {
    "url": "assets/js/8.1784f6c9.js",
    "revision": "338f3dbe34024b71669446fea2ba991d"
  },
  {
    "url": "assets/js/80.ca895b32.js",
    "revision": "220d0b8995ef716a180d3f190dc0bf54"
  },
  {
    "url": "assets/js/81.27fd6610.js",
    "revision": "fa043e027703d03b7a901fd2c3844d9e"
  },
  {
    "url": "assets/js/82.60c9c10f.js",
    "revision": "5885c4847545b6347239b329f2bb67c6"
  },
  {
    "url": "assets/js/83.8561a33e.js",
    "revision": "4a72dcf16206bbf4345d781c090f8999"
  },
  {
    "url": "assets/js/84.b89b7b47.js",
    "revision": "a4a158ec44db0970181d3b47fe3e73a5"
  },
  {
    "url": "assets/js/85.cb087add.js",
    "revision": "9b2377a1f94d42487538873261fb8987"
  },
  {
    "url": "assets/js/86.d3d2546f.js",
    "revision": "b1013f9a23956d76d5c7cba071a00364"
  },
  {
    "url": "assets/js/87.b67cd3f7.js",
    "revision": "1b2e890c0ddb53405265b2bc159fb813"
  },
  {
    "url": "assets/js/88.77d192fb.js",
    "revision": "eef4ccdb16cd50b1d55899fe946205a3"
  },
  {
    "url": "assets/js/89.65292a8b.js",
    "revision": "36bb8ce5832dad3e722b3d31cfffb338"
  },
  {
    "url": "assets/js/9.157f299a.js",
    "revision": "f9ff2b664ac40a8890631f8ad65bab41"
  },
  {
    "url": "assets/js/90.e8fb2eef.js",
    "revision": "b8a1c53feb6a93a7350a71fea0c4e220"
  },
  {
    "url": "assets/js/91.63de82e0.js",
    "revision": "3a0171478d96a3f175501903d95797a0"
  },
  {
    "url": "assets/js/92.ad2e9c23.js",
    "revision": "fb2ad00b8cc1c08ff1ad3ac5f5c77c6d"
  },
  {
    "url": "assets/js/93.04ed6997.js",
    "revision": "a8f85f34bae7e4ed0b12399efb9f3aee"
  },
  {
    "url": "assets/js/94.021e89cb.js",
    "revision": "060f27ac72606d8bcd065e31567a2166"
  },
  {
    "url": "assets/js/95.d52dcaf6.js",
    "revision": "e0fac28c5892e09c5483c06b4c8df70b"
  },
  {
    "url": "assets/js/96.2aa65ff9.js",
    "revision": "e416acd4fc5db4d8cc0179f523c67474"
  },
  {
    "url": "assets/js/97.2e26a08d.js",
    "revision": "87b9cd9f53ff8f2708aced7bddb5ba3f"
  },
  {
    "url": "assets/js/98.09a9e7f1.js",
    "revision": "b0592ba8452fea12aa3e742de191cb61"
  },
  {
    "url": "assets/js/99.9de7c032.js",
    "revision": "55248e1192e1f9a1ad69397a22106a58"
  },
  {
    "url": "assets/js/app.12ef933c.js",
    "revision": "792d98d1f5f285f9fe1094d80bfbff3b"
  },
  {
    "url": "categories/index.html",
    "revision": "48cc807e64ad530851706de9583428f8"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "fb13eaa8b88c800ad37e5488e2a6abdc"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "4bae65fb5f0094b6fe7a486f50f39987"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "3caa848699604bb26f21d5d913ae9723"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "a40fc987c5b72ceb0277e06cc2791147"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "bc28799a20d6df0d607ea476a84cf6b2"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "4fd8ca6376f029db637ba8759fa5caac"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "d3f430638af14c2c630cafcb4405aec6"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "64afe5eee3465e9d7263bee783a01170"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "b96d3875c14f2d94d94847bfd39e913c"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "3a3f25458845c711bfa82a553968b082"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "4bae65fb5f0094b6fe7a486f50f39987"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "6c730b4349e8408d3c59a17e149f3751"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "eed836acef3516c89dd6200e49d8f374"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "7ca49ace148b4559682dd695e97e7a89"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "8c654bfa2b94321fdfb342afe37d8341"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "a890c36615dae935ae3006334dc637e2"
  },
  {
    "url": "cs/database/index.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "5b5914012aedabafb6347ee18021d7d7"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "e0c899de0cce4da69949d2c95e7eaa6e"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "02b2f610c2588b235f91c2ed6c8bb6c4"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "3684ca28fd2fb698412a4fa27c0a12c1"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "6ffa0c9f2fc72bbfc22089918245fff1"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "f1f3c6ba95003f9d2b203d9b079daff6"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "4ae0886e7a1fcd40e1388676c1db787d"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "ebc35fc1c0986f9474918d9a1ca90290"
  },
  {
    "url": "cs/design/command.html",
    "revision": "a23cf29b5a6e004b4c92a1693b133a2f"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "c240a9b0f8857c31484858cc1d11951f"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "640034c3193740344f2e099d2aea7d93"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "4dcb9f3b679d24e62e32842771bb4f43"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "3eeb17e8882bfe0deb17f4633de97097"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "b5d35e9b06664a109ffb5260ffe5dab9"
  },
  {
    "url": "cs/design/index.html",
    "revision": "671526c0221b1be9cc033238385ee950"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "609a5aeb3314714d92eeab2e6c385788"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "1d079715c86535e4e9eb7a6edb2a6279"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "87d13ed4fae5ca300e56a853ee010eef"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "2028a8383dc3a9f6e4af7f62418552e5"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "c644e74a85abde369a970d23536b0e06"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "ba179f9b077cd4c1c631a9a5db49a502"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "fab2a533af15058e647163806648bad8"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "8658334065b209f0bb2f632badcf2bfb"
  },
  {
    "url": "cs/design/state.html",
    "revision": "4c4d968d0ad8fc9244c7fb14929f9a90"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "432f34fb8f8f34ef1cd51bc0d7a57dbf"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "7a535bd6e9b3d327f557d4237b6fcaed"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "943664acff7448e9ff1b2c14eaae7bee"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "fc4c5b327cf2b7e840f7bffa8774e3c1"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "e3cd05c6b9011ffb016cf3b5a972a60a"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "dfa06e34f3effad5f75b35c1dce43ffb"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "945fec8e9b57640ca39d21b45013b02c"
  },
  {
    "url": "cs/framework/vue3-reactivity.html",
    "revision": "b5f43c0adec6871002743385be313f29"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "93399fdd5b78d7c7de611e8b11ddb0fc"
  },
  {
    "url": "cs/index.html",
    "revision": "cc6cd5b17d11aac4527c7c4fd5993550"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/java/container.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/java/index.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "cd48bcfbd1769af125a96af33220f796"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "0c8964c51005b30fe183b145aac9bc13"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "aa3d5a3f4cc99e19b18162ec17f0e27a"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "25f9bdabdb7427a1c1e71ee21fe47357"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "f1c8484533d2444272fb8334d6cd91fc"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "a3e45f2786400f9642728b7ceebcf784"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "69a7484009deebcbdf25b762fd3a9be0"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "5c7b9a6cefffd7af59b9dcf75d9e0684"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "0960a81d8ec9ba50ff0482fdc7aefc0e"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "00c2b88eb59a4ba17458c899450fffdb"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "2d10c9cd08ea433daee3ce8bbd224fcf"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "61b5fb272c1d2787a3b5ae67515bd339"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "4970889c1aa4b89b2a689cb1d5925dfd"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "1eff7f552ae8cb7441d4d589595a7c31"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "ecd38731ad8f3f513a06dda64b359da2"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "d776875251907d38e3daba0350dc5e12"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "b64891314abd988be69ce4a65059951e"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "430a21d581c278dfc1426f58f2180768"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "57936e994b3662a9db1714a905264715"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "2d2dcd02593df28d541d0482974d22c3"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "accaf90962726640825a738577256d88"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "ff920cd5af4f7e05f621df8530ca24c4"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "301353cb7901071ac7b5f38e339a5246"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "964526b54f2af5210b9de86638557fcb"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "4620238a2d6af2e057b58005e390ec51"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "34a6c34ac0a93fed03e6fdbf81b5d7d1"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "a0f9179da7c31f1b4234dee3f5fe1f6e"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "07502db8edad707370af555d4d6caffc"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "0832230e9128a7731ab8e36e884653bb"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "72718ff18e35fb41cb65ff4b44ab8280"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "87e3202ea74daea3efc22167ca0a8b86"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "5c889c928706b78fb3d0f42f1c994985"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "8dd3b882b515fd6637dcb6b7872ae5a0"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "8967df4923cf2cf3746e1fe4f8749dfc"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "2185425d1e8108720a0c56187abd1e71"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "0c7e7f72dddafba2d5a47b1f6c5e2f4a"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "4c596f05372e7e1dbecff20c2296919b"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "a5c53ad7d8765fed0fce5df96ff5b954"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "ab7cce03b1d99560b450b2ee025b7428"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "0225f7c4d6d1bbf70be6e3805cbe4286"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "bfdd60d11d3840138163fd97d158acec"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "cca87bf79904d6de7e72dbb33f8058c7"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "809e34bc112c867db59936fb5aac5957"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "e018a745fdfc35eb4db94154943b5e47"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "68e233279162b9a95aa306dd07afeb69"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "0e4f996928b2596b8a44bd17db9d5c86"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "06bdd507547ba7bc8e711c928deaddfd"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "75a7e3b70a36d1e317021b99d2bb554c"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "6b624240865e9e3352caefd5d826c419"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "1314f0d696159bc576c942db4e551f30"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "44b441c9fd0ad0e4bd75052328fe0e96"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "1f2a7ddc2188848dc271c965dec55b31"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "b9dc9393cd136836291863883daab6fe"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "41e81541fa83eab587dce6269b05c676"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "46a8dbd9985887fefcc0ae890b50d931"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "bd86b1942b9e19d654d90dd000fab13f"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "90a8f652c1f4decc7fecb80fbf4ba040"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "2beedb22bde589fc81346e4834889266"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "d1e142a34d6b5cfe113d93b498435aff"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "e40d141942ca24b9fdae095115a1a44a"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "77195463d39a4daef8706d3aa05ff0e6"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "0d8fdae3a029028be7983a8de800c385"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "8c3b0de1474e19bfb4f055fcc344afa8"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "386bb0b1efd3d65050a966d00499bfe7"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "38f6bd408529223a22a1d38188d4ccb1"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "fef5f02f59861d649c97e527d388fc88"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "a45340e6c96f2e4492343866302fc5f7"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "103636922131a95ec753d1b83d2acfea"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "ca5a8e3d24546496c34b3d5892f5ddd7"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "8bee8c7fa0a1b18dee7b77bd0b3eba3e"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "9023e410d31070773e9e66c998582cde"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "1c3d4095c1c6dcdd32499a2dcfcf7b5a"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "fdb1310a344786fa16de76b17300dc62"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "dffa3ec2d9f44c741073f978f65c4e47"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "fb5c39db659eba05ca4e687310ac4730"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "46d26286eea0106aeecfdfa9af9501ed"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "d423ed1b4f16c52e9ed1d0ed996d5f49"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "2d08e5aaff27b8f4619a4dca080c52bd"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "73f825bb3cf1a1db44112682a47fadb9"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "0c319015bf67e90647ada0038f4ba2e1"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "9dc81631547170d49d153e79e40d2a35"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "d083977cf7a1ed488abad78bf3bef920"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "d4fd0a372ab2fc540237e12b5c1a7b8e"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "ec3373e69aea37dcd031a149cf2944d7"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "e018a745fdfc35eb4db94154943b5e47"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "25fabaac95ad16dee2e437274fe48f74"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "9fc85888f951b2a17ead916d68ec37e6"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "4bae65fb5f0094b6fe7a486f50f39987"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "2662e1a0cdfb0d6a500787804afc1098"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "2b51eb33313d157712ba00d7b48e2810"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "d92e3c643ed3257a5ef2e96caaace8b9"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "389842314fbedd6c8aa9d5d57d38ba9a"
  },
  {
    "url": "cs/network/application.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "9bbaa6835ed6269b6725276c273770e1"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/network/index.html",
    "revision": "4bae65fb5f0094b6fe7a486f50f39987"
  },
  {
    "url": "cs/network/link.html",
    "revision": "27e76e2465be3032dc9381d2b9ce68b2"
  },
  {
    "url": "cs/network/network.html",
    "revision": "fb7b6416fa452cd75bfad01972dafd2d"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "550fce4c8a75173aa46d3027c97da2ed"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "0afd713ad46f4e3635aa77a23354d69c"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "4125ca79e76cdd40f16b0c738862138a"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "7f17b644ef57d865fbb8e5c0a92306ff"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "96e55c8143c5c3c8fddd40ad51bedb54"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "4bae65fb5f0094b6fe7a486f50f39987"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "8dfdb58b0ce999d05e4fe65552a29ec4"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "a54cb23c3d4042f25d98fd2429f421b8"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "6592369303048ed0601fc22a4cf6c8e1"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "fee3502da40c70170c34ffceca7605f9"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "cd48bcfbd1769af125a96af33220f796"
  },
  {
    "url": "cs/web/index.html",
    "revision": "cf48dc68686449878b57c5088e3ede42"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "fd82a1cce48342d338cd3ddd5dab4bec"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "f86fddecf245b190fd15ebb2411491e7"
  },
  {
    "url": "cs/web/web.html",
    "revision": "928722c6cc6e7d73c68840cb8ff7c1b3"
  },
  {
    "url": "daily-life/phone-lost.html",
    "revision": "6f330b0c61880cfefb89e03b251c98de"
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
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "7d7552634d72d1e5391770c60d39d5a9"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "440ab8c8eae042949b892ba255757104"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "f6f3146dd6c16e1d467ecde0354d5445"
  },
  {
    "url": "language/english/differ.html",
    "revision": "6d5b466fe5549d6b679f32069404fe61"
  },
  {
    "url": "language/english/index.html",
    "revision": "0c8964c51005b30fe183b145aac9bc13"
  },
  {
    "url": "language/english/modal.html",
    "revision": "636f29e7f20d5b7b712fdfe4cfa967a1"
  },
  {
    "url": "language/english/mood.html",
    "revision": "78f715a06430862b9f28ec5b9b972797"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "d1c95e1532a815fd035e9724b2745acb"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "27712b64ea94f9abb50afdf04f722ebb"
  },
  {
    "url": "language/english/phonetic.html",
    "revision": "aa1b1a8c8dd8a52c3cb447a47caf7fe8"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "07e1a91edbfbf9c252a4ab906561c545"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "c6db1ff0303e9c249b43749a4d1cf300"
  },
  {
    "url": "language/english/tense.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "language/english/verb.html",
    "revision": "3c15567e29126bda044f8a2d17c0bbed"
  },
  {
    "url": "language/english/word5000.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "language/index.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "tag/index.html",
    "revision": "6ace462dbe628be8c93d4192cf563eeb"
  },
  {
    "url": "timeline/index.html",
    "revision": "53eb38b578e9be0c805659b8cfaa300e"
  },
  {
    "url": "tools/chatgpt.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "tools/gpost.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "tools/hash.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "tools/index.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
  },
  {
    "url": "tools/test1234567890.html",
    "revision": "c14c6f0a846e59eb11e7cbf2d04223c0"
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
