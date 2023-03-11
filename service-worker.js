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
    "revision": "0f4b559191ad6b4212fee1d786068074"
  },
  {
    "url": "assets/css/0.styles.04cf9d46.css",
    "revision": "5d05f81e444007aaaccb9e143dc433a9"
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
    "url": "assets/js/10.20ae9692.js",
    "revision": "63f57c36db68bec4fae8b648a3dbfff8"
  },
  {
    "url": "assets/js/100.033b48fb.js",
    "revision": "c46dc2d8f9903168f3161eb98e2944d4"
  },
  {
    "url": "assets/js/101.36e7ac93.js",
    "revision": "765d8497fbbcd9a5406906d872712852"
  },
  {
    "url": "assets/js/102.09573957.js",
    "revision": "08d46b809b2d1f7d30beb0e7b66d60fe"
  },
  {
    "url": "assets/js/103.2687f0d0.js",
    "revision": "adc21df58aa2f18fcf8712f666140888"
  },
  {
    "url": "assets/js/104.2e20f680.js",
    "revision": "802fe5747f34373f5a6f0e396f1bd219"
  },
  {
    "url": "assets/js/105.8a25889e.js",
    "revision": "e2da033dcedad2964a23fa0ba9ea865b"
  },
  {
    "url": "assets/js/106.ba991121.js",
    "revision": "b00e26538531e2facca630c80bc2c5da"
  },
  {
    "url": "assets/js/107.2d24ccc5.js",
    "revision": "9cf0d54ae3b7099858b45308f4f18c57"
  },
  {
    "url": "assets/js/108.cd9890df.js",
    "revision": "d31046b879b72c114730f8702a8412c9"
  },
  {
    "url": "assets/js/109.d4451d62.js",
    "revision": "dd682894e0d4aa7ecb5249ecc4ae1673"
  },
  {
    "url": "assets/js/11.4a13a78b.js",
    "revision": "a76738c6fa5ee2254358b73fcf10cacf"
  },
  {
    "url": "assets/js/110.87fbecca.js",
    "revision": "e6e9a89b521b25dce68cd2a7a3a16701"
  },
  {
    "url": "assets/js/111.c95da09c.js",
    "revision": "c5820e071065ae7837f3a59581d8b00e"
  },
  {
    "url": "assets/js/112.6ffe9ab2.js",
    "revision": "8983daad9ba4ce181a8aecaf9fc9e01d"
  },
  {
    "url": "assets/js/113.e8b86fa3.js",
    "revision": "1c5dfeb4a2ad241a3ed54cff8417fef6"
  },
  {
    "url": "assets/js/114.40a85117.js",
    "revision": "76b40ac6976553f75ccebdd35f53dc4f"
  },
  {
    "url": "assets/js/115.7e91f0be.js",
    "revision": "86d015c01683d6ebd75e163aaba3c755"
  },
  {
    "url": "assets/js/116.9941aa75.js",
    "revision": "e15d4ea6dcfec3f33ba561e02caef2eb"
  },
  {
    "url": "assets/js/117.147b098b.js",
    "revision": "e00329684547addf47a7b2c736ab7bba"
  },
  {
    "url": "assets/js/118.883a09ec.js",
    "revision": "913ee19febba72d9f2b166ac132b2ebd"
  },
  {
    "url": "assets/js/119.68e42f6f.js",
    "revision": "358ee80997b5979116804a7244457750"
  },
  {
    "url": "assets/js/12.2b3bf8be.js",
    "revision": "862d0b8251059706c0b0e0f14a97746e"
  },
  {
    "url": "assets/js/120.178b39dd.js",
    "revision": "5fa9bf2e6212f459986ae2f3575ea833"
  },
  {
    "url": "assets/js/121.3db20133.js",
    "revision": "30fb670b16808a731bcf24ff61e0fabc"
  },
  {
    "url": "assets/js/122.144373c5.js",
    "revision": "92b2b0e174c544c1644113e208d22bd7"
  },
  {
    "url": "assets/js/123.8657e873.js",
    "revision": "3e57d8a3c7612e19b6293a26a5b0a987"
  },
  {
    "url": "assets/js/124.53916753.js",
    "revision": "fa1e97215e11f759633ad1419c7052fd"
  },
  {
    "url": "assets/js/125.43ccdbeb.js",
    "revision": "f6023deb39ab69d765dde2e1bf948cdd"
  },
  {
    "url": "assets/js/126.6acb0f0f.js",
    "revision": "76db3190514de97448857001986acec8"
  },
  {
    "url": "assets/js/127.840ac3bf.js",
    "revision": "3aad40d6b5f504fe44e5d347bcac266e"
  },
  {
    "url": "assets/js/128.65b60f22.js",
    "revision": "4e85c38c9c989d5cdb6f0f680d136e28"
  },
  {
    "url": "assets/js/129.8236b965.js",
    "revision": "550eb3018550144cc376fe03782d573f"
  },
  {
    "url": "assets/js/13.2b279c3a.js",
    "revision": "952e7cde58deb8b3fd0f81668e2b398c"
  },
  {
    "url": "assets/js/130.6fb8fb21.js",
    "revision": "12c8aab86df9a89e62d8a0fe8d48dd95"
  },
  {
    "url": "assets/js/131.fbaa198b.js",
    "revision": "22ce00eb11b7bfa23d3b44996ab2119b"
  },
  {
    "url": "assets/js/132.bc582675.js",
    "revision": "23f720fdf2a989c41e06e4b8dae17a24"
  },
  {
    "url": "assets/js/133.5cf86ec7.js",
    "revision": "adf8251c35a6b60facd8eae3512e4db9"
  },
  {
    "url": "assets/js/134.7d552845.js",
    "revision": "08d0d06d42f196601c771f6042f898bc"
  },
  {
    "url": "assets/js/135.533bf97d.js",
    "revision": "5947fb8677a19de5b61412e963ba2a2b"
  },
  {
    "url": "assets/js/136.7147ff25.js",
    "revision": "bd0d3bf4882a6c6ffb3c8fcb70aea195"
  },
  {
    "url": "assets/js/137.1219d545.js",
    "revision": "1b936ae6ff0f8bf97ede6ee5b6c441f9"
  },
  {
    "url": "assets/js/138.2e05eca0.js",
    "revision": "8bb82e4bb55f4ced421cf3fca658ea14"
  },
  {
    "url": "assets/js/139.db4cb912.js",
    "revision": "803cb58d99dbcc9d144d749f9c690374"
  },
  {
    "url": "assets/js/14.57489cbc.js",
    "revision": "bc2f980fa0c65f87af189bf9720da0d3"
  },
  {
    "url": "assets/js/140.209e435c.js",
    "revision": "9e485a8606aa978a77c98770e8b684e9"
  },
  {
    "url": "assets/js/141.0e68ca48.js",
    "revision": "30892affded01d2813593de8336e5a3c"
  },
  {
    "url": "assets/js/142.7a86d874.js",
    "revision": "95c433108bcd219e8565e49c5f34f129"
  },
  {
    "url": "assets/js/143.4871d13a.js",
    "revision": "a2ff06830c848a7e63041543a5e4f098"
  },
  {
    "url": "assets/js/144.8b403583.js",
    "revision": "9beab8596aeb5fc8fb5f12398481840e"
  },
  {
    "url": "assets/js/145.a1d2f311.js",
    "revision": "f1860ba28bdb85c1d7400e77c18d4f9d"
  },
  {
    "url": "assets/js/146.5fb6c208.js",
    "revision": "eaa73117e5a9b4a99abf7a4e9fcf9f4e"
  },
  {
    "url": "assets/js/147.3d3fb840.js",
    "revision": "633b5119799f4702917a6e235998493e"
  },
  {
    "url": "assets/js/148.aaf710bc.js",
    "revision": "0cfd8b15dda2d0afcf59ef1e87103aa4"
  },
  {
    "url": "assets/js/149.9a75739d.js",
    "revision": "62828d9c4926e1c3debf59be0743fb61"
  },
  {
    "url": "assets/js/15.6794d654.js",
    "revision": "4fabee3c8b17a7718effc8193f70ae71"
  },
  {
    "url": "assets/js/150.93f3090b.js",
    "revision": "c36c11845c37c2781d42ef454c112d88"
  },
  {
    "url": "assets/js/151.73191bbf.js",
    "revision": "d8025cb5a7a5dcdae60e41a7def76be1"
  },
  {
    "url": "assets/js/152.a9d6c7fb.js",
    "revision": "3c6fc78cc739e429b188d9ba6625f1ca"
  },
  {
    "url": "assets/js/153.b49f01f1.js",
    "revision": "4e008164694f90b17f8996ca16a9c540"
  },
  {
    "url": "assets/js/154.639f0b18.js",
    "revision": "1e88433c4ffee7ddcbb7feba0569e31a"
  },
  {
    "url": "assets/js/155.26b98a0f.js",
    "revision": "6342e20ea327e04ac71113b25b45945d"
  },
  {
    "url": "assets/js/156.fd2a2e90.js",
    "revision": "63c8e51b64ad4c8efcd79396e56892cd"
  },
  {
    "url": "assets/js/157.7b536ae3.js",
    "revision": "f5705d6a78f1230098aec2a87e5798c8"
  },
  {
    "url": "assets/js/158.1d0735bb.js",
    "revision": "d8d757f57946dff2791b4b736df1d471"
  },
  {
    "url": "assets/js/159.7fcae829.js",
    "revision": "46b5791448a85c3a28c4187f2d0a258d"
  },
  {
    "url": "assets/js/16.7bd79a25.js",
    "revision": "da3377943d6f3ccc962f1b7b9c2d85ec"
  },
  {
    "url": "assets/js/160.b73557fc.js",
    "revision": "ea27183e903e56f8542def342121bb4d"
  },
  {
    "url": "assets/js/161.e9835a29.js",
    "revision": "9e27ca9dead5ebd0b2b209e0265a689f"
  },
  {
    "url": "assets/js/162.9a0885bd.js",
    "revision": "38036fada7d3e9c131292217a7ed7031"
  },
  {
    "url": "assets/js/163.c971b171.js",
    "revision": "0a54ef14b208655a0983bcc303074a8d"
  },
  {
    "url": "assets/js/164.556b9d0e.js",
    "revision": "f72ae105573c112627f849585e4fdf90"
  },
  {
    "url": "assets/js/165.b0ccfd4d.js",
    "revision": "2a681086f06a321925bbc7ad6f0eef68"
  },
  {
    "url": "assets/js/166.e81da9f1.js",
    "revision": "b4fdd8f4ce7f8b3f365614debdef45d0"
  },
  {
    "url": "assets/js/167.414b3f40.js",
    "revision": "f2d601d0d8a8579b9d6f443778887117"
  },
  {
    "url": "assets/js/168.09adabc2.js",
    "revision": "c75420ac36ef86c4c4955bb479c699eb"
  },
  {
    "url": "assets/js/169.7ce89513.js",
    "revision": "44056b772bdf2ca6ca63f5a99d0f13fe"
  },
  {
    "url": "assets/js/17.14659096.js",
    "revision": "7013562259cfb3c7ab2e3c12b1c80bf0"
  },
  {
    "url": "assets/js/170.9fd05d09.js",
    "revision": "ebf47d5f0c1c43a9254bb2fb77ee6c3b"
  },
  {
    "url": "assets/js/171.deb0a92b.js",
    "revision": "25ec6f4dc2209d1b63ea3b3cee821dba"
  },
  {
    "url": "assets/js/172.71c6599e.js",
    "revision": "be863d5c1a59760ec56d3e53cd43353c"
  },
  {
    "url": "assets/js/173.fe1086cc.js",
    "revision": "8754afea1f43d2ec0943423377c42215"
  },
  {
    "url": "assets/js/174.70d9eb6e.js",
    "revision": "550a7691e851fbc78723f4535a389c0c"
  },
  {
    "url": "assets/js/175.eb99ea60.js",
    "revision": "2540455de5b6dcc7e9b7caea45378921"
  },
  {
    "url": "assets/js/176.bac90a97.js",
    "revision": "586499c59fb308c7cd141a88f153af74"
  },
  {
    "url": "assets/js/177.682a7b40.js",
    "revision": "ee4debb12ce4dd383ebf9977d333dbea"
  },
  {
    "url": "assets/js/178.d6a4d60c.js",
    "revision": "6871254ef101d42112b3764318a0b159"
  },
  {
    "url": "assets/js/179.d5333b85.js",
    "revision": "b371e599333196e047cd0e52647a50e7"
  },
  {
    "url": "assets/js/18.c8e2c08d.js",
    "revision": "a0c9fe6d4166e9eed50a5bbf093cd3f4"
  },
  {
    "url": "assets/js/180.1eb8c209.js",
    "revision": "494ef549b5a914736f51782336afdd7f"
  },
  {
    "url": "assets/js/181.6d6ac500.js",
    "revision": "ba31eb913f17a5367d187e87ef4c50b6"
  },
  {
    "url": "assets/js/182.562dbf69.js",
    "revision": "cf6f2fa867b623d8505dc8fd03d3ca26"
  },
  {
    "url": "assets/js/183.a3359896.js",
    "revision": "d5c164ba9dc420b666f93ef912b7bff4"
  },
  {
    "url": "assets/js/184.6a1e7ece.js",
    "revision": "4c388b04729eafefc87e66e48d0291eb"
  },
  {
    "url": "assets/js/185.d96eecd8.js",
    "revision": "98d90bd5ec806987b281e71448abf77a"
  },
  {
    "url": "assets/js/186.83d31f14.js",
    "revision": "11f2fa894559df45165747149596696a"
  },
  {
    "url": "assets/js/187.d31afb34.js",
    "revision": "2b8131ced1970a8aaa2fb20eb7ca8691"
  },
  {
    "url": "assets/js/188.5b77bdf7.js",
    "revision": "d27e27095332316d23962f9d32259506"
  },
  {
    "url": "assets/js/189.ec6a41ba.js",
    "revision": "3abb10e063a75fb558bd6c8e1abfbf10"
  },
  {
    "url": "assets/js/19.3fca805f.js",
    "revision": "6a77d86bee575c687d93ca5cc5b04eb0"
  },
  {
    "url": "assets/js/190.b13ee345.js",
    "revision": "77f9a7069352973cc30158e26b0592fd"
  },
  {
    "url": "assets/js/191.a5086b14.js",
    "revision": "fc0a63ee0cd9e274ee0ff1c39363ed63"
  },
  {
    "url": "assets/js/192.8747ce87.js",
    "revision": "ef250dd6d2ba436abfce3a77deb697dd"
  },
  {
    "url": "assets/js/193.6e3df594.js",
    "revision": "0ba96659a3a73b90ff5faac492564758"
  },
  {
    "url": "assets/js/194.56de1e21.js",
    "revision": "d797f6123bc813001fb5d5a8e15f1a0f"
  },
  {
    "url": "assets/js/195.7bc43aa2.js",
    "revision": "749ad290750052c63831792527a08d80"
  },
  {
    "url": "assets/js/196.e1e0381b.js",
    "revision": "03fc84a599e05fcb5ff82f2d2d9f9544"
  },
  {
    "url": "assets/js/197.f4f8c2de.js",
    "revision": "5a51f4ab10dc37d4493455b5dc2db6fc"
  },
  {
    "url": "assets/js/198.ff502800.js",
    "revision": "255e1b512299f96ec7e5d8793dc436e9"
  },
  {
    "url": "assets/js/199.a78590ca.js",
    "revision": "79c189c57fa7a10e8caa4e97a1e74f6d"
  },
  {
    "url": "assets/js/2.350e0505.js",
    "revision": "ce804155c60fa92d9b30cd40f0eb023d"
  },
  {
    "url": "assets/js/20.7ec038ea.js",
    "revision": "4cf5236ae91008a81ddd4f445069be73"
  },
  {
    "url": "assets/js/200.d4705f3d.js",
    "revision": "777453ae2ab9fd85830c6837ae7c322d"
  },
  {
    "url": "assets/js/201.5d9ae667.js",
    "revision": "7c8908d2ea4ed644dee1f664fb4db28a"
  },
  {
    "url": "assets/js/202.eaccf002.js",
    "revision": "c729ffab3f13c03f6564f26ef83f14cb"
  },
  {
    "url": "assets/js/203.76654c36.js",
    "revision": "d2fd09470b22ffc62e893b72231e2811"
  },
  {
    "url": "assets/js/204.a4c98748.js",
    "revision": "a63753ad0a54db163cd278f4f77f2c90"
  },
  {
    "url": "assets/js/205.8eb77e7b.js",
    "revision": "c567734e22d0c801936b4727bdae36c8"
  },
  {
    "url": "assets/js/206.b22ae0d7.js",
    "revision": "6f2a845b628c19601f309d1b17ce19f1"
  },
  {
    "url": "assets/js/207.a6b7f737.js",
    "revision": "55a8d7fc1a68f85fe53226131e1b1d77"
  },
  {
    "url": "assets/js/208.689f4435.js",
    "revision": "c949a6e1a3550e51cff4ea1d77184b37"
  },
  {
    "url": "assets/js/209.53fb0129.js",
    "revision": "1a36635719c1bf57f2be9dc94e85f11d"
  },
  {
    "url": "assets/js/21.3d5d663d.js",
    "revision": "5a9b516388259a95c848bad7a31f07f7"
  },
  {
    "url": "assets/js/210.9a1b5350.js",
    "revision": "6426e33406e85f5aad294521033afc42"
  },
  {
    "url": "assets/js/211.b84ae6d6.js",
    "revision": "2aa67be934500e83bc6cfe6095514513"
  },
  {
    "url": "assets/js/212.d88d73c3.js",
    "revision": "8a32836bc2018dc3e5c8a0fbb0abbfb6"
  },
  {
    "url": "assets/js/213.cc11c237.js",
    "revision": "49e3edecceb3a931875b30a853a6dc74"
  },
  {
    "url": "assets/js/214.4b876e29.js",
    "revision": "b2b9b31f3262ced29c0fa27483dcbaee"
  },
  {
    "url": "assets/js/215.bdbc7de7.js",
    "revision": "72b6fa50d4c1401f80e8b2a2a0889ef3"
  },
  {
    "url": "assets/js/216.d5c7f6f9.js",
    "revision": "7fa9db3f23da888e3f21e4be51def72b"
  },
  {
    "url": "assets/js/217.996dcab9.js",
    "revision": "609df46d84a1329165fa12dc2406ab3e"
  },
  {
    "url": "assets/js/218.09f2b0a6.js",
    "revision": "2ad59f7358e0a53b7b2e42bf318d0285"
  },
  {
    "url": "assets/js/219.3f5e31fb.js",
    "revision": "3228472fafa3c710c5b45262bc099872"
  },
  {
    "url": "assets/js/22.98595df4.js",
    "revision": "2021292691036b948b96ed3ad7778188"
  },
  {
    "url": "assets/js/220.d2148e7a.js",
    "revision": "0efd85ffbf35f27a377402a67d62f138"
  },
  {
    "url": "assets/js/221.618aec3c.js",
    "revision": "f696f2d5c4ca583c615cc2020e341b74"
  },
  {
    "url": "assets/js/222.43cf3248.js",
    "revision": "98b19087c83540492035c9bf34962dff"
  },
  {
    "url": "assets/js/223.2fccadfc.js",
    "revision": "ce8f474aedf1211bf5f99d6cf4a64565"
  },
  {
    "url": "assets/js/224.08764fc9.js",
    "revision": "7bbcee0213924f49b70cbb5138274fa7"
  },
  {
    "url": "assets/js/225.4bd7a393.js",
    "revision": "01995225d687b54314b880b9804a5a52"
  },
  {
    "url": "assets/js/226.449ca106.js",
    "revision": "6fc10acb10b9b077063431262140c0af"
  },
  {
    "url": "assets/js/227.037a93ad.js",
    "revision": "387801c0a754defcaa39085ddd0ad0a1"
  },
  {
    "url": "assets/js/228.0096476d.js",
    "revision": "4ba0529cb4388b1543a148b0bd682ee3"
  },
  {
    "url": "assets/js/229.857e8cbb.js",
    "revision": "331c0a57d10d006fcb908bae544e0995"
  },
  {
    "url": "assets/js/23.2a5d63a9.js",
    "revision": "66419f174ced9fc036effcd6ead27198"
  },
  {
    "url": "assets/js/230.0086d43e.js",
    "revision": "32a08f7c38a3ec2306e3a1c8658461df"
  },
  {
    "url": "assets/js/231.6616cd3a.js",
    "revision": "7584105152ea9ddf3f148eb4f7073a93"
  },
  {
    "url": "assets/js/232.9469accc.js",
    "revision": "e4f93f1f2008bb6658c8ed58291a4de0"
  },
  {
    "url": "assets/js/233.abba405e.js",
    "revision": "37eab0a397479cbd5736ffad4e6d3d0b"
  },
  {
    "url": "assets/js/234.b7ef8158.js",
    "revision": "e55146a84f50fb1667541eb14c55a036"
  },
  {
    "url": "assets/js/235.9019c040.js",
    "revision": "c89444b6c01ea23f50d5bde9af67779b"
  },
  {
    "url": "assets/js/236.b13c5ec8.js",
    "revision": "c1b7c285a444a72a2f5e6a01ed735003"
  },
  {
    "url": "assets/js/237.f7277499.js",
    "revision": "8d7ed138b3c40dd7740f29dd48f1ede4"
  },
  {
    "url": "assets/js/238.2edf77fe.js",
    "revision": "93aeed68264929f1b21eaec7f898a612"
  },
  {
    "url": "assets/js/239.bfb4f52e.js",
    "revision": "3def6468cc34805a7733edf647a65f39"
  },
  {
    "url": "assets/js/24.6f9b4d50.js",
    "revision": "8fe8c4e2d7313033d2d691a6ddb49ea8"
  },
  {
    "url": "assets/js/240.7c7029a9.js",
    "revision": "761bc1c7dd09adba7d81a5e83d21aeb2"
  },
  {
    "url": "assets/js/241.5edfd18e.js",
    "revision": "5c57724cf65f5e4d5fe6dfe687ce0322"
  },
  {
    "url": "assets/js/242.912af86e.js",
    "revision": "353e57ffc0ae29c3e5c0805328e46b70"
  },
  {
    "url": "assets/js/243.9daeba63.js",
    "revision": "03921dac17d74e40bd5b937a41beb5f8"
  },
  {
    "url": "assets/js/244.dfbde8e4.js",
    "revision": "39319c46c2d74fbba3c8bd859c8e4863"
  },
  {
    "url": "assets/js/245.94672521.js",
    "revision": "20c868fb13f2c59815db2afe7c118c07"
  },
  {
    "url": "assets/js/246.6928ac84.js",
    "revision": "cc61fab35a453df30726763a2487bfac"
  },
  {
    "url": "assets/js/247.66b21435.js",
    "revision": "976e70c9febcdd3d79e995ac8b577846"
  },
  {
    "url": "assets/js/248.d5354bd4.js",
    "revision": "6105a18edebf344d6757997681616f2e"
  },
  {
    "url": "assets/js/249.ed429f80.js",
    "revision": "739d49577000cbc41781170573c95e01"
  },
  {
    "url": "assets/js/25.337d46b0.js",
    "revision": "bbddeddbd17ce14064a9768294f30780"
  },
  {
    "url": "assets/js/250.bf0c49d3.js",
    "revision": "a68f9836e43d8a04001398207a688df8"
  },
  {
    "url": "assets/js/251.c5be6b4b.js",
    "revision": "f8edc0fbd8ea1239b436a7d7ee928b77"
  },
  {
    "url": "assets/js/252.cf83736c.js",
    "revision": "5e2628966162dd80277b1c0522560952"
  },
  {
    "url": "assets/js/253.03218632.js",
    "revision": "068b9fd12ec51ee49f2f7211a42c829a"
  },
  {
    "url": "assets/js/254.c9548d86.js",
    "revision": "a9a3f78f0061b5b8278c678f3f970c1e"
  },
  {
    "url": "assets/js/255.57d3ace9.js",
    "revision": "bb58479d213aa554586d3cc9505be546"
  },
  {
    "url": "assets/js/256.06f99c38.js",
    "revision": "23be450b44239c98f1ba7edd42a4c9b5"
  },
  {
    "url": "assets/js/257.451a5989.js",
    "revision": "ec55737329472f991f768f929c30024f"
  },
  {
    "url": "assets/js/258.383accad.js",
    "revision": "d8fdf11e2fb00eeef27e5b91ec34d336"
  },
  {
    "url": "assets/js/259.6ea7d09f.js",
    "revision": "7c00a4e5915541374cf9cd7f1ff20b2e"
  },
  {
    "url": "assets/js/26.8153ee68.js",
    "revision": "bba361b8acda55ee3288bf5742215c7e"
  },
  {
    "url": "assets/js/260.dfd78f51.js",
    "revision": "107227482399f31d609dea754f50efda"
  },
  {
    "url": "assets/js/261.a150fbc7.js",
    "revision": "badbc7eb4c5e15132712da3ee661cd85"
  },
  {
    "url": "assets/js/27.8d00b30b.js",
    "revision": "c6b75374860f1e75c2b122428bfdd77f"
  },
  {
    "url": "assets/js/28.c5e70adc.js",
    "revision": "92a579f7144f008817146aa2bcaa7114"
  },
  {
    "url": "assets/js/29.5d3798a5.js",
    "revision": "becbb5c2feed100c4909e7bfe4805680"
  },
  {
    "url": "assets/js/30.954c511f.js",
    "revision": "6c45a7ad0b3c53ec6e2a1e12aae2ca82"
  },
  {
    "url": "assets/js/31.6dbe90e4.js",
    "revision": "7b4d2026ffa46ff1cb12b4de5d80443b"
  },
  {
    "url": "assets/js/32.7aa2f512.js",
    "revision": "9e0ccec1a8270e4dd4d957e50c68a830"
  },
  {
    "url": "assets/js/33.8a94dd6c.js",
    "revision": "b2530ad7d9427c9266ba621dba702e6e"
  },
  {
    "url": "assets/js/34.f7847eff.js",
    "revision": "00645d03d5e070c89303c86285313cc0"
  },
  {
    "url": "assets/js/35.c8c5fde3.js",
    "revision": "cd7b85d44efa1724e62cba4d2714459e"
  },
  {
    "url": "assets/js/36.fffe5e42.js",
    "revision": "f0610bd1f2c46259535eca99ac8da06d"
  },
  {
    "url": "assets/js/37.841732fb.js",
    "revision": "59e4a72422e051351a693b5064dcb5f2"
  },
  {
    "url": "assets/js/38.479f9974.js",
    "revision": "40db801e98400fa0c01882749c709d8d"
  },
  {
    "url": "assets/js/39.ec3fb2c8.js",
    "revision": "5454f4065aa75be84a837ad6be4e3ac8"
  },
  {
    "url": "assets/js/4.1890676d.js",
    "revision": "36f6bb1a0ec23e61a759bfe5df84b07b"
  },
  {
    "url": "assets/js/40.eaccfba5.js",
    "revision": "3442ec4d6d0d873de206186468b54d39"
  },
  {
    "url": "assets/js/41.b4af02c0.js",
    "revision": "ec135900ae8245fc3113990762919ada"
  },
  {
    "url": "assets/js/42.211667e6.js",
    "revision": "35c3b6de30193b9c4af35204f10b1b01"
  },
  {
    "url": "assets/js/43.6c1a2a24.js",
    "revision": "0f593e65ea63fa01c88cdab5f58acc08"
  },
  {
    "url": "assets/js/44.772bd236.js",
    "revision": "9356d8f6658d5d62171d2cc87a64cf53"
  },
  {
    "url": "assets/js/45.c185bdbf.js",
    "revision": "9477b135faaf849835c488181282f742"
  },
  {
    "url": "assets/js/46.a620e7e4.js",
    "revision": "9468af629ca050860f55a51ced53868f"
  },
  {
    "url": "assets/js/47.3c8c7a17.js",
    "revision": "abe78001940bbe33618c16d469adb5b6"
  },
  {
    "url": "assets/js/48.36fcf981.js",
    "revision": "1c17250aac6664a3cb624c5ec2c17f0e"
  },
  {
    "url": "assets/js/49.cc0c05f6.js",
    "revision": "51410dbedfe7b13c4e4820fed44fa36b"
  },
  {
    "url": "assets/js/5.9d764c17.js",
    "revision": "26d28e5a9d712378eae2b76d8ed4b464"
  },
  {
    "url": "assets/js/50.931deb14.js",
    "revision": "fc8c679a7503c990ac0482796c05c6c7"
  },
  {
    "url": "assets/js/51.115dc4cb.js",
    "revision": "3f93f34f2faa76165996a4f428a6759c"
  },
  {
    "url": "assets/js/52.070d493e.js",
    "revision": "2331f47098635d82b299b653defcfcc5"
  },
  {
    "url": "assets/js/53.f1e1fe9f.js",
    "revision": "490b5f75fadc89f664bad2dbe5e15919"
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
    "url": "assets/js/56.7a288642.js",
    "revision": "dcdc9b35d0501b61a96194ef53fcee7c"
  },
  {
    "url": "assets/js/57.e9e4ba36.js",
    "revision": "f598df2db38ca628ae3408d87340b3db"
  },
  {
    "url": "assets/js/58.4a1bf170.js",
    "revision": "78274ea35f134837e548dc6e7d4253fb"
  },
  {
    "url": "assets/js/59.b2f28eba.js",
    "revision": "4094dbb0b262145810c58de2703d2f57"
  },
  {
    "url": "assets/js/6.56288f19.js",
    "revision": "2e484f10c840321c37fc2758ff48a9c3"
  },
  {
    "url": "assets/js/60.41e399e1.js",
    "revision": "4b8fb765921f5954b7f72f59b787f8e0"
  },
  {
    "url": "assets/js/61.cff02408.js",
    "revision": "572139670b8805bd8bda974c36118a3b"
  },
  {
    "url": "assets/js/62.d7c014d0.js",
    "revision": "d56e23019bfc648bcf8de7466f7b318c"
  },
  {
    "url": "assets/js/63.84b61b25.js",
    "revision": "ae32a4f42a5a042e9e975ff07729ec2e"
  },
  {
    "url": "assets/js/64.814ce04a.js",
    "revision": "8c4303ba7085cee5d1c7862d70337994"
  },
  {
    "url": "assets/js/65.35065abf.js",
    "revision": "b6754071e754b231dcd984818022da60"
  },
  {
    "url": "assets/js/66.acbcbec5.js",
    "revision": "d89ca5a8d197408c958a1659a2b67e1f"
  },
  {
    "url": "assets/js/67.585627d8.js",
    "revision": "38f0ca77f25e7678ef79b1c36439b25d"
  },
  {
    "url": "assets/js/68.0429219a.js",
    "revision": "8425b8e48ca448f660859be821e2def7"
  },
  {
    "url": "assets/js/69.a07c5bd0.js",
    "revision": "dd43bbb84ae75fcae3c9b5f82da48e3a"
  },
  {
    "url": "assets/js/7.a30899d8.js",
    "revision": "5d63e6fa63a3a47b3b8d28477d125746"
  },
  {
    "url": "assets/js/70.9a25ee18.js",
    "revision": "0811801b643642a17525a0a341ee680b"
  },
  {
    "url": "assets/js/71.ff6b60e1.js",
    "revision": "8027b4262a40d72f256d20f806068650"
  },
  {
    "url": "assets/js/72.c4be1757.js",
    "revision": "e67e04875951870cbac2f134c56903ec"
  },
  {
    "url": "assets/js/73.76531754.js",
    "revision": "80b6e23e209515cfadac8311c48df53e"
  },
  {
    "url": "assets/js/74.52d3cfc0.js",
    "revision": "0f3d7045063c9f7f1fcf80d625a64e6e"
  },
  {
    "url": "assets/js/75.4338857c.js",
    "revision": "e86e3ef9f12a505172307a358acdaad4"
  },
  {
    "url": "assets/js/76.c7d75689.js",
    "revision": "b0c5197ee5bca5866e8eccac40ca6850"
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
    "url": "assets/js/79.5d33bd90.js",
    "revision": "318f432684c316d5b7ac163630b48374"
  },
  {
    "url": "assets/js/8.66160b05.js",
    "revision": "8990a2c15a11a34fbae459402085c624"
  },
  {
    "url": "assets/js/80.6fc084b6.js",
    "revision": "d2620a5984454b992c51d876900d89a6"
  },
  {
    "url": "assets/js/81.c748fb81.js",
    "revision": "1e393d85c85a6082ef66823794330808"
  },
  {
    "url": "assets/js/82.a1d64f38.js",
    "revision": "ea8a36e0c8eff9d7c1eb63e5f98edcc9"
  },
  {
    "url": "assets/js/83.0104ac64.js",
    "revision": "20903c1461d5ecb0f2d04648c09570dc"
  },
  {
    "url": "assets/js/84.7063ce82.js",
    "revision": "9c6499ad027e7ddfc52aaa10c18ec532"
  },
  {
    "url": "assets/js/85.46f58a95.js",
    "revision": "6e9964e69aecff7a5fec1fc937be3e1f"
  },
  {
    "url": "assets/js/86.44593b53.js",
    "revision": "a28f44a0c221073e5d0ca2b5e60daf75"
  },
  {
    "url": "assets/js/87.c0746753.js",
    "revision": "f082b58264ed3f3d7c8a55a4e28babfb"
  },
  {
    "url": "assets/js/88.c3e5e1e2.js",
    "revision": "0a4f85f3bb9ee4315640569ca0efb412"
  },
  {
    "url": "assets/js/89.36a194c3.js",
    "revision": "82153b53a030fbc2308cc4c3122056fb"
  },
  {
    "url": "assets/js/9.f4873027.js",
    "revision": "da922fb188cfbfcb90340d521360ab4f"
  },
  {
    "url": "assets/js/90.526642b5.js",
    "revision": "559513a977010b2ba15585d68078c54a"
  },
  {
    "url": "assets/js/91.ed8aad70.js",
    "revision": "6c2a975d15161b17e9969bf7cf2672cf"
  },
  {
    "url": "assets/js/92.3923a2ca.js",
    "revision": "82134584feca163eb8132c2f1942b032"
  },
  {
    "url": "assets/js/93.d3d99bc5.js",
    "revision": "15cedbbe591e23573e4db3bb98729645"
  },
  {
    "url": "assets/js/94.9996eb9e.js",
    "revision": "e24175aceeba5f4e638742aeba537bd8"
  },
  {
    "url": "assets/js/95.4a31ba7c.js",
    "revision": "a5fe141b6ce26977a0a47dabe881e968"
  },
  {
    "url": "assets/js/96.c4f3e9a1.js",
    "revision": "1cad33af78c42936244dfc76c54adb9e"
  },
  {
    "url": "assets/js/97.9a677385.js",
    "revision": "6ec735bea7d91e29341150edf5e6f19d"
  },
  {
    "url": "assets/js/98.d396138a.js",
    "revision": "1b4ab805e2f863999ed1e4d3c6c0dc36"
  },
  {
    "url": "assets/js/99.b262673a.js",
    "revision": "18416819112fcbad3a6c42d86422f0b9"
  },
  {
    "url": "assets/js/app.c1875382.js",
    "revision": "45bf8f16817146978e3881f7317ef48e"
  },
  {
    "url": "categories/index.html",
    "revision": "bb0eaf5e5fa5f4aa5f0060e8599d38a0"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "5390db8454b41b7383023b264e648e16"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "9dab2767a5ed3fe5024730375caabb8a"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "e12bdd483c6e82e93280693bfe7bb384"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "7a760d884b1cadf2cdd792f24808dc37"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "fe14d04f89b60ca18976d1ff82bfd313"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "f4a66525c35150018bcd0a22fcb6eda3"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "afe28a32d1d8e04a17d7b73133fabb37"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "c6c45c5bf9179dc253e37996a44912c0"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "8aa7646aff23b2e25d5517efe749be2f"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "14518f922b9ef179b10a11501863bfea"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "9dab2767a5ed3fe5024730375caabb8a"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "481cb3d7f365651aacafe1a3c7dfedb5"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "f224e7f93aba6fb081f5870cd1eff1ae"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "8c273b84a49466fc4eeab0cee4506603"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "778e5152668ed758f031b11c0a2b7e8d"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "3aade4af42489913ec24142b2386c2ab"
  },
  {
    "url": "cs/database/index.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "6b8176b61d4d92b5eacaa6e6a0334b4c"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "5c854208ab7e8dd03b28afe405b312dd"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "ecf0e0704b6ccc34f10f3f3b73b3337a"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "b16c576db95d1884b7331348b1463a76"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "a7e778f7b986b517ebb0e854bf6be1a9"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "caff1b2af0ad3008c0140a4660b83bcf"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "4ff94c8528c4f389b5fa6c04a0c51804"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "6f60fb53beb37e6c8599c53654394f3a"
  },
  {
    "url": "cs/design/command.html",
    "revision": "f3bc5775ff443e82b8bdac9808f17d22"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "b6f879cfb0a09d23666dd423bc7efcaa"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "ac37985e48a3cf6c0622f4aa1f7fad03"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "03d463596e00a98c635c7463072ee91f"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "657ef0f8bee88e3d420a9c4df8cf6199"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "c62a689f8b72fecf4a94c86f0ce2deb1"
  },
  {
    "url": "cs/design/index.html",
    "revision": "e270873a03b00e1d231b0a467e7196f8"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "5548f33c28df20d4099bd6e3b2f59347"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "8e75a897c4287f9906958454e3786ac5"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "26062852b4035b7ec24dcaa9e9921d21"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "0a82c7bf8971844fc384a6eeebf0a687"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "afa421f5a8ea3d9ad4cb9ad308b9412d"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "4d563d0b8e5ea45202aa19ca1a6cf33d"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "1d23479c4b2315eb10035641896cd412"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "1b252668d3f86e0706174fea249eb7e1"
  },
  {
    "url": "cs/design/state.html",
    "revision": "7952a76569074e16b4d8dad96c0c423b"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "3aca14104b65b6dfcf84bdd228382501"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "4a370fcbb97bb70fbfbcb1bd5000f8eb"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "df68d0c8439bd2252ecc0f84c91cb911"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "f963ba2690920627f15a1cd7ddab97a8"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "f0a66dda1f40d409555db29c7a9ff5ee"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "19dbffd9f8c50d967ac46ee620df2f2d"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "549f9bbf93935b88bd4fd616024d789a"
  },
  {
    "url": "cs/framework/vue3-design.html",
    "revision": "ea70668ddaa7c23deaabdfebcd4fb245"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "81a382663b20cb6e852be2406b7752ea"
  },
  {
    "url": "cs/index.html",
    "revision": "38f06ca86ef3552a5d702d73a1c8c1fa"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/java/container.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/java/index.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "f44851119ca10f2b89bbb90c36818d33"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "a35f9003746af7513f12db209600381b"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "1b494beeee1e66b88893bc3d6299ab0f"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "c6176f768acc9c6c7e1ec30dc1a0406c"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "7bb17937ca0da3a3eb3f657f7cfd3e21"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "1d6db56c198c2076e84682da47e029a7"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "51bea46f2a0d6bb4b6518f3b6c0bdb23"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "5251b1843c5410fb84e9abe615de1cb6"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "8a5935de8b2f29d1587c7068a401e178"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "f236b6a005a8cb6aa61f21afe8aa91ac"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "68155448a33f591989f0f308da22e911"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "e5b221a5f593367341050e36a497bd25"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "7d6dc1dac399cbe3903db0509ec27085"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "6e3bc3ec7d7dcfe4f4e4f2c275fe60eb"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "17244043dbd14142dfc28d5384cf15d7"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "4f6393da6d72ca69bf8c7657b15c9509"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "83e826835647ca135a223ead97aa6251"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "fdd758a53039fcb93a989cdfc9c11591"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "1f97c94a9824524956fa22fdf2479254"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "c1cb3d673b8af7cb28fd65071d90c35c"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "4bb0bc08f32a16b7909b059f8fd0bff0"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "4c7fdfc7d35a37810d3e7531135f3240"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "e9ee3814fce927a5fc06950d10075eb4"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "4c055b5c36c3c6b4e71ae3ce7a9ede1b"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "18dbfb7fe1943eb84123d964a1972041"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "b553a1b33669e4fd710f296daa6cfa9e"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "5cf890ec07fd075ca420b455250be812"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "c1310a5c381903ad65da504cb6d559be"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "8b028cf9eb56a100c1f16a369aa7d89f"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "705e71e8b7ab8cb2e8ce9257a042a086"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "3bfeada8f475f4120f2fc5a586cc5534"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "3cadaf87aebff554526168608fbccb68"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "d0b4a58de54ae5f853db75a6f407ca50"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "64ffe815252af9808f1819e06e4719af"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "9289a12ec7479ca9afa472bc502d355c"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "0432ba04057b3f6f0c8c7b7b74cfca51"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "42aa282527ff095512bebdc1c2827b5a"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "0d3b554f058f52f294e6ca603890eed3"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "43486a7d3e5f614625a69b2175ea2642"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "9565b653d1a253309060477ed7b7d633"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "c5c77323a24354a8bb92ea911124e593"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "da710564d0cf57599bb3f7f5dfb801fd"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "44582920648fa907798a75900f307cc2"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "95d3fc9d2e003033a1486ec1fe37f144"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "8708aa001c10de7be1db4cfc29c26533"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "f079422c346a413b25ea72cc104eccd7"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "26c627fd379f4b8e5f938191d759ab44"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "776b11c944935bdfc93ffc4e605493b5"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "b7393fa95983f234b1a42123b597ea5d"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "7c24f84894c673b01fe813c7d0f23e5a"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "83e0951fd0994b8ba13137da49179423"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "f30fb57e4876d1f0f6fa05dc51e759ee"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "791fddf7b86a18919f9bb052662f3d4d"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "7f82869f6703717f160039fbe1456a24"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "92524e19d256fc14e2d883b8d8aa5de5"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "85065f88a6f8147547c0efebdfd63c18"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "3bd3d90d9bacb058d8d8853a27d9dc41"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "a514bab0b4a2e02fbbb7f613f549ab67"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "56d244edeea2cfb33d81548e31ee3411"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "66fe19ac674fc39889a1b9586786577f"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "2cc0d4a43a7bb513a7e7bd645c188f8f"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "38981333a001c66e51f3d67526386c22"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "12b314ab122b71505501e14a49043124"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "21e6cd02352d7b3742498b53ffc4bbb8"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "c87b02c34771ba755c6b515189aca6d4"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "34a2aea1341108b75a1a7b6daae85f34"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "b8a118f5d03ca9a73015ce950036f086"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "d8bb125cfb4519b7362dab2be9ac20c9"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "3d24da14f4bde27ab5578ba527f8c8dd"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "e46ca11a9d835f58c38550ac7ecbecd8"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "9739ccf41a8ae65ff0706f8d6910230c"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "43b0268773de119e832ff2d88da2a3c9"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "93510ed71e8023163fafb1ee01e14a35"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "68177603e3ce9076c48c7b77f70c7b46"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "1fd2f6b9dfe6f2ae47b3c5c9b6365be8"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "249e71e7f46de7e0042f0883b5af1a12"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "3e3991079110c9018f8ba3e059e09ef1"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "6cc6b98ac8d8612df1ae107e8dca8ffb"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "8eaa963e60cccafe2c259a38a2b22587"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "2d9345a371de9cf3720d35677bfc0f1c"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "4321d413663a12ea7563b6b6faf99d56"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "def2e89d929982df015d95401b5f9e23"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "d19af1b38fa208234aadca064de2e019"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "1e2c1d561c2bbc2d73a51503bc6f4975"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "95d3fc9d2e003033a1486ec1fe37f144"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "1064560dd70a4ec659ba489bf748e426"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "96f17be04e298ba7405fd2332fefb01a"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "9dab2767a5ed3fe5024730375caabb8a"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "7789b90bea90d39e0ddadc5ca6155439"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "750ebf900ea5f07a95a9c44ac52f92df"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "41343a163ad1be326fc81a404636cd37"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "7ccd0edc9f95b9cd894d51dec0e1087f"
  },
  {
    "url": "cs/network/application.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "c6ae46a1927f688a3d594549142d57c3"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/network/index.html",
    "revision": "9dab2767a5ed3fe5024730375caabb8a"
  },
  {
    "url": "cs/network/link.html",
    "revision": "d13318841d86477d023746676a4a52eb"
  },
  {
    "url": "cs/network/network.html",
    "revision": "b697fd865e6cf2db9eac77862e35215a"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "950a00e2d9cc963293109382939d11b4"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "d0ccea67cd15e08bf0da374db2715602"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "6d127feb7d311b8d4ff2ca12b432dba3"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "01c1e6c3c5234835e38e80e0ae85f554"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "690ce82e03b3f652f30d90c38a899367"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "9dab2767a5ed3fe5024730375caabb8a"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "ed5da99a6b2c27b8b290c27f0aaf50c1"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "066b4dffb7e4fdae663798cfe20d4ff7"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "da83317f44624e2438e24c2cb2eb826f"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "3b58d89816eb5bf8ee67b8389fee45fb"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "f44851119ca10f2b89bbb90c36818d33"
  },
  {
    "url": "cs/web/index.html",
    "revision": "0dd774092d6c1bb039de571b033c6c03"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "f4c9a8f1cc1a515a82d0e64ffc864462"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "3f11b980ef4287da2769e64eb373eb1a"
  },
  {
    "url": "cs/web/web.html",
    "revision": "c7e339a2f8ab6bb6885366249774535d"
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
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "61e84b38af5c97502e69007eae32e579"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "8bf058f4c453c281125c1138affdf36d"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "936eb5bad5968da084c146d61e6c43bb"
  },
  {
    "url": "language/english/differ.html",
    "revision": "3cd11dd7ebb1c164a1d1ffb182e5a6ce"
  },
  {
    "url": "language/english/index.html",
    "revision": "a35f9003746af7513f12db209600381b"
  },
  {
    "url": "language/english/modal.html",
    "revision": "23c660965932d68dc58835f9ca86bd85"
  },
  {
    "url": "language/english/mood.html",
    "revision": "6041e4191e955325fb75ab7251d0ef0a"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "0c1d773b1d0d66949156ee6b2560e33d"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "353c237a3b995da9a8d0bdae0ace016e"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "ebfb0817758b13758a9ff88188c87fa4"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "0832800afa932f82af93a2d74073b86c"
  },
  {
    "url": "language/english/tense.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "language/english/verb.html",
    "revision": "17be4db610cfa54ecdcf1728c23ab8f1"
  },
  {
    "url": "language/index.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "tag/index.html",
    "revision": "d533f548350bbd00914a9d08d5afac94"
  },
  {
    "url": "timeline/index.html",
    "revision": "8a9147855a1795130f35fe3fe8425976"
  },
  {
    "url": "tools/hash.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "tools/index.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
  },
  {
    "url": "tools/nothing-here-but-void.html",
    "revision": "60e0f0ac7d0ec083d209fa71bbb442f1"
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
