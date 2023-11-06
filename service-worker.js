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
    "revision": "515c10664b266a0f8a1d0f601283776b"
  },
  {
    "url": "assets/css/0.styles.598469a4.css",
    "revision": "a7edd821b4f6122b4e1ffb3ade928925"
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
    "url": "assets/js/1.00a9aff9.js",
    "revision": "6bf09424872d5055695ece5da365265a"
  },
  {
    "url": "assets/js/10.87edbb2e.js",
    "revision": "7b5a97f0196333c1b569e3c095032746"
  },
  {
    "url": "assets/js/100.9ace6edc.js",
    "revision": "cfff0d4ce4edae08c1efb696947b8a6b"
  },
  {
    "url": "assets/js/101.09efa570.js",
    "revision": "35a4b4830268ce8f225aa26074614834"
  },
  {
    "url": "assets/js/102.76d5f268.js",
    "revision": "5a6810c386e3db8d880a49dd38b6b078"
  },
  {
    "url": "assets/js/103.594c0a0e.js",
    "revision": "b07073718800b2edd3b16a7705b0ea61"
  },
  {
    "url": "assets/js/104.c2b52984.js",
    "revision": "b24eefcfd22664a40a07b35967c7ac91"
  },
  {
    "url": "assets/js/105.8f64f810.js",
    "revision": "de07dda5874a779007a386917ff83517"
  },
  {
    "url": "assets/js/106.4dd7c2cd.js",
    "revision": "6928bac3ecc6a5151317ceaffccb2a28"
  },
  {
    "url": "assets/js/107.909cfdd5.js",
    "revision": "35e4c8b27a7050493abe9f4fb28a1ef2"
  },
  {
    "url": "assets/js/108.9a4540e6.js",
    "revision": "f910f984dbd906517f9605e3eb06d03c"
  },
  {
    "url": "assets/js/109.c5b7d635.js",
    "revision": "4e8a45ca375c59dbc1964ef6a21d2013"
  },
  {
    "url": "assets/js/11.aaf4ace2.js",
    "revision": "f7e41abeb163f12865a0be3634677869"
  },
  {
    "url": "assets/js/110.f13f9ae9.js",
    "revision": "cbf048688880527a762739f1ace8046d"
  },
  {
    "url": "assets/js/111.9b012511.js",
    "revision": "78d8bee8b97bc0f34441f40c41c5cec0"
  },
  {
    "url": "assets/js/112.d40148b1.js",
    "revision": "372425fca78bb4d598ce19a35275f905"
  },
  {
    "url": "assets/js/113.57dfec80.js",
    "revision": "b6643d6587be514511f47d807e94018a"
  },
  {
    "url": "assets/js/114.31aec489.js",
    "revision": "20259ded4fcf71ed5495a9002f4d3820"
  },
  {
    "url": "assets/js/115.393feaf7.js",
    "revision": "908a1d065f4687e2e2d867495928b630"
  },
  {
    "url": "assets/js/116.d61f1d75.js",
    "revision": "859e90528225ba16fb8c28558a237ed8"
  },
  {
    "url": "assets/js/117.70aa72a8.js",
    "revision": "516b4c361b6050469bb0c27af1e9cbef"
  },
  {
    "url": "assets/js/118.39e0d3d7.js",
    "revision": "1a4e9b20da6af331e46a424674e5b760"
  },
  {
    "url": "assets/js/119.354d4caf.js",
    "revision": "ca98b89105f4067b33c62c5ae12bb3e0"
  },
  {
    "url": "assets/js/12.8e600412.js",
    "revision": "61277bb434380164f547004e43e2ffb4"
  },
  {
    "url": "assets/js/120.a865ad5d.js",
    "revision": "a965d622262ca2f1a5ae264dc60c3cc3"
  },
  {
    "url": "assets/js/121.208280e0.js",
    "revision": "2ab2c6319f72ed8c29bd6b55a353b0ee"
  },
  {
    "url": "assets/js/122.b65e0fcc.js",
    "revision": "f956d42d2d57ccf0b3a02576a509984f"
  },
  {
    "url": "assets/js/123.bac32738.js",
    "revision": "97ee206503bfe040ef986086b53d6008"
  },
  {
    "url": "assets/js/124.35dcd912.js",
    "revision": "f330da1df34b8cf947bfd0b65d947735"
  },
  {
    "url": "assets/js/125.7759d6b8.js",
    "revision": "d9db2a90e6c44f185cb0d32bf07da0df"
  },
  {
    "url": "assets/js/126.2922bcae.js",
    "revision": "1422859a5daaabf04399e85d24eaf935"
  },
  {
    "url": "assets/js/127.dc0eb701.js",
    "revision": "28f878af1362b3dea17c5f4bd3c19669"
  },
  {
    "url": "assets/js/128.6cacbecb.js",
    "revision": "5a7ff679c2787744b2c9b9027e5bcff7"
  },
  {
    "url": "assets/js/129.f4d4f97c.js",
    "revision": "2761ea94f76d52dc2af53cd6c822afd5"
  },
  {
    "url": "assets/js/13.f71be8dd.js",
    "revision": "b82edfb9f8a44eaf6b75602d3d5993ff"
  },
  {
    "url": "assets/js/130.090c903d.js",
    "revision": "e148341a3bf0e5357a53d04de576ab04"
  },
  {
    "url": "assets/js/131.656844d8.js",
    "revision": "767e8dd60737dce766175ba6778ee37f"
  },
  {
    "url": "assets/js/132.4fb96d74.js",
    "revision": "ab0eb9ecf9a9f43852bdb8c317301457"
  },
  {
    "url": "assets/js/133.9b63bb70.js",
    "revision": "7063ee848e3cabebaf9183becac3ab01"
  },
  {
    "url": "assets/js/134.b7ae2e13.js",
    "revision": "a756f02662173060db8fe9717e3ff0b8"
  },
  {
    "url": "assets/js/135.28379001.js",
    "revision": "dc3f713061c921bd571966b190352c97"
  },
  {
    "url": "assets/js/136.784d85d1.js",
    "revision": "53ee71fbe29e5fc8e1a92c163aff0f55"
  },
  {
    "url": "assets/js/137.db6fc94e.js",
    "revision": "eebe570559d86c484f9ff966ba9d8281"
  },
  {
    "url": "assets/js/138.754cbf72.js",
    "revision": "69589c89c447a27fb64ec22545ad6f20"
  },
  {
    "url": "assets/js/139.d1c5c0dd.js",
    "revision": "0b78750d214c812182a138fc1a29584c"
  },
  {
    "url": "assets/js/14.40afa148.js",
    "revision": "f71b5fc2f997674c9a907c1207f61d2f"
  },
  {
    "url": "assets/js/140.e9bb8492.js",
    "revision": "2a6434be28515e95be48fad0e273eb5a"
  },
  {
    "url": "assets/js/141.6ae13adb.js",
    "revision": "1a8bf9c6502cc91baef6fe82424ca24f"
  },
  {
    "url": "assets/js/142.d0cffa27.js",
    "revision": "2ad6f525140bf47dfd0ee87057bd976f"
  },
  {
    "url": "assets/js/143.5b79df72.js",
    "revision": "09bf28f1f90d90669ebd3f04524f85f9"
  },
  {
    "url": "assets/js/144.bf4dbab4.js",
    "revision": "70c6a691dbd781be7a48ccb2ce6d578a"
  },
  {
    "url": "assets/js/145.9e509160.js",
    "revision": "08c636bcce5b527a82519b9c32e0791c"
  },
  {
    "url": "assets/js/146.748d1bc9.js",
    "revision": "4faa6bf65eede1c3cb351a04352b279d"
  },
  {
    "url": "assets/js/147.7ca86f3b.js",
    "revision": "51d3cabe582ecf5275d7660c57be86f5"
  },
  {
    "url": "assets/js/148.5a91dd83.js",
    "revision": "753392e4b62d483f572f6ffc03603504"
  },
  {
    "url": "assets/js/149.70be251d.js",
    "revision": "0fc8cb859c51603e3cbabd74669cab09"
  },
  {
    "url": "assets/js/15.2bd140c6.js",
    "revision": "78bec64512d9f64b1ef47a5df6f6fc8b"
  },
  {
    "url": "assets/js/150.2d251577.js",
    "revision": "28c5407541d2ed65584220e9b67a2623"
  },
  {
    "url": "assets/js/151.85138f9a.js",
    "revision": "9e48d7eb8e3f229556b6f70bb4854697"
  },
  {
    "url": "assets/js/152.98c1574b.js",
    "revision": "c5fe84e5b012484708c22f7660556c42"
  },
  {
    "url": "assets/js/153.c848421a.js",
    "revision": "76b2b24355cd191d49a1e6b056c118c4"
  },
  {
    "url": "assets/js/154.38503f79.js",
    "revision": "7a54f538e92fadfabff4eb5ebf890ce0"
  },
  {
    "url": "assets/js/155.52a7f320.js",
    "revision": "271d4f583f16f4c69aec67948c4d2c31"
  },
  {
    "url": "assets/js/156.c0244b7e.js",
    "revision": "7d4259ab249645aacf3d95a1de6714ad"
  },
  {
    "url": "assets/js/157.3c57f9f5.js",
    "revision": "135383d452073b0078fe228349729b24"
  },
  {
    "url": "assets/js/158.2f5eec90.js",
    "revision": "35d3104d2ca0a82692cd6f6328461284"
  },
  {
    "url": "assets/js/159.2afe9360.js",
    "revision": "488b8b62b7e8d595b9082cd2ce7c26c4"
  },
  {
    "url": "assets/js/16.6ce5cae2.js",
    "revision": "097c673c20df9050979737d2744998ef"
  },
  {
    "url": "assets/js/160.5ea06854.js",
    "revision": "b033c8fa7dda9ae4fc98bafbe7277e91"
  },
  {
    "url": "assets/js/161.a11b5903.js",
    "revision": "c84d319007927752d0fcf51b3c78c560"
  },
  {
    "url": "assets/js/162.0ba9793d.js",
    "revision": "e994e60a97e30fac04e3ca219dc25310"
  },
  {
    "url": "assets/js/163.63696021.js",
    "revision": "1fee05cfc080eed97048ea9f7432fe77"
  },
  {
    "url": "assets/js/164.fa239a69.js",
    "revision": "3dfe1a3c3392507fdf7a62b198ed037d"
  },
  {
    "url": "assets/js/165.4be6fc2f.js",
    "revision": "20aefdef917a863c1b0a426f899cb310"
  },
  {
    "url": "assets/js/166.5fb8d917.js",
    "revision": "0d4a5e7a24c2e32300df475456e356e5"
  },
  {
    "url": "assets/js/167.25f5ea88.js",
    "revision": "3f2afb1549269eda23082339f7253d0a"
  },
  {
    "url": "assets/js/168.a1dd34b3.js",
    "revision": "2d2b35dcda4a9237ccb02dc9d1fd4159"
  },
  {
    "url": "assets/js/169.ba58a78a.js",
    "revision": "bd8300bbc6e4b7cc0a2f26025a173ff9"
  },
  {
    "url": "assets/js/17.48630bcf.js",
    "revision": "01d148eb7410a79bf0ecf2a99502b65c"
  },
  {
    "url": "assets/js/170.1d55f2c5.js",
    "revision": "11cafec05af8bb3b48c61f01f76cd77e"
  },
  {
    "url": "assets/js/171.45ce9c41.js",
    "revision": "cceaad00913e32c39d1911894edc9b8c"
  },
  {
    "url": "assets/js/172.fd4b1c8d.js",
    "revision": "c0bc76f729f72e5a6544adcdf5296663"
  },
  {
    "url": "assets/js/173.00b4bf80.js",
    "revision": "2d077be4b3bcf5bd906baa69622bcab1"
  },
  {
    "url": "assets/js/174.4d3fc21a.js",
    "revision": "867e87baf44920b9bc31a091f0b9ff14"
  },
  {
    "url": "assets/js/175.e7f2fec8.js",
    "revision": "35bdfe5ae9edc9433b07766c69067e52"
  },
  {
    "url": "assets/js/176.f7453ce2.js",
    "revision": "b40d5ea8f6baebf61b50aa3f11973cba"
  },
  {
    "url": "assets/js/177.515c2513.js",
    "revision": "a73a9a7f617d6d07f355a50e9e3ae0da"
  },
  {
    "url": "assets/js/178.89512f27.js",
    "revision": "391ae779a1c90b5150e8e48c0ec34c39"
  },
  {
    "url": "assets/js/179.cb712f7c.js",
    "revision": "38f829f6afdc4af79b2a8e4a2fb04b38"
  },
  {
    "url": "assets/js/18.e6a91fab.js",
    "revision": "322aee3b4c998895502b7bab921c783c"
  },
  {
    "url": "assets/js/180.df6d7a71.js",
    "revision": "1980d3f122acd9b5efe7037a31cf50a2"
  },
  {
    "url": "assets/js/181.3ff2f0ef.js",
    "revision": "40c0a5eeb20b572f01fee9a29ed1ba22"
  },
  {
    "url": "assets/js/182.61ab1585.js",
    "revision": "88b83a022e2054fa7ef867b66f6d61e1"
  },
  {
    "url": "assets/js/183.a2bbb949.js",
    "revision": "210ce7315d3e8b129cecbac6b45da36e"
  },
  {
    "url": "assets/js/184.2d9d0177.js",
    "revision": "5ceb9ff3bae0f58add357d3e5efc9714"
  },
  {
    "url": "assets/js/185.af4a67cb.js",
    "revision": "c7e5af641c27345a3604886d952abe49"
  },
  {
    "url": "assets/js/186.5aa2adf4.js",
    "revision": "623677dcd014e862d28bc4115856428e"
  },
  {
    "url": "assets/js/187.8a6afb7f.js",
    "revision": "bf534c555b1bb6a0ca1018dcf5f0f079"
  },
  {
    "url": "assets/js/188.afd7fa32.js",
    "revision": "3b519093f9e6b63fe5d3f977344f3ac0"
  },
  {
    "url": "assets/js/189.c3465d1e.js",
    "revision": "1d1cf373aab46ecf0ae6b0e00faeb100"
  },
  {
    "url": "assets/js/19.c838c855.js",
    "revision": "8bc393c875073863e17664958c291c86"
  },
  {
    "url": "assets/js/190.73a24723.js",
    "revision": "61e454d8c8b5b9823b9e1f88234efc7a"
  },
  {
    "url": "assets/js/191.d81b4f7d.js",
    "revision": "e3fc2ddaa43ec051bc6e081ea30f27a2"
  },
  {
    "url": "assets/js/192.f0de8c53.js",
    "revision": "12fde75ed897f06b011cf737bfbaadbd"
  },
  {
    "url": "assets/js/193.a2039fa0.js",
    "revision": "0ad3fb07e47d1ec4af990548049c2cd0"
  },
  {
    "url": "assets/js/194.1cd6dbfa.js",
    "revision": "f62a14833937e0dea6139e447877d765"
  },
  {
    "url": "assets/js/195.3ac67000.js",
    "revision": "0f2f0bc76d4470abba0e70b85b32b870"
  },
  {
    "url": "assets/js/196.77b0ceb5.js",
    "revision": "e08bee83c234d99248198f1e271cda62"
  },
  {
    "url": "assets/js/197.90d88b48.js",
    "revision": "a56fe87e79ca29dd3a7153d3f83736c0"
  },
  {
    "url": "assets/js/198.7aeb155c.js",
    "revision": "292dee8fbc5b790134204896a20e72e5"
  },
  {
    "url": "assets/js/199.ef6cf5fe.js",
    "revision": "7b31576950e2bf1be9e648fbfae12c04"
  },
  {
    "url": "assets/js/2.c73bfe8e.js",
    "revision": "5f3b37529bd16f3b1b694d8b43ea8b96"
  },
  {
    "url": "assets/js/20.a2961cb8.js",
    "revision": "1a132e397cf11ec2b173599dd88d0843"
  },
  {
    "url": "assets/js/200.766d6dd6.js",
    "revision": "17da7998e2c3c984c2d7c78ef3575342"
  },
  {
    "url": "assets/js/201.6e6cb645.js",
    "revision": "179381a435d6f7690196a9183034743d"
  },
  {
    "url": "assets/js/202.913c2b63.js",
    "revision": "848ef0efd78e051c90ceb792d6484b65"
  },
  {
    "url": "assets/js/203.9fa4fefd.js",
    "revision": "f488699b5a348efc1976da062fd7b072"
  },
  {
    "url": "assets/js/204.83f8a545.js",
    "revision": "46e554970e7d96ceb8915364f9a7e187"
  },
  {
    "url": "assets/js/205.459e1a14.js",
    "revision": "d07e303f82c7b4b13303196a299e38f2"
  },
  {
    "url": "assets/js/206.08416aa4.js",
    "revision": "16d6e310a5265bf50afd3a4477d3d77e"
  },
  {
    "url": "assets/js/207.a3414167.js",
    "revision": "7a1253b3834420e74ecd10be60675e7e"
  },
  {
    "url": "assets/js/208.fd94797e.js",
    "revision": "67b79531a5d7f4b4965972858f26ba5f"
  },
  {
    "url": "assets/js/209.96e236f5.js",
    "revision": "f0851558d5c6d5961302630233965f4a"
  },
  {
    "url": "assets/js/21.b61eef26.js",
    "revision": "bc7d2d76b299bbab5f819efbf255dd0b"
  },
  {
    "url": "assets/js/210.95f5c992.js",
    "revision": "86f50fdd10eedc9644a5aa729cc7521b"
  },
  {
    "url": "assets/js/211.e8031eca.js",
    "revision": "0bff92a4b1bc6a3bf366ee7ab55e04ee"
  },
  {
    "url": "assets/js/212.ff9e3956.js",
    "revision": "2bf6bed6912cd8ec80b7debd42c89ebf"
  },
  {
    "url": "assets/js/213.b8512d06.js",
    "revision": "4b724ceb4a30a8961a30362d5fec570b"
  },
  {
    "url": "assets/js/214.b4a3d508.js",
    "revision": "e6b03ad6970bbc064588273ee140a0d5"
  },
  {
    "url": "assets/js/215.f009e416.js",
    "revision": "f04a42e181a14b6d8fdbc4e1c184b7db"
  },
  {
    "url": "assets/js/216.f4a7bef1.js",
    "revision": "c4e1a52728223a65232488ecc7cb01b1"
  },
  {
    "url": "assets/js/217.7a4a1bb6.js",
    "revision": "6fe91748f51ac6dd71c57975ce26695a"
  },
  {
    "url": "assets/js/218.c25af5ec.js",
    "revision": "4f065a4a2ad148be3feb1cec5c4ba89c"
  },
  {
    "url": "assets/js/219.e68c4d04.js",
    "revision": "122977a018990f4e25aa9d2393cca534"
  },
  {
    "url": "assets/js/22.c4e54feb.js",
    "revision": "068bf8481c2b86858dc25a21d2b2f54c"
  },
  {
    "url": "assets/js/220.620395d8.js",
    "revision": "a7c8838ba64f54510731cd0be4dcb2c5"
  },
  {
    "url": "assets/js/221.3fa2e0cb.js",
    "revision": "4e32e6ef419838cd558b7554620bcff4"
  },
  {
    "url": "assets/js/222.d3d412af.js",
    "revision": "31c89e4cd1c400ba47ea59176de47c61"
  },
  {
    "url": "assets/js/223.6e6881d6.js",
    "revision": "a06910d992dd246918912ab4b084613c"
  },
  {
    "url": "assets/js/224.d3e809b9.js",
    "revision": "27e236976f18a6f01d11f27e96a06cc6"
  },
  {
    "url": "assets/js/225.eeedf399.js",
    "revision": "922e6dc9cc5b5f2a8d4f3027925c70c2"
  },
  {
    "url": "assets/js/226.3ce1a98f.js",
    "revision": "6537a1f678724b6b15a481cc1441226c"
  },
  {
    "url": "assets/js/227.59bde2c3.js",
    "revision": "96a130c757687c168c14bbe1c00e1f9f"
  },
  {
    "url": "assets/js/228.03d5eaef.js",
    "revision": "8b9102af2bd1ceedc15bd556d54ec709"
  },
  {
    "url": "assets/js/229.2f8fcdfa.js",
    "revision": "74cbd3259af2738fcac4a2285048f7a3"
  },
  {
    "url": "assets/js/23.dc01caeb.js",
    "revision": "c8cfa48c78db26668d27273afb033611"
  },
  {
    "url": "assets/js/230.33a04943.js",
    "revision": "f1ee731b5086dfa398b3a22eecccad8b"
  },
  {
    "url": "assets/js/231.d5bcf78c.js",
    "revision": "cb52e4cf2f8e96640d9e3b55ad0b52a8"
  },
  {
    "url": "assets/js/232.1ddbc0bd.js",
    "revision": "f548e71aae036f6eac4cf169f9637fb1"
  },
  {
    "url": "assets/js/233.b043c898.js",
    "revision": "8f50adb97b9f1e64fbc5ecbc8f76e36a"
  },
  {
    "url": "assets/js/234.acd8b51a.js",
    "revision": "88b1d22340c692ae6c62715878a916f5"
  },
  {
    "url": "assets/js/235.a2ddc47b.js",
    "revision": "555de40f4ea6a37070d0a060c5f5f666"
  },
  {
    "url": "assets/js/236.18777df1.js",
    "revision": "4a9ff2c865f253c9611dde3118d7a372"
  },
  {
    "url": "assets/js/237.7c028bb0.js",
    "revision": "aa1309db6c37ac0afee809ada615c17e"
  },
  {
    "url": "assets/js/238.3912be1f.js",
    "revision": "f354296ed5540312581ab632dd6f5579"
  },
  {
    "url": "assets/js/239.929ea3fd.js",
    "revision": "b231316d1b5eaa4275dccd054c74ff71"
  },
  {
    "url": "assets/js/24.74ed38f0.js",
    "revision": "4adeaf294d9ee1f18986b9ff3bdd793e"
  },
  {
    "url": "assets/js/240.bbd7fd68.js",
    "revision": "ac858e341a04becbf3e2c1c8f5b00afb"
  },
  {
    "url": "assets/js/241.d4607ef4.js",
    "revision": "42b6f739a2f2ca5dbcd4eaade5f72d26"
  },
  {
    "url": "assets/js/242.33e195d9.js",
    "revision": "93245716d97bab573030761a4f667f4c"
  },
  {
    "url": "assets/js/243.db85122d.js",
    "revision": "48e9a8700a48b2b28a3c411e98b26f5e"
  },
  {
    "url": "assets/js/244.549502a7.js",
    "revision": "53ac725acd1ff374a9c8d22723dfc618"
  },
  {
    "url": "assets/js/245.784e2a0a.js",
    "revision": "b65be790e5bc9500ba848d488dcc3b36"
  },
  {
    "url": "assets/js/246.728d9bbd.js",
    "revision": "eaa1351ef920534d470a24a7c77476a9"
  },
  {
    "url": "assets/js/247.db25ad0c.js",
    "revision": "36315800501f8f7c91007b0643ec9800"
  },
  {
    "url": "assets/js/248.01379e6a.js",
    "revision": "15a7bc3624db77da6447f3d0c6afce12"
  },
  {
    "url": "assets/js/249.35f4a0b3.js",
    "revision": "7023e7dafcfe1b57e85d86483d8abf4c"
  },
  {
    "url": "assets/js/25.eb2c7151.js",
    "revision": "e2e4dd13e377e862d368ef679067b67f"
  },
  {
    "url": "assets/js/250.ad478616.js",
    "revision": "899a3bfd58cd22272892986f4b0e91b6"
  },
  {
    "url": "assets/js/251.7b64602e.js",
    "revision": "357df51639f185da9f0cfaa2e46cafe4"
  },
  {
    "url": "assets/js/252.919a4724.js",
    "revision": "aa82e123953f9dda2ecb0e295499981a"
  },
  {
    "url": "assets/js/253.0b873765.js",
    "revision": "11baa7739de8a580c8f7530311a223a3"
  },
  {
    "url": "assets/js/254.d8283b45.js",
    "revision": "7a81ac3d64d33edf04229d0403378016"
  },
  {
    "url": "assets/js/255.878abe7f.js",
    "revision": "45a285403eb24ac55307e64426eff34c"
  },
  {
    "url": "assets/js/256.9643ad36.js",
    "revision": "756a41a7626e7bd7f03d04883a1251fe"
  },
  {
    "url": "assets/js/257.4b96a3a4.js",
    "revision": "07a9840a0e25ce9452f0ae4b30ee7762"
  },
  {
    "url": "assets/js/258.0bcb5cf5.js",
    "revision": "fffa8574dcf9c939df79d15b527d66dd"
  },
  {
    "url": "assets/js/259.69439f35.js",
    "revision": "399ac975ca0d800060ebf383088d7462"
  },
  {
    "url": "assets/js/26.3e388cce.js",
    "revision": "0179a2e63aacf664d16567021f7cb3cb"
  },
  {
    "url": "assets/js/260.345df25b.js",
    "revision": "0e4d1b698954143691cea4122cf63bb4"
  },
  {
    "url": "assets/js/261.3d58b7c7.js",
    "revision": "e19f399575f511bcb56819d7a35f32a3"
  },
  {
    "url": "assets/js/262.db8ea5f7.js",
    "revision": "e81e33ab6858f98f66e18f738794014e"
  },
  {
    "url": "assets/js/263.c1efca05.js",
    "revision": "3975e65e2b3739990b33b5c659101e78"
  },
  {
    "url": "assets/js/264.f559e4b3.js",
    "revision": "898572e1a3c98e5e469ecb5b918e63c6"
  },
  {
    "url": "assets/js/265.10f06b39.js",
    "revision": "86df9aea9a5e475a85540aafde93c4fe"
  },
  {
    "url": "assets/js/266.efb81a84.js",
    "revision": "00078079756e2d2274cc4a28c28a68b7"
  },
  {
    "url": "assets/js/267.3765a574.js",
    "revision": "2dcd66aec1be7feec0977eb3518741a7"
  },
  {
    "url": "assets/js/268.cd2e285e.js",
    "revision": "5d9ee31e112cbca48e121c8115ddcbef"
  },
  {
    "url": "assets/js/269.2db964bf.js",
    "revision": "d92396e47298850f8968c66d9ef4a190"
  },
  {
    "url": "assets/js/27.93954961.js",
    "revision": "6d55a034cf299e441c78125247c7541a"
  },
  {
    "url": "assets/js/270.fb09a799.js",
    "revision": "4e6cc6156c291af2c00e6dbb5d4e1686"
  },
  {
    "url": "assets/js/271.304e3467.js",
    "revision": "64fdde639ea2ada9c278dcea0ac65e97"
  },
  {
    "url": "assets/js/272.55069182.js",
    "revision": "04f2be1135e4b7a0070a0111c1b88781"
  },
  {
    "url": "assets/js/28.d3eb4cb3.js",
    "revision": "9199a3effcf820691aec35b858b61c93"
  },
  {
    "url": "assets/js/29.1e72414b.js",
    "revision": "55d399b01d5ac31f83014ee27ae2f46c"
  },
  {
    "url": "assets/js/3.df7e4fd7.js",
    "revision": "e493c812c914a2f72f95c3bc1ee57eb5"
  },
  {
    "url": "assets/js/30.1ef7e72d.js",
    "revision": "1f7cc1db353a9897f17e8929e5711800"
  },
  {
    "url": "assets/js/31.be6ff419.js",
    "revision": "b7f306a75909cd5f8efdcc53b09f12c0"
  },
  {
    "url": "assets/js/32.13a9c218.js",
    "revision": "fc9a0d5a8199f4c9f9f3823a543d7c77"
  },
  {
    "url": "assets/js/33.766d889c.js",
    "revision": "6ec3f68042179030400d24472fb92e58"
  },
  {
    "url": "assets/js/34.ce40764f.js",
    "revision": "68449bc760f01ffb1a3c1f7eb52cc27f"
  },
  {
    "url": "assets/js/35.8a5433f3.js",
    "revision": "e3eb91ed33c8c7e1adcf43366a27b6fe"
  },
  {
    "url": "assets/js/36.b7ba4cdd.js",
    "revision": "40690371d549435a7b67ffe1b7c22e6e"
  },
  {
    "url": "assets/js/37.51b9d474.js",
    "revision": "7acdb8c4aac6c09de9a5a28f87b625a9"
  },
  {
    "url": "assets/js/38.26a8c93b.js",
    "revision": "57dc43f0d4e9c9da45d71cc867ff234c"
  },
  {
    "url": "assets/js/39.6f17dd0d.js",
    "revision": "5ae528e4979908ea071463e1d19c28e1"
  },
  {
    "url": "assets/js/40.f32dcc26.js",
    "revision": "190c4b9cde245ec6794ffe777f0e61d6"
  },
  {
    "url": "assets/js/41.b726a7d9.js",
    "revision": "aa939a9e47b9f0d565a26e404c0c9e17"
  },
  {
    "url": "assets/js/42.c3049d26.js",
    "revision": "ab36fa31b18217793b9f6f78ada7d5e4"
  },
  {
    "url": "assets/js/43.59ef7129.js",
    "revision": "7ba3b94d74f010faf9ad9d33c3037aa2"
  },
  {
    "url": "assets/js/44.d8d518d1.js",
    "revision": "2af196f9ee032f8e427d1ff0b86234ec"
  },
  {
    "url": "assets/js/45.797ab644.js",
    "revision": "12e79541d514e26c7453386478337c2a"
  },
  {
    "url": "assets/js/46.3e8dbf83.js",
    "revision": "d98cc84a41df273c98cecaff7f65ed8c"
  },
  {
    "url": "assets/js/47.ace17df4.js",
    "revision": "282ee7948f151f6b550ced7866941d26"
  },
  {
    "url": "assets/js/48.0bdd1399.js",
    "revision": "9579732f3e994c4c9e9d820041f10faa"
  },
  {
    "url": "assets/js/49.3c06d990.js",
    "revision": "d4d3a4402855a3664a8e7695a71de3c6"
  },
  {
    "url": "assets/js/5.e5cc32bd.js",
    "revision": "73dda28343b4bb4a539c04ba96708714"
  },
  {
    "url": "assets/js/50.2d4536c0.js",
    "revision": "91a816f7fd5962d51d94741617858a47"
  },
  {
    "url": "assets/js/51.54931aab.js",
    "revision": "ceea8fde57196b701960778c293fb38f"
  },
  {
    "url": "assets/js/52.184fbafe.js",
    "revision": "d94677b05f4f68dcc77ba85d2862e9c6"
  },
  {
    "url": "assets/js/53.0f196d90.js",
    "revision": "7d07d756c20df9689965b9f6a7bab8cc"
  },
  {
    "url": "assets/js/54.042eb685.js",
    "revision": "834ca1992d6b792265b957d3551e62ea"
  },
  {
    "url": "assets/js/55.b962b4d9.js",
    "revision": "0d451d0a90673a6ab7f4408e821e0a76"
  },
  {
    "url": "assets/js/56.6671ab3d.js",
    "revision": "264d5d3fa4524b86453e7022d199d7db"
  },
  {
    "url": "assets/js/57.d465d9fe.js",
    "revision": "b77cddef58a5d0a4aec23feef9abbece"
  },
  {
    "url": "assets/js/58.e4cacdbc.js",
    "revision": "073b590dc1f7a9ff1dd60c9ed50ec385"
  },
  {
    "url": "assets/js/59.c1cab06b.js",
    "revision": "9f0e5bb2fc4d54c29fa70b11c5194742"
  },
  {
    "url": "assets/js/6.9b6b17be.js",
    "revision": "62ca5584d99f39bfa269c60d419cf62a"
  },
  {
    "url": "assets/js/60.a2f400a8.js",
    "revision": "5f1bb2b84644e444ee90a6ce2abf09e0"
  },
  {
    "url": "assets/js/61.a9187cc4.js",
    "revision": "167f7eaedd3e6e9b4f47bde5e9d4fa43"
  },
  {
    "url": "assets/js/62.c1d8ad2f.js",
    "revision": "1c8c3786d38f1faf6d0352802f537a10"
  },
  {
    "url": "assets/js/63.1174412b.js",
    "revision": "2170b64c1953f0dd94864ad5863040b7"
  },
  {
    "url": "assets/js/64.27760fa0.js",
    "revision": "aa8b9520220c92928f8fec8c7b9525df"
  },
  {
    "url": "assets/js/65.b89b4e8b.js",
    "revision": "d740e65195c4728abab01ba0091ebabe"
  },
  {
    "url": "assets/js/66.090ed6de.js",
    "revision": "b69da7f69fed02cab001fc0ab1dbf743"
  },
  {
    "url": "assets/js/67.100f1d33.js",
    "revision": "efeee6d06497b39f349781b1558f32bc"
  },
  {
    "url": "assets/js/68.d0f0b31e.js",
    "revision": "77f415fc0f77085c69f637368681b395"
  },
  {
    "url": "assets/js/69.c3d0deef.js",
    "revision": "0c315383765d82372df81b4b52993876"
  },
  {
    "url": "assets/js/7.643fee59.js",
    "revision": "035c9f54444c3545a05c1c185417b874"
  },
  {
    "url": "assets/js/70.08e3bb30.js",
    "revision": "4f29a822c0525e0a46c1fe0395e66fd7"
  },
  {
    "url": "assets/js/71.cb4319b2.js",
    "revision": "6c2d8b8827dac1471bbafaf53e538249"
  },
  {
    "url": "assets/js/72.b1d359ce.js",
    "revision": "6444e06f0b289cc35d7b36f5b53bc82c"
  },
  {
    "url": "assets/js/73.8d462c86.js",
    "revision": "70070696c36b189ae7d7236374d27630"
  },
  {
    "url": "assets/js/74.ac142229.js",
    "revision": "7491023a08bbfeae7735119847649ede"
  },
  {
    "url": "assets/js/75.489d3a2f.js",
    "revision": "7f359e5ae8ad9e4394e40cabce11fc7d"
  },
  {
    "url": "assets/js/76.0acaff32.js",
    "revision": "6927446055440f9b57da6edf64999008"
  },
  {
    "url": "assets/js/77.7839281d.js",
    "revision": "09a91b8b136fa3acb26845c8838d84fa"
  },
  {
    "url": "assets/js/78.e1309d24.js",
    "revision": "51694da9c05f5b555e20e7199a2ec596"
  },
  {
    "url": "assets/js/79.1f967020.js",
    "revision": "25b708ab2398206bfa357771da023ecb"
  },
  {
    "url": "assets/js/8.3489a844.js",
    "revision": "f003a635bce26dc4a876d6011555fa82"
  },
  {
    "url": "assets/js/80.20b1d13c.js",
    "revision": "430c593cbc6c76f777cbb11b78024b57"
  },
  {
    "url": "assets/js/81.ad5d2022.js",
    "revision": "3cc80d0f1fe740e560c351a9429295fe"
  },
  {
    "url": "assets/js/82.71d099c6.js",
    "revision": "b2a52849760f7ce7fef96ffa1f26bc42"
  },
  {
    "url": "assets/js/83.2e6619e6.js",
    "revision": "fc9d736158d1c43eb531368c5b23827a"
  },
  {
    "url": "assets/js/84.bb111cff.js",
    "revision": "dd73fd6e682ee6c1c0302e989d24a2e8"
  },
  {
    "url": "assets/js/85.3e9d6b5a.js",
    "revision": "a8498d6c60b5b1e60f20c139d425c3e8"
  },
  {
    "url": "assets/js/86.cf39eb29.js",
    "revision": "dc88f09c6fb7ec291c1795fac3326163"
  },
  {
    "url": "assets/js/87.eaf4d520.js",
    "revision": "4520c47a55aad2cf096860d401779658"
  },
  {
    "url": "assets/js/88.948544b8.js",
    "revision": "9d7940b145f5ee3a6907bf9b9d1c89ca"
  },
  {
    "url": "assets/js/89.d6482907.js",
    "revision": "af08cafc8f58e4af6d904fef7e023cd2"
  },
  {
    "url": "assets/js/9.9369bcb3.js",
    "revision": "408f94bc003c2b76baf52540ac406c94"
  },
  {
    "url": "assets/js/90.8ff16525.js",
    "revision": "25b1d2babebf60b8ded72ce9e87fa299"
  },
  {
    "url": "assets/js/91.90fb3e24.js",
    "revision": "6b2150fc4307bfe74388c2e2d970ad9d"
  },
  {
    "url": "assets/js/92.c1e35e47.js",
    "revision": "d25d654153b0f66e07b251d75028b40f"
  },
  {
    "url": "assets/js/93.8f35c1e1.js",
    "revision": "40d507d3adc034a78566e90fda7e4afa"
  },
  {
    "url": "assets/js/94.87a3e87b.js",
    "revision": "9dc5e81fb85d680ae558f73526af48e6"
  },
  {
    "url": "assets/js/95.2835493b.js",
    "revision": "a003108f71778d73424a3597aa604cbc"
  },
  {
    "url": "assets/js/96.7ecc0144.js",
    "revision": "46d4631bcb74fce346069ec3902062c5"
  },
  {
    "url": "assets/js/97.eb901520.js",
    "revision": "82c7cb1899255b01d28329b9ccbfcd50"
  },
  {
    "url": "assets/js/98.aaa653a8.js",
    "revision": "5aa86e5ccae77b4ca506bef7c1523f28"
  },
  {
    "url": "assets/js/99.556f1f1e.js",
    "revision": "7891fd0ca8974734a6e8ac7adf1d837e"
  },
  {
    "url": "assets/js/app.cafa5a52.js",
    "revision": "61d4c327c17685d58e0dbd3152db0c1f"
  },
  {
    "url": "categories/index.html",
    "revision": "895a8afb757faaec1adc973199524c77"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "3b2038a37e53d8e1718503f73612a905"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "e7dd2c7bdd89247c892b0c8b67ceb7d5"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "e704d335823555a3c2a9e67e3b026dd1"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "c9fcde84c33b158e58c49f807a4290cd"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "ca1ec70f8e5e07f1fd5ff834f6a432f0"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "1a447b8ceebdbace59063b6632cbc1b8"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "fb38c42727e67c43c74af7c3cae4bafa"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "22f06a0a2427a4a8d82655a359ffb095"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "f98b6598a1922939729b46e906db606e"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "09e2d5684b7b51595f999a55964ad194"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "e7dd2c7bdd89247c892b0c8b67ceb7d5"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "eb31ae19a71912fed2c60d8d6396a214"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "8b9a5edbc89089761dddf5cb4c289170"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "d3bf0fdcfdbe6e0ae60e9db1f505bd60"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "6cdb41522379b6fe8731f8d1564a7435"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "e33fd2744c734b9d95288f76e1c4b1c6"
  },
  {
    "url": "cs/database/index.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "879efcd256207182f13b37e993621962"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "00d35f409876dafe80f1f2c8fb3b3053"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "4c8219c2982d73a3914f13ff2b7e1c10"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "6d1f9e57db6d56801869699841b6effb"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "262162a62ef65ef901ff02fccf277839"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "d2300198f4a22ee59998711c7db343dc"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "393532b39802a6d6caf73ad2bb23be37"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "de1089a41d85eeeec68639792655e412"
  },
  {
    "url": "cs/design/command.html",
    "revision": "c81822d8a67ad92f3362e504638b70bd"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "0d3dc2fc62204dc7b2720bdf0ead8037"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "d72c1398ab387f26575a9f5d0afcb05c"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "e138709fc17dd1bf92c11758f90d8638"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "9bc6ed26e49a4589ad0d7e4e5ffdf086"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "e0f016e1738304e81f932a2917c81b02"
  },
  {
    "url": "cs/design/index.html",
    "revision": "205f5fda1ed66137704a2be267e13018"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "9c99eac17ccd44f2e4a8009e19bdecc2"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "5972c6e9af7f416f2b6658d2eba342ae"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "84ec68b1572c1bdcd69be80a65ed39b9"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "0b31493e43888c08edf5c4c5f003ca80"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "fdb05f64b25acb1d839caa2a53301008"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "415810212deb55fc1f5023aba8617b44"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "079c801e5984931afcf995f338d22d43"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "cb8ade1a4f3ccf19460a1341af8a68b9"
  },
  {
    "url": "cs/design/state.html",
    "revision": "83572df4fc357a41cdfcc2336112bab5"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "7609032f85503ae09d564e5dfede0802"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "7e859a47df91e1f17e38720bf53961ce"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "fe988103642aacea360e060f3c140b0d"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "396fe315a132b56d07ba32595ce3fe50"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "eea1470b1fab0d9e8e0522678b5b4290"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "8e558e0e2d31dfe43848bf18b81cdf1a"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "ef7f272f6b4195553422da1f01c87cd5"
  },
  {
    "url": "cs/framework/vue3-reactivity.html",
    "revision": "ed4714cf5da0fc01bdd777753ecb6be1"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "ab56b5db86b36606f006a1f2be2303ff"
  },
  {
    "url": "cs/index.html",
    "revision": "2b6c55667e6cf0352adc7888d5eacc83"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/java/container.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/java/index.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "cc806408eca4885dcb25431b643b4558"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "e8d454e92b357eaa137f4b3cfcac29ad"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "562810dbf02788a8b62236128478be01"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "4e54502423c0107a74da5c07786a4ea5"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "821d6b2516b9e4f46a9ada3fb7e5ee5b"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "a4c0e8ded8fea6a3f178defaa4885a36"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "83d292871607d30be5c6845f44feeaf2"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "d85de93ef1166599fcac1c9d7e50e471"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "50a3289997680ba9144c16dee271fa62"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "126ce54226298e3b06f036a935a4a68b"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "d0b63b226ca16a9b98c107cf30058cc6"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "9678a8b58f8d62b7eb145b69a32ef6d8"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "2cf09a35358d647479ae628094ddfe9e"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "1b8b153493490e2d00bdf5ed33cebd6e"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "242a90f8c1b4b36be9e31c48e4ca1cc2"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "c9a1b93ee2a0216a6cf789adf085755c"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "9380cc5b1305f4c194ddad3fc4d6463c"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "cae5cea81ca875a3fb703486d829b69f"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "cf19f2b40a616c6612f48a31ba374393"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "af4f544fb8d0d1836230d477ed9916d3"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "9f0a67b803621a51971bb039d9dd74c8"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "117f72bb9f483cff1b824d4eeb49c4a3"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "40a41ce8e0e2de2f3f801216a2003ebf"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "c9cba2c1cea5703db6051cd00f93b4c5"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "704869e33b1795ac55e9e12f586916d0"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "4cad75657d4ac1932f3e7625819a3653"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "2970e5aadc071ce37f4e5d31141d56dc"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "a1dfbed6369269662761f96eaf86a264"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "687ee2e7fb5b6d80b8e347307ceb7d15"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "00f31473d206f98a6bfd2987c22598cb"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "8f1e7fb684c6971be9550a665de57c66"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "dd946b9a691c1a0814522d113d0d7531"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "9c796359c04d8c94fac0fc4e5cd10adf"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "653afb67827a3e657dd65a0fd8e21a5f"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "09de76fa9eff2b019438531f89dd1629"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "3da2350e6a31b324ff36ae4a49d253ea"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "39dfa65e8ded331158a16e7ee5ceb7b7"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "d4c9e0cced7e1e3c59ec033f9321c3b4"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "ece6d314552cb61fc484649b56c9672c"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "fca01ec0fb6d61bab96a29c853ecc45f"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "2b03f7c4eac111a5f792a48ca7e9c4fe"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "cd76018894306280a0ef0ddba9a7e80b"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "4ad6e75ee7ec98e7e114919c5ae72e41"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "ca5f0a04167d20cf04bfd15457951990"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "48930457cb7cad9174e81965c1738911"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "bec9b5900f131b752ae532d496141f2a"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "6a6aa08efc13969b9d65c49f07eb9754"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "1641de5fb31b2104b91782f5bff2a719"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "1092381dada4113bfa5f83ce07e86491"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "49b111d4c5f434235e596b5c5f4d731c"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "2e90ef7483e2424e3c7dc81565238329"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "dfe5dc4698d0a7554669e3000e66b51a"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "9db6fb3e70ae0dc636f530c0b174a481"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "47e0cf93f983f5141d3af4d7f4a6ea3f"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "9411a7b73de7784fa87a0196bc184cdd"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "f7734b12412b52523aaec8ea4cc32834"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "13337ef21b4831dfad6a96a9e034a53c"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "b86da4910a06392a7468643aa6d7f676"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "487a1bca3951d7b0da45ff4e612823bc"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "cf8e8769dda4875a78b9f00506f02fe0"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "218870bc02598a36198fb78cfa13ed4a"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "f24bc185c5f460e62dbde7dd3e388241"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "22338761d533b020f371bc77327f8ce9"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "efc0cba9c2bc97232c7ff8addc1db794"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "6a61a79cfd4a0d2efce40d86ffe1774a"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "1acb9666827338bf4fc15cbec2dcc4f7"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "08512c9f645fd07358043b872f17a80e"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "e900eaa1716344782cc2c058e13b5b9b"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "3785e9e6d956c77eda5c93237978108d"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "1a037c299d9b2f20944d7b15373c274e"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "15ad54881622257d46513af7ebea88f0"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "845cbbc9a61911fb7e8ab82ca51aa695"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "fbc9ab889290de1332f68eb6e94fb63e"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "1efebbf45ec5e9d93df7a9ad60bcd34c"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "c66f57f64311dca2da5c6b7c248e09ec"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "7c7babe0c4f60263ad06ba6930575ce3"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "d1a46e0a4e5661334baf8e17e24927c4"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "b7b9ccdb3790f7791bfa078a7f1793c9"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "5175787958d459a5468bd085f89712fd"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "3a6bb1d519f3225c51f81063045b274f"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "20c91705d09cc77c43f3b0d7909d0dec"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "7ae28a4155ee05d77cf583ee78723c28"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "a91f29889e558b572e7bf0c6c141a827"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "2fd535e15ab9b42352d3f45eff991be2"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "ca5f0a04167d20cf04bfd15457951990"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "788c446d53b114c0ab823e7ea747ceab"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "b556bc0ec9925e9fd558bd5783508aa2"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "e7dd2c7bdd89247c892b0c8b67ceb7d5"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "63c051e41abfd68cf6d439a12542abf1"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "9bb927037fbb61c574234dd6467dbfc5"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "a8b4f0ce0efbe2c28fb82295b6909257"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "4f6a3173dc03b713c6539ba1b98fe4e2"
  },
  {
    "url": "cs/network/application.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "9849c5a379729ff357202404bf3e1ffa"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/network/index.html",
    "revision": "e7dd2c7bdd89247c892b0c8b67ceb7d5"
  },
  {
    "url": "cs/network/link.html",
    "revision": "923cb46c6ad38420ef421ee34387e5b1"
  },
  {
    "url": "cs/network/network.html",
    "revision": "335c8420511946d830029b5f890b89ec"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "6ac9c05657142db64906bb7d60fee837"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "ce1c05f80b311a404d9821a201091ca3"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "e233382faeab45128257a15f17b7518d"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "9c77994ee23cbd19840cabb13df411f5"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "bd316165f8c9a9947920df2a76bd982f"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "e7dd2c7bdd89247c892b0c8b67ceb7d5"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "98d7bcdac44b3c14c748d2cb2ffd7f96"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "f291d4c4cc462c6ce30eaca901dec18d"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "901d3c38151fbd3b5c9618aeeb428684"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "1de50921dc450352acd8d86e54cebc40"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "cc806408eca4885dcb25431b643b4558"
  },
  {
    "url": "cs/web/index.html",
    "revision": "fcdf7b4209dddb892235e3eefa13088f"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "db943fe6ba5882670af317827a5b48e3"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "ebc9ba17ae2ca97a5b30bbd28313fcd2"
  },
  {
    "url": "cs/web/web.html",
    "revision": "9227fc936405c65912ff64dd0a1b71eb"
  },
  {
    "url": "daily-life/phone-lost.html",
    "revision": "09d25d0c022739f421200e3c60a38d23"
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
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "9a12c0e96062d7c408d514b3c9517920"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "8c95256a6b6ac0869d3e65841d1a4b01"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "f949ec393b2fe65989e94b2bbd60daef"
  },
  {
    "url": "language/english/differ.html",
    "revision": "b72d7a868b37f2082ef8bb5cf270b132"
  },
  {
    "url": "language/english/index.html",
    "revision": "e8d454e92b357eaa137f4b3cfcac29ad"
  },
  {
    "url": "language/english/modal.html",
    "revision": "cc5103ca81f5ae99e21c05dbd4423465"
  },
  {
    "url": "language/english/mood.html",
    "revision": "572504f10f1cf9358b36781ac79c945c"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "aa8de0c5e6814e4810be1bf57941766e"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "00c38b1bab242aa43d0876f93df4e329"
  },
  {
    "url": "language/english/phonetic.html",
    "revision": "9274fad90d152c42c8b21b932beb53c7"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "eb423a93d2b8b7c6109eef1e51bd7bca"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "ffe9c1e345e23eb5fd0a1ce53d69d721"
  },
  {
    "url": "language/english/tense.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "language/english/verb.html",
    "revision": "679e0ae201d79f2a6576d81f81fe235c"
  },
  {
    "url": "language/english/word5000.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "language/index.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "tag/index.html",
    "revision": "1edb2c7286d7dacf1078f97058c75528"
  },
  {
    "url": "timeline/index.html",
    "revision": "0f078b273db8c03fe650cf8c40210c4f"
  },
  {
    "url": "tools/chatgpt.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "tools/gpost.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "tools/hash.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "tools/index.html",
    "revision": "f5607db3261d4bf804799275943765bb"
  },
  {
    "url": "tools/test1234567890.html",
    "revision": "f5607db3261d4bf804799275943765bb"
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
