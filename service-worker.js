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
    "revision": "a34c87d4c6dd12d1b4f7dadd9b4e92cf"
  },
  {
    "url": "assets/css/0.styles.44dc4d49.css",
    "revision": "3677e4ab3d09073d9a6de2a97558f286"
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
    "url": "assets/js/1.66c7d5bb.js",
    "revision": "aa80902201dd51da6553e199fded4f17"
  },
  {
    "url": "assets/js/10.cf344f0d.js",
    "revision": "890af4bd09eb18229bb9bd9a0a90bf03"
  },
  {
    "url": "assets/js/100.eede91d3.js",
    "revision": "874d2ff563196260e356fbfdaa18424b"
  },
  {
    "url": "assets/js/101.69b89fdf.js",
    "revision": "f546c41f2570c2df82801b152a131183"
  },
  {
    "url": "assets/js/102.1d1b174b.js",
    "revision": "d681680e4699540a0e86f73826698145"
  },
  {
    "url": "assets/js/103.6a3b3343.js",
    "revision": "8d0f8987029088cf64bc10df9e400c5e"
  },
  {
    "url": "assets/js/104.46c58b12.js",
    "revision": "0e905c21c4eafac590d12d55f78181d9"
  },
  {
    "url": "assets/js/105.2efef8d6.js",
    "revision": "ef6128e8c7f8ecff670add21c52bb6c6"
  },
  {
    "url": "assets/js/106.de8e5545.js",
    "revision": "97f2752ee1b26fecf7408d38d412b776"
  },
  {
    "url": "assets/js/107.a6cc9b47.js",
    "revision": "8eae5588f3ff7c968fd43bd65cc25cef"
  },
  {
    "url": "assets/js/108.326dd04d.js",
    "revision": "de9dff79e1144c1f95d712ec26f3e007"
  },
  {
    "url": "assets/js/109.29fa5fc2.js",
    "revision": "a4d21b172f9d8d9a933d6df9e5ae1653"
  },
  {
    "url": "assets/js/11.8a4484ad.js",
    "revision": "e76bec6d9673576a138aed75c31713c9"
  },
  {
    "url": "assets/js/110.5acaf9d8.js",
    "revision": "f43fa4ca30cb8c4f6fd085a2b9486da6"
  },
  {
    "url": "assets/js/111.b579a8a9.js",
    "revision": "e5e6d4ed7d7902567f91401aff871c97"
  },
  {
    "url": "assets/js/112.b0e4017a.js",
    "revision": "8577b6e87000b49f5281a8971c3041e3"
  },
  {
    "url": "assets/js/113.74185407.js",
    "revision": "0110b20508a54b354d1fe18cf2f82d4e"
  },
  {
    "url": "assets/js/114.f13c80b2.js",
    "revision": "0134212d06675f5961d069a14f7b6b1d"
  },
  {
    "url": "assets/js/115.52ce0cfb.js",
    "revision": "eb78e64fb750316b5c6051be194399a1"
  },
  {
    "url": "assets/js/116.40add865.js",
    "revision": "b81c1c4c51b62cc77ac13b9e783fe6ed"
  },
  {
    "url": "assets/js/117.99da326e.js",
    "revision": "7f349e2f1a9cff0309aef772462077b0"
  },
  {
    "url": "assets/js/118.75eebfe6.js",
    "revision": "9c94f119a1689f4b71d31aa994ceea69"
  },
  {
    "url": "assets/js/119.eb99c31a.js",
    "revision": "bb7875ca9fe234074b1713048cd7ca2b"
  },
  {
    "url": "assets/js/12.55659daf.js",
    "revision": "58557689dd547b562988c8c38d8c610d"
  },
  {
    "url": "assets/js/120.5a8efd00.js",
    "revision": "88642857c097bdb6a1512f0a2de8c89d"
  },
  {
    "url": "assets/js/121.38f61386.js",
    "revision": "6483a3866ac251e526eee6ca052ee776"
  },
  {
    "url": "assets/js/122.f2d02652.js",
    "revision": "4a57bc45ab343fe244fe152d661a0d50"
  },
  {
    "url": "assets/js/123.587990fa.js",
    "revision": "d31f080162734d51467e73d6cd694568"
  },
  {
    "url": "assets/js/124.42cb0537.js",
    "revision": "9e385b93d4bb3ede9b351c8e8142760a"
  },
  {
    "url": "assets/js/125.597f2b1f.js",
    "revision": "40e5eba89979f71730a1e80b4348d834"
  },
  {
    "url": "assets/js/126.aa11f2e9.js",
    "revision": "38ae93c2f205449fb32de0debfb7f57e"
  },
  {
    "url": "assets/js/127.42e25872.js",
    "revision": "f1239d14a5c598d0469548e54f2b74ae"
  },
  {
    "url": "assets/js/128.616f6b69.js",
    "revision": "e49a760c6485af99ed2c641a4ef5e926"
  },
  {
    "url": "assets/js/129.579e78a6.js",
    "revision": "9f432b1949201fcd0814081ea942aafb"
  },
  {
    "url": "assets/js/13.6687128d.js",
    "revision": "962804ee694da95fbf6bad130f699ec7"
  },
  {
    "url": "assets/js/130.ec3d1dd8.js",
    "revision": "7c90829647251b62dbabcbfa4d70976e"
  },
  {
    "url": "assets/js/131.2bdc5c4e.js",
    "revision": "dddd4c1d591ac9b72b1f6b878d9e7f3d"
  },
  {
    "url": "assets/js/132.55312ee4.js",
    "revision": "3e910f472227fee6ed22bb3da608961a"
  },
  {
    "url": "assets/js/133.d8436556.js",
    "revision": "4f10a193f6c243424288f04f1bfb5ee0"
  },
  {
    "url": "assets/js/134.86255ce1.js",
    "revision": "0659416ac8132f7c9195a595fd6d0cc9"
  },
  {
    "url": "assets/js/135.1a251b6f.js",
    "revision": "5cb4aec2e959e20bf28061cd3d2a4c30"
  },
  {
    "url": "assets/js/136.2477515b.js",
    "revision": "e4385cc0ca3730329792ba6f39f2f4c6"
  },
  {
    "url": "assets/js/137.15fef7a1.js",
    "revision": "157e4dd91d9b4cce304b6a69e6ea4d37"
  },
  {
    "url": "assets/js/138.f0e34564.js",
    "revision": "5cb4669210866c9a02ee62f7102e35bd"
  },
  {
    "url": "assets/js/139.2ac8422e.js",
    "revision": "4ff77391849f6d901c4b6149382e1b0b"
  },
  {
    "url": "assets/js/14.f9b711ce.js",
    "revision": "a243d17c2d08255b312acfd2cc334670"
  },
  {
    "url": "assets/js/140.9a53638a.js",
    "revision": "17e484ec1579c659df3b923a5edc7ddc"
  },
  {
    "url": "assets/js/141.5d680183.js",
    "revision": "1ddaeed70be05e672cbbb1e7be87e6fb"
  },
  {
    "url": "assets/js/142.6a4ee6c7.js",
    "revision": "357bbc64a209059b836d88ac013ebb39"
  },
  {
    "url": "assets/js/143.b31d03a7.js",
    "revision": "3d6f3b9913520a6fd1b59769a35e0871"
  },
  {
    "url": "assets/js/144.a78525e0.js",
    "revision": "cc8c67e4ead9148d30b33eb3fce6a57e"
  },
  {
    "url": "assets/js/145.4728edc0.js",
    "revision": "a8cd7fe46f4c2c6655345681a353e4b2"
  },
  {
    "url": "assets/js/146.724554e1.js",
    "revision": "349d1f42f6166bfcf792addaeb0c80a3"
  },
  {
    "url": "assets/js/147.5ce9e931.js",
    "revision": "a9c42461c17f9d59cfe97c6a46dd4209"
  },
  {
    "url": "assets/js/148.f891b6f1.js",
    "revision": "06a402b4b9c9f75a13a468774fd0637f"
  },
  {
    "url": "assets/js/149.f3204578.js",
    "revision": "9b02f8709b486d89f5b2e23bb9dc8f3a"
  },
  {
    "url": "assets/js/15.0ce2c67f.js",
    "revision": "1b4b60c282e5e7a22265cd5a283a0f68"
  },
  {
    "url": "assets/js/150.4bb95df2.js",
    "revision": "d1bce842dba67f1329239ae560e810a5"
  },
  {
    "url": "assets/js/151.061f95e7.js",
    "revision": "2fecd60c2f743e21c1a862c433afa448"
  },
  {
    "url": "assets/js/152.a11e461f.js",
    "revision": "b054c8f55f59e352bc852c1676fef005"
  },
  {
    "url": "assets/js/153.8b97024b.js",
    "revision": "37e9c3b97f20a3a215afc5ba2407accf"
  },
  {
    "url": "assets/js/154.8d22a836.js",
    "revision": "0116659452c8894ef8e4cfa86efa5aca"
  },
  {
    "url": "assets/js/155.1d091ae2.js",
    "revision": "6d25599610d60dd050f46b4ee1821d90"
  },
  {
    "url": "assets/js/156.6f707ade.js",
    "revision": "cb8024934989b7293785180ced24c562"
  },
  {
    "url": "assets/js/157.840ecced.js",
    "revision": "9c2bdbf496b65262c04e09886e993940"
  },
  {
    "url": "assets/js/158.786aa449.js",
    "revision": "70b20e15b9dcde86da30c999fff3f803"
  },
  {
    "url": "assets/js/159.4cb42624.js",
    "revision": "98d0860402261686dfdacd37d2484ce3"
  },
  {
    "url": "assets/js/16.f404a121.js",
    "revision": "de2cccd06fe3b963fb83cc6ed7c53181"
  },
  {
    "url": "assets/js/160.93c2c216.js",
    "revision": "39ceb8bf4f33bd1853dd537d284435e0"
  },
  {
    "url": "assets/js/161.2a9f579b.js",
    "revision": "8240606b730bf15c48590976a1096a09"
  },
  {
    "url": "assets/js/162.1fc946c1.js",
    "revision": "962d805efcc37ee90120867c89321109"
  },
  {
    "url": "assets/js/163.e1ab04f9.js",
    "revision": "0f899dea3539ab7ff80124722929df8e"
  },
  {
    "url": "assets/js/164.72eefd6b.js",
    "revision": "902e6108ea77d06d00dddcefc90727bc"
  },
  {
    "url": "assets/js/165.8b30dfa6.js",
    "revision": "b0e05206699aedddfe818313b2bf8653"
  },
  {
    "url": "assets/js/166.3d9cb6be.js",
    "revision": "143a49725df5c533275644dd8a864b88"
  },
  {
    "url": "assets/js/167.6b95393a.js",
    "revision": "2a5e96fa379a0bc1439388edbe83087d"
  },
  {
    "url": "assets/js/168.eeca0eb7.js",
    "revision": "8d4f7f047617051dda52c30f16b36413"
  },
  {
    "url": "assets/js/169.08c1118c.js",
    "revision": "4474d276afc27a0b3741b2f90ca3406e"
  },
  {
    "url": "assets/js/17.c8900290.js",
    "revision": "bacffc9b6f78463dd506a8e760628184"
  },
  {
    "url": "assets/js/170.7b7dec08.js",
    "revision": "47036a5b96e025df378775833d1925c7"
  },
  {
    "url": "assets/js/171.d9863eae.js",
    "revision": "bd5a0e53c646b462e50b03e265c18187"
  },
  {
    "url": "assets/js/172.c4f71ce1.js",
    "revision": "7f7a0fd53dc28f5a9c9f985700202b31"
  },
  {
    "url": "assets/js/173.954810c4.js",
    "revision": "545609630fb3cf2f9f52c4c604d389f8"
  },
  {
    "url": "assets/js/174.e45e796d.js",
    "revision": "46c75ae430847f2aff7f6918f3f2c61e"
  },
  {
    "url": "assets/js/175.a2eb8374.js",
    "revision": "8a167a31bfe9cf8a5277c137c430c178"
  },
  {
    "url": "assets/js/176.d34d9275.js",
    "revision": "e15e1c28fc6f50f6a7072c672840eaa8"
  },
  {
    "url": "assets/js/177.1b028d8e.js",
    "revision": "4c7535e960c304921d3189a6fbc51f24"
  },
  {
    "url": "assets/js/178.39c531db.js",
    "revision": "6871254ef101d42112b3764318a0b159"
  },
  {
    "url": "assets/js/179.0f4d87d3.js",
    "revision": "8795ee3d1eb53dd5b780604b267e7416"
  },
  {
    "url": "assets/js/18.17319f0b.js",
    "revision": "0ad6fc2c60061eaba81a0ca4b912e8c7"
  },
  {
    "url": "assets/js/180.a78a077e.js",
    "revision": "e8eded684e799ecbd7675df17f04fcc5"
  },
  {
    "url": "assets/js/181.5ffd270e.js",
    "revision": "2e98d84a2d8779fa77768e0efd9a90e2"
  },
  {
    "url": "assets/js/182.82847050.js",
    "revision": "75a7bfd272c0b571b6b181de1ead093a"
  },
  {
    "url": "assets/js/183.23eb0d0c.js",
    "revision": "fce5f307f1aea730abd798220fdf5efb"
  },
  {
    "url": "assets/js/184.3214017b.js",
    "revision": "d20abb3abd7aee31215ac7684239a06a"
  },
  {
    "url": "assets/js/185.422d448c.js",
    "revision": "f54cf0a82f08211402fe3758519b3077"
  },
  {
    "url": "assets/js/186.ff2ca624.js",
    "revision": "679e7e36eeef641a72aec9a3a07ec6e0"
  },
  {
    "url": "assets/js/187.12fdb9d1.js",
    "revision": "1779a8c53b3ddd87ad97ac3d869bab6f"
  },
  {
    "url": "assets/js/188.6e4ed22c.js",
    "revision": "98fc4c1783955153416a70720440ffbf"
  },
  {
    "url": "assets/js/189.205ee69f.js",
    "revision": "7b99dbd4256028850e00cfdc3cdc9aad"
  },
  {
    "url": "assets/js/19.25a500cc.js",
    "revision": "4d218bc31f78aa8d808e3a8fa85fdf8d"
  },
  {
    "url": "assets/js/190.f8d40360.js",
    "revision": "d1405779b4eb218fcada2983327656a8"
  },
  {
    "url": "assets/js/191.2417d550.js",
    "revision": "7a60bc8d64f54490491c586c44cdfc4a"
  },
  {
    "url": "assets/js/192.362229d1.js",
    "revision": "9576c7e588017a7bbc350e1af2c54390"
  },
  {
    "url": "assets/js/193.74f57a34.js",
    "revision": "f43642a66b7266a2a38465fa4e681fd5"
  },
  {
    "url": "assets/js/194.33806e84.js",
    "revision": "a856f504ae96d71f7811ad9b3e860c64"
  },
  {
    "url": "assets/js/195.233539be.js",
    "revision": "adc45bee54aa9930ed80297601841292"
  },
  {
    "url": "assets/js/196.3bbc093e.js",
    "revision": "8b99fedfd4f612707996e88ef902b1cf"
  },
  {
    "url": "assets/js/197.a58e8fbe.js",
    "revision": "55db23cbdefae0eb1e942ab3efa61120"
  },
  {
    "url": "assets/js/198.6f333200.js",
    "revision": "033165f2efda4447f806e27805df723e"
  },
  {
    "url": "assets/js/199.0a991bbb.js",
    "revision": "ad5f16e3bb5cc8ffb4253c94b421ac09"
  },
  {
    "url": "assets/js/2.350e0505.js",
    "revision": "ce804155c60fa92d9b30cd40f0eb023d"
  },
  {
    "url": "assets/js/20.3c480f5a.js",
    "revision": "d0850ff4f8b344c9485d59f78ae229f6"
  },
  {
    "url": "assets/js/200.fbe705d3.js",
    "revision": "5c708baf990f5f6271e7e4ec7986952b"
  },
  {
    "url": "assets/js/201.4fbbdaa1.js",
    "revision": "d5404750013db150ffc0da4eca1be608"
  },
  {
    "url": "assets/js/202.1ff89d3d.js",
    "revision": "6727dfc309992c90ee12e203eb63e0fd"
  },
  {
    "url": "assets/js/203.5cb4de4b.js",
    "revision": "a9a74d60da9e32f9c56843b118b9e311"
  },
  {
    "url": "assets/js/204.935cbb3a.js",
    "revision": "97f5bbed8a72c2dff453ab3ef13a4f72"
  },
  {
    "url": "assets/js/205.d5666812.js",
    "revision": "82d4ac4d0fb1c00c2784f578f50d8404"
  },
  {
    "url": "assets/js/206.b845fad7.js",
    "revision": "407115ee72852bc56fd4b7d9c84d4f55"
  },
  {
    "url": "assets/js/207.f0731c36.js",
    "revision": "5b6aea14aab1da6b72177bfb15bd9a72"
  },
  {
    "url": "assets/js/208.81ed5602.js",
    "revision": "fe2a1545aee0b1c94b56ae5f9c4adba7"
  },
  {
    "url": "assets/js/209.bc419d0c.js",
    "revision": "111b0f262cc11c034309f5ca048eba45"
  },
  {
    "url": "assets/js/21.89a88810.js",
    "revision": "b58e4630172a3dbb723d9ca5161d5b00"
  },
  {
    "url": "assets/js/210.3a9717e1.js",
    "revision": "520acfd363fa451ea06eccc89b6d13c5"
  },
  {
    "url": "assets/js/211.4436902d.js",
    "revision": "15a5c1b945638eca278174b394790709"
  },
  {
    "url": "assets/js/212.a2d2a4a5.js",
    "revision": "90a2188ff45a8e2bf22d9d7974416675"
  },
  {
    "url": "assets/js/213.7614a63c.js",
    "revision": "04863f68d34204348b42a46e7cd36ec8"
  },
  {
    "url": "assets/js/214.c89e7dc1.js",
    "revision": "7c8552372092bbf21927977253a89081"
  },
  {
    "url": "assets/js/215.3930a627.js",
    "revision": "31b719b33c12156214d8afe3a40e5706"
  },
  {
    "url": "assets/js/216.48807d7b.js",
    "revision": "668698f23ee2d114c378f0439ebc2b65"
  },
  {
    "url": "assets/js/217.11718bc7.js",
    "revision": "b3a01598c798d8b641fc80e0f072741a"
  },
  {
    "url": "assets/js/218.a2275a20.js",
    "revision": "ae5279d0a090e32735a89f9529106fe0"
  },
  {
    "url": "assets/js/219.13eca461.js",
    "revision": "57482553e16bc7c10b75cda6c029f3b7"
  },
  {
    "url": "assets/js/22.b9fff762.js",
    "revision": "cf5c61fa0c56a153c23369833b532bf5"
  },
  {
    "url": "assets/js/220.85e52f19.js",
    "revision": "a43388c5f0590585eeeb5e1bd906eba5"
  },
  {
    "url": "assets/js/221.ea29530c.js",
    "revision": "3581a065c0cf09feb3bebea1d3bd4d26"
  },
  {
    "url": "assets/js/222.d7035c63.js",
    "revision": "3b10d6d74b16c9b033682ca01afdbb4d"
  },
  {
    "url": "assets/js/223.bad14f0c.js",
    "revision": "08a851a4872e5368628e424a82c9f4fc"
  },
  {
    "url": "assets/js/224.a11adbc8.js",
    "revision": "aa4e18a25e8e4db888f39c78a2918eba"
  },
  {
    "url": "assets/js/225.687719a4.js",
    "revision": "80139f83bf3d50cd383aca7ebe4f10b9"
  },
  {
    "url": "assets/js/226.bc846d3a.js",
    "revision": "59479333af610e2035dade1fe444e0e8"
  },
  {
    "url": "assets/js/227.e6b1b3ba.js",
    "revision": "ac8e7d30e1ed04d675666bb95198e4ef"
  },
  {
    "url": "assets/js/228.94998e56.js",
    "revision": "79acebe24bffc145b820cbd86c112285"
  },
  {
    "url": "assets/js/229.b3a95fcb.js",
    "revision": "3ef3eab1d6e8706ddd0e088625bb93cc"
  },
  {
    "url": "assets/js/23.284a73eb.js",
    "revision": "e583ce93ffecdb061687fe6a586757e6"
  },
  {
    "url": "assets/js/230.a6104f99.js",
    "revision": "95c479796a3912d7212211e283b38af0"
  },
  {
    "url": "assets/js/231.bd9738f2.js",
    "revision": "f22c972981d81411e1cd111bd7b90600"
  },
  {
    "url": "assets/js/232.b6452f0f.js",
    "revision": "920f4cfd030e7d0acc8943e32a22f15d"
  },
  {
    "url": "assets/js/233.612a94ce.js",
    "revision": "8b8dff29b409d61fd3a26e9ebb1bb1de"
  },
  {
    "url": "assets/js/234.e64189be.js",
    "revision": "3274e442b5fc7812cbd487d615438940"
  },
  {
    "url": "assets/js/235.3f75f130.js",
    "revision": "5727610ff460f533deb5d8ccc8990908"
  },
  {
    "url": "assets/js/236.929fc2b3.js",
    "revision": "dd7ee4c6288edc540627db21899087d1"
  },
  {
    "url": "assets/js/237.69d40882.js",
    "revision": "e991458f96c8222e1a91d7578b382ac6"
  },
  {
    "url": "assets/js/238.ed33f2ae.js",
    "revision": "a61ef1d291a1c0980624e63dfc9c51dc"
  },
  {
    "url": "assets/js/239.8bf6ab71.js",
    "revision": "0bc697bdf863911b2a977621dd168aad"
  },
  {
    "url": "assets/js/24.d9a2c2ed.js",
    "revision": "5b034deeddf6887a826cd3eb7da7fe17"
  },
  {
    "url": "assets/js/240.00d9d558.js",
    "revision": "b934b23e38a9c2a4ab1e8771d9f8e5ca"
  },
  {
    "url": "assets/js/241.af25367b.js",
    "revision": "ebe99935a6b7a29ad42e27606dc2664d"
  },
  {
    "url": "assets/js/242.bc89df98.js",
    "revision": "92e46a89362984518e9ccfe612c1a3d9"
  },
  {
    "url": "assets/js/243.cde2976a.js",
    "revision": "2d22b87dd883387a3a2ab3df8dd498cb"
  },
  {
    "url": "assets/js/244.f9023fd0.js",
    "revision": "97142acad235af7a53286afe4699b225"
  },
  {
    "url": "assets/js/245.0062b371.js",
    "revision": "f18b2335d2721353f389e1a994b0ee24"
  },
  {
    "url": "assets/js/246.721797b1.js",
    "revision": "49f99c0ab10eebddc03c524b959b4c96"
  },
  {
    "url": "assets/js/247.adcf6ea2.js",
    "revision": "2395f46f186f1d1f6ca020a7661cd656"
  },
  {
    "url": "assets/js/248.a683e939.js",
    "revision": "cbbfcc9cf7746e7cd32d8302910de47c"
  },
  {
    "url": "assets/js/249.700db053.js",
    "revision": "c8bf556a3f09062bec382c35b1e02154"
  },
  {
    "url": "assets/js/25.623fa2e3.js",
    "revision": "0c2ce851a44340b95ef7e7228c051a87"
  },
  {
    "url": "assets/js/250.4bc5d4c5.js",
    "revision": "f7a7eaa15a5bab259d8c07f4e6c72802"
  },
  {
    "url": "assets/js/251.6c4e6915.js",
    "revision": "cb2a0d6d92b9fe4a8dbb628e9fdf8a2a"
  },
  {
    "url": "assets/js/252.a6fb5e75.js",
    "revision": "0f827b0ba52e2565f3b9537c6b28d8b2"
  },
  {
    "url": "assets/js/253.4277a016.js",
    "revision": "ec48d150782701edf4fcb3439baf6f46"
  },
  {
    "url": "assets/js/254.2b48ba90.js",
    "revision": "7b222159f74bb489f3772149ed1f3d80"
  },
  {
    "url": "assets/js/255.c5e961ed.js",
    "revision": "391e41d4222038131b427ffba7416d7b"
  },
  {
    "url": "assets/js/256.72796696.js",
    "revision": "67e4bdef7af5dc9af391da99192d268b"
  },
  {
    "url": "assets/js/257.7ab66bd2.js",
    "revision": "97b5c6480d30345b9efeda5be19cdec6"
  },
  {
    "url": "assets/js/258.e19d39df.js",
    "revision": "8fb265daaffc06eb111eee1ca1b07a40"
  },
  {
    "url": "assets/js/259.738a9078.js",
    "revision": "20fb6242dbacea4331a0ca75559aa695"
  },
  {
    "url": "assets/js/26.9fb1af1d.js",
    "revision": "732f90a81e848f2d231ba9524bfce873"
  },
  {
    "url": "assets/js/260.13cba558.js",
    "revision": "756d2e77dbe15d3449ad87fb90341f36"
  },
  {
    "url": "assets/js/261.3edbe010.js",
    "revision": "f9fad3a865d03610b56ac1dd4b704fbc"
  },
  {
    "url": "assets/js/262.fae91126.js",
    "revision": "aad9be3dbb8699a6ca6ffcd53676da6f"
  },
  {
    "url": "assets/js/263.566d0747.js",
    "revision": "c4ede4be13f2dcd40aeb1bdea3ce0b62"
  },
  {
    "url": "assets/js/264.95c60c52.js",
    "revision": "776cba37c10e8170c9fdc623cc6d1633"
  },
  {
    "url": "assets/js/265.4cb91814.js",
    "revision": "2a076179e94dd6f792848c74763f5e71"
  },
  {
    "url": "assets/js/27.38870fff.js",
    "revision": "420d48867a187596f1665a8969f81927"
  },
  {
    "url": "assets/js/28.1cf23e86.js",
    "revision": "6a5094423ed230b7927db6ab9f57cc27"
  },
  {
    "url": "assets/js/29.9d8f6be2.js",
    "revision": "4b3a04c6f838f4a97324c34e494e576a"
  },
  {
    "url": "assets/js/30.98c4c759.js",
    "revision": "7611955fb2fa51ac269de58b981394c1"
  },
  {
    "url": "assets/js/31.fe01da3f.js",
    "revision": "cb684ffb04356a21261fe0a6dc5b87fd"
  },
  {
    "url": "assets/js/32.5605f8ec.js",
    "revision": "c2de9d9a7a96a9b562902d50d450e7fc"
  },
  {
    "url": "assets/js/33.5c2a692c.js",
    "revision": "724697a7d31472623a31a0343dd2bf59"
  },
  {
    "url": "assets/js/34.6851e377.js",
    "revision": "52d44c9bfba2ff677ce49de536d67a76"
  },
  {
    "url": "assets/js/35.3043fe1f.js",
    "revision": "f648f782ac7891f137b897fdfbfc445c"
  },
  {
    "url": "assets/js/36.b24c7eee.js",
    "revision": "22f87fb530fd7570422b675e34784fe1"
  },
  {
    "url": "assets/js/37.d31e0aec.js",
    "revision": "9e42fdc2c29daae6beb23d6b64a99461"
  },
  {
    "url": "assets/js/38.94f74e72.js",
    "revision": "8ea8c44b51b9f1f7b3848525eb695d01"
  },
  {
    "url": "assets/js/39.d9149185.js",
    "revision": "f4bad12ff844a69d05715ad03565e8e5"
  },
  {
    "url": "assets/js/4.acec17d3.js",
    "revision": "bbbad60a66ad0f35ce3013b41a263c70"
  },
  {
    "url": "assets/js/40.62f92e11.js",
    "revision": "54410ab2d8c4d4f4ba42a069b98c8b12"
  },
  {
    "url": "assets/js/41.b4c89fd1.js",
    "revision": "ffe1c5a476b75433d9fcf278db84c013"
  },
  {
    "url": "assets/js/42.5e62bbec.js",
    "revision": "54e59480df036e77daf0ade55735da84"
  },
  {
    "url": "assets/js/43.da5c1fb1.js",
    "revision": "15728db3a0c3ce95323dde71ee2bc7e7"
  },
  {
    "url": "assets/js/44.f6e74826.js",
    "revision": "151de361b2ab005ad36ef2343c67f045"
  },
  {
    "url": "assets/js/45.9a312e73.js",
    "revision": "66023f5aeddcc891a23d0de5b8c752ef"
  },
  {
    "url": "assets/js/46.73149f68.js",
    "revision": "758b8daaac8bf90f338961ac1a80f858"
  },
  {
    "url": "assets/js/47.4ea3d105.js",
    "revision": "258621363dd1f779a5d49ee2e04ee40a"
  },
  {
    "url": "assets/js/48.c9826f2d.js",
    "revision": "7f2afde60c0e8b0ae6cc49263f240e2f"
  },
  {
    "url": "assets/js/49.5ca39746.js",
    "revision": "bf4e00b50d817ed6d29ded42d65ca3c5"
  },
  {
    "url": "assets/js/5.3d0c0b33.js",
    "revision": "ea941738662bf089b0b6e987fffb6c9b"
  },
  {
    "url": "assets/js/50.5744f83d.js",
    "revision": "9ada83b16fb9bb45e543ca778c8b3d11"
  },
  {
    "url": "assets/js/51.3ad45f17.js",
    "revision": "11e2b17df7e90647575024962713abea"
  },
  {
    "url": "assets/js/52.7fc1635c.js",
    "revision": "21d0ccfd8f7a41235393b00d9fa8a378"
  },
  {
    "url": "assets/js/53.07cd3638.js",
    "revision": "dc90c9eb150e0d1a6d8b7cae43ba8931"
  },
  {
    "url": "assets/js/54.97df9803.js",
    "revision": "48beb841f97ee51139d34ad8ce203507"
  },
  {
    "url": "assets/js/55.a230b403.js",
    "revision": "3e5421f6bb576eba7e10a93c545a8003"
  },
  {
    "url": "assets/js/56.e06f2cba.js",
    "revision": "cfe294c67373ed645faecd8daee81fee"
  },
  {
    "url": "assets/js/57.a103b4af.js",
    "revision": "a2faed4ea3e51579d219b2ace3800910"
  },
  {
    "url": "assets/js/58.137fca8b.js",
    "revision": "e368a29964a50dafe0af86e1884f7001"
  },
  {
    "url": "assets/js/59.53616a61.js",
    "revision": "9f0df3cef8ebfb8d0c4daae9b6da41fe"
  },
  {
    "url": "assets/js/6.7bd88179.js",
    "revision": "02e2410e992834c9a685e5fbaf282026"
  },
  {
    "url": "assets/js/60.8c57cf25.js",
    "revision": "8a4b793c4c93a66b21968c662fc72f47"
  },
  {
    "url": "assets/js/61.7802a46f.js",
    "revision": "8c8ebbf6c594222bdc14a3964bbcbf9a"
  },
  {
    "url": "assets/js/62.d0f00b1d.js",
    "revision": "4dc43947aa55aa8629ab461f6b5ea771"
  },
  {
    "url": "assets/js/63.17b0bf46.js",
    "revision": "38fe6829409255101157d821db68646a"
  },
  {
    "url": "assets/js/64.6b240227.js",
    "revision": "f25058c24929384fbb86d257f86502ea"
  },
  {
    "url": "assets/js/65.2a6c8e15.js",
    "revision": "061d4ceb2206610704fa1074595c8292"
  },
  {
    "url": "assets/js/66.b606f12c.js",
    "revision": "687274ecc3cf57bc3dcd3bf64ac7cd4d"
  },
  {
    "url": "assets/js/67.421f5c58.js",
    "revision": "19d2612cc7e2ba7d341a4d28ea034b20"
  },
  {
    "url": "assets/js/68.c24e6971.js",
    "revision": "e71fb2508844f669d211d62d9d2707d6"
  },
  {
    "url": "assets/js/69.ba58bdaa.js",
    "revision": "176fbde40ab1516649aa9436abd22308"
  },
  {
    "url": "assets/js/7.497157d8.js",
    "revision": "6a77e1aa0fba30d1cb6db38b5ecaaaaa"
  },
  {
    "url": "assets/js/70.a0932def.js",
    "revision": "db0caca23b0b906d0a30edb8230d696c"
  },
  {
    "url": "assets/js/71.cb99b5dc.js",
    "revision": "a96a4a69ec98fe9791bddb56b392a1be"
  },
  {
    "url": "assets/js/72.954650df.js",
    "revision": "a0c64cf49092938319aead53166cb819"
  },
  {
    "url": "assets/js/73.1576eac1.js",
    "revision": "c37ddba0f08649a592f5d92a2bdf7db9"
  },
  {
    "url": "assets/js/74.18d75847.js",
    "revision": "de7e9afa1ea1c9f4200d08722e8035bb"
  },
  {
    "url": "assets/js/75.6d0222f1.js",
    "revision": "afb8a4c56850d5fe10bb9d44c6364da2"
  },
  {
    "url": "assets/js/76.dfb32938.js",
    "revision": "44cbc2c7035cb50ab94978a5c53e42f2"
  },
  {
    "url": "assets/js/77.b8b9bb72.js",
    "revision": "c1218e1dffe992a589b9148961414fca"
  },
  {
    "url": "assets/js/78.ec29ea89.js",
    "revision": "b48cc355ee73def7290742d3e2b75d8c"
  },
  {
    "url": "assets/js/79.7d4a3bad.js",
    "revision": "ee27b7f0554fa03d7ef4764d494c0f9e"
  },
  {
    "url": "assets/js/8.92833fdc.js",
    "revision": "f3f1c9c25431d44099074d2f54a6b4dc"
  },
  {
    "url": "assets/js/80.f32a2352.js",
    "revision": "0b6d359226b2c3d60bdf6df720875176"
  },
  {
    "url": "assets/js/81.76681dcc.js",
    "revision": "9316d171fd9a86e355dd8057dbad271a"
  },
  {
    "url": "assets/js/82.44aac346.js",
    "revision": "64eff0ca309a42b8151cc1bf0d924ac2"
  },
  {
    "url": "assets/js/83.af86363f.js",
    "revision": "1847ef1b1159098b26511018a486dd2a"
  },
  {
    "url": "assets/js/84.5ab447e5.js",
    "revision": "60c90cdc35c44efc43f6b7899d73362b"
  },
  {
    "url": "assets/js/85.5df13c69.js",
    "revision": "5f4e3021462c97d733d53fa76c722728"
  },
  {
    "url": "assets/js/86.5d283872.js",
    "revision": "29248c9daa882a508c4ee991f180fa37"
  },
  {
    "url": "assets/js/87.aee4f2b6.js",
    "revision": "41dcd5301122f10a81a718765772e26b"
  },
  {
    "url": "assets/js/88.e63a44df.js",
    "revision": "b12adda040daa3b08f2be1a13481f17f"
  },
  {
    "url": "assets/js/89.8ddf2191.js",
    "revision": "d378e9276423c55fefa889f47f647f3b"
  },
  {
    "url": "assets/js/9.e029a28d.js",
    "revision": "831f0b8973970b2f5bc6690e6a8da8a4"
  },
  {
    "url": "assets/js/90.86c6b164.js",
    "revision": "210e7e3eb6e3528ca5d6b41bbc98a114"
  },
  {
    "url": "assets/js/91.b0a2dc55.js",
    "revision": "0584eabe063b3786cc8174f0d2412882"
  },
  {
    "url": "assets/js/92.02907af6.js",
    "revision": "9391c88dbd2cdfb89483236c1b555b04"
  },
  {
    "url": "assets/js/93.e6f7047e.js",
    "revision": "19d9557281556ca756b76b7a7faf2b60"
  },
  {
    "url": "assets/js/94.8d9646a0.js",
    "revision": "101b70154dffc091737ae74f0aa46409"
  },
  {
    "url": "assets/js/95.51f25981.js",
    "revision": "6f85f42fc679773a8d3f01693a38e4a0"
  },
  {
    "url": "assets/js/96.375c4742.js",
    "revision": "626fb3ec9f9b44f2cd89fbc700f009d6"
  },
  {
    "url": "assets/js/97.b3750e51.js",
    "revision": "cf73e8e8b2350de1e887c403e80fbf25"
  },
  {
    "url": "assets/js/98.e3996324.js",
    "revision": "eb7314b415a96046f09b3bcd579b41b1"
  },
  {
    "url": "assets/js/99.25823344.js",
    "revision": "0d35fea358b09f255a5133fdba38493f"
  },
  {
    "url": "assets/js/app.9fca2799.js",
    "revision": "f22686e6fd3bd03c4a989e8acc4a4ccb"
  },
  {
    "url": "categories/index.html",
    "revision": "b9117fc3881d4163df0e87b6bf9801d6"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "ceabcbfe03726a4d36896f68bd1e2f5c"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "3e423f06e9526ae55730734602f2fc3c"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "ffeb9bec6dec41f0ae762123c51313cd"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "9524d6f0e1158ce92f19f4744613198c"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "5341450c26622a8aecc02f8e7447cf62"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "3cb3f21366ca2ef0cd3869ccf1fa5395"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "ac43511399c0e6b21640c027ec620a09"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "391d3614ecb01715f12133cd7af04654"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "86e414a08dbf23549c04572da70e5a79"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "5a4bf0084d81f861a85c705e89db2ff9"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "3e423f06e9526ae55730734602f2fc3c"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "f358586207964f6b2a10e0994bfe98e5"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "313eaac7e44393acd2e435d7122a6fcd"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "ed5284b64faefd2d83bad81e24a6ff6f"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "c86694f6a2687573f0c1a7f9c5d557fb"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "243b1dd27f1b4d21198662fb6879ee03"
  },
  {
    "url": "cs/database/index.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "c783aaca4f02a8a50451b90aa37cf4a3"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "ef31306972b009f8bc5b27566e18e8e8"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "f3aae10b33c8c104d25dac8b9534922e"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "b19e6000f5d5cb084425d04d5474aac3"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "cd9abf0bfd29091d064a49a680c138d8"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "bd40334ab40a6e8cfbec76e0bde73905"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "dbdf0e21d7cdcb6b9b5a68b753a80408"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "36cf74c35aae6f2dbd3754f0bdd1eab4"
  },
  {
    "url": "cs/design/command.html",
    "revision": "6947436e80602da873f593efc5350872"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "2fdbdbb05cb2c835895fe9689b0773e6"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "45c4cbbb3a9720e9ef7608b569909949"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "b78f5caabd0214c4e48aa3e23cd711dc"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "04672c0e8469d25fc102480198e90aad"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "0b6d9df159b43547c04073bda1314faf"
  },
  {
    "url": "cs/design/index.html",
    "revision": "49fd74196fb7921a707adc2ae3cb1796"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "70396823b116db2cd06be1fca2980109"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "49a8c4c124c2cdd272a1957405179c2c"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "7315f9d3caae180d4e75d5bf699a45b2"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "fdaa729101fc54abae221cef2e727ff6"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "b2756b0585ca6c25fe9ce6c35749df3c"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "4e4be7367c70a383b25aa027946277e4"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "54e9488cb2c24b53bc53aef9fd14f9bf"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "5e44b19b9f742ed24f3f744c1bc147ab"
  },
  {
    "url": "cs/design/state.html",
    "revision": "d6e656f79958a2868478633db7aa587d"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "1de4cb3cc317b129d843dbec86389199"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "6afc930d1fc46d9bc7874af6592619bd"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "ea1f5fdc0d251de1883e648c9bf57b07"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "1390a9935bfaa863b3b93793bae774a8"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "42f38ec8be0d6896b11e8c96b4ed0e6a"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "a87445661d8888b0665da919f3726d15"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "c95aa0d375e478d5e7421845145decb6"
  },
  {
    "url": "cs/framework/vue3-design.html",
    "revision": "509db7ff10b89346665e1a008c5de5d6"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "5dbc2ee90a6c457f985b0245b538c2d4"
  },
  {
    "url": "cs/index.html",
    "revision": "b32223c1d73ba5fa31a62db972b5489d"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/java/container.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/java/index.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "acb291050f29ba16e25dc427ef079438"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "3315603acec1c99cb3bedee57be30cf8"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "88eb8b59328c4d1d35eabebc75e2c6fa"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "af6305ff65ae7496419312594efab5f7"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "26d468df99c8f6ec4b9cb24148ebad55"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "ce9651860de7d57c3277cd178e0183c7"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "8434c0489e4d28421938d0c258ab52f7"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "b159f941c1de8eb4a7e9d9710429519c"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "63dbaa6a31e0ce3a89d0d3568a31e4e8"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "88baed5a2c80b86055a87128fb887058"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "bfd6cb47454fde4db783308e064fea5e"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "00b835953302175d859103a793890ee9"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "5536e869f0db76c34fface05768e09b9"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "f597bbb6b5e5270e56b4c48efcfc8061"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "1e20777310a5a4a12c27ac0de670da70"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "3a9d6b714f5340ca8eb5eaccd7ef5ae7"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "4b8dac246130492035434dbd94cd8a5a"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "aac6979112e509b99c366f4cd7f01381"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "372e62c50cb3bc21ebe823aca266e227"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "21366c68ea54195c6d537ab18bfed3cb"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "4b4ad8e82245e4a1fc9e4487d7792f45"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "2fb498dc5b228716eb84c36009ed0362"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "6bc0fc105a2ae3247803bf578b3c389b"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "712adf4e60706d06ac0aa25eb2f03c01"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "d4a6a424b501dc8172249e7999b59026"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "ad3b0e2186071c2f6bd8fea6c9a249f2"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "00c3f56bcef81f1ca083c5273f23637b"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "cd1741d3d1f56cf16963a3b17f308375"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "bb69f3b6cab423af01fa49c389666adb"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "d0cdb5ff3b371a4aa651c903177289af"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "28ef92fce45717d7d3c49f4e1dedc59f"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "585f7fee590663718511ea5912d8c70a"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "28132718f3de3f7e5dc78ed6aa52c599"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "296dce0ce446c3ff638ef5e6b6a05d28"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "eaea2f260502621b38841566fb065462"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "114aed84c88d560baa99ee955436719e"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "8e4922c8a6bfd76d31eb1e60ae363b4f"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "aa7ee7b922fea94aee34dbedd4849e56"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "13a837435b792536f2207446c9a9d486"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "19844a06d584ce7b211b968710b2b339"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "2cb1587a8775979bbb72b3aa245f2107"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "9c9e35db1cfbd2e3ef1e2cd5184bd014"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "fc93715b64844599d87b5aadff6b7900"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "35a6e21b073d822833329f3bca78cccb"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "fe9a32a1388e889fcc4b85b0e115a725"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "ffb10994dc6681793a0517be0df6b53e"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "6aa80a8d193424c584b7fcdc60e2a9e5"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "385a4a08194604a8c03a3a03bc829945"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "e216479428e81aa67b556e8070c96ffa"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "8223f379d0e172ae9699f6aa7f3b3e5e"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "6b910167aadb5e1da5c6cf60c301d5aa"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "1de678f6a9311a3d2b4cf4c5deb835b2"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "7a43b7d330459da829d081c3f46adf19"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "2052a4da47410fbdfd41b659a42f6ad3"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "33845cfd346a434e89444ba92b137162"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "29f883add3d3f5901594d27028acd0c8"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "5ed13e8ca18008598199c8ebf2737dc2"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "39a0c420e14061282c1a1d61fb1861f8"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "9481830ee297f6b74e9a8e4d2b71fa98"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "92ce16a1833c8a4d2ba01737b5c10c3b"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "ff2bb36a5c15c6401553058975ef7293"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "008d0fb339a41e4869533f4b128d5062"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "2bcc75e0f2fd9654b22cfe629def02d9"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "9dbd17977c9a67709f8da7171da28ae6"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "f296b1f99492de1d5a7c0e067ae4b42c"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "7bf24a94741b22290c1a3d92b1ed41f5"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "ed78222cf1743439cd3b40849e2d593f"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "9560e8d89389d58dd02aafb4d761f58c"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "5413fa029c078cdd5dc05065ddf094f7"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "04d71ba99503da54ac65dfdbbf458f0b"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "834e8b6d6a9a37539b857cd63c256f0d"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "f6969f4087b967221b3a83ca50d0eea1"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "c9a4e7003a69f704418e0936782cc84d"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "d035858ab14274d601592cc8dbd7b68f"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "708c5a0fbdbadeb98f53c92eeef71511"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "846cde1d11cce3ec747bfa702392285e"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "5b340b7210040a99b4eb0f7154b61db5"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "81e5e26ed751a236f1bef64ffb1e0382"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "452f7f7dae9cea5e22bc403c0415f94e"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "537d9e6c242e65c76e7583883a2e94a9"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "d3d981cf758da4887d3b304f5b9f0dd2"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "cc4c3a0a0b23e942a8356737fa853648"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "6319c7665825969ec544a8046f9936ba"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "32ade79f3cb9b956f3a9d57b1e05d0e8"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "35a6e21b073d822833329f3bca78cccb"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "6a74936ceaaaa146e2e5e7f145eacbf2"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "d34c5a3506da075509214b25d0a6d541"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "3e423f06e9526ae55730734602f2fc3c"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "244ce811d44bfa3660b07f289741a846"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "198a934f0a2d407a7d05c9f16cf4f0de"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "7a81104cd15fb563f28aedbe49364f25"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "1a77ac2cc3a31d0c0ce301af1a706679"
  },
  {
    "url": "cs/network/application.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "91f78d20719e9cbc379958e5b9da5090"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/network/index.html",
    "revision": "3e423f06e9526ae55730734602f2fc3c"
  },
  {
    "url": "cs/network/link.html",
    "revision": "44d90ad788ff7f1cfd590012eafafcc3"
  },
  {
    "url": "cs/network/network.html",
    "revision": "487171ca40c43d7c71e94cc8b56a5cc4"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "d74704f5df1a7044852b5505eb21c1e4"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "c17990649c000720864d026c02b038fb"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "46e8861dac39c145a1d478409e9687fb"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "bc97716a751d11e8f669d6d290a0e31c"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "1e198244a9f4f55db3582c07768b8cc4"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "3e423f06e9526ae55730734602f2fc3c"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "7110cca62432294b6b900c7593291c03"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "f7f9959db9e3ae6d212e579622a74ee8"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "c9047ab44204b7556957d343577e832d"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "ab538e08287e5b12ff8b63866d889c85"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "acb291050f29ba16e25dc427ef079438"
  },
  {
    "url": "cs/web/index.html",
    "revision": "5c79e02cefff4d1e647c359aa734e031"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "63687c1ad610edbb4adde4ed01d6a486"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "9ef6406a91cff9842d934d3d05a24143"
  },
  {
    "url": "cs/web/web.html",
    "revision": "21cc8a360d2668ccbb544830558ab99e"
  },
  {
    "url": "daily-life/phone-lost.html",
    "revision": "bfcbb042a3778f12b70298331669babf"
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
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "7238ba9e21c48b835ce752525ce5a45c"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "f3f05dd3bf709aceef136e2765250e8d"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "7c798be889bc72a7945922159a2dcf91"
  },
  {
    "url": "language/english/differ.html",
    "revision": "26e5e3486c2e3bd69907073feb60fed7"
  },
  {
    "url": "language/english/index.html",
    "revision": "3315603acec1c99cb3bedee57be30cf8"
  },
  {
    "url": "language/english/modal.html",
    "revision": "8f873bbc028544c7fae9994833441589"
  },
  {
    "url": "language/english/mood.html",
    "revision": "51c7111bd25ac8d35a74e6a1230c597e"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "a5e5748135151685b6cd6881c2961cd7"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "09195aaa7e476764601b9c8c0174961a"
  },
  {
    "url": "language/english/phonetic.html",
    "revision": "0189115731d04a056a4fc9386496bb95"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "8332ed80cce6a4e4055bb572af796b61"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "e5f00b044a0bb1a0acdcf59c101a87c0"
  },
  {
    "url": "language/english/tense.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "language/english/verb.html",
    "revision": "b5e693ae430d92e81a5987105ff1d3f7"
  },
  {
    "url": "language/index.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "tag/index.html",
    "revision": "437d756a45a8b26a22be2f12842f102c"
  },
  {
    "url": "timeline/index.html",
    "revision": "9b1fa3607c261c50af714c182fcc10f5"
  },
  {
    "url": "tools/chatgpt.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "tools/hash.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "tools/index.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
  },
  {
    "url": "tools/nothing-here-but-void.html",
    "revision": "75a1ed7818a54bcebe5430a45971c51a"
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
