(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1080:function(a,t,s){"use strict";s.r(t);var r=s(7),_=Object(r.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("ul",[r("li",[r("RouterLink",{attrs:{to:"/cs/archit/cluster.html#一负载均衡"}},[a._v("一、负载均衡")]),a._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/cs/archit/cluster.html#负载均衡算法"}},[a._v("负载均衡算法")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/cs/archit/cluster.html#转发实现"}},[a._v("转发实现")])],1)])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/cs/archit/cluster.html#二集群下的-session-管理"}},[a._v("二、集群下的 Session 管理")]),a._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/cs/archit/cluster.html#sticky-session"}},[a._v("Sticky Session")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/cs/archit/cluster.html#session-replication"}},[a._v("Session Replication")])],1),a._v(" "),r("li",[r("RouterLink",{attrs:{to:"/cs/archit/cluster.html#session-server"}},[a._v("Session Server")])],1)])],1)]),a._v(" "),r("h1",{attrs:{id:"一、负载均衡"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、负载均衡"}},[a._v("#")]),a._v(" 一、负载均衡")]),a._v(" "),r("p",[a._v("集群中的应用服务器（节点）通常被设计成无状态，"),r("mark",[a._v("用户可以请求任何一个节点")]),a._v("。")]),a._v(" "),r("p",[r("mark",[a._v("负载均衡器")]),a._v("会根据集群中每个节点的负载情况，将用户请求转发到合适的节点上。")]),a._v(" "),r("p",[a._v("负载均衡器可以用来实现高可用以及伸缩性：")]),a._v(" "),r("ul",[r("li",[a._v("高可用：当某个节点故障时，负载均衡器会将用户请求转发到另外的节点上，从而保证所有服务持续可用；")]),a._v(" "),r("li",[a._v("伸缩性：根据系统整体负载情况，可以很容易地添加或移除节点。")])]),a._v(" "),r("p",[a._v("负载均衡器运行过程包含两个部分：")]),a._v(" "),r("ol",[r("li",[a._v("根据负载均衡算法得到转发的节点；")]),a._v(" "),r("li",[a._v("进行转发。")])]),a._v(" "),r("h2",{attrs:{id:"负载均衡算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡算法"}},[a._v("#")]),a._v(" 负载均衡算法")]),a._v(" "),r("h3",{attrs:{id:"_1-轮询-round-robin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-轮询-round-robin"}},[a._v("#")]),a._v(" 1. 轮询（Round Robin）")]),a._v(" "),r("p",[a._v("轮询算法把每个请求轮流发送到每个服务器上。")]),a._v(" "),r("p",[a._v("下图中，一共有 6 个客户端产生了 6 个请求，这 6 个请求按 (1, 2, 3, 4, 5, 6) 的顺序发送。(1, 3, 5) 的请求会被发送到服务器 1，(2, 4, 6) 的请求会被发送到服务器 2。")]),a._v(" "),r("p",[r("img",{attrs:{src:s(680),alt:"avatar | 500"}}),r("br")]),a._v(" "),r("p",[a._v("该算法比较适合每个服务器的性能差不多的场景，如果有性能存在差异的情况下，那么性能较差的服务器可能无法承担过大的负载（下图的 Server 2）。")]),a._v(" "),r("p",[r("img",{attrs:{src:s(681),alt:"avatar | 500"}}),r("br")]),a._v(" "),r("h3",{attrs:{id:"_2-加权轮询-weighted-round-robbin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-加权轮询-weighted-round-robbin"}},[a._v("#")]),a._v(" 2. 加权轮询（Weighted Round Robbin）")]),a._v(" "),r("p",[a._v("加权轮询是在轮询的基础上，"),r("mark",[a._v("根据服务器的性能差异")]),a._v("，为服务器赋予一定的权值，性能高的服务器分配更高的权值。")]),a._v(" "),r("p",[a._v("例如下图中，服务器 1 被赋予的权值为 5，服务器 2 被赋予的权值为 1，那么 (1, 2, 3, 4, 5) 请求会被发送到服务器 1，(6) 请求会被发送到服务器 2。")]),a._v(" "),r("p",[r("img",{attrs:{src:s(682),alt:"avatar | 500"}}),r("br")]),a._v(" "),r("h3",{attrs:{id:"_3-最少连接-least-connections"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-最少连接-least-connections"}},[a._v("#")]),a._v(" 3. 最少连接（least Connections）")]),a._v(" "),r("p",[a._v("由于每个请求的连接时间不一样，使用轮询或者加权轮询算法的话，可能会让一台服务器当前连接数过大，而另一台服务器的连接过小，造成负载不均衡。")]),a._v(" "),r("p",[a._v("例如下图中，(1, 3, 5) 请求会被发送到服务器 1，但是 (1, 3) 很快就断开连接，此时只有 (5) 请求连接服务器 1；(2, 4, 6) 请求被发送到服务器 2，只有 (2) 的连接断开，此时 (6, 4) 请求连接服务器 2。该系统继续运行时，服务器 2 会承担过大的负载。")]),a._v(" "),r("p",[r("img",{attrs:{src:s(683),alt:"avatar | 500"}}),r("br")]),a._v(" "),r("p",[a._v("最少连接算法就是将请求发送给当前"),r("mark",[a._v("最少连接数")]),a._v("的服务器上。")]),a._v(" "),r("p",[a._v("例如下图中，服务器 1 当前连接数最小，那么新到来的请求 6 就会被发送到服务器 1 上。")]),a._v(" "),r("p",[r("img",{attrs:{src:s(684),alt:"avatar | 500"}}),r("br")]),a._v(" "),r("h3",{attrs:{id:"_4-加权最少连接-weighted-least-connection"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-加权最少连接-weighted-least-connection"}},[a._v("#")]),a._v(" 4. 加权最少连接（Weighted Least Connection）")]),a._v(" "),r("p",[a._v("在最少连接的基础上，根据服务器的性能为每台服务器分配权重，再根据权重计算出每台服务器能处理的连接数。")]),a._v(" "),r("h3",{attrs:{id:"_5-随机算法-random"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-随机算法-random"}},[a._v("#")]),a._v(" 5. 随机算法（Random）")]),a._v(" "),r("p",[a._v("把请求随机发送到服务器上。")]),a._v(" "),r("p",[a._v("和轮询算法类似，该算法比较适合服务器性能差不多的场景。")]),a._v(" "),r("p",[r("img",{attrs:{src:s(685),alt:"avatar | 500"}}),r("br")]),a._v(" "),r("h3",{attrs:{id:"_6-源地址哈希法-ip-hash"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-源地址哈希法-ip-hash"}},[a._v("#")]),a._v(" 6. 源地址哈希法 (IP Hash)")]),a._v(" "),r("p",[a._v("源地址哈希通过对客户端 IP 计算哈希值之后，再对服务器数量取模得到目标服务器的序号。")]),a._v(" "),r("p",[a._v("可以保证同一 IP 的客户端的请求会转发到同一台服务器上，用来实现"),r("mark",[a._v("会话粘滞")]),a._v("（Sticky Session）")]),a._v(" "),r("p",[r("img",{attrs:{src:s(686),alt:"avatar | 500"}}),r("br")]),a._v(" "),r("h2",{attrs:{id:"转发实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#转发实现"}},[a._v("#")]),a._v(" 转发实现")]),a._v(" "),r("h3",{attrs:{id:"_1-http-重定向"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-http-重定向"}},[a._v("#")]),a._v(" 1. HTTP 重定向")]),a._v(" "),r("p",[a._v("HTTP 重定向负载均衡服务器使用某种负载均衡算法计算得到服务器的 IP 地址之后，将该地址写入 HTTP 重定向报文中，状态码为 302。客户端收到重定向报文之后，需要重新向服务器发起请求。")]),a._v(" "),r("p",[a._v("缺点：")]),a._v(" "),r("ul",[r("li",[r("mark",[a._v("需要两次请求")]),a._v("，因此访问延迟比较高；")]),a._v(" "),r("li",[a._v("HTTP 负载均衡器处理能力有限，会限制集群的规模。")])]),a._v(" "),r("p",[a._v("该负载均衡转发的缺点比较明显，实际场景中很少使用它。")]),a._v(" "),r("p",[r("img",{attrs:{src:s(687),alt:"avatar | 500"}}),r("br")]),a._v(" "),r("h3",{attrs:{id:"_2-dns-域名解析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-dns-域名解析"}},[a._v("#")]),a._v(" 2. DNS 域名解析")]),a._v(" "),r("p",[a._v("在 DNS "),r("mark",[a._v("解析域名的同时使用负载均衡算法")]),a._v("计算服务器 IP 地址。")]),a._v(" "),r("p",[a._v("优点：")]),a._v(" "),r("ul",[r("li",[a._v("DNS 能够根据地理位置进行域名解析，返回离用户最近的服务器 IP 地址。")])]),a._v(" "),r("p",[a._v("缺点：")]),a._v(" "),r("ul",[r("li",[a._v("由于 DNS 具有多级结构，每一级的域名记录都可能被缓存，当下线一台服务器需要修改 DNS 记录时，需要过很长一段时间才能生效。")])]),a._v(" "),r("p",[a._v("大型网站基本使用了 DNS 做为第一级负载均衡手段，然后在内部使用其它方式做第二级负载均衡。也就是说，域名解析的结果为内部的负载均衡服务器 IP 地址。")]),a._v(" "),r("p",[r("img",{attrs:{src:s(688),alt:"avatar | 500"}}),r("br")]),a._v(" "),r("h3",{attrs:{id:"_3-反向代理服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-反向代理服务器"}},[a._v("#")]),a._v(" 3. 反向代理服务器")]),a._v(" "),r("p",[a._v("反向代理服务器位于源服务器前面，用户的"),r("mark",[a._v("请求")]),a._v("需要先"),r("mark",[a._v("经过反向代理服务器")]),a._v("才能到达源服务器。反向代理可以用来进行缓存、日志记录等，同时也可以用来做为负载均衡服务器。")]),a._v(" "),r("p",[a._v("在这种负载均衡转发方式下，客户端不直接请求源服务器，因此源服务器不需要外部 IP 地址，而反向代理需要配置内部和外部两套 IP 地址。")]),a._v(" "),r("p",[a._v("优点：")]),a._v(" "),r("ul",[r("li",[a._v("与其它功能集成在一起，部署简单。")])]),a._v(" "),r("p",[a._v("缺点：")]),a._v(" "),r("ul",[r("li",[a._v("所有请求和响应都需要经过反向代理服务器，它可能会成为"),r("mark",[a._v("性能瓶颈")]),a._v("。")])]),a._v(" "),r("h3",{attrs:{id:"_4-网络层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-网络层"}},[a._v("#")]),a._v(" 4. 网络层")]),a._v(" "),r("p",[a._v("在操作系统内核进程获取网络数据包，根据负载均衡算法计算源服务器的 IP 地址，并修改请求数据包的目的 IP 地址，最后进行转发。")]),a._v(" "),r("p",[a._v("源服务器返回的响应也需要经过负载均衡服务器，通常是让负载均衡服务器同时作为集群的网关服务器来实现。")]),a._v(" "),r("p",[a._v("优点：")]),a._v(" "),r("ul",[r("li",[a._v("在内核进程中进行处理，性能比较高。")])]),a._v(" "),r("p",[a._v("缺点：")]),a._v(" "),r("ul",[r("li",[a._v("和反向代理一样，所有的请求和响应都经过负载均衡服务器，会成为性能瓶颈。")])]),a._v(" "),r("h3",{attrs:{id:"_5-链路层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-链路层"}},[a._v("#")]),a._v(" 5. 链路层")]),a._v(" "),r("p",[a._v("在链路层根据负载均衡算法计算源服务器的 MAC 地址，并修改请求数据包的目的 MAC 地址，并进行转发。")]),a._v(" "),r("p",[a._v("通过配置源服务器的虚拟 IP 地址和负载均衡服务器的 IP 地址一致，从而不需要修改 IP 地址就可以进行转发。也正因为 IP 地址一样，所以源服务器的响应不需要转发回负载均衡服务器，可以直接转发给客户端，避免了负载均衡服务器的成为瓶颈。")]),a._v(" "),r("p",[a._v("这是一种三角传输模式，被称为直接路由。对于提供下载和视频服务的网站来说，直接路由避免了大量的网络传输数据经过负载均衡服务器。")]),a._v(" "),r("p",[a._v("这是目前大型网站使用最广负载均衡转发方式，在 Linux 平台可以使用的负载均衡服务器为 LVS（Linux Virtual Server）。")]),a._v(" "),r("h1",{attrs:{id:"二、集群下的-session-管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、集群下的-session-管理"}},[a._v("#")]),a._v(" 二、集群下的 Session 管理")]),a._v(" "),r("p",[a._v("一个用户的 Session 信息如果存储在一个服务器上，那么当负载均衡器把用户的下一个请求转发到另一个服务器，由于服务器没有用户的 Session 信息，那么该用户就需要重新进行登录等操作。")]),a._v(" "),r("h2",{attrs:{id:"sticky-session"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sticky-session"}},[a._v("#")]),a._v(" Sticky Session")]),a._v(" "),r("p",[a._v("需要配置负载均衡器，使得一个用户的所有请求都路由到同一个服务器，这样就可以把用户的 Session 存放在该服务器中。")]),a._v(" "),r("p",[a._v("缺点：")]),a._v(" "),r("ul",[r("li",[a._v("当服务器宕机时，将丢失该服务器上的所有 Session。")])]),a._v(" "),r("p",[r("img",{attrs:{src:s(689),alt:"avatar | 400"}}),r("br")]),a._v(" "),r("h2",{attrs:{id:"session-replication"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#session-replication"}},[a._v("#")]),a._v(" Session Replication")]),a._v(" "),r("p",[a._v("在服务器之间进行 Session 同步操作，每个服务器都有所有用户的 Session 信息，因此用户可以向任何一个服务器进行请求。")]),a._v(" "),r("p",[a._v("缺点：")]),a._v(" "),r("ul",[r("li",[a._v("占用过多内存；")]),a._v(" "),r("li",[a._v("同步过程占用网络带宽以及服务器处理器时间。")])]),a._v(" "),r("p",[r("img",{attrs:{src:s(690),alt:"avatar | 400"}}),r("br")]),a._v(" "),r("h2",{attrs:{id:"session-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#session-server"}},[a._v("#")]),a._v(" Session Server")]),a._v(" "),r("p",[a._v("使用一个单独的服务器存储 Session 数据，可以使用传统的 MySQL，也使用 Redis 或者 Memcached 这种内存型数据库。")]),a._v(" "),r("p",[a._v("优点：")]),a._v(" "),r("ul",[r("li",[a._v("为了使得大型网站具有伸缩性，集群中的应用服务器通常需要保持无状态，那么应用服务器不能存储用户的会话信息。Session Server 将用户的会话信息单独进行存储，从而保证了应用服务器的无状态。")])]),a._v(" "),r("p",[a._v("缺点：")]),a._v(" "),r("ul",[r("li",[a._v("需要去实现存取 Session 的代码。")])]),a._v(" "),r("p",[r("img",{attrs:{src:s(691),alt:"avatar | 600"}}),r("br")]),a._v(" "),r("h1",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://www.jscape.com/blog/load-balancing-algorithms",target:"_blank",rel:"noopener noreferrer"}},[a._v("Comparing Load Balancing Algorithms"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"http://slideplayer.com/slide/6599069/#",target:"_blank",rel:"noopener noreferrer"}},[a._v("Redirection and Load Balancing"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://sivalabs.in/2018/02/session-management-using-spring-session-jdbc-datastore/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Session Management using Spring Session with JDBC DataStore"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=_.exports},680:function(a,t,s){a.exports=s.p+"assets/img/9daa3616-00a4-48c4-9146-792dc8499be3.dc6e1905.jpg"},681:function(a,t,s){a.exports=s.p+"assets/img/bfea8772-d01b-4a51-8adc-edfd7d3dce84.b9c52d74.jpg"},682:function(a,t,s){a.exports=s.p+"assets/img/4ab87717-e264-4232-825d-8aaf08f14e8b.00498410.jpg"},683:function(a,t,s){a.exports=s.p+"assets/img/e98deb5a-d5d4-4294-aa9b-9220d4483403.86f9e225.jpg"},684:function(a,t,s){a.exports=s.p+"assets/img/43d323ac-9f07-4e4a-a315-4eaf8c38766c.b101e8a3.jpg"},685:function(a,t,s){a.exports=s.p+"assets/img/a42ad3a7-3574-4c48-a783-ed3d08a0688a.bfd432ca.jpg"},686:function(a,t,s){a.exports=s.p+"assets/img/0f399a9f-1351-4b2d-b8a4-2ebe82b1a703.0c614d2e.jpg"},687:function(a,t,s){a.exports=s.p+"assets/img/02a1fbfd-7a9d-4114-95df-ca2445587a1f.d385f99b.jpg"},688:function(a,t){a.exports="data:image/jpeg;base64,"},689:function(a,t){a.exports="data:image/png;base64,"},690:function(a,t){a.exports="data:image/png;base64,"},691:function(a,t){a.exports="data:image/png;base64,"}}]);