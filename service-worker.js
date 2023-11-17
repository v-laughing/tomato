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
    "revision": "ee852693178573b7301baa39b6fbdddd"
  },
  {
    "url": "assets/css/0.styles.3326c969.css",
    "revision": "4059ea9546692ccd0bc983eab6c6c9b2"
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
    "url": "assets/js/1.aadb11db.js",
    "revision": "71bbdbd08d6531a18cd7ffcf784f296b"
  },
  {
    "url": "assets/js/10.f4d9f0d2.js",
    "revision": "d502d1dd3159763c761b17efc3afe959"
  },
  {
    "url": "assets/js/100.08f89149.js",
    "revision": "8f31f6538ae4fe9f0ee6f81cac10581a"
  },
  {
    "url": "assets/js/101.79cfa4bf.js",
    "revision": "c3bbb3b0aa43b469936042765bb2c94f"
  },
  {
    "url": "assets/js/102.508f3d86.js",
    "revision": "435133525628f655c435e5a18618b2ce"
  },
  {
    "url": "assets/js/103.dae54588.js",
    "revision": "3c0b58b7e1afad6c679b648926936475"
  },
  {
    "url": "assets/js/104.89121584.js",
    "revision": "5cdab05321110b20210119f1c8f3ac60"
  },
  {
    "url": "assets/js/105.2cbb1006.js",
    "revision": "f5fbce8271a4a40fb1a9779faa6b4708"
  },
  {
    "url": "assets/js/106.afa1e805.js",
    "revision": "acd7dfc840a2f38e30b92e4cd1874ce2"
  },
  {
    "url": "assets/js/107.fe34d99e.js",
    "revision": "75fed845ceabfcde1479a235c8bca580"
  },
  {
    "url": "assets/js/108.2779d62e.js",
    "revision": "0eec1b431c2a9fc26b42557995bf1806"
  },
  {
    "url": "assets/js/109.ff624d12.js",
    "revision": "49f1fff4b1d706b86d7d6ad8b40d0143"
  },
  {
    "url": "assets/js/11.58294027.js",
    "revision": "2331776c4c78235ec97bf6e55c1d3101"
  },
  {
    "url": "assets/js/110.d8de3bf7.js",
    "revision": "1b00c18ab23c21c5e977f114194b7572"
  },
  {
    "url": "assets/js/111.7e670a19.js",
    "revision": "d51c54cec6ee14f45d34e67dd13eae9f"
  },
  {
    "url": "assets/js/112.630c58dd.js",
    "revision": "2d6230e0e0ec87564525b5548b4db6f2"
  },
  {
    "url": "assets/js/113.40441def.js",
    "revision": "7a56a8a658e91b71a99f10ccff2f5121"
  },
  {
    "url": "assets/js/114.6626692a.js",
    "revision": "38db13b2c8497b8e44fc026c6befc1aa"
  },
  {
    "url": "assets/js/115.b5953e05.js",
    "revision": "62ba7c692ee8858f8cadd8c482e6bce0"
  },
  {
    "url": "assets/js/116.4df11523.js",
    "revision": "40fb5209747cb4192c3a17a1855f0162"
  },
  {
    "url": "assets/js/117.9d888ee6.js",
    "revision": "d1e70e91ffc779b4955c568f69d50e47"
  },
  {
    "url": "assets/js/118.aad715ab.js",
    "revision": "bf2443612bbf27981f17a8e1568f5fa4"
  },
  {
    "url": "assets/js/119.048ead5a.js",
    "revision": "95448cde850fdddc95a36343c027d727"
  },
  {
    "url": "assets/js/12.a8cffb7f.js",
    "revision": "b01d624979c8a688072a11889bdb6ac7"
  },
  {
    "url": "assets/js/120.4ad6f5cd.js",
    "revision": "fd1dea0d374b3796bc1b8c43a5e0d539"
  },
  {
    "url": "assets/js/121.04f7af0d.js",
    "revision": "7b1416d26204182c0875cdc92b2687e1"
  },
  {
    "url": "assets/js/122.4a47ec83.js",
    "revision": "a775911fa0f3a10661c3e44830b3bc6d"
  },
  {
    "url": "assets/js/123.c7859f28.js",
    "revision": "a4c86a105d8d267b4054e0404bab8eb9"
  },
  {
    "url": "assets/js/124.333896f8.js",
    "revision": "4663f8df2844c7ef3994ca021add2145"
  },
  {
    "url": "assets/js/125.1674873e.js",
    "revision": "7107b66843257380c3bfd134f60296ee"
  },
  {
    "url": "assets/js/126.cecdc7d2.js",
    "revision": "ffa0b749aa7a2e7029a927aa6b9831f6"
  },
  {
    "url": "assets/js/127.1249ef57.js",
    "revision": "c289849edb6bf55da101e47e269e953c"
  },
  {
    "url": "assets/js/128.ad49d708.js",
    "revision": "e1318cd6c4c4d016e838b04f56b0e4a6"
  },
  {
    "url": "assets/js/129.bb9239f8.js",
    "revision": "8a59d01c8562445943718708f18a3c77"
  },
  {
    "url": "assets/js/13.a2e424d0.js",
    "revision": "d1b85cc5ee9d4a4705fad5756382d0cb"
  },
  {
    "url": "assets/js/130.143ecb91.js",
    "revision": "bf85d962e63f85134f9e211749b4d46f"
  },
  {
    "url": "assets/js/131.b4231cc6.js",
    "revision": "22ee1258c82bebddcac3d40a93a8632e"
  },
  {
    "url": "assets/js/132.a0952314.js",
    "revision": "b5a8b7908d6d47d599444ec8d53f51c5"
  },
  {
    "url": "assets/js/133.3ee8aa41.js",
    "revision": "af7da9db888cdd92d1c69188b11ac501"
  },
  {
    "url": "assets/js/134.a9c7cc81.js",
    "revision": "51c3666dbfdd38a750417c00f0040993"
  },
  {
    "url": "assets/js/135.ff395bac.js",
    "revision": "a9f5d2f2acaad3f40eb59f6e046ee7ce"
  },
  {
    "url": "assets/js/136.aa38d4d8.js",
    "revision": "39b799cd2b684894b1d9c1b3c1ee0f09"
  },
  {
    "url": "assets/js/137.211725c3.js",
    "revision": "f643810617ab1da442eb6e370e963d71"
  },
  {
    "url": "assets/js/138.88ffc283.js",
    "revision": "f0a774f3b6e7acc96f93a5fc4a74d209"
  },
  {
    "url": "assets/js/139.963a153e.js",
    "revision": "fe8d3a5fa86b11ab8c3a5ad3f60f2cb2"
  },
  {
    "url": "assets/js/14.62b89927.js",
    "revision": "ce983c4ba09ad52fff6b9b372badca23"
  },
  {
    "url": "assets/js/140.3b6b8ca1.js",
    "revision": "235ec1bb1de8a795ec182626c2dd6e20"
  },
  {
    "url": "assets/js/141.45f99ccb.js",
    "revision": "a90161e6bd1bd6d93a9fd8c61d45b074"
  },
  {
    "url": "assets/js/142.71b4db01.js",
    "revision": "317e3b191614d418c29a8fe74a6d26eb"
  },
  {
    "url": "assets/js/143.fa6017b7.js",
    "revision": "c907c26b46475201367a1805d6575544"
  },
  {
    "url": "assets/js/144.b7454b02.js",
    "revision": "fc2adad675c5c8238828e3d4360f55d8"
  },
  {
    "url": "assets/js/145.8d9b4c3d.js",
    "revision": "6a892deebb1be95511f9ee59ec29896e"
  },
  {
    "url": "assets/js/146.2a1a8ddf.js",
    "revision": "670050e144222b1a0d4f353f2122e9c3"
  },
  {
    "url": "assets/js/147.ad7a1e88.js",
    "revision": "4a66f04d850b52b8f5c612f5060fb12b"
  },
  {
    "url": "assets/js/148.43433259.js",
    "revision": "398f156ca36b7c20298d479065a5346a"
  },
  {
    "url": "assets/js/149.bbc76a14.js",
    "revision": "e546deafa84b9166d9ddbb4b0df44629"
  },
  {
    "url": "assets/js/15.904f4d77.js",
    "revision": "3cc58778208442aa22c35f255dbcb9d7"
  },
  {
    "url": "assets/js/150.90e82bc2.js",
    "revision": "f72ce6bfa9beaa48b61d2b053e84415e"
  },
  {
    "url": "assets/js/151.da245976.js",
    "revision": "23fae9c7750efa3d39023bc9db79ad57"
  },
  {
    "url": "assets/js/152.edc172f0.js",
    "revision": "abdeaf1adc59e124a6b5216314aebe52"
  },
  {
    "url": "assets/js/153.6d7eed27.js",
    "revision": "b91c8b8a2b58004408205fa261c7968f"
  },
  {
    "url": "assets/js/154.a3ac5683.js",
    "revision": "73dbc47f4e967680e81982924064df95"
  },
  {
    "url": "assets/js/155.ca65059f.js",
    "revision": "cdec81a9a50c9cee4fda094249a63013"
  },
  {
    "url": "assets/js/156.0d4eda86.js",
    "revision": "2470a82db68017d162355e04ded3c1a2"
  },
  {
    "url": "assets/js/157.498d66a6.js",
    "revision": "9a4bd5be090187aa8388f41a837fd6ed"
  },
  {
    "url": "assets/js/158.3939688e.js",
    "revision": "95f9ab99cd5d8f624e49360da0648e56"
  },
  {
    "url": "assets/js/159.a63ed54f.js",
    "revision": "9b5e483babf6dd4400ed887edabc5a92"
  },
  {
    "url": "assets/js/16.08cc8b4a.js",
    "revision": "f932a4feb36731b2dfdffc64f462af15"
  },
  {
    "url": "assets/js/160.12696503.js",
    "revision": "2f3046a366ad3b440eee37f79b0c5b35"
  },
  {
    "url": "assets/js/161.ba20536d.js",
    "revision": "ab3974d13a420a3663f6953bb70e905b"
  },
  {
    "url": "assets/js/162.05a5417a.js",
    "revision": "d47b93b454f9f7f9766f41e8fd269f72"
  },
  {
    "url": "assets/js/163.e4aad874.js",
    "revision": "08621fd728092435da88614a1274f416"
  },
  {
    "url": "assets/js/164.3b6d088e.js",
    "revision": "fe6fbfef3eac8a5a1e38dd9002451ae9"
  },
  {
    "url": "assets/js/165.41119382.js",
    "revision": "0460305a572b3e23b51bbb11f97c9888"
  },
  {
    "url": "assets/js/166.aa79e8a2.js",
    "revision": "61ba4a2fdcf05d166fb0e87aa09560ee"
  },
  {
    "url": "assets/js/167.46369c9e.js",
    "revision": "afa5635dc93edfac42189c5920af08ca"
  },
  {
    "url": "assets/js/168.fd5b0880.js",
    "revision": "7f24a8ceee39e8492b4a886a3ff71833"
  },
  {
    "url": "assets/js/169.0532edd8.js",
    "revision": "f857dbe7accbe73a99d8fd0c96daf35c"
  },
  {
    "url": "assets/js/17.84be737d.js",
    "revision": "ffe061f31db92c081c1af4d54c527037"
  },
  {
    "url": "assets/js/170.7b331784.js",
    "revision": "028def2ecc9b446011ca3c8868e13399"
  },
  {
    "url": "assets/js/171.99c3acb5.js",
    "revision": "c52321ee5a0763df5c16765eb175de84"
  },
  {
    "url": "assets/js/172.d54b7e79.js",
    "revision": "1db0a086a0acd0d841dea7b41246221b"
  },
  {
    "url": "assets/js/173.381da621.js",
    "revision": "841465c42d3643d8d18a25769026b400"
  },
  {
    "url": "assets/js/174.3b9ae097.js",
    "revision": "589d89683733e1d95353a6f1121334e8"
  },
  {
    "url": "assets/js/175.45451c85.js",
    "revision": "2f7ebf3719e09aab272b5f832ecfe9ce"
  },
  {
    "url": "assets/js/176.2df20a61.js",
    "revision": "5c99579c0d15f7ee7c6fc8432572258c"
  },
  {
    "url": "assets/js/177.62541845.js",
    "revision": "f5e5a870cf6588186697f997a0379f73"
  },
  {
    "url": "assets/js/178.0f48dc4c.js",
    "revision": "214491468f20a7ccfa8f65a1ba7bd6db"
  },
  {
    "url": "assets/js/179.423d1f15.js",
    "revision": "7e1af15e352efecedb01e7d9141d1208"
  },
  {
    "url": "assets/js/18.aeae4084.js",
    "revision": "7621ef83bcf320547f4c38cc4b90c32f"
  },
  {
    "url": "assets/js/180.e2588fe6.js",
    "revision": "a317272e06c03f10d9ef3c7a7f6c5650"
  },
  {
    "url": "assets/js/181.847d926b.js",
    "revision": "4c6cfb56e2eb605846080445d6750ad1"
  },
  {
    "url": "assets/js/182.9bce33f2.js",
    "revision": "3a16169a800865d946c159f639c8d25d"
  },
  {
    "url": "assets/js/183.3f7dd4e8.js",
    "revision": "e84959222da09d8ed61b1455e085d82e"
  },
  {
    "url": "assets/js/184.faf26c1f.js",
    "revision": "9d982dde6a8fc82568a0f1b586a888be"
  },
  {
    "url": "assets/js/185.6157860f.js",
    "revision": "c008689d0c997fd6beb9fdc9578b83d0"
  },
  {
    "url": "assets/js/186.6c7a61ff.js",
    "revision": "ac001a610a3d42f45e6385befef18a1c"
  },
  {
    "url": "assets/js/187.21239735.js",
    "revision": "ab64a1b9f3ff01d3ac3059ad70902c53"
  },
  {
    "url": "assets/js/188.a01cc4c3.js",
    "revision": "8916c54c5fd10097277428f2014d23bd"
  },
  {
    "url": "assets/js/189.e81bd329.js",
    "revision": "1a677b4d5a0bdc279443eb33bc31e782"
  },
  {
    "url": "assets/js/19.073735c8.js",
    "revision": "6121e404dd9f25ab5754231068abcce9"
  },
  {
    "url": "assets/js/190.f746a0e8.js",
    "revision": "b048d783f92c5b708ea90718ed5e0019"
  },
  {
    "url": "assets/js/191.8846583b.js",
    "revision": "4a343d780071d89e70256b4256494bf0"
  },
  {
    "url": "assets/js/192.82425fb9.js",
    "revision": "b6b39e502af99131a82f5f4850e6a2ea"
  },
  {
    "url": "assets/js/193.91053412.js",
    "revision": "88a28811476018f17243de852fee07ee"
  },
  {
    "url": "assets/js/194.f07b12f8.js",
    "revision": "d8e3c9e791e039b5e63eebb5cc21b08b"
  },
  {
    "url": "assets/js/195.d7f6dd17.js",
    "revision": "aa0afd46c0d81a3ba4bc78fa0e5ab508"
  },
  {
    "url": "assets/js/196.f051476e.js",
    "revision": "e35f20f791a9bf29706faa3bc23b714e"
  },
  {
    "url": "assets/js/197.4d022d04.js",
    "revision": "cf308d7bc5f01f6859008de60c0c21dc"
  },
  {
    "url": "assets/js/198.e6a4e149.js",
    "revision": "d5a4211b27c08e1e148b465a66749283"
  },
  {
    "url": "assets/js/199.402b7c48.js",
    "revision": "c70d3a0e4a7b50eed3b6d173210651ec"
  },
  {
    "url": "assets/js/2.e823a4d1.js",
    "revision": "156e3f2264cbf6479f6098f517d22fd6"
  },
  {
    "url": "assets/js/20.0c798595.js",
    "revision": "97683f321a05b46166db00a112f59075"
  },
  {
    "url": "assets/js/200.6236368d.js",
    "revision": "1d20ee5f250b61646cdd4363909e1b6c"
  },
  {
    "url": "assets/js/201.96077827.js",
    "revision": "3f5ffe4df56ed63201b5f05cf422f1e1"
  },
  {
    "url": "assets/js/202.49180cd5.js",
    "revision": "a7ab58b70cab50dfbc10f46889c082d9"
  },
  {
    "url": "assets/js/203.56c2ca87.js",
    "revision": "fe2141ee7ff28a47bfd7cc1324d4a7d6"
  },
  {
    "url": "assets/js/204.9d6b9773.js",
    "revision": "7f1acd7acd59f6f39a69645a56226eaa"
  },
  {
    "url": "assets/js/205.e6a9b954.js",
    "revision": "4884c90f144fc54aa41de35a497243c3"
  },
  {
    "url": "assets/js/206.0036a291.js",
    "revision": "0c9767bd3d3f8a0271b9f4a1679c9d38"
  },
  {
    "url": "assets/js/207.0c5c04cc.js",
    "revision": "68fe3349c5acb42e586905cabfb94e55"
  },
  {
    "url": "assets/js/208.f3f1e174.js",
    "revision": "872073310b2200960b6f0839f5867b20"
  },
  {
    "url": "assets/js/209.e4056499.js",
    "revision": "f1119df3543b24bba8ca5b3ddc40a3f8"
  },
  {
    "url": "assets/js/21.fd29235f.js",
    "revision": "5415c26478a7b04deb95ca21796520a5"
  },
  {
    "url": "assets/js/210.2d83f374.js",
    "revision": "f140ded4200eebe63f66686056940e8a"
  },
  {
    "url": "assets/js/211.ea8aef23.js",
    "revision": "d2fbc757bfea1c7fe6dc32c034e76250"
  },
  {
    "url": "assets/js/212.4bddb14e.js",
    "revision": "22867b52468ada2e079658c4e889a50c"
  },
  {
    "url": "assets/js/213.8971afa1.js",
    "revision": "7e855797eb3585dd089a53bbf3250b10"
  },
  {
    "url": "assets/js/214.589943c9.js",
    "revision": "9ce47131a59806cb985deb8833782ac2"
  },
  {
    "url": "assets/js/215.f81fd0c9.js",
    "revision": "7054a8fd9716c24372fb6ef527bf8461"
  },
  {
    "url": "assets/js/216.808ea3a9.js",
    "revision": "3cef3d9c57d939560753afc810296831"
  },
  {
    "url": "assets/js/217.dfd95d27.js",
    "revision": "dc16d1795a001c5bc56de81830f0bc03"
  },
  {
    "url": "assets/js/218.dbea335c.js",
    "revision": "3f06815679e657c4f5128a741dd7a520"
  },
  {
    "url": "assets/js/219.19ea999c.js",
    "revision": "7cae4004d1705ecd3b96a663f5d45e66"
  },
  {
    "url": "assets/js/22.9b4a0a73.js",
    "revision": "b345908734981da52cd3fdf563effee9"
  },
  {
    "url": "assets/js/220.1e92f7b3.js",
    "revision": "9d713a579af3fcf723b967aea6e93263"
  },
  {
    "url": "assets/js/221.0a669e31.js",
    "revision": "1284e6f50314c95f15f2e23ec1284eb7"
  },
  {
    "url": "assets/js/222.0fb2de6e.js",
    "revision": "6f40516016f48f65c6e03db094875bb8"
  },
  {
    "url": "assets/js/223.53ac1908.js",
    "revision": "0984cc6b9f71cb20bfb43fcab742b03f"
  },
  {
    "url": "assets/js/224.37bd5d42.js",
    "revision": "e42fe81f16538042262db8a90e51bde5"
  },
  {
    "url": "assets/js/225.fb5306c4.js",
    "revision": "5294bd608c2a1bd9163bf0cb273034e3"
  },
  {
    "url": "assets/js/226.5224f32f.js",
    "revision": "bc3ff71f7033abd717e60d8566ab5dce"
  },
  {
    "url": "assets/js/227.0be43c9d.js",
    "revision": "cc59fdf8738a776dce2471a90f01814b"
  },
  {
    "url": "assets/js/228.c5b69a4a.js",
    "revision": "42c49eb52deb746fd1651bfdab2319db"
  },
  {
    "url": "assets/js/229.c01cedc6.js",
    "revision": "bf1573b305f33a5d83829441aa0e411a"
  },
  {
    "url": "assets/js/23.48be6ae1.js",
    "revision": "a0150e6d60ecc4d19fa696566098e0cd"
  },
  {
    "url": "assets/js/230.09cebe9b.js",
    "revision": "cf67b27de60d0cdf611eec96a8b256ac"
  },
  {
    "url": "assets/js/231.11c0a9c4.js",
    "revision": "dddc8995f00c233c60c29c9058287eff"
  },
  {
    "url": "assets/js/232.627074fc.js",
    "revision": "527dd99cfd7993d4265301fd8fb79e7a"
  },
  {
    "url": "assets/js/233.8fd364fd.js",
    "revision": "18ab5a4e195938fd069c2f37e766dab7"
  },
  {
    "url": "assets/js/234.ec398c32.js",
    "revision": "211feb0ba3283d5753a2f2dc0b54e56b"
  },
  {
    "url": "assets/js/235.e409a964.js",
    "revision": "2d471348b2b27f24c7e021af1dd74ee2"
  },
  {
    "url": "assets/js/236.f3eaf28d.js",
    "revision": "1e21d26fbc0fd41711a50ff6aa0b97e3"
  },
  {
    "url": "assets/js/237.47a90000.js",
    "revision": "b7df49771700a160dc7f5e443afcd491"
  },
  {
    "url": "assets/js/238.f30a16a1.js",
    "revision": "1b8c9d80bf74d7da710c7a6e2f6b0a74"
  },
  {
    "url": "assets/js/239.890577d5.js",
    "revision": "8d83ec5115639bbcce898055b71222e8"
  },
  {
    "url": "assets/js/24.bf0ace09.js",
    "revision": "537e016abe999084e925dbbc6b4d7713"
  },
  {
    "url": "assets/js/240.ab52bf9c.js",
    "revision": "5b0ae19705544ff60a3236378c4d0489"
  },
  {
    "url": "assets/js/241.72cceb25.js",
    "revision": "1e90d9c5421e289a9854e153d135385c"
  },
  {
    "url": "assets/js/242.a7f15718.js",
    "revision": "5347e463a2a60c04374505de75aaa1a5"
  },
  {
    "url": "assets/js/243.1112aa2b.js",
    "revision": "50e2356164a9690c89ef5981faa4dbc2"
  },
  {
    "url": "assets/js/244.5f1f492b.js",
    "revision": "433c7de0b2ea15e37a8f033ef7378d7f"
  },
  {
    "url": "assets/js/245.f35dda2f.js",
    "revision": "6b9cbc9fcb0d86893f2f39282e702ec6"
  },
  {
    "url": "assets/js/246.ba088175.js",
    "revision": "bf0173e87b86788461db0908f10dd953"
  },
  {
    "url": "assets/js/247.04c1aaa1.js",
    "revision": "dff5008d4829b112c9b23680537e2ce2"
  },
  {
    "url": "assets/js/248.2d36bf27.js",
    "revision": "4b3491c8a6705b8390f19a855d3a27b4"
  },
  {
    "url": "assets/js/249.ce8b21c9.js",
    "revision": "26b0fa79b6bec2c223aad3bdc17bfc12"
  },
  {
    "url": "assets/js/25.e9359e42.js",
    "revision": "1b4270f6adae04a565004c70b523a905"
  },
  {
    "url": "assets/js/250.7bea834b.js",
    "revision": "6285fe50db23e79ed2201a85a539ac64"
  },
  {
    "url": "assets/js/251.2132c299.js",
    "revision": "5f21ae026c07c2fd99c7f14be50cbc6d"
  },
  {
    "url": "assets/js/252.5da2c8a6.js",
    "revision": "7f24df354cc8940bd75cd8b41b386b8a"
  },
  {
    "url": "assets/js/253.30b7a397.js",
    "revision": "5e83ced05c107a203a55d28c6beff542"
  },
  {
    "url": "assets/js/254.c3090b01.js",
    "revision": "10935d6849f9224e4e7973d43c6ccea7"
  },
  {
    "url": "assets/js/255.606a991d.js",
    "revision": "8711689a38d0972ffdf9aff184e0b71f"
  },
  {
    "url": "assets/js/256.5b2b7b51.js",
    "revision": "fd5708194b0094eeb998c1d3d5d5881e"
  },
  {
    "url": "assets/js/257.3077ab69.js",
    "revision": "8960c35aef11ba12f856eddfb5f5ea57"
  },
  {
    "url": "assets/js/258.ee6c1660.js",
    "revision": "b91f64df47e01b9e2ed23bf59e27ce40"
  },
  {
    "url": "assets/js/259.2d6fdc5a.js",
    "revision": "666c1043d5e8911e61f3dbebbb6bac00"
  },
  {
    "url": "assets/js/26.1758ca98.js",
    "revision": "8331972fbb7faf01c1c98865453719ae"
  },
  {
    "url": "assets/js/260.3512d502.js",
    "revision": "5d67525f31ff79cd5a4c259d4ae874e5"
  },
  {
    "url": "assets/js/261.25a60d4c.js",
    "revision": "eb3398b6fdacd87dca6b8fa5f74a5082"
  },
  {
    "url": "assets/js/262.49d720a4.js",
    "revision": "50128f015ebb2120c17dfa3b36dac971"
  },
  {
    "url": "assets/js/263.ad5d9d98.js",
    "revision": "db0ec94236f706d182fbe682d40eb35c"
  },
  {
    "url": "assets/js/264.01e33684.js",
    "revision": "e77e22b3142f7dad991f66d599937e7e"
  },
  {
    "url": "assets/js/265.6d0950e6.js",
    "revision": "663ec5ab2e4958340eb72b5b478b08f4"
  },
  {
    "url": "assets/js/266.013e4ea5.js",
    "revision": "f9fbc24dc5009bf0ae27694bf5568cb5"
  },
  {
    "url": "assets/js/267.2c70dfbf.js",
    "revision": "af37fec4d20959ba81cf6e04f1d40b3c"
  },
  {
    "url": "assets/js/268.8c2cb8bf.js",
    "revision": "4f34e5c433a2f70bcb26b8cf0ad82453"
  },
  {
    "url": "assets/js/269.605c34a7.js",
    "revision": "716084f93134ab81ff480918bc481049"
  },
  {
    "url": "assets/js/27.ddc6b10a.js",
    "revision": "c879517ed094c84ef68bdc84fe92511a"
  },
  {
    "url": "assets/js/270.33b7185e.js",
    "revision": "c71e6ee91832ff9fc5c54ca55909be41"
  },
  {
    "url": "assets/js/271.5a66991f.js",
    "revision": "0e0f95eb7b59addd91fcbbce636d620f"
  },
  {
    "url": "assets/js/272.3d25cf90.js",
    "revision": "c79bc93c26d006d32f46e765847d787d"
  },
  {
    "url": "assets/js/273.ddf1446e.js",
    "revision": "005d9c477c67a13f3435b68c034d9e44"
  },
  {
    "url": "assets/js/274.0f159ff7.js",
    "revision": "e22307d3348e966a730351952629e400"
  },
  {
    "url": "assets/js/28.07f0a2ac.js",
    "revision": "d121f4aff27f0291545b7d760eaa61dc"
  },
  {
    "url": "assets/js/29.5ae47de2.js",
    "revision": "86616493177f8649d7ffe53eabd191b3"
  },
  {
    "url": "assets/js/3.01f970a1.js",
    "revision": "009cd4643967d4c1bc84a90d6fc3cd7e"
  },
  {
    "url": "assets/js/30.c6793445.js",
    "revision": "b9c1e64af792dcbde17afb2d5c756438"
  },
  {
    "url": "assets/js/31.163cd6ee.js",
    "revision": "bb4eefee34834a814261c44d341caf38"
  },
  {
    "url": "assets/js/32.e98132d3.js",
    "revision": "fdb5d2f55c62fd2e355ab49a6f17f1d8"
  },
  {
    "url": "assets/js/33.6a6b8ff3.js",
    "revision": "265cfff17ad1efbeea6fa07cd2b4ddb8"
  },
  {
    "url": "assets/js/34.4e1ff7f6.js",
    "revision": "1d549aadfdfb8c49b4f4d7bcb8e3bafd"
  },
  {
    "url": "assets/js/35.d25c9952.js",
    "revision": "4e17016d62a3e98a0419de7dabaed131"
  },
  {
    "url": "assets/js/36.6607b87f.js",
    "revision": "894c8eb8e02f36804a0b8cf2fb075592"
  },
  {
    "url": "assets/js/37.f8c813f0.js",
    "revision": "2f24692690a3ded2de9e60276c2553c0"
  },
  {
    "url": "assets/js/38.2609144c.js",
    "revision": "8a180ade6b2209e862790ecf0361141b"
  },
  {
    "url": "assets/js/39.54f18076.js",
    "revision": "b6b5c2b5524d8eb4a5a54aa4c247012a"
  },
  {
    "url": "assets/js/4.f6705ec9.js",
    "revision": "1bae4c7bd77f14bcb5e495c8c2aac291"
  },
  {
    "url": "assets/js/40.e1836b39.js",
    "revision": "4969c4334fc937d78bbf8c992e06e37a"
  },
  {
    "url": "assets/js/41.569fc607.js",
    "revision": "1e58a95c4b092e4d55bd5ca529aecee2"
  },
  {
    "url": "assets/js/42.3931bcbe.js",
    "revision": "a3b9666599dd0b0f69da3d24d1e8b104"
  },
  {
    "url": "assets/js/43.6be96fe2.js",
    "revision": "f7d8d684e2cece42ab0f4274360106ed"
  },
  {
    "url": "assets/js/44.ed81d3e1.js",
    "revision": "e937254e690339a05273249667e0b8c7"
  },
  {
    "url": "assets/js/45.18a1a000.js",
    "revision": "4a8975272b158192946a32baebd4459a"
  },
  {
    "url": "assets/js/46.b798eed4.js",
    "revision": "51de91db6632485c49e082a440d293f2"
  },
  {
    "url": "assets/js/47.afbb166d.js",
    "revision": "35df7106bac3ac47e4afc265d8b3e52e"
  },
  {
    "url": "assets/js/48.7c77bc7e.js",
    "revision": "294799c514b470ce6da21e5e9445468a"
  },
  {
    "url": "assets/js/49.e6de575f.js",
    "revision": "6883dd7223e104b74e3253c898d9ef86"
  },
  {
    "url": "assets/js/50.e1698b1e.js",
    "revision": "8baf64ad787ed6678c08d21599b1b1a8"
  },
  {
    "url": "assets/js/51.5bb7242c.js",
    "revision": "d8d9c55c50155479fe06bd8407d48996"
  },
  {
    "url": "assets/js/52.2ea3633a.js",
    "revision": "f8f826db2fe64afdc922c33107c4b1a4"
  },
  {
    "url": "assets/js/53.2f3f5bac.js",
    "revision": "993930a4e3a2bfe215e507bab8f2faf7"
  },
  {
    "url": "assets/js/54.a435e34d.js",
    "revision": "38b581e81fe4801478c5ca6a8a1441d5"
  },
  {
    "url": "assets/js/55.8d4acce9.js",
    "revision": "932369818fb0ed8d5dc0fe1c0a647bbf"
  },
  {
    "url": "assets/js/56.0c265b98.js",
    "revision": "7658c54fb39e16a42d750c58f958cc94"
  },
  {
    "url": "assets/js/57.c26bfa10.js",
    "revision": "37f6f81131eac1f2324496ef5043cdae"
  },
  {
    "url": "assets/js/58.5ef48145.js",
    "revision": "65120681f68d4e70e33ae15a578809eb"
  },
  {
    "url": "assets/js/59.bfc29be1.js",
    "revision": "c5e092c45fa6e287c4918c332fb1bd53"
  },
  {
    "url": "assets/js/6.cdf7ffc7.js",
    "revision": "2a669ed901d0b5db8cc2f727b7596396"
  },
  {
    "url": "assets/js/60.2c83b06b.js",
    "revision": "abac3052f853b9b15d9ac3bd67d9758a"
  },
  {
    "url": "assets/js/61.3ee13537.js",
    "revision": "98ab77601c054621f795d2efc135a755"
  },
  {
    "url": "assets/js/62.22ace383.js",
    "revision": "4b114e696c3f3a639ca024083624970c"
  },
  {
    "url": "assets/js/63.ec975281.js",
    "revision": "9538653c03962d23873ace986414c552"
  },
  {
    "url": "assets/js/64.93c76f2c.js",
    "revision": "6dd92a46286d21269da8fa8b9a35282e"
  },
  {
    "url": "assets/js/65.7e930ace.js",
    "revision": "e6e2f7b5cde5357f0b7fd9b04158e96d"
  },
  {
    "url": "assets/js/66.299aef20.js",
    "revision": "0f1f4367cea2d13251c4b62a996c512e"
  },
  {
    "url": "assets/js/67.fa4f87fd.js",
    "revision": "d7dc1b0b297c1eeacf37a5b664104d15"
  },
  {
    "url": "assets/js/68.f336db63.js",
    "revision": "4ad5e2dfe272e020328c42818df19554"
  },
  {
    "url": "assets/js/69.5c129c03.js",
    "revision": "f3af31b80754807ebce64059136f43e7"
  },
  {
    "url": "assets/js/7.2b74f89e.js",
    "revision": "10acf2f5e22144e1460597b179ddc65f"
  },
  {
    "url": "assets/js/70.ef98e0f6.js",
    "revision": "60d90d6d24eee433bb4893525abbd8ee"
  },
  {
    "url": "assets/js/71.585dab5f.js",
    "revision": "1db887554946e51ff3a03ceb821abd54"
  },
  {
    "url": "assets/js/72.4c5c19af.js",
    "revision": "8ffa2c40d30935557442c58248327f41"
  },
  {
    "url": "assets/js/73.0c92ff5b.js",
    "revision": "f546a7f3025c502ba7f8f29c4c15587a"
  },
  {
    "url": "assets/js/74.33f1bf00.js",
    "revision": "8f892dd5cec4b5c77af5d9d1f6d0b942"
  },
  {
    "url": "assets/js/75.209aa285.js",
    "revision": "33967cc889ff2d18b4d7a7bd9f775e40"
  },
  {
    "url": "assets/js/76.9cef1325.js",
    "revision": "254fca4c5b1694604ea36eab02c83f77"
  },
  {
    "url": "assets/js/77.4bb22281.js",
    "revision": "fa10fee0d2606e757176a76b97b242c0"
  },
  {
    "url": "assets/js/78.49052742.js",
    "revision": "5d4b943951042f0580961e173239fdf6"
  },
  {
    "url": "assets/js/79.c75f8f94.js",
    "revision": "85373047aec04188fd5b8af4e9093475"
  },
  {
    "url": "assets/js/8.01debc54.js",
    "revision": "a391a2f510fb707b992518dfe3fccf44"
  },
  {
    "url": "assets/js/80.07498674.js",
    "revision": "d41e73bd60aaf65428384d9d2e6cf2e5"
  },
  {
    "url": "assets/js/81.ee051365.js",
    "revision": "934913f762a69f51081e6edd78f18a54"
  },
  {
    "url": "assets/js/82.b6f1b44e.js",
    "revision": "74b35cba0f0329d92ce3e479b493d578"
  },
  {
    "url": "assets/js/83.d4b38c09.js",
    "revision": "8f6e5a1c0fe7c3d9dd63c67695c02fad"
  },
  {
    "url": "assets/js/84.89eddd29.js",
    "revision": "0b3fe2751b2480aabf5906263178449d"
  },
  {
    "url": "assets/js/85.9b3bdbeb.js",
    "revision": "bd6ff443f3374ba7df345bf7805360d1"
  },
  {
    "url": "assets/js/86.acddc8ce.js",
    "revision": "1aec652e966fc7171a37b77d6693ab96"
  },
  {
    "url": "assets/js/87.9d2cd54c.js",
    "revision": "3b5633b59eb195e7d7a88b8c1cbc5249"
  },
  {
    "url": "assets/js/88.c82907a8.js",
    "revision": "733048c05153a86cc6ec99d82ee16669"
  },
  {
    "url": "assets/js/89.507388dc.js",
    "revision": "0e18b4a99663a2e85bc79d9e15d80ea1"
  },
  {
    "url": "assets/js/9.47b292f2.js",
    "revision": "7ddda13c2662a55db5cee3b87fa99415"
  },
  {
    "url": "assets/js/90.619730d9.js",
    "revision": "fd9ecf0814403f3121618423f16d7b5d"
  },
  {
    "url": "assets/js/91.efc1d4d3.js",
    "revision": "9fdd21e50a2ee01be50cf36b18b32e9f"
  },
  {
    "url": "assets/js/92.e0d0f62e.js",
    "revision": "7d843189f713b2ac370d15bf66269f17"
  },
  {
    "url": "assets/js/93.dde27b50.js",
    "revision": "8dafd1c6683b25c59fa87ce1b5ba2095"
  },
  {
    "url": "assets/js/94.206f5812.js",
    "revision": "fa77477922f4b4b8b1043e8f809ea585"
  },
  {
    "url": "assets/js/95.488db6fb.js",
    "revision": "d6a8306480f978e91f9295ffcdc308aa"
  },
  {
    "url": "assets/js/96.fcab667e.js",
    "revision": "70dbff2d6ef9c25b2bb521a7660cde2d"
  },
  {
    "url": "assets/js/97.16db3bac.js",
    "revision": "4f32e52b4f98ee15994f891a82c2983d"
  },
  {
    "url": "assets/js/98.a8c106b1.js",
    "revision": "282a62e5f4a27a54097536d60407a3ab"
  },
  {
    "url": "assets/js/99.1b031e49.js",
    "revision": "f7bf7c108e583df8b3a031d45672ddda"
  },
  {
    "url": "assets/js/app.9792dea1.js",
    "revision": "901aeb01e79807bfbdbd8a524dfca95c"
  },
  {
    "url": "categories/index.html",
    "revision": "f0b23f4f204405067bd30eb6f5243dc7"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "89119f451f46405c1fd8373db8bd55d0"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "4a752654ae120abacafa78420d8a8d16"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "f3f1e6e21f73ed53432d1163927ebcef"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "6fe8db8bf7cacf5c836c304b2d89e0c9"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "e8d7a8f1783b4667cc073bc7830459bc"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "94d31c12115f1aa1d20fe26efac1eb86"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "7c2fc7757f4a3d961d32771b9e6daf61"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "e138fad7021673cbf1b2fd3e511221a6"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "9f63d06102b1f40f37d9a40fc090f8f5"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "36904316a2431acdae716f0cf669244c"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "4a752654ae120abacafa78420d8a8d16"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "be05e47f42789562ca66fa6e83e53e9b"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "285f01925cc93232aa8d49079961c35a"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "2f2720dd6dbe446aaa96c5931d5a092a"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "847a3c4db70aab0a5a3812c99d37cc4e"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "61b1b0c14e728c9a1f1a1414f60286a4"
  },
  {
    "url": "cs/database/index.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "6b66c42497b66d4f3b8b0b2e0c7c75e2"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "b4f53a80b7a5624e9da33516ba420007"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "5bac34227b48f04da61b956a03b0767f"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "d3a5d6978a7bcae5e340a525cc3a06a4"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "2f7f6ac87f85c7c48d4b32ec3a411d57"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "cc9b5cc32ec6216485ac39d5198ae718"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "9b8dece5e3787fab8cacca94af667135"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "b9f9333bee158be3e3fdbd8a0ecd30bb"
  },
  {
    "url": "cs/design/command.html",
    "revision": "7d031ab728e708cde700e1da25267fc2"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "c7eea2742942c019bafd8e3fe42be691"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "82963721a15b8c5e2a5055160e9b3d88"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "1aaa45c80819730ce155a9f67e7afadd"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "ab3e4d165083913a830ffbf09a7850a0"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "8d8b401628ea7c71659b5c6736a95fee"
  },
  {
    "url": "cs/design/index.html",
    "revision": "e2aa72481752782e9377f02befbaaabd"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "4b566848c93709c9145e78ab12e1bc5a"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "c90b62c29ef9d5d3efc492964b4fe368"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "dc2e7a10ff3421cb283667e4382ef34f"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "5202c1e49544042b950c0f454d956b52"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "78b98f56f2f7b341648986e783e20201"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "6ab09151e8fd98a827c62d8202d7d69d"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "ee919ff6d0a884c8805862a721566ef2"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "ec7fd23f0364fe222f2cec08d490751d"
  },
  {
    "url": "cs/design/state.html",
    "revision": "ace809a53fe32ce219c1b494552ea669"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "f25623e03ed06c6d11c8fa84dc607334"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "ce1a6506a00ceaae3110a8a878fa5203"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "127676ebc413dcb1ebf92095ce416f17"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "4a99562278a424c8f82d78a017d9d7f6"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "2a9f16c330683291d250372d49545abf"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "1c83605e2a479839a1cbf2dbe47f6fa5"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "ae6f0e4d8e3620c96048a53b551a739b"
  },
  {
    "url": "cs/framework/vue3-reactivity.html",
    "revision": "acc385807bc7df5a99da23775337871c"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "a92536c8a3fc7a82de15efc9d290d62a"
  },
  {
    "url": "cs/index.html",
    "revision": "afc996547e7c6a6902c927b2e7674c4c"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/java/container.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/java/index.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "ecd67b489155a07f0110700ff9726ef9"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "72656980cd9e4515763371976830dec0"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "de560934b15ce753c3280cfb6017fe5a"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "bc9343a70f8cf8188a6815e2a2dfa971"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "6ac1d12a56394d78f7a4ab6030328bc9"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "328bdc713b76ff9a6dba27246f376474"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "6338e222bbc586dc47bb159b64d54ea8"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "b77084c7f1d175a8cb1dc036fe6d15ad"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "f8e9cb6bfbb9d05aae1bc06b97397d29"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "1a70279b9015e0ba3cfa2ad7452c707c"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "f70671f781d9980f8242cc43389a0cbc"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "3027301982efe2fee605d32d7cb70553"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "94d9ad0d865ac84c1bf5b7c0504900ec"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "dc0d7aeea9a78747de0fa711903a37f5"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "23ebaf01a9bcfccc7c1aa7be35cacef5"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "e82563b0d234edfd3d9eb2a6f4cfe0b2"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "73b2b21fac1c9877dea41d0676a86204"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "071f66e51aaea034ff4121c11615212f"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "097487ba8b9e92eb3e4225b896fbaedf"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "247029acb87a8d5ea6735c9b575f6467"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "f4577530f225a6897749fefaddeaec88"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "8d038233230ea6e3cad00317aaf05fc8"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "4d521fc59c70e7082858b91f4fa27176"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "cf2a2dedfc524e7e0c46733a343fb4a2"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "f7fb580d6b0fa14538f958e2e14a37ec"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "6b871fe892725e85d345ba9898178672"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "c79d537d9e7752f5585a78cd2a87fa2b"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "457877e5d2d53b70d74718bb92e074d5"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "d96b6b65f32436ad6d8414af6333a47b"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "f32efa33feec05b7384a1200f44de17f"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "e1f1e939e487ecd75bb23d14e8dffbad"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "55832ff97dbb520153090cb48899a723"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "cfe30a874f97d23d238f37b5835cfad6"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "5d27b3d754aeb6f3a371798b260f04b1"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "9af4a6699bfce7c68ef4a3852692da7b"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "113b4683dc31540b4602018aec490074"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "4841eb4db720f9c8ed8a3c2661fc20bd"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "a08e65b92de4b63681a6e41244eb90fe"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "ec74536e9343bc41413f2ecfad8ccddd"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "a481b1edaadb9099fcc4cf42c960c9da"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "19e8cd833d605cc3fdf5484ea7237586"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "98f5c60da644c9cd86d5e7e923633c36"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "509b7aeebfe3d3fb94fb6c6602c1e733"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "7fcc9b8ed3fc58fcf24abcf5265190de"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "52569534b3b56c3f2b9f38b0a8e89270"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "ec6579b84a72fd7c18eca9b12be6d660"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "963c5a8f7ed2c192b07f0cd38819e35e"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "1211ed6a0a89fa8afb5b5d843abcd075"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "28ac32889e8439ad30e8a9d41284a7d6"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "102a45c2892bb02ff1ca39cebce8360f"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "b2735166c162a00129d49eacc638838b"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "c51b87ca63dfab6ade6361bf64405dbd"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "4f9a49c97cde9e436eda6f8a4556d793"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "02acd519bcc26d1ee7a8ac607859cb41"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "c5dd6e630ec01b875eef71a653de41a0"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "ac2f2f083d87107a576e470802566af1"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "084260b5b61ce4ee2940a37b54a8b174"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "02cd9ed2a654c4527f0c67f8703c3a00"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "2273af214268f63bb04c8d44f1ea0b1a"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "d1171c09e48023e90e569935af70c63d"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "1c605c79f378871dca5e478bd86ff9d8"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "b92f71e25c1ed8c6e1ce216ab54dbeac"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "9f60374cbeafc708f0a95178ec65baee"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "cafde2e6953fd30c571224c80c49a5de"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "805009a90d728599ec6d3b46784e3523"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "31def8f3e7d0894d344adccc3768439d"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "1deeb81341cbe160fa157750f527647e"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "7c9c069644e1d5e53782ccb916ed791b"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "311dd4097f21376cb5a8dadab2e1bc85"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "bd939b283fdcc665434643a872e02c95"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "41e92cdabdca699ec9afe4c8ded7464a"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "c79e32c4d38d5ddc6fd8b8492d3495bd"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "b560f1c238f713d64bb0f64da71660fb"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "a7b23a7afa3fd5dca2140a607858df63"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "1485647373aa9a0d398d5fb3c2dbdb7e"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "8b0fd688c18e01878c13047a057a3e20"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "735f7a8457cebddffeaddb12b7d23a41"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "df86ea250954703a5300096a240ec1cd"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "8b4f9124434e08bcb4457c54e11a09f4"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "b6f7bd553d8c26d4c90298215216f492"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "efee71ffbb203a4bbbea9f110067448f"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "b8cdb46cebee26408ed474a88d4d6210"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "5a2a8b4eaec26d6fe8d1b24b6ff39081"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "2429b65175ecb70cebea856ace0ee562"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "7fcc9b8ed3fc58fcf24abcf5265190de"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "6e21270f83f4dd73658d46b56a5f0f4f"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "a1a23ef677bf942750cab67a61981c70"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "4a752654ae120abacafa78420d8a8d16"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "09d9cf4df4724c42999e1e856b9b63d0"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "2d2c7dbf5d2d4abf1cad0fd3605fa715"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "b52a159fa0ba2c2b664c527eab73f54f"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "b1ec189f96dba3d81e171ef98d930ac5"
  },
  {
    "url": "cs/network/application.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "e294ff7ecdaeec5bbdf36e1e0ffe68a7"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/network/index.html",
    "revision": "4a752654ae120abacafa78420d8a8d16"
  },
  {
    "url": "cs/network/link.html",
    "revision": "d49326da7d86dd71f18c5cbec26773fe"
  },
  {
    "url": "cs/network/network.html",
    "revision": "1178bb50d50a9e5f89ec049e638fae87"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "3723ae87b15c48dcee398a6f168d931d"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "f59f52f4dc8d70b0eda05bc14d20c613"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "e2c182b46da5e82a57b67274acd60c71"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "e50e7de27db292bb04b839ee2db172b1"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "76bc6453a9ef06f4144e96c82e69abba"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "4a752654ae120abacafa78420d8a8d16"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "72aca21a832ab0d778a3a30cbd306ebc"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "83ab05219e4d0afe351087dc0b0ec941"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "557a86947a342a57378518350a117a8f"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "ada41423f2dbdc87fbb27ceb30ad55e2"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "ecd67b489155a07f0110700ff9726ef9"
  },
  {
    "url": "cs/web/index.html",
    "revision": "12edaabf1b66330a59104886b112c92b"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "c4fe5e242861a78f6456edf779a1a288"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "f1e71e851b0f0106ffbf6ebb0136f109"
  },
  {
    "url": "cs/web/web.html",
    "revision": "59e4f874170afca2b36a6e2622ec6c7d"
  },
  {
    "url": "daily-life/phone-lost.html",
    "revision": "5037e3e8cce4f974a43ab6b07a75b98b"
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
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "fe748b7218680e14a14ebad22e063ac2"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "1e7642e0762b0891a3e08c3ad6340463"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "01c00b87dff1434aaaa0b8b6bbe8fb8c"
  },
  {
    "url": "language/english/differ.html",
    "revision": "8d146023abc3c7b42ef2adc905c53d26"
  },
  {
    "url": "language/english/index.html",
    "revision": "72656980cd9e4515763371976830dec0"
  },
  {
    "url": "language/english/modal.html",
    "revision": "53dc8b27770794c314926436ab4244ea"
  },
  {
    "url": "language/english/mood.html",
    "revision": "38472009c03c071a90a599280627f895"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "e87a12319cc43ffaee7b814e63653660"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "da1d4ab87a3dc3f9f8e81e16d82f6c43"
  },
  {
    "url": "language/english/phonetic.html",
    "revision": "1d39444c4450f5eb3c5af5a4cb574eb2"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "4160fe97ad1a77a17fb56d2817a69604"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "9fe317fa3976703507024493efe13bac"
  },
  {
    "url": "language/english/tense.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "language/english/verb.html",
    "revision": "ddb750a3923a65e8804fc7c7e388cb2d"
  },
  {
    "url": "language/english/word5000.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "language/index.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "tag/index.html",
    "revision": "08e949d51c0ca649976b4fee13be6a74"
  },
  {
    "url": "timeline/index.html",
    "revision": "cef067b5742d0f710e7d8b5d0d39ecea"
  },
  {
    "url": "tools/chatgpt.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "tools/gpost.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "tools/hash.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "tools/index.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
  },
  {
    "url": "tools/test1234567890.html",
    "revision": "7f1918d66bf38a6a4036be5929559e1f"
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
