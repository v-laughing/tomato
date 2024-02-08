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
    "revision": "722383810078c09bd9afbc66c5f3331b"
  },
  {
    "url": "assets/css/0.styles.dce377c3.css",
    "revision": "2b9b0f3467c904408dba927438e63df5"
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
    "url": "assets/js/1.abe5452a.js",
    "revision": "2fff3e7d9ac8d715b5666b35701b578f"
  },
  {
    "url": "assets/js/10.88147af5.js",
    "revision": "8caa9be1c77f7e4d83524f94d4a9f8ce"
  },
  {
    "url": "assets/js/100.61646b80.js",
    "revision": "0fdb045416774b2cd29b8c8c4bde32c7"
  },
  {
    "url": "assets/js/101.22d0b733.js",
    "revision": "06bdbf10d7174fbbcb7a4ded3ad4b327"
  },
  {
    "url": "assets/js/102.3cc24ea1.js",
    "revision": "c67ad34c21219995143c8d3fc9302f4a"
  },
  {
    "url": "assets/js/103.397c06eb.js",
    "revision": "6c1f501938e4cd917820ef4166efbfd5"
  },
  {
    "url": "assets/js/104.d9218742.js",
    "revision": "27076a4b37f03649b378b1272088be66"
  },
  {
    "url": "assets/js/105.bfcec874.js",
    "revision": "a354010410263f9ab02ea72e26ddbc1f"
  },
  {
    "url": "assets/js/106.e8d482e6.js",
    "revision": "b39f41e979a9063ef6989e86909a4924"
  },
  {
    "url": "assets/js/107.d08e14d3.js",
    "revision": "239d532bf1825a5a2c3af7883d5e8d7e"
  },
  {
    "url": "assets/js/108.2bcb410a.js",
    "revision": "e6ee64e51cffd41f1e080620eeee4f55"
  },
  {
    "url": "assets/js/109.59bde5ca.js",
    "revision": "89985a2be6eb1edbd6fab5d4162880d5"
  },
  {
    "url": "assets/js/11.f3f6270b.js",
    "revision": "965a3c12166e064baae34e00544dd5bb"
  },
  {
    "url": "assets/js/110.d13df0d5.js",
    "revision": "4d85cbcba30931eab6b1fa1532a39c46"
  },
  {
    "url": "assets/js/111.05def694.js",
    "revision": "404f4ad2dd4c655a036c24bfd5f7c3ef"
  },
  {
    "url": "assets/js/112.4f14395e.js",
    "revision": "8095e56aa99513d3f02b85cd8b6a73db"
  },
  {
    "url": "assets/js/113.07d3caa1.js",
    "revision": "555cdc8fa3fedf3a71d7f7dc78b6ede4"
  },
  {
    "url": "assets/js/114.24586601.js",
    "revision": "f1a513af8dc98ddf1733a6ecd00eee5a"
  },
  {
    "url": "assets/js/115.e4d7f667.js",
    "revision": "f389cb2ac2fb8cf8ff267a3134d80e2c"
  },
  {
    "url": "assets/js/116.51d1a34f.js",
    "revision": "59a06fded270d818754e25a542324c7d"
  },
  {
    "url": "assets/js/117.f534d01b.js",
    "revision": "e7b8b76a278e825c4b375201cbee37c5"
  },
  {
    "url": "assets/js/118.f4a39f09.js",
    "revision": "be6e85a116e0fd76102c09928ec62ed7"
  },
  {
    "url": "assets/js/119.bf1365be.js",
    "revision": "9d7dcf172f484b118aaae7581f376f9a"
  },
  {
    "url": "assets/js/12.2ae8f709.js",
    "revision": "594ba79692d969082ce033a2d5a03008"
  },
  {
    "url": "assets/js/120.3f1a5aa2.js",
    "revision": "5fe0ef012acd463f63a021df8a8a00ed"
  },
  {
    "url": "assets/js/121.d3c10dfc.js",
    "revision": "1c8252c7998d2c0a3b125a4c0f59ce19"
  },
  {
    "url": "assets/js/122.6564b5a7.js",
    "revision": "06c2f44db4f81288cad2eda0df549c16"
  },
  {
    "url": "assets/js/123.0b925a18.js",
    "revision": "48ca85deed2450cdc1011ce73651715c"
  },
  {
    "url": "assets/js/124.1771b894.js",
    "revision": "5070c03830448ec4dc4cd20f5d3846fe"
  },
  {
    "url": "assets/js/125.9bdde1cd.js",
    "revision": "8acf42af90c4aba8576cdefeff2840c5"
  },
  {
    "url": "assets/js/126.2df94851.js",
    "revision": "6f547152a4fd51fa4ad075004255f00c"
  },
  {
    "url": "assets/js/127.4bde6398.js",
    "revision": "527bd6eb4990893c6de3992375fd86f3"
  },
  {
    "url": "assets/js/128.b43b6745.js",
    "revision": "d65b9e7bd00e9db97cfa715184ac9ff4"
  },
  {
    "url": "assets/js/129.bd47603c.js",
    "revision": "5544a40935e7ec2d566d4068b372a4bc"
  },
  {
    "url": "assets/js/13.1ec28872.js",
    "revision": "e62301a062923e3683598d5065527edd"
  },
  {
    "url": "assets/js/130.b8eff694.js",
    "revision": "123b5153225b6d4450a39e44d9ea687f"
  },
  {
    "url": "assets/js/131.ff3756a5.js",
    "revision": "a2513670b9345b08c601b6fd38b2cbe0"
  },
  {
    "url": "assets/js/132.b1b2a6e4.js",
    "revision": "5e3d7e97f6b9f5e3274825b984170b96"
  },
  {
    "url": "assets/js/133.4259d757.js",
    "revision": "39ce3804cb83d65dbc73bc19fc08ddf6"
  },
  {
    "url": "assets/js/134.c1d30e29.js",
    "revision": "cae5f1e8ebb84c5b486c379c7c03a5d4"
  },
  {
    "url": "assets/js/135.adb044f8.js",
    "revision": "f9c6ad9247893b4fe845b9336fbed58a"
  },
  {
    "url": "assets/js/136.3cfb96a3.js",
    "revision": "4b30a6b15c50b06358469896a1f13193"
  },
  {
    "url": "assets/js/137.9f17cd67.js",
    "revision": "d09792e1eb97f967b9b8e9cfc03073a4"
  },
  {
    "url": "assets/js/138.be4f86b7.js",
    "revision": "7d95b8173222be0e759263b7b19d7c32"
  },
  {
    "url": "assets/js/139.5c01d42b.js",
    "revision": "28d42eefbbfd355a351019d0a04c9d14"
  },
  {
    "url": "assets/js/14.ef6c77e9.js",
    "revision": "3672d7de0127839b796ca74283e23763"
  },
  {
    "url": "assets/js/140.bb5242e7.js",
    "revision": "7fc0b4f66ed46b765756f08955dad7dd"
  },
  {
    "url": "assets/js/141.825ca8bd.js",
    "revision": "967e1cc74268c100cd6ed5d953dafe86"
  },
  {
    "url": "assets/js/142.ac1142b0.js",
    "revision": "6c515a0545a1802fc8aca104a3a6c642"
  },
  {
    "url": "assets/js/143.83c9b2ae.js",
    "revision": "c20707d47610098425b9c30809c518e8"
  },
  {
    "url": "assets/js/144.1ee65173.js",
    "revision": "4ee04530b15a55c033e602a3f3a8206c"
  },
  {
    "url": "assets/js/145.479bcd07.js",
    "revision": "f3bb0e5125c0f7e461e0f2363f6f5219"
  },
  {
    "url": "assets/js/146.516e1453.js",
    "revision": "4a47eeb36f8723c5f252ac4acb7fc97b"
  },
  {
    "url": "assets/js/147.64169547.js",
    "revision": "81c1dccb207b2db9f8bb5e2016f1920b"
  },
  {
    "url": "assets/js/148.dea69b46.js",
    "revision": "e122a5546044fdb74ed1fa75accdce19"
  },
  {
    "url": "assets/js/149.b0c3020d.js",
    "revision": "6b9a275b1eb3fbe499a628f3e0f25bda"
  },
  {
    "url": "assets/js/15.399456a9.js",
    "revision": "9d274c2c0ddcb6ca2b1908e899a404e5"
  },
  {
    "url": "assets/js/150.3f1c621c.js",
    "revision": "71f49647c8258349b9263e31b78d2d18"
  },
  {
    "url": "assets/js/151.16c8d8d9.js",
    "revision": "a2fe7240aa6c95bc093be1bfbdd75994"
  },
  {
    "url": "assets/js/152.83ef3c2d.js",
    "revision": "d186cf1fbdeef2a14a5acbc5d704719c"
  },
  {
    "url": "assets/js/153.3f69eee9.js",
    "revision": "aea8e9fc30533332da76ef3c59345741"
  },
  {
    "url": "assets/js/154.5dd01455.js",
    "revision": "d5c6e208518be4cdc12188387efbc4ef"
  },
  {
    "url": "assets/js/155.12ec653e.js",
    "revision": "8e62250175337998f991a5ad909f1b03"
  },
  {
    "url": "assets/js/156.ca6df4fe.js",
    "revision": "f0cb5f6639e57aaaad2c417ff532f3ad"
  },
  {
    "url": "assets/js/157.2ddfb58c.js",
    "revision": "3b79d3efaf68a2060de7ce29ebf923c3"
  },
  {
    "url": "assets/js/158.b8311d52.js",
    "revision": "6fdba4b3ae559efe6693e8ef5ad075e0"
  },
  {
    "url": "assets/js/159.b13dcf5a.js",
    "revision": "4243be1597760232da279461fe87eb2b"
  },
  {
    "url": "assets/js/16.3be80ecd.js",
    "revision": "3a7ca9dfe69316ca1204766900d0410d"
  },
  {
    "url": "assets/js/160.9dbbaac1.js",
    "revision": "4df87193870e62cc63a9e18b6f2e74d8"
  },
  {
    "url": "assets/js/161.14ae9767.js",
    "revision": "dcea86da63e5aeb0f026ca4bbfe4e9a2"
  },
  {
    "url": "assets/js/162.4f2c933e.js",
    "revision": "7efc9860eecbfd93fcb777f2527f3abe"
  },
  {
    "url": "assets/js/163.769d9262.js",
    "revision": "f8700919a567cb87829b9268dd1ef787"
  },
  {
    "url": "assets/js/164.aead1841.js",
    "revision": "8ba25a29db40d9c621d419c06158af1c"
  },
  {
    "url": "assets/js/165.dc578781.js",
    "revision": "b38424a9ed2057a76c78662053e0e156"
  },
  {
    "url": "assets/js/166.ff72f01a.js",
    "revision": "361f1137783e3329e2f2eac8c97d2e47"
  },
  {
    "url": "assets/js/167.29cf103d.js",
    "revision": "c54fb58d38a711fcc11e35db28f3ef5c"
  },
  {
    "url": "assets/js/168.a7544e85.js",
    "revision": "0236c7fa27edc2825c1fa2084a047b73"
  },
  {
    "url": "assets/js/169.7b7f0acf.js",
    "revision": "026aa2fdf289944c3219b33bbc165493"
  },
  {
    "url": "assets/js/17.3108f49c.js",
    "revision": "6d218a8a1b1899d0024ea2cf3064fda7"
  },
  {
    "url": "assets/js/170.5a96cbea.js",
    "revision": "0a2bffc277dabf957712328a47fc5086"
  },
  {
    "url": "assets/js/171.a6ad2130.js",
    "revision": "4620ba6a534deaf61b065ac53eb852b7"
  },
  {
    "url": "assets/js/172.e6b8751e.js",
    "revision": "1a0fc69b79a165f2ae0d06f90d2a92d9"
  },
  {
    "url": "assets/js/173.1b3db51f.js",
    "revision": "93f5334aac198db67680b39753f20496"
  },
  {
    "url": "assets/js/174.17fb536e.js",
    "revision": "30d7295fc130684c2016cb8703a24093"
  },
  {
    "url": "assets/js/175.acdafbab.js",
    "revision": "191ea528c21a8a0e0b21bb9083abad8c"
  },
  {
    "url": "assets/js/176.d85c72b6.js",
    "revision": "3c90b7ce77797fbd3de8119ca337a196"
  },
  {
    "url": "assets/js/177.55fa27ab.js",
    "revision": "9ec42e3193395f67affe1a7ffcf0eb75"
  },
  {
    "url": "assets/js/178.f4eaffd0.js",
    "revision": "1e5ccb7e5f0e7bbdeeaf04f4979d69fc"
  },
  {
    "url": "assets/js/179.336229b2.js",
    "revision": "17a7b0be728312f1106bd063be75a3fa"
  },
  {
    "url": "assets/js/18.5da727d9.js",
    "revision": "46d545db7d7ce6938a4ede112bf107fe"
  },
  {
    "url": "assets/js/180.0e43fd56.js",
    "revision": "7c7d9ba45d195c66b251cbbe432c1ff8"
  },
  {
    "url": "assets/js/181.de263a67.js",
    "revision": "14803748e9c5fb1e9421e199bca51d1b"
  },
  {
    "url": "assets/js/182.af2da8da.js",
    "revision": "a43861521af234dab417246c174fbb23"
  },
  {
    "url": "assets/js/183.f92338fd.js",
    "revision": "70eea2f2e8433dd2fef585734d78f71d"
  },
  {
    "url": "assets/js/184.f8d470f0.js",
    "revision": "88f99af7332a1636e8c4e87a245c14eb"
  },
  {
    "url": "assets/js/185.8062b5c2.js",
    "revision": "0889bd1c9eaaaaa7ee404a0eaf889024"
  },
  {
    "url": "assets/js/186.25f6b0d9.js",
    "revision": "66b0ff7a609dd92839c985eba7240097"
  },
  {
    "url": "assets/js/187.558d23ec.js",
    "revision": "d892130d374f0c3d7cdf4789d783308f"
  },
  {
    "url": "assets/js/188.c8af9f36.js",
    "revision": "085f4e24f069715d0610bc461a828468"
  },
  {
    "url": "assets/js/189.910e5805.js",
    "revision": "7c8510fa5dba6a2b01bbf9ecaf3d3d48"
  },
  {
    "url": "assets/js/19.0b6b7eb1.js",
    "revision": "95fda1786051f7b96edbb2c8285e6aa2"
  },
  {
    "url": "assets/js/190.10e2468f.js",
    "revision": "dc904daa5402baf281cd2c339be6a8fd"
  },
  {
    "url": "assets/js/191.149ef99a.js",
    "revision": "f9200db97eaa3714dd177a83f7204a7d"
  },
  {
    "url": "assets/js/192.09ec64db.js",
    "revision": "6c5dda484fd5a042e1d999280601d3ab"
  },
  {
    "url": "assets/js/193.e2106818.js",
    "revision": "4a1f3426a145b5cbbdb692fd4f5d2279"
  },
  {
    "url": "assets/js/194.41be7793.js",
    "revision": "838e12264c33e23d71e09b33c2d71fae"
  },
  {
    "url": "assets/js/195.75266742.js",
    "revision": "0f1194e3ab3b942a148ec1d013c59939"
  },
  {
    "url": "assets/js/196.2eb17195.js",
    "revision": "6aacfdfa5c13cda943bc82eeb029b1e4"
  },
  {
    "url": "assets/js/197.24ef8329.js",
    "revision": "25feb1c257d092085b61821d100d79eb"
  },
  {
    "url": "assets/js/198.630e2b82.js",
    "revision": "025fb7104855a0123fb74727b8780ddf"
  },
  {
    "url": "assets/js/199.0128730c.js",
    "revision": "64069550b29f1de975800ce9823bcbce"
  },
  {
    "url": "assets/js/2.e51d53a3.js",
    "revision": "c9b9ee09d0cf0a5268a23d345b824363"
  },
  {
    "url": "assets/js/20.2eb02eb4.js",
    "revision": "70e1c406f513da37f3099ab430c2430c"
  },
  {
    "url": "assets/js/200.0db6ed89.js",
    "revision": "e89df1049697680c99d1ff4c1b642007"
  },
  {
    "url": "assets/js/201.152010ba.js",
    "revision": "c81ce4e554b3406e439872fc006183d0"
  },
  {
    "url": "assets/js/202.83647c0b.js",
    "revision": "b83e1a0f6bb03830dc641e261c4460f5"
  },
  {
    "url": "assets/js/203.25bab91f.js",
    "revision": "0774e5b2572edc1a0864de7135c200de"
  },
  {
    "url": "assets/js/204.3a4a8956.js",
    "revision": "d45faee12ed1af79cac70f0f5f036ec2"
  },
  {
    "url": "assets/js/205.b049c53c.js",
    "revision": "50f2ff0185dccd0b01afd00836c2a579"
  },
  {
    "url": "assets/js/206.53547e44.js",
    "revision": "7b4a88ccf01d6d34ca91d05539cb5a19"
  },
  {
    "url": "assets/js/207.590167e1.js",
    "revision": "6c4a65717359d1733b4afa00adb4ed3a"
  },
  {
    "url": "assets/js/208.07f3fb25.js",
    "revision": "a80c0d485951cf904ef7e409a1943016"
  },
  {
    "url": "assets/js/209.3df3fa40.js",
    "revision": "c934f7d88991b660962a0a952a95b397"
  },
  {
    "url": "assets/js/21.19821816.js",
    "revision": "4d33748c42ef5aacaa27a3eba51d5b29"
  },
  {
    "url": "assets/js/210.7d8a6bfa.js",
    "revision": "be4de32b19744fc9a579a7a27684d041"
  },
  {
    "url": "assets/js/211.54b41705.js",
    "revision": "6f6c216bcedbb9917829e778f76abf1f"
  },
  {
    "url": "assets/js/212.24d017d9.js",
    "revision": "70da5d2f1865030523a4fced24af0a8c"
  },
  {
    "url": "assets/js/213.136ce8e9.js",
    "revision": "02fff1f74411b905ef60fe79b6194805"
  },
  {
    "url": "assets/js/214.85d10268.js",
    "revision": "0ba3f4e0b007b9ba35a014a3681fe5af"
  },
  {
    "url": "assets/js/215.0cb50f9a.js",
    "revision": "aa01e99de40ed9189c8bcb6809cae407"
  },
  {
    "url": "assets/js/216.e9ea399f.js",
    "revision": "6df7fbdc8acca7f4b129f8b5871a5636"
  },
  {
    "url": "assets/js/217.8730422b.js",
    "revision": "fc38f8b14d6497851ee65858ea145f44"
  },
  {
    "url": "assets/js/218.a4fcc133.js",
    "revision": "a5076028e9139255be8e7be0a9ced90d"
  },
  {
    "url": "assets/js/219.f64c85c3.js",
    "revision": "963ccb446c3fb32be2dce7f5abd38825"
  },
  {
    "url": "assets/js/22.c7c9952a.js",
    "revision": "2d16654679c173d76a934bbaca71dcc1"
  },
  {
    "url": "assets/js/220.5f60b175.js",
    "revision": "a4dc3486c21a3b4a296b860a54fbf94e"
  },
  {
    "url": "assets/js/221.518275e5.js",
    "revision": "f7b2a95126615eccbbb5d99c5e9962e4"
  },
  {
    "url": "assets/js/222.a2c57b85.js",
    "revision": "787ec461bc7b2eda37b98cce1fe93746"
  },
  {
    "url": "assets/js/223.90017e00.js",
    "revision": "3825d694eebb7bddbbd7578cbf62a5ec"
  },
  {
    "url": "assets/js/224.75156b96.js",
    "revision": "9762780859335fae555b2fa7c5c2cf17"
  },
  {
    "url": "assets/js/225.d9fbc872.js",
    "revision": "583bbdc8cc0afdd0f36c9abdef8dd201"
  },
  {
    "url": "assets/js/226.88279a68.js",
    "revision": "3367ce18bffe0c3dbfa7b9f6c063ec9a"
  },
  {
    "url": "assets/js/227.3ac23b82.js",
    "revision": "377d75d2850c477a223ab66c855d3a64"
  },
  {
    "url": "assets/js/228.f71c8e50.js",
    "revision": "ebe92b9dfbf304d217f5693c2b320e89"
  },
  {
    "url": "assets/js/229.f1a485c6.js",
    "revision": "20f53e4c4397347613536fcdf30a4fe1"
  },
  {
    "url": "assets/js/23.a80accb1.js",
    "revision": "e41d7215d6001a350cdb65e498dc1b32"
  },
  {
    "url": "assets/js/230.f696e837.js",
    "revision": "d17d90337e5db6176982d3d4a9a8ae5a"
  },
  {
    "url": "assets/js/231.75ecb8c3.js",
    "revision": "5aa3d51be32afee6d530c956cdd0d764"
  },
  {
    "url": "assets/js/232.99bf2adf.js",
    "revision": "4d04a200389ee753212967f3e218ad37"
  },
  {
    "url": "assets/js/233.a1fd25dd.js",
    "revision": "0924b04c8cc6596f9d1620d889f28032"
  },
  {
    "url": "assets/js/234.15131492.js",
    "revision": "0dbe771f1604b5e595187f26c7e73bf7"
  },
  {
    "url": "assets/js/235.2831c750.js",
    "revision": "91d1324b4f85abd9b3552b0063dd43c1"
  },
  {
    "url": "assets/js/236.5c5969be.js",
    "revision": "af2f753e081ef3e64bf180f19f99392f"
  },
  {
    "url": "assets/js/237.36cc75d9.js",
    "revision": "5f02171eec732d641fa5ff29792b99e3"
  },
  {
    "url": "assets/js/238.ee4aa50b.js",
    "revision": "16870df09bbced6d6045e7ab8c44eb0e"
  },
  {
    "url": "assets/js/239.daa5a456.js",
    "revision": "cb07dd142263e4525bb4ae2645674cbf"
  },
  {
    "url": "assets/js/24.6584624c.js",
    "revision": "76b39aa11ab7f2284e9df1358a5e3f2b"
  },
  {
    "url": "assets/js/240.14463967.js",
    "revision": "1914c322754bc1d756c6ec41d2b4d818"
  },
  {
    "url": "assets/js/241.73cc05d1.js",
    "revision": "f66ffb38d7a5c8ec3492e0f211786ce8"
  },
  {
    "url": "assets/js/242.15cec40d.js",
    "revision": "a5d0192c3189fe523cdbfdf82d0959a3"
  },
  {
    "url": "assets/js/243.7c1f03bf.js",
    "revision": "dc595ba0792f8276716c1aa5bf314e94"
  },
  {
    "url": "assets/js/244.3a2448c3.js",
    "revision": "bb3ed0f32dc7aaa20d8848d56c9a3162"
  },
  {
    "url": "assets/js/245.72df737c.js",
    "revision": "d6059d00ac003c516aff4d39592abafa"
  },
  {
    "url": "assets/js/246.bc03e886.js",
    "revision": "b8ca8a6ace3fc88e7c968e328fefa9a9"
  },
  {
    "url": "assets/js/247.2b3f0451.js",
    "revision": "e4ceb55bb354f9991c5a6d1a96ccb5bf"
  },
  {
    "url": "assets/js/248.cf9954e4.js",
    "revision": "0231e6511a2c6a20880104e6e93e18aa"
  },
  {
    "url": "assets/js/249.7c71d9fc.js",
    "revision": "db5a28936094c29b5e2e974122d97d14"
  },
  {
    "url": "assets/js/25.2f788b9e.js",
    "revision": "e281a7d7e4a4d804e14d6c85d718fe73"
  },
  {
    "url": "assets/js/250.b005075c.js",
    "revision": "9cd6489bab67ee0b538bec791b84f124"
  },
  {
    "url": "assets/js/251.d72bdb01.js",
    "revision": "ddf9d910b9343ce66e748333cf97a80a"
  },
  {
    "url": "assets/js/252.8f3e63f8.js",
    "revision": "1e67efcaf7cd1dc28a1c4f43ac3b1a49"
  },
  {
    "url": "assets/js/253.4ec12e17.js",
    "revision": "e143b8d693ebd700de1d9a8edb3a0598"
  },
  {
    "url": "assets/js/254.bee75647.js",
    "revision": "bf358f129c466e16e4cfca4d555bae5c"
  },
  {
    "url": "assets/js/255.c1c03d09.js",
    "revision": "c5d36fca3bdeeb0c84087d7939be5159"
  },
  {
    "url": "assets/js/256.df7ec011.js",
    "revision": "ba4a1c712ed9d26cc6239b228b40eadb"
  },
  {
    "url": "assets/js/257.d186a788.js",
    "revision": "244ddf285c5400cc43cf15da50184eaf"
  },
  {
    "url": "assets/js/258.7046eabc.js",
    "revision": "67a396fb7af567929ab8fbcb6038df2e"
  },
  {
    "url": "assets/js/259.9bc43235.js",
    "revision": "871c4aafff42f11876dffe0ae20029ab"
  },
  {
    "url": "assets/js/26.01c4e160.js",
    "revision": "09738df29ac8974718a4413f40ef3f36"
  },
  {
    "url": "assets/js/260.246bb3fd.js",
    "revision": "43ba5547a4292651a2602e139a496ab4"
  },
  {
    "url": "assets/js/261.783a5a26.js",
    "revision": "a62568c9fde394d0ec785bdb93a717e5"
  },
  {
    "url": "assets/js/262.a1fc6ca4.js",
    "revision": "1f2131ade025703be3017fd9a0f94573"
  },
  {
    "url": "assets/js/263.4c4d1056.js",
    "revision": "91a725be53b82f8bc7140e7db20d7e68"
  },
  {
    "url": "assets/js/264.e78f464d.js",
    "revision": "ef96453ade0009900e3725920cf85547"
  },
  {
    "url": "assets/js/265.f848c414.js",
    "revision": "a8f036869e5427457707485d99f2bb80"
  },
  {
    "url": "assets/js/266.982a3eb4.js",
    "revision": "eb9f42f92395c67f03d662785adb80e3"
  },
  {
    "url": "assets/js/267.b775ad44.js",
    "revision": "0793f50d91eb2d7c82732e94a3f61674"
  },
  {
    "url": "assets/js/268.2d59a7ec.js",
    "revision": "9edc956b03a0a83f9ddd46be3f4fb8d7"
  },
  {
    "url": "assets/js/269.a7d1a4c6.js",
    "revision": "890404e050b6a0c4705a9be13356520f"
  },
  {
    "url": "assets/js/27.04e6c259.js",
    "revision": "e6f35ea1cb8cb0427f22eb386c4f8b61"
  },
  {
    "url": "assets/js/270.c70c0d67.js",
    "revision": "75277fd31257cb926fe8f1d79b91fbd2"
  },
  {
    "url": "assets/js/271.116846fb.js",
    "revision": "93179bc6ea2828b2d84543ce97a6eb57"
  },
  {
    "url": "assets/js/272.8da722a4.js",
    "revision": "fffe0af6100bc9e9f4430eb430473797"
  },
  {
    "url": "assets/js/273.c40218e3.js",
    "revision": "113c2db4ee1b8ad187b1094ea533df58"
  },
  {
    "url": "assets/js/274.10172f9d.js",
    "revision": "c510f193769dc6e35d44c2470ef5c7f5"
  },
  {
    "url": "assets/js/28.15fa773f.js",
    "revision": "c55f42b6b95047e1b90062715f1d1f7c"
  },
  {
    "url": "assets/js/29.bb0ba1d0.js",
    "revision": "aa8e94870a38f46b4004ec29a062a4f7"
  },
  {
    "url": "assets/js/3.fa67b9e4.js",
    "revision": "c8c581f4ed820891f9d8edd10c56e53d"
  },
  {
    "url": "assets/js/30.22bc1ee7.js",
    "revision": "693056c99f9934e7c46867d516aed719"
  },
  {
    "url": "assets/js/31.e679299a.js",
    "revision": "efee1b99b1675a3dc956f1bd28b9bf51"
  },
  {
    "url": "assets/js/32.07771d95.js",
    "revision": "69fac79327a3ed354618dba968b02544"
  },
  {
    "url": "assets/js/33.44baa563.js",
    "revision": "c249abf8a957acb72bdf7afc68858dd0"
  },
  {
    "url": "assets/js/34.16de0b1c.js",
    "revision": "9de38ec485e6724f4499e524daa7862f"
  },
  {
    "url": "assets/js/35.d483a5a3.js",
    "revision": "7a5c21fd7bb20cf4074e0567d2693413"
  },
  {
    "url": "assets/js/36.78a38a74.js",
    "revision": "54d2c549d4ca5b13515944fe1de85aa2"
  },
  {
    "url": "assets/js/37.3b128c8c.js",
    "revision": "99c70e8e6d291e61522543688cbc2414"
  },
  {
    "url": "assets/js/38.f10a6e76.js",
    "revision": "c6f08446eb220447475e4267f9a48eb7"
  },
  {
    "url": "assets/js/39.ebeea40f.js",
    "revision": "1a2c429a4c6128f132f62bfb0f469f8f"
  },
  {
    "url": "assets/js/40.02d08f08.js",
    "revision": "7bb2304f4264c09f16421d44584ce673"
  },
  {
    "url": "assets/js/41.343dc6d3.js",
    "revision": "eea0d90e289c5c65453395f8b7a9c521"
  },
  {
    "url": "assets/js/42.76b5d93f.js",
    "revision": "728cd8d60e9a274fadca316b3e1da93a"
  },
  {
    "url": "assets/js/43.62bb9f79.js",
    "revision": "10d75ac3d21fd8c70ac200c79772083b"
  },
  {
    "url": "assets/js/44.87561d53.js",
    "revision": "6244eb340f9d009746b77e7072ef36ff"
  },
  {
    "url": "assets/js/45.1e1cd32c.js",
    "revision": "7dbf8685bd81d1b31babe0fd0cbb8057"
  },
  {
    "url": "assets/js/46.179f27a6.js",
    "revision": "fe98c7f6b1dff9cc8bbbf39ecfca864d"
  },
  {
    "url": "assets/js/47.1294b4e3.js",
    "revision": "a507f76a9ec8f6676ca093c179891081"
  },
  {
    "url": "assets/js/48.cde72499.js",
    "revision": "f30357832b87ec477eca35a8619d0cfe"
  },
  {
    "url": "assets/js/49.45b86a28.js",
    "revision": "c16914e82b038c44e63c56c3078ed376"
  },
  {
    "url": "assets/js/5.9ac9aed6.js",
    "revision": "859c0999f9116634e7cedbec043031cd"
  },
  {
    "url": "assets/js/50.276e4d03.js",
    "revision": "9ee57b13ba0a7b217895038464997fb0"
  },
  {
    "url": "assets/js/51.936a0d79.js",
    "revision": "a5961f92a6b8918732e6eec7c20c1f18"
  },
  {
    "url": "assets/js/52.ef6e005d.js",
    "revision": "87b9cba36b92efef84491963b5b965d9"
  },
  {
    "url": "assets/js/53.51d50910.js",
    "revision": "10ce00f25350067fa1f68c8a15d87c1a"
  },
  {
    "url": "assets/js/54.4b51d1e5.js",
    "revision": "d398cf7ce0abd310965eb409f0347f1c"
  },
  {
    "url": "assets/js/55.c13cf8e8.js",
    "revision": "57d88ef75c47394d984a0740cb3a6d2c"
  },
  {
    "url": "assets/js/56.80908de8.js",
    "revision": "e07b149df76343501b4cfa434ced750c"
  },
  {
    "url": "assets/js/57.b694ffc7.js",
    "revision": "70e8b9677c13e9d4cf60e1aee27a90b8"
  },
  {
    "url": "assets/js/58.9071d110.js",
    "revision": "6419243fbd00700d857d4b936e0ea831"
  },
  {
    "url": "assets/js/59.683b6950.js",
    "revision": "d10ccf1d2fe3a322a745710995589cc9"
  },
  {
    "url": "assets/js/6.8e13aaff.js",
    "revision": "f09ca57bcf09ecbac17bda4fe1086f45"
  },
  {
    "url": "assets/js/60.134ce4d4.js",
    "revision": "491d459c586e961a468214bb4b7759a3"
  },
  {
    "url": "assets/js/61.427c3d52.js",
    "revision": "7ebf66b9669e0999bafc046f29253059"
  },
  {
    "url": "assets/js/62.ce9a0b15.js",
    "revision": "4893968f68d9748f04e80be9be57c556"
  },
  {
    "url": "assets/js/63.1f526ab7.js",
    "revision": "dd463ff746f0546fcfa2c75e9f7ecc6c"
  },
  {
    "url": "assets/js/64.3614b4a2.js",
    "revision": "bc0566f747890c8f13d54f88e9596ab4"
  },
  {
    "url": "assets/js/65.c7b00bef.js",
    "revision": "6aa0ebffc4624110f0aac4b64b262ad0"
  },
  {
    "url": "assets/js/66.673921d2.js",
    "revision": "3b68454683d7e6bd7a94774db6c4e3b1"
  },
  {
    "url": "assets/js/67.aa23a2eb.js",
    "revision": "d941bd6f1b90791e56a1b57b3879fa05"
  },
  {
    "url": "assets/js/68.8a01d7c0.js",
    "revision": "eb5782a9c9004444a7d562f78c35bfc8"
  },
  {
    "url": "assets/js/69.fc0d9d4b.js",
    "revision": "9bcd2ab5f3a75141a35f2812adc66e6a"
  },
  {
    "url": "assets/js/7.18f6d626.js",
    "revision": "d8009c42062bff0bde6e9cf93fe3fd2c"
  },
  {
    "url": "assets/js/70.215e878a.js",
    "revision": "96a4abd74d8642dfb7989995c8228efd"
  },
  {
    "url": "assets/js/71.4f2c3e0b.js",
    "revision": "2e1ee321b5ada5f0e0c8e92e4c5626ae"
  },
  {
    "url": "assets/js/72.c279aafa.js",
    "revision": "2c58287f8496dbf10f1c7dd2e54513cd"
  },
  {
    "url": "assets/js/73.fe8faed0.js",
    "revision": "634d4d432241ecc1e93ce5ea2eb96865"
  },
  {
    "url": "assets/js/74.e3ec7706.js",
    "revision": "a60b52bdd21dd17157b422d28b43b653"
  },
  {
    "url": "assets/js/75.da60a33d.js",
    "revision": "3aee44556af786fab19b35ca1d30727c"
  },
  {
    "url": "assets/js/76.989fbc18.js",
    "revision": "d9abcfaecb0aed262b3a9f0799e54c54"
  },
  {
    "url": "assets/js/77.54bb0c77.js",
    "revision": "d130ff85b399d906677d2f6871025a6b"
  },
  {
    "url": "assets/js/78.37e33ac8.js",
    "revision": "9506f1e22d9af0b28b7fa0ecb0fd1262"
  },
  {
    "url": "assets/js/79.d166a094.js",
    "revision": "2a36bdcb81f7ac00484c6e67a7b3c3ba"
  },
  {
    "url": "assets/js/8.b7cec3d0.js",
    "revision": "01b5d9baf91151087054307ebcb319cf"
  },
  {
    "url": "assets/js/80.963d8677.js",
    "revision": "adc7bf4443314e1368001ddbe208c5b2"
  },
  {
    "url": "assets/js/81.a2723ead.js",
    "revision": "2fc81f536a5d391c81b3acdc26bb12d0"
  },
  {
    "url": "assets/js/82.d3c123f8.js",
    "revision": "6a151bf31c5bc9832034b8e4b2f77456"
  },
  {
    "url": "assets/js/83.f748b9af.js",
    "revision": "bb3c8585caabbce8b287f67dd3a4104b"
  },
  {
    "url": "assets/js/84.bd4a216c.js",
    "revision": "25d80a2f47e3eea513ee17e5fb28c014"
  },
  {
    "url": "assets/js/85.f31245a0.js",
    "revision": "f504049d92d5e6bd6ebafb27eb5f1858"
  },
  {
    "url": "assets/js/86.69aabc0a.js",
    "revision": "5f769831cb12e10695fd43a47afbe48c"
  },
  {
    "url": "assets/js/87.7815754f.js",
    "revision": "4d0440491664b9ff166fe98628a75fd1"
  },
  {
    "url": "assets/js/88.ed7fab30.js",
    "revision": "5c77984da431718c02eb6ff3a1bd4910"
  },
  {
    "url": "assets/js/89.858e0f31.js",
    "revision": "80722edaf12dfcdaaeb7b85f9d68e2da"
  },
  {
    "url": "assets/js/9.e0790ffb.js",
    "revision": "4ac6c2e11aecb70a14451a3ab4827fc1"
  },
  {
    "url": "assets/js/90.f8e64c77.js",
    "revision": "47f019f2d8f9c5a20aac94a8c26405f9"
  },
  {
    "url": "assets/js/91.8cf34a7c.js",
    "revision": "07701698cb3fdd3f2f23a5e506c1ed60"
  },
  {
    "url": "assets/js/92.d969bd3d.js",
    "revision": "cdf1b1b5ccee9c8e537b535dd9139722"
  },
  {
    "url": "assets/js/93.680d1a32.js",
    "revision": "22aa058e26265cbe54f71339eb6b247a"
  },
  {
    "url": "assets/js/94.9dca1a4d.js",
    "revision": "5e0e2f826e576b02527356ee82371904"
  },
  {
    "url": "assets/js/95.e3ad2502.js",
    "revision": "4a9398533d8863e9eeabfd907bd34cde"
  },
  {
    "url": "assets/js/96.d9cb6932.js",
    "revision": "76cc9599d47218558bcf5d83529e8f13"
  },
  {
    "url": "assets/js/97.ef7d9ad4.js",
    "revision": "28d92dc6ff9d2a68821a8dff59ca706a"
  },
  {
    "url": "assets/js/98.77b723e5.js",
    "revision": "44e572c8ac42e5d6185be0dc4a4aa0a7"
  },
  {
    "url": "assets/js/99.79a6d697.js",
    "revision": "ced7a3921939715e88ca1d10c49db411"
  },
  {
    "url": "assets/js/app.f174354b.js",
    "revision": "108b23482933b54272b4c0232eb8f11d"
  },
  {
    "url": "categories/index.html",
    "revision": "cdcfc422c8200d5bc2e836fc9aed9b34"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "ca18d51ce513ee19e2cd103ff2c570a5"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "042955c83089f4b29286850e57e2bbb1"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "c4acdf793a8ea0e26dd58ef2b23d64d9"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "462b2621215e2958199028611b8322ff"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "9934bb879d7656454a5950df9a2e0bbb"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "2997afda9695729c01e88401e9b3b31b"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "48a2f2547ab9d018de60d6ec31ba738d"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "7003fc5a0ed1b4105c8113ab4b79d8c4"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "7f9b4d67671180db711d5adafc4338e7"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "920d92d42ce421a146d0a511262e46f0"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "042955c83089f4b29286850e57e2bbb1"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "1ded7f00f91eaec6c16ef38782ff969b"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "3dd1f50b0b7ad5b6e4cfda5de7c01e6f"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "f3a06b5cf246caf3d7874bb90bc71c30"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "749943229323182a541e5c6a880f6729"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "717652cbe419cd679954ede702d9c071"
  },
  {
    "url": "cs/database/index.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "089c4f284a656c9aac007f6e31c7752a"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "cff1e8a14e18058e57d295be3917e542"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "9fefbf8d3f04a4c0143d515a9b554689"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "4a439a3a168c094ebeb7cfeb0d135853"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "d519bdd5aa290102600e8c9090ab1cd9"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "35100be78428ab214c22e906f28b4f56"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "ec1945360559d0335cbf885a0dd0443a"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "4333d04050d0fd7ca74f97bfa80d2df2"
  },
  {
    "url": "cs/design/command.html",
    "revision": "93edbad69140ff43f20f3e5c4cb337ac"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "46664b5f5ffe4562897ab2e3d7d7d336"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "52e73dec42fc2262b7aab2c4e165fb96"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "560b4e6cccef262c30eb0dfd392d9fce"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "c55dd4ed2c0164df24895103a57ac758"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "e5eae7f237cc21c496f65c430b35e115"
  },
  {
    "url": "cs/design/index.html",
    "revision": "b6755396d77518eeccba7e40bce4d998"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "7af1f67dc47a3941842533565fb0559e"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "dd4031a6decf233588ff6da61fb105f8"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "c047218518579bb4e4ed54fd52acb12a"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "2978b7018e2d454f51d7cd5206742a53"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "38630da55e1e5d01160c8a7f2fbe76ce"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "10badefd65b23721a522eeb739ffa981"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "e5961d4c8efd49b076372bd43d78157d"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "0aa443e0b541cbcd73f12c537f682f5e"
  },
  {
    "url": "cs/design/state.html",
    "revision": "a2933109dfae33f73924b1ba7a454e33"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "7566c10f899b09f7b4891eb917eb4ac1"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "813ccd8f6b93e2d4643e98e6dc2870f1"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "e30afaaf4c26bb2fc18de9098934bc41"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "5e482b7e365ff83f5bf596e6326f8928"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "47019e56288aa838b8d414f21cf9d892"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "a34ba6b1f3f27b18e9b977cec1b81adf"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "b8d9eb819dc0d39022496e8098ef56f4"
  },
  {
    "url": "cs/framework/vue3-reactivity.html",
    "revision": "1686c379069319052c239643afe7a359"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "4e947df3fc10c358ac560f76d26ef3cd"
  },
  {
    "url": "cs/index.html",
    "revision": "f215beee3a4e93960cdc4c99f9f0e45d"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/java/container.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/java/index.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "f7d792dd7a41957e780bcae41a4a9d57"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "20b8da797ec12877dd4377931f1f7147"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "242daf606f831997905a8b576858e824"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "87bb7e498bada91a79f61c9eb856c4df"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "110df26e73e5ce966d2c8d48a3c7ecfa"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "1fa7aa0f36fa3412d10170974d7556d3"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "d64cf8099eb2f39bbf209ec9e17f4d6e"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "6a45a44c4605cd11fec2be5caf8d1208"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "80481ed500842bfd5575598b563b8900"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "c9fbedc9c263d1c5ef36abf0636914ed"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "764b286a38ba9837ad0c6d913046b814"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "2635f2d63c2c82d7579fd731a9c3f966"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "867970a4a3c00627e8a2c2c1a9b17561"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "09116f2341f9a63469ba5f2ef162ebe2"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "6104ed282ee490642f5f7ecaab735e77"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "b9c1a12e9eda5990cea32f6b9ca1fe5e"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "04eec1290672ac83d96a16c22a648046"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "59a53da66f0c4acc772e9bc841ea13f1"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "6b96afdd4b45ad01a7d614508e14813c"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "cc90544961fa6d995fd8cc97b0d484c1"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "6a2832ff1765a7111906452334ff26a0"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "096048a5ddde86773af658d3118680ba"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "b0cee2444e919e9ea1a2789b45ede6e0"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "96499677ea7784e43a3ad59819117d72"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "ff7a3c3b49f5dccbef31944d953483ba"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "fb9176e4791b2815c9caf8f0b1acfcc7"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "8648b73de52096e2da4bfc288dca084b"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "82e9121afa5dccff4764723028f34f1d"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "f4bae600fbe6f5b48dda8d29d75374fd"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "9cb480748221cde204d3077cc19a5f73"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "bb0654a7483e8c10ef5e03b2281dfc12"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "e32b0b6893d915edbc7e0bb124556db6"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "86c62fe6aefaba1a0addb2243985e1f5"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "5b9a0d58dede0e00e3f3e3f5ea4b1c87"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "94e000ca5c9eb2b5dcd05c5d5dcbb885"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "1d48d40358ff4e084c2d0b8c04cf1d19"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "c1bf9ffb3dc1af81aedd5aa7796ec828"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "aa37534c0aaac4c0fe5b20f5355dded7"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "f3417a665da806e5a1df78435cec7141"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "c671575a75f15219158f5faf6a1f01da"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "cc8684082fdeab8fea79899b8a7ff797"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "54434747b4332ce3b7dce884e2add6e0"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "2d1258a14afc6aefc3582c58dfa20d7d"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "22326f2e5c61ee283359f0e2c3faccfa"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "2ba8f3ee4ea11965925dd8ef7686596b"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "ec92a4a00ac768f5fe909d6774e86948"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "db64f75b97256664ea7c4e63adcf8140"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "6c53d767d4626c78f0e4eb6380d7b34c"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "941949436b80fe9babee58e7549bbe4a"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "12b1a7a66c981c4d1913f8b6b9893922"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "4f3e21f2da7ff141dacbc771f3c6e270"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "ad3a811ff97eb34e694449fc51d2adf5"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "c7b4919273afe39159ea829b7a51fbb7"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "3766899699585af4ebacc37d6c786e09"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "37c4c50a174f947e3fc74f666b3b7ab7"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "4221243a689afea7c031f481f52861b5"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "1b85c02333c68f510bf97f5f9b44c304"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "0903dafeb9492d93e098b4165002d205"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "e80d20b9dd4ac680be52c859ae57f523"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "ef5964b69cca95ed8b0260bb33c2a255"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "02ce2061ee5ac7e17f47e1672cc960b1"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "376f48e0f4aa2831f5ca5f969d133f80"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "9172a29a88d5015f76e4ce275e6545e3"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "cbaec8b69e075502124daa4f619e13a0"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "09e902e9a402a6f6f6fb35fac186e1a9"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "b3c262146b058e4c5052f96d39d523fb"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "7e67d33d65714d7f8d2f526c080b6486"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "299922ca42e93489f7789ee9bf3bc10e"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "6d08655d14dec0d1c12b05d405a06d68"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "dcc726ae0e2656312c1f38cc29323722"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "9ead2c540ebbf0c66aa8554d6f383618"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "70ea79d9eb47cba71bf25251a771e51f"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "664e94478781c57d7937c798fda31500"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "7068c2f699c698c2b9f7bfcacd6eb9ec"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "e9bc102bd0a76d39a974725d49137644"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "294639dda47306fdf2d3025a509e1d0c"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "0e797c6ff6cf38c3cd5e9f4e218af0ba"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "1e5c498d76acfe148ade194cf40b7701"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "75975b3cb854ff85a5969f203e76e9ef"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "a99d4bbca155808fa374955738cf747d"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "98205e518221c991a50909be3b6c30f5"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "695364536e7104e19db754fac321a45a"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "4b3b0e243eed3707e70f8b005196e672"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "194f5b6b348e6f73dc0bf332bb18c2c8"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "22326f2e5c61ee283359f0e2c3faccfa"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "9f25e9c07a42660645b40b37ee10f3a6"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "2b29dde7583150e2e78f4e43711cf5d2"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "042955c83089f4b29286850e57e2bbb1"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "b0276ed567721b44bca0cce6d6189e5c"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "aaff18115692a1b6a6e0840a3390200c"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "b18ad482fbae2349fdbf51be90be40f3"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "d747e9b938cb6c9c0eee030bf71f72cc"
  },
  {
    "url": "cs/network/application.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "e9c8155e6afd33eedbdb23bee844a681"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/network/index.html",
    "revision": "042955c83089f4b29286850e57e2bbb1"
  },
  {
    "url": "cs/network/link.html",
    "revision": "6455587ff86400feca9b2615c603ea8a"
  },
  {
    "url": "cs/network/network.html",
    "revision": "57e77c60710755c377c0515257e4daa5"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "3350c80e67934d8de7d2c01aa11c144f"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "09f470e68fc539c87bdeb4146b28a8bf"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "0734a73161a1c8876175bd493bdc8d10"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "26ac49058af14711603250cd49eeefa6"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "0ac0a59a61d1dd19a5b9eeab5da4f05b"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "042955c83089f4b29286850e57e2bbb1"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "e46e45d0c50b46e8517983fc5225edb7"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "ad6b0c8c40d5dab99a838233763e13ac"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "63e108cb9745f7725472453ae6545df2"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "32ff2cc9137001010091530318c2562e"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "f7d792dd7a41957e780bcae41a4a9d57"
  },
  {
    "url": "cs/web/index.html",
    "revision": "6c49cd38b729be90a13db3ae37e3e00d"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "b195221520b8d7d34f1aa53aba46a763"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "bf65b6e290262526614b0abb79d11393"
  },
  {
    "url": "cs/web/web.html",
    "revision": "aabb44944ca08aa3b8765b516fa5ca73"
  },
  {
    "url": "daily-life/phone-lost.html",
    "revision": "e5957791f17d56db96ad823a44468468"
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
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "5da58840ea6dff1652351711de242c38"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "81ea0b82e34290da081dabdc63efe2a7"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "cc9182246ca1d7825f8660d18d5495aa"
  },
  {
    "url": "language/english/differ.html",
    "revision": "0c43866ae043d30dcbfd3f925ffb36c1"
  },
  {
    "url": "language/english/index.html",
    "revision": "20b8da797ec12877dd4377931f1f7147"
  },
  {
    "url": "language/english/modal.html",
    "revision": "7946175a46e1b9fe5e771a5bd793a0a4"
  },
  {
    "url": "language/english/mood.html",
    "revision": "4fb556305673232be742290e7b8fb954"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "1c0ea0fdccac07992843c562726b8298"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "599bb0988a279d9c63f02c5f186c6494"
  },
  {
    "url": "language/english/phonetic.html",
    "revision": "3f7cc769c46be9142de13f4023081896"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "33c26d88363f3d1523cf5e37dc5e67ae"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "01b4dc99dfa2c04da4244d9f2e9fe4e1"
  },
  {
    "url": "language/english/tense.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "language/english/verb.html",
    "revision": "744226980f530e50da8dee352c3af7af"
  },
  {
    "url": "language/english/word5000.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "language/index.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "tag/index.html",
    "revision": "7c84a79785abde5e94742803dc68a379"
  },
  {
    "url": "timeline/index.html",
    "revision": "c091e9efa638684b54801da9ac261c13"
  },
  {
    "url": "tools/chatgpt.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "tools/gpost.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "tools/hash.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "tools/index.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
  },
  {
    "url": "tools/test1234567890.html",
    "revision": "d196d9ee19bbdec34fc01c41b4b9f303"
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
