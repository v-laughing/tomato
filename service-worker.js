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
    "revision": "93c80d90772657e57a09a9ecbfa7793c"
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
    "url": "assets/js/102.5cb21954.js",
    "revision": "c83e1eae2f019dedc2378aa252e367d6"
  },
  {
    "url": "assets/js/103.c6cd7cea.js",
    "revision": "4263b8a8cc461bb02c1ebdac9cd68179"
  },
  {
    "url": "assets/js/104.bff85412.js",
    "revision": "0e8c66ecbc58702bcd86fb2f1493acf0"
  },
  {
    "url": "assets/js/105.96f7c291.js",
    "revision": "4f2f8ca7ecc380dba6b599ad3f18fc2c"
  },
  {
    "url": "assets/js/106.e8d482e6.js",
    "revision": "b39f41e979a9063ef6989e86909a4924"
  },
  {
    "url": "assets/js/107.ecad95ca.js",
    "revision": "b6bc7f5df40408f56108ecc6fb845429"
  },
  {
    "url": "assets/js/108.5f6434a5.js",
    "revision": "cf0ccb1bb92db8e9b1c987bfa603c8c9"
  },
  {
    "url": "assets/js/109.164618f7.js",
    "revision": "e1014f1c1df1f735745dd51b2775f56f"
  },
  {
    "url": "assets/js/11.f3f6270b.js",
    "revision": "965a3c12166e064baae34e00544dd5bb"
  },
  {
    "url": "assets/js/110.0af52477.js",
    "revision": "a3bf705aa34496a7447966d2c5d6b728"
  },
  {
    "url": "assets/js/111.bbd85925.js",
    "revision": "52a628e535495d3f23a21269edc76636"
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
    "url": "assets/js/114.766b0a23.js",
    "revision": "099316e6d125d329659dc1b11242bce1"
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
    "url": "assets/js/118.bf5f54ea.js",
    "revision": "f3487180de7c777d7d3faedb09dbefa5"
  },
  {
    "url": "assets/js/119.bb611d54.js",
    "revision": "0c675ee9229e63d2019af91fdcb85209"
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
    "url": "assets/js/138.f887ae19.js",
    "revision": "682d01e915dd5d75ec84a801b3767812"
  },
  {
    "url": "assets/js/139.b3878997.js",
    "revision": "1d88f220fa7707eda6f0c8a0cd0aee49"
  },
  {
    "url": "assets/js/14.3b61c2f2.js",
    "revision": "2932e6175c99810fd39be790a4d1e18f"
  },
  {
    "url": "assets/js/140.bb37b4e1.js",
    "revision": "fd378e8999375e356797031a3d4fdf64"
  },
  {
    "url": "assets/js/141.8713371b.js",
    "revision": "cbaec9b0d8b5108e3764ee5205c51a8b"
  },
  {
    "url": "assets/js/142.e4eb2d0e.js",
    "revision": "08ccdf468473451716e5341fc6ba6cdf"
  },
  {
    "url": "assets/js/143.725b403f.js",
    "revision": "45fafbe7c11575796398d5edfb96edd2"
  },
  {
    "url": "assets/js/144.21a85580.js",
    "revision": "a3de11825f379ddd2df78ae95d130f17"
  },
  {
    "url": "assets/js/145.fb70042b.js",
    "revision": "4ddf0d8de0741e2fd4f7ba97f1336596"
  },
  {
    "url": "assets/js/146.3754d673.js",
    "revision": "e9f76a3dac04eb9a46a0257d3d7606ef"
  },
  {
    "url": "assets/js/147.22359ed7.js",
    "revision": "1ef141c2e5343580edccf1f919a9168c"
  },
  {
    "url": "assets/js/148.73b36f92.js",
    "revision": "c674ce7e0f83376fdcbdbf9e95e0a2ba"
  },
  {
    "url": "assets/js/149.01624edc.js",
    "revision": "a44a985e11e0cde79b8074f58deaf703"
  },
  {
    "url": "assets/js/15.cb0b96aa.js",
    "revision": "776d36c27a6ec2133fed1d77a8a8ce8f"
  },
  {
    "url": "assets/js/150.88624bc3.js",
    "revision": "c2236174ed319456d5e6f2d1f18497ac"
  },
  {
    "url": "assets/js/151.ebabdc4a.js",
    "revision": "5838cdb24696aebe665ef3e7b374a203"
  },
  {
    "url": "assets/js/152.a3e12947.js",
    "revision": "ca0445fe581c073ef7cb4cd96a77e98b"
  },
  {
    "url": "assets/js/153.03b0ff07.js",
    "revision": "1baf5fb99970082c52a3388a6b361022"
  },
  {
    "url": "assets/js/154.56a313fd.js",
    "revision": "bd5c7ef9cdb5ba143c2c5bf2ad0c27d1"
  },
  {
    "url": "assets/js/155.4743c621.js",
    "revision": "f4d2c0e7b9097001c45e7666d744f4ca"
  },
  {
    "url": "assets/js/156.38507534.js",
    "revision": "29e9026de5d7534563e95948f85e5a32"
  },
  {
    "url": "assets/js/157.6880daec.js",
    "revision": "27b7d4c3d57064c38865ecd352ff6706"
  },
  {
    "url": "assets/js/158.98662da1.js",
    "revision": "debe901cb00a8dbaae6320c26cd42968"
  },
  {
    "url": "assets/js/159.d7969780.js",
    "revision": "30b0a6d1b6b7804ef62e97c4e49ab7f9"
  },
  {
    "url": "assets/js/16.6b5d3806.js",
    "revision": "48ff11247598cae354dfbd76c0d20172"
  },
  {
    "url": "assets/js/160.bb883a61.js",
    "revision": "ab1ddabdb39e7d6c0015f34292538f33"
  },
  {
    "url": "assets/js/161.14ae9767.js",
    "revision": "dcea86da63e5aeb0f026ca4bbfe4e9a2"
  },
  {
    "url": "assets/js/162.2a9277bc.js",
    "revision": "5944acb7da293e15cbf12b6c99ec8b57"
  },
  {
    "url": "assets/js/163.bef1c77b.js",
    "revision": "c27cd7b1531065fde3c5b470f7842ecf"
  },
  {
    "url": "assets/js/164.805eba8c.js",
    "revision": "1e6bb1a892b27e545121ca5062d8fd8f"
  },
  {
    "url": "assets/js/165.2fc6e59b.js",
    "revision": "1d2dca1124452c8bfbbbf84d80fb1065"
  },
  {
    "url": "assets/js/166.831810de.js",
    "revision": "abac2a643c6020d3edb043a7914d3847"
  },
  {
    "url": "assets/js/167.d4abe656.js",
    "revision": "3b666e4249050089eb883e7d3eec7213"
  },
  {
    "url": "assets/js/168.0eecedcd.js",
    "revision": "0307028e5b7272732626e81bc07525f7"
  },
  {
    "url": "assets/js/169.925cc81d.js",
    "revision": "cd34be25a06dbaa2aafaad5a72bb93ab"
  },
  {
    "url": "assets/js/17.88730efb.js",
    "revision": "6310c9fee0407577fe201f0f6fa90466"
  },
  {
    "url": "assets/js/170.f775b4dc.js",
    "revision": "43096cbeb68c8878a0f89d3fd1c83087"
  },
  {
    "url": "assets/js/171.a6ad2130.js",
    "revision": "4620ba6a534deaf61b065ac53eb852b7"
  },
  {
    "url": "assets/js/172.1762e9da.js",
    "revision": "0cf313818536fda74b76a1bb8aa4b10c"
  },
  {
    "url": "assets/js/173.99da8d4a.js",
    "revision": "68aa87de1df3786cde13979a587e6036"
  },
  {
    "url": "assets/js/174.2afc57ec.js",
    "revision": "22fa043b4c32cec21cb910c7495a5672"
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
    "url": "assets/js/18.ddbb34c4.js",
    "revision": "c27132a6d98514ae6e74e69da3dd075e"
  },
  {
    "url": "assets/js/180.3bee642b.js",
    "revision": "a84c1b608463f1f091a2c6b6d4bedfc9"
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
    "url": "assets/js/185.da1558c6.js",
    "revision": "c22d9db6898b92db7d5e78b45b2b71ff"
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
    "url": "assets/js/206.550cf0ed.js",
    "revision": "08108f9734f7e80e9bcd55de14b17f66"
  },
  {
    "url": "assets/js/207.5936edfa.js",
    "revision": "06e88350a8e554848269a6ea96503c25"
  },
  {
    "url": "assets/js/208.ecb70b8d.js",
    "revision": "331272950346b0e4b55d7db0cae8268a"
  },
  {
    "url": "assets/js/209.d90b1595.js",
    "revision": "d3816d66837378313f2989e141e6921c"
  },
  {
    "url": "assets/js/21.19821816.js",
    "revision": "4d33748c42ef5aacaa27a3eba51d5b29"
  },
  {
    "url": "assets/js/210.83558421.js",
    "revision": "84b84e96202a67241b93839f7ce588f3"
  },
  {
    "url": "assets/js/211.557c3552.js",
    "revision": "0e01c40fd71acd7c95e78d48444f08fe"
  },
  {
    "url": "assets/js/212.c50129cb.js",
    "revision": "884ed8a2371d65c5cbbd1020b2e2267c"
  },
  {
    "url": "assets/js/213.cf971f98.js",
    "revision": "ebb0a3a9a4f50b9025d48292777926bc"
  },
  {
    "url": "assets/js/214.fe858d9e.js",
    "revision": "ad242206281da1dd63f6f86b15750beb"
  },
  {
    "url": "assets/js/215.0bbb668c.js",
    "revision": "0cbb2726010fffe0be4003c62f35ff00"
  },
  {
    "url": "assets/js/216.93b970ca.js",
    "revision": "bd9ade2b79743727137db771e00bae67"
  },
  {
    "url": "assets/js/217.2d887578.js",
    "revision": "1c0bb2bf0d6f093c56b049042527075a"
  },
  {
    "url": "assets/js/218.0717a96f.js",
    "revision": "6e3c5c3c6bba6566519821307e2817c6"
  },
  {
    "url": "assets/js/219.fa431b87.js",
    "revision": "b3241953e3815502b70e2238ed2c0167"
  },
  {
    "url": "assets/js/22.ec49182a.js",
    "revision": "8e05d4d862afb8ff9730cfdf2594f160"
  },
  {
    "url": "assets/js/220.5a6e7cd5.js",
    "revision": "131edaac027323cd29052f82a9d7b349"
  },
  {
    "url": "assets/js/221.d0d4767b.js",
    "revision": "61615711902d1adc7619384487d5c4a7"
  },
  {
    "url": "assets/js/222.c40215ab.js",
    "revision": "336c01ad9ef20b657692f0d99ce2c491"
  },
  {
    "url": "assets/js/223.9a3d6eb9.js",
    "revision": "765a6d0f42c9eaa70f5d71ef5f704f4d"
  },
  {
    "url": "assets/js/224.83eda3dd.js",
    "revision": "d72053c62e8a00138becdb2729c0325b"
  },
  {
    "url": "assets/js/225.fb783de0.js",
    "revision": "0ff7d9c71837fdaa65a11035ff2f1127"
  },
  {
    "url": "assets/js/226.0e4264e5.js",
    "revision": "b9a766b4a7412e3d3c1fcfd54da90304"
  },
  {
    "url": "assets/js/227.f9c42523.js",
    "revision": "e0d908bee4924477068fef21703b558e"
  },
  {
    "url": "assets/js/228.825e33cb.js",
    "revision": "d852b95ba9a11a42c123d7773498c328"
  },
  {
    "url": "assets/js/229.f5111376.js",
    "revision": "92f984b2020ac126e98a4adf7673fd72"
  },
  {
    "url": "assets/js/23.a80accb1.js",
    "revision": "e41d7215d6001a350cdb65e498dc1b32"
  },
  {
    "url": "assets/js/230.6f24bffc.js",
    "revision": "32945dbdade3e321a0de29b016470e06"
  },
  {
    "url": "assets/js/231.75ecb8c3.js",
    "revision": "5aa3d51be32afee6d530c956cdd0d764"
  },
  {
    "url": "assets/js/232.c9391892.js",
    "revision": "daaca7e321b8bcbbf641d1be7def950f"
  },
  {
    "url": "assets/js/233.f6f1b44b.js",
    "revision": "94b21cc8925e0d31c345a59a561060d8"
  },
  {
    "url": "assets/js/234.c3632c6a.js",
    "revision": "cfc8a3570c636007cf5e9a8ad06d4b08"
  },
  {
    "url": "assets/js/235.fbb097e7.js",
    "revision": "7819f1bfb5a064dc1567363e36760cb4"
  },
  {
    "url": "assets/js/236.5c5969be.js",
    "revision": "af2f753e081ef3e64bf180f19f99392f"
  },
  {
    "url": "assets/js/237.eaa87ec1.js",
    "revision": "5bfa61a6cca40025b6b6b6dd11f3c1d4"
  },
  {
    "url": "assets/js/238.435110c8.js",
    "revision": "764e798cd476fe68710b7071c85c0a9b"
  },
  {
    "url": "assets/js/239.dc9bea10.js",
    "revision": "4b94a1c2478b60ec85f2371e456d53f7"
  },
  {
    "url": "assets/js/24.4b7f2d15.js",
    "revision": "e05ec791cd8378a67bb04fd3b2b03d78"
  },
  {
    "url": "assets/js/240.a056aa21.js",
    "revision": "b5e93323b4b44e4eb59efbf590272eb5"
  },
  {
    "url": "assets/js/241.e9eb825d.js",
    "revision": "aff16a11a6692ef4a9b7f2a713f95757"
  },
  {
    "url": "assets/js/242.63288f67.js",
    "revision": "a28a7c09f4ca80e7925cffb6eeeb3304"
  },
  {
    "url": "assets/js/243.8b6fd19f.js",
    "revision": "b1908a77aede28b5f95c21ce03f9c263"
  },
  {
    "url": "assets/js/244.902b34cf.js",
    "revision": "a5c7b96166ac9abf630034d7d776d4fc"
  },
  {
    "url": "assets/js/245.6d166857.js",
    "revision": "26c4e1322a47463f63b9ddaee845d7ec"
  },
  {
    "url": "assets/js/246.2d17f058.js",
    "revision": "1f7114f9c02bf7ad476f9a7ec89d8719"
  },
  {
    "url": "assets/js/247.6dacf1fc.js",
    "revision": "263b9da140e60a55f81b6fa7bac4c80b"
  },
  {
    "url": "assets/js/248.cf9954e4.js",
    "revision": "0231e6511a2c6a20880104e6e93e18aa"
  },
  {
    "url": "assets/js/249.dcc535aa.js",
    "revision": "4ffe0cb567e7bcc431c04ceaa5677655"
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
    "url": "assets/js/251.c9b09544.js",
    "revision": "bcb33e60f531230dad0eee6430457d87"
  },
  {
    "url": "assets/js/252.f290419f.js",
    "revision": "7a80c2447b387675f0ef331fadd6d001"
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
    "url": "assets/js/255.a1e9469f.js",
    "revision": "430f6163d7a17e6430d2d5c8d73f0d98"
  },
  {
    "url": "assets/js/256.df7ec011.js",
    "revision": "ba4a1c712ed9d26cc6239b228b40eadb"
  },
  {
    "url": "assets/js/257.0d6c6182.js",
    "revision": "2ec88c50ac4b0bc506df8fd3b41a5e13"
  },
  {
    "url": "assets/js/258.79f92c12.js",
    "revision": "5a28480a0c42e105d62e37aa9e38ba50"
  },
  {
    "url": "assets/js/259.182358dc.js",
    "revision": "e86472f9441f92625da7d6fd0216bb79"
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
    "url": "assets/js/261.03a1d4e6.js",
    "revision": "a7331aa4a0ff598d745f7c1db459bf07"
  },
  {
    "url": "assets/js/262.986730c9.js",
    "revision": "a382b5bdaa1cc1cb6323cef319608dec"
  },
  {
    "url": "assets/js/263.4c4d1056.js",
    "revision": "91a725be53b82f8bc7140e7db20d7e68"
  },
  {
    "url": "assets/js/264.7755bd67.js",
    "revision": "ed94b69605822b997f7aaf36a893f755"
  },
  {
    "url": "assets/js/265.00cebd4a.js",
    "revision": "cc685bbdb1173f6e24abf198f529d140"
  },
  {
    "url": "assets/js/266.92a70af4.js",
    "revision": "ac643cac41c7e96ecb3ffee3dec089fa"
  },
  {
    "url": "assets/js/267.97e263da.js",
    "revision": "3de96122c2067f22cf4986dc27519520"
  },
  {
    "url": "assets/js/268.49cb8a81.js",
    "revision": "9fc450afde6f286b0c83828e1ec939ee"
  },
  {
    "url": "assets/js/269.071798bb.js",
    "revision": "a47426e18f1cddf2cc386af8050d42e7"
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
    "url": "assets/js/271.cbbbbd81.js",
    "revision": "469e98fb290a6aa66c70fc46dad33820"
  },
  {
    "url": "assets/js/272.94d6c250.js",
    "revision": "c23536f9b14cfe52d252e223ed9996c6"
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
    "url": "assets/js/29.fe692619.js",
    "revision": "c3f9668c08ab67cd34810aacac8e2501"
  },
  {
    "url": "assets/js/3.fa67b9e4.js",
    "revision": "c8c581f4ed820891f9d8edd10c56e53d"
  },
  {
    "url": "assets/js/30.70d6fe88.js",
    "revision": "1ee772c6304716d54e1375823a0d583f"
  },
  {
    "url": "assets/js/31.fd8d9eb8.js",
    "revision": "a24296f6a1d289c2e56119b35dce4f42"
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
    "url": "assets/js/37.472fda25.js",
    "revision": "ad1ca27567ae1a2893c601a911f7639d"
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
    "url": "assets/js/42.f67545ee.js",
    "revision": "603eec2ea0e5ee56b9b63e414678bb66"
  },
  {
    "url": "assets/js/43.83094979.js",
    "revision": "95408cd592a64336f8289313068ac9f2"
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
    "url": "assets/js/46.e0b1752b.js",
    "revision": "47dc1fda6e9639c167e48754605e7be0"
  },
  {
    "url": "assets/js/47.fced33d7.js",
    "revision": "fbdaa35d02f63b6b82b1550ff3d7dbf1"
  },
  {
    "url": "assets/js/48.7e9e0948.js",
    "revision": "54077485f861cb755c98e6c737b906ad"
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
    "url": "assets/js/55.bc4a4cc6.js",
    "revision": "3099294668646462fdbc000386ddc0ab"
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
    "url": "assets/js/58.c58d2b5e.js",
    "revision": "1e96ab91058aeadad16c4961953ed7b3"
  },
  {
    "url": "assets/js/59.e7e7dfa6.js",
    "revision": "4a7c7e538fbfd867a6d67d9fec62704d"
  },
  {
    "url": "assets/js/6.337acab9.js",
    "revision": "aa1b032a80dbe7338b82f3cc4e43b875"
  },
  {
    "url": "assets/js/60.9921d579.js",
    "revision": "1aac2ce59b94e4f4cce30a523966f52f"
  },
  {
    "url": "assets/js/61.3451f341.js",
    "revision": "f6d43661ebaf12a200fcf039119776b5"
  },
  {
    "url": "assets/js/62.80d5b4c0.js",
    "revision": "5b4d02872386c938f6a7e4296f4a8573"
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
    "url": "assets/js/68.f03ef310.js",
    "revision": "d048c8dfbff4e0d3602c27e1d3d1dc67"
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
    "url": "assets/js/70.782bd197.js",
    "revision": "8801d52963bbccafd0a1962176c8c5cb"
  },
  {
    "url": "assets/js/71.d8415b2e.js",
    "revision": "15931ac524c095ca9b9a5dbe00746225"
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
    "url": "assets/js/76.12d58088.js",
    "revision": "1c9ea44b21ed61621bbc4302a10684aa"
  },
  {
    "url": "assets/js/77.8260a07e.js",
    "revision": "99158f3272a00713ee1f5f848fff2de3"
  },
  {
    "url": "assets/js/78.b1985945.js",
    "revision": "e82ac8c50ec633c3f8091f0078e24b02"
  },
  {
    "url": "assets/js/79.76ea1517.js",
    "revision": "8ea9fe7c23542279472fec6946a80c49"
  },
  {
    "url": "assets/js/8.b7cec3d0.js",
    "revision": "01b5d9baf91151087054307ebcb319cf"
  },
  {
    "url": "assets/js/80.c485fb74.js",
    "revision": "3a87e1ac39c1f0214efa495c96b0af4b"
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
    "url": "assets/js/92.ed209489.js",
    "revision": "a0f2ccc160f1366be710e76523874264"
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
    "url": "assets/js/app.b0536713.js",
    "revision": "539c22b822bd3b6fea1fdece545e7768"
  },
  {
    "url": "categories/index.html",
    "revision": "75a68bcab87acf8061490aca21241b97"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "93be4640a2ca82a68e88cd0f645bbf0e"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "03b2ef4a87e42495a3b17c00a85570b6"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "c5e45981198d4c25e47dbd0d9cca9334"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "1e7c5aeaf507d7aa2f941a5d16ffd247"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "f6282cb919681470b3a1c927e57c24fb"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "ab190628a34e5611230bb232d06defaf"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "60dea55f022ac6652ceb5f024e4bc4ca"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "bb22c769e5f5c540f03bce8dc49e501c"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "115994b24be352c95cacdc189396d747"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "658004cd7633d83456ca721ddf1a3278"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "03b2ef4a87e42495a3b17c00a85570b6"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "309fe1bc214950e3d593f3cad7c33678"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "6930f7fe30c0c37ffbc86d6022bcd478"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "894bea776a771a1c58d412d79ddc6097"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "331fdc79830714fc4cab1544108f5ee4"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "8602e0c6393e25934b54ececa25b625e"
  },
  {
    "url": "cs/database/index.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "1b1d3705a301f1d39ad46e536cf46629"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "f6a80f6e3016daec584d5880116ed945"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "df8291c8ffd694242c42c79d59acb3bd"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "66c1ddb1c8fc8a92124407ee5685b8ee"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "281718ed0e135cd1a4cae28b1df70e13"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "73ff42c80d883ff2b5564f7ffe903fc3"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "b4eb1cf905f34703bcb75db2f7789eb4"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "18e8c9c8bdefa9edaa31f1d29151ee8d"
  },
  {
    "url": "cs/design/command.html",
    "revision": "f6bef91ba8729b6ecee81589b6aea925"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "245dfff4697e2b991219ee14a7702f6a"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "865691f42fcc1c3f3dda1dd7d9b8e252"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "00e0b917dff1463475d58cb2589d670f"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "a959f8470a1542e19a68d7ad85bc9f12"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "eb80810b98a2f16ac03ccc860cae4892"
  },
  {
    "url": "cs/design/index.html",
    "revision": "dcf04246cd9aefc032f3bd3686725cbf"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "a699d1a97dd931b2caea99883054d1e1"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "615277104353d05f1aa15bd4164c5e3f"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "3cb1cfc4db9cc3936af320bf7761fc54"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "a141cd9c1de56055b88b02d3c050db71"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "789c8aefe4d59419633816030f52904a"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "4ad7b8d453fdab5acad754b4acadd160"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "7a8661d652f82ea6b048d4e6e0a50e77"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "f3bb415858294a6ff3c7dff5502cb594"
  },
  {
    "url": "cs/design/state.html",
    "revision": "b852293e6e45ff37f0c12a171895afca"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "69520a3494fe0099456f2190b44c4d83"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "6c607f50e60528b1e5b0cad70481621a"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "ac867c0b9f870b7176c37852cdb89720"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "d12b64f0d762ce1e8204a5414836348c"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "8b359cd24b823192649e443fa2bcd5e0"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "cb02a20dc167b52fb97b30d0e67c3f7d"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "438233da42b4d0cc85fb046857dc04ad"
  },
  {
    "url": "cs/framework/vue3-reactivity.html",
    "revision": "77d8e484452d7bc3b2e1117e61605192"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "39197271197b36d0aa0488a2610305e6"
  },
  {
    "url": "cs/index.html",
    "revision": "b00ee541c7d3d31931957b71ddd47ef0"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/java/container.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/java/index.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "eb15a98d12741f1811d3ee315cfdbcd8"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "7ca0c81c1283c23965963942ad7366fe"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "be94cd07f2e99e1a570e0243055bb795"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "de38f82629260d61c7f5258890b4c1db"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "60ae0cf93d85005d17c59048046431a6"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "fbfbfc5b3bf6675084668127234fa593"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "8ea03c0f7cc8e2781fa57074839f3c75"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "d6b0d174ebf0ed4461f56f21d5a941e7"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "e3e6cf7e612cb99f1d514d3d15daeb07"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "30c665f2b8f6b82f22757b9345f1ffff"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "f80910197d6cf2211061421330cba118"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "ea37b666a6810a5557ebf728cc6109d6"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "1d2f713568ad22c87ff85c674531f937"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "4ac94fc31a8f90fe3f0079d912bcb938"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "4a24d0357b45295ef4f647eab97544bc"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "608a3cccf800a08f374b1d859ae226ec"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "117dfe04670d2f1b8d8ba01816b92056"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "4dd120c7d4955b4fa582064f9922f13d"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "96f8c45a195e7a6565061c922de7d7e7"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "5edff39a815c56c101f6144331355123"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "d6e5c506ca5c57776fd3642b89f0fc62"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "563fa2fe180070510ad026b6915bda26"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "1af0c93658645a6f0d96798f19f9cb6c"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "9513aa21c3efce51e52f680d4b956233"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "3c30b13dd0c2ca8879badeb9336c5079"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "9763541ec3c08275033212ac37d33217"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "93e31fa6da55b628aeddde325dc7eda1"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "7f6b314e13348f08511fe1a85255268d"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "fa900e1c3ca5eedc64177213ea713e32"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "64691cd8a1d4d50cd650f9a105355094"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "d3a4c905fe31877cd2595138539648f0"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "31c2384ccf8de0c366b24af5269d834d"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "30a89d040e4219e17679d9c6400e6d99"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "b738b933ccba3c56cd40162401139176"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "30fc3ae1080d95907c774d93d0ebc640"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "bee19104d12a054e4a999ef4ade63cae"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "a600e2d2c701f9d604a523e857ff1a44"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "af26ed527d43c8ae3ba80d6325974a51"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "fa6cc80f5351561e3b22b3841fdcf86b"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "3b19fb03feb7e8b08172a657b198ef9a"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "032a1822a3983b75d0d89891422901ff"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "0513b032ade01bca403caf1e0a4d55a5"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "974fd6ee112b803d9fd4791632b3f1f5"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "e6443083406e19775a717bcc577ce9ea"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "8df3aefa1f6338c32590697aac303349"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "f6e01699784b96683fca6adf019cb1e3"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "793a5d5c635a7841b2fb0203cd5a7ec5"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "7d071a246d313d060480eacb9b85bdf9"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "01a3643a24db84180c4a414ca4fd8831"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "031b74246929e1f65e703a63a4bd7202"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "eb5bfbc41e300fecb5e8564999559e2d"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "9a4feed5dc959dba9d40c5141f26dde0"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "fdedbd7a05830676ecfad5e5f1056b63"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "07670688845d3ab6dc602a396e803544"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "df75909ab2b0c22fbc3e53df2e37cc16"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "bb67acdfd786ea5a06f8de7be6fa1da4"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "2dceb25f07148ba79cb4002a6ca70d78"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "7a7c8148513074d51ae852075551fd5d"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "b724d3a76783cdfcc73c49b0cec3073d"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "c4b268587e128769a99457078cd94d9a"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "96c8676cd0e18b87048a6df3a9fea762"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "73616007a554932e3069b4c3bfe1dd76"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "462f18c12d008ae6629b15840ea726bf"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "30eca68a210e60a70aa03300f7d44afd"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "699c02ff5bec5c80822eeff4b2d3c08d"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "d192efc01fa7a57d37839a246fdf4fe7"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "45f928dd9eff92293b11ff648dff141a"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "c88a375dc06991628894ad4b7539082f"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "f589e0ef83590e364574bd6b6f66c653"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "b5aa165f3a82cd6c2a770fa607ea903f"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "076aa25ddd68c6e13559283dc8527fa4"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "f884fa9f0fd8e4595b84816f9353a69d"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "b08029a80e532fef9fc11aac0f83ad52"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "4bf320cfec05d62ed29ad82f4d40ba9b"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "77b3dd2412650faf9484a3691f742caa"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "bd5e7b6c283acf31786e465a975cff8b"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "15eb140669f12449de2456fb9731e6ab"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "4b31678fe527de4800eace4c3ccb7297"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "6589305175aa88fa1ccc4fbb5c5c22ea"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "6dd227fb754e910a97aaec207a6a715e"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "1f5dd91490d80601cc60d9dd75061c9a"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "284ac10aa97c0805d253f86ec555d8e8"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "ad7669273d7fb0b780b0e4390d9944e1"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "943c6fc1634b3b60993c51efc8bd15fb"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "e6443083406e19775a717bcc577ce9ea"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "f67b483d7179a479c8286bda8e6f3757"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "8724a6b9f3613611b4002e706d127fec"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "03b2ef4a87e42495a3b17c00a85570b6"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "dd878213c61b9f5166c53de9f0f8bbe3"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "9756d593318fa45bd0a3e4db32ba73f0"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "63650491852d33d8502869dfd79782c6"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "645a47377ba623e7a744744aadf6c444"
  },
  {
    "url": "cs/network/application.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "bbf61a7fafaf8c87b7f4427580ad54e6"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/network/index.html",
    "revision": "03b2ef4a87e42495a3b17c00a85570b6"
  },
  {
    "url": "cs/network/link.html",
    "revision": "5103de186fae591653c1a92d66e30f22"
  },
  {
    "url": "cs/network/network.html",
    "revision": "abecf51270718ed183d0634449ebac9b"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "479aae7383a0f3ceb145619d363b41b0"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "07b208711e4a9bec85a8832788deabc7"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "f98bc9a39322a6450f2ef459345960b9"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "25ea1f4d4f09fd4ddfb3726388f207bb"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "1a6e19d5cff8fee02f30497a63ecde84"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "03b2ef4a87e42495a3b17c00a85570b6"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "f179859f96b67d5efb33ab769dbde3df"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "abb79cd59ca86d0d23b96626f6561ed5"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "156c5e2583157eb05fcc39c183f40848"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "ee67dd409f048b86255c115c5421b172"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "eb15a98d12741f1811d3ee315cfdbcd8"
  },
  {
    "url": "cs/web/index.html",
    "revision": "36bd470b3a5822ae9a0c11df254dab5b"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "607464143e6555609596424c5a7de627"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "1b0ec71511e69bbe7272636b5f8de7d6"
  },
  {
    "url": "cs/web/web.html",
    "revision": "f65876d4d4bae796e8e1cd76df7a2f03"
  },
  {
    "url": "daily-life/phone-lost.html",
    "revision": "f0f23babcb66604c11d62b49685ffe5d"
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
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "4ad91936dd69bd781cd1e519cab597ed"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "5807b83bde2cad5550a03de8512b5168"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "c0ef0431eeea01ccb1fda9808a408ce1"
  },
  {
    "url": "language/english/differ.html",
    "revision": "9826c6122319038d5618f6b39b78925c"
  },
  {
    "url": "language/english/index.html",
    "revision": "7ca0c81c1283c23965963942ad7366fe"
  },
  {
    "url": "language/english/modal.html",
    "revision": "e1bb8978fe176b9ca5d960efd1433a0d"
  },
  {
    "url": "language/english/mood.html",
    "revision": "0a22c536f946456e750c41dedac2c858"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "5503b2740d29a65b259ab546bd0c0a18"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "17953f616de3a3985e8d1bd9cdcd131d"
  },
  {
    "url": "language/english/phonetic.html",
    "revision": "1a54d0cdc25064f31f1f5d83da71798b"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "c5afe3d5b63c6f645105feecc8a62444"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "495913d0c6b2a463ba39c9c5082ae12f"
  },
  {
    "url": "language/english/tense.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "language/english/verb.html",
    "revision": "1a1e5c808342d8eea6a6a8ff6bd9b7c0"
  },
  {
    "url": "language/english/word5000.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "language/index.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "tag/index.html",
    "revision": "8c9103b6647f5b1ff5c99e5ad0eb7b5a"
  },
  {
    "url": "timeline/index.html",
    "revision": "d2a6c7a89ad90183cd753f4372eeecb2"
  },
  {
    "url": "tools/chatgpt.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "tools/gpost.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "tools/hash.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "tools/index.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
  },
  {
    "url": "tools/test1234567890.html",
    "revision": "18475bea9ff597d1a7f4986fbcb10e76"
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
