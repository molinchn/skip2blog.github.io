(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{460:function(_,v,t){"use strict";t.r(v);var a=t(15),e=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"文件系统-9章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件系统-9章"}},[_._v("#")]),_._v(" 文件系统（9章）")]),_._v(" "),t("p",[_._v("本文为《现代操作系统：原理与实现》（陈海波著）的阅读笔记。")]),_._v(" "),t("p",[_._v("块设备：操作系统将存储设备抽象为”"),t("strong",[_._v("块设备")]),_._v("“。")]),_._v(" "),t("p",[_._v("块与块号：块设备上的存储单元被划分为”块“，一个”块“通常为512字节或者4KB。而且每个块都拥有自己的地址，称为”块号“。")]),_._v(" "),t("p",[_._v("虚拟文件系统：负责管理具体的文件系统，并提供一系列服务，如页缓存，inode缓存，目录项缓存等。")]),_._v(" "),t("p",[_._v("本章主要涉及的重点：")]),_._v(" "),t("ul",[t("li",[_._v("基于inode的文件系统")]),_._v(" "),t("li",[_._v("文件系统中的重要概念")]),_._v(" "),t("li",[_._v("Linux的虚拟文件系统")]),_._v(" "),t("li",[_._v("FAT与NTFS文件系统")])]),_._v(" "),t("h2",{attrs:{id:"_1-关于inode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-关于inode"}},[_._v("#")]),_._v(" 1 关于inode")]),_._v(" "),t("p",[_._v("inode的作用：由于一个”块“很小，因此需要很多块才能组成一个我们通常意义上的文件。那就需要一个东西去记录都用到了哪些块，这就是inode的作用。inode = index node，即”索引节点“，"),t("strong",[_._v("记录了一个文件所对应的所有存储块号。")])]),_._v(" "),t("p",[_._v("inode采用分级的方法来组织存储块号，这也影响着一个文件系统所能支持的最大文件大小。")]),_._v(" "),t("p",[_._v("inode除了上述记录”块号“以外，还记录着该文件相关的其他”元数据“，包括文件模式，文件链接数，文件拥有着，用户组，文件大小等。")]),_._v(" "),t("p",[_._v("一个文件系统会支持多种文件，linux系统所支持文件类型，除了“常规文件”以外，还包括目录文件，符号链接文件，FIFO文件，套接字文件，字符设备文件，块设备文件。其中比较重要的事“常规文件”，“目录文件”，“符号链接文件”。")]),_._v(" "),t("h3",{attrs:{id:"_1-1-文件名与目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-文件名与目录"}},[_._v("#")]),_._v(" 1.1 文件名与目录")]),_._v(" "),t("p",[_._v("文件名是便于用户使用的形式，文件系统中也加入了这一表示方式。"),t("strong",[_._v("文件名")]),_._v("可以直接映射到"),t("strong",[_._v("inode号")]),_._v("，进而映射到"),t("strong",[_._v("块号")]),_._v("。")]),_._v(" "),t("p",[_._v("文件名的存储位置：文件名并不存储于inode元数据中，而是存放在“目录”中。")]),_._v(" "),t("p",[_._v("具体的目录结构如书上的图9-3。每个目录项有四个结构：")]),_._v(" "),t("ul",[t("li",[_._v("inode号：用于找到文件名对应的inode结构")]),_._v(" "),t("li",[_._v("目录项长度：记录整个目录项的长度")]),_._v(" "),t("li",[_._v("文件名长度：记录后面保存的文件名的有效长度")]),_._v(" "),t("li",[_._v("文件名：即一个连续的字符序列")])]),_._v(" "),t("h3",{attrs:{id:"_1-2-硬链接与符号链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-硬链接与符号链接"}},[_._v("#")]),_._v(" 1.2 硬链接与符号链接")]),_._v(" "),t("p",[_._v("文件名并不是文件的元数据，因此多个文件名可以对应同一个文件。")]),_._v(" "),t("p",[_._v("硬链接就是创建一个新的名字link，链接到已有的文件。这个过程只是增加了目录项中的记录，并不改变文件的块数据。")]),_._v(" "),t("p",[_._v("硬链接创建的文件和原文件一致，地位也没有任何区别。只有所有的硬链接全部删除时，这个文件的块数据才会被删除。")]),_._v(" "),t("p",[_._v("在文件inode元数据中，存储着一项nlink，即一个计数器，记录着当前硬链接的数量。")]),_._v(" "),t("p",[_._v("符号链接又称为软链接。其符号链接文件中保存着的是一个字符串，表示一个文件路径。")]),_._v(" "),t("p",[_._v("硬链接与符号链接的比较：")]),_._v(" "),t("p",[_._v("相同之处：都允许应用程序使用一个新的路径访问一个已有的文件。")]),_._v(" "),t("p",[_._v("区别：")]),_._v(" "),t("ul",[t("li",[_._v("应用访问符号链接时，会根据其保存的路径进行解析，进而最终找到目标文件。应用访问硬链接时，会直接读取其自己的inode结构，找到对应的块。")]),_._v(" "),t("li",[_._v("符号链接可以链接到不存在的目录，只有在访问时才会报错。硬链接则在链接时就会报错，因为其创建之初就会查找目标文件的inode文件。")]),_._v(" "),t("li",[_._v("符号链接可以跨文件系统操作，而硬链接只能与目标文件应用于同一文件系统中。")])]),_._v(" "),t("h3",{attrs:{id:"_1-3-存储布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-存储布局"}},[_._v("#")]),_._v(" 1.3 存储布局")]),_._v(" "),t("p",[_._v("文件系统会将存储空间划分成不同的区域：")]),_._v(" "),t("ul",[t("li",[_._v("超级块")]),_._v(" "),t("li",[_._v("块分配信息")]),_._v(" "),t("li",[_._v("inode分配信息")]),_._v(" "),t("li",[_._v("inode表")]),_._v(" "),t("li",[_._v("文件数据块")])]),_._v(" "),t("p",[_._v("主要是以上五部分。")]),_._v(" "),t("p",[_._v("超级块记录了整个文件系统的全局元数据。保存着魔法数字（影响操作系统判断文件系统的类型和存储布局），文件系统的版本，所管理的空间大小，最后挂载时间和其他统计信息。")]),_._v(" "),t("p",[_._v("块分配信息和inode分配信息：使用位图标记每个数据块的使用情况。’")]),_._v(" "),t("p",[_._v("inode表即以数组的形式保存了整个文件系统中所有的inode结构。通常使用inode的索引对不同的inode进行区分。")]),_._v(" "),t("p",[_._v("剩余的文件数据块是真正保存数据的位置。")]),_._v(" "),t("h2",{attrs:{id:"_2-虚拟文件系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-虚拟文件系统"}},[_._v("#")]),_._v(" 2. 虚拟文件系统")]),_._v(" "),t("p",[t("strong",[_._v("虚拟文件系统")]),_._v("（Virtual File System，VFS）的目的：对多种文件系统进行管理和协调，允许它们在同一操作系统上共同工作。虚拟操作系统可以为底层不同文件系统提供不同的方法，在将这些方法转换为VFS的数据，最终抽象出统一的文件系统服务。")]),_._v(" "),t("p",[_._v("可以说，虚拟文件系统存在于操作系统与底层的文件系统之间，关系是：")]),_._v(" "),t("p",[_._v("文件系统（如FAT，NTFS，AFS） ---   虚拟文件系统  ---  操作系统")]),_._v(" "),t("h3",{attrs:{id:"_2-1-面向文件系统的接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-面向文件系统的接口"}},[_._v("#")]),_._v(" 2.1 面向文件系统的接口")]),_._v(" "),t("h3",{attrs:{id:"_2-2-面向操作系统的接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-面向操作系统的接口"}},[_._v("#")]),_._v(" 2.2 面向操作系统的接口")]),_._v(" "),t("h2",{attrs:{id:"_3-其他文件系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-其他文件系统"}},[_._v("#")]),_._v(" 3. 其他文件系统")]),_._v(" "),t("h3",{attrs:{id:"_3-1-fat文件系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-fat文件系统"}},[_._v("#")]),_._v(" 3.1 FAT文件系统")]),_._v(" "),t("h3",{attrs:{id:"_3-2-ntfs文件系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-ntfs文件系统"}},[_._v("#")]),_._v(" 3.2 NTFS文件系统")])])}),[],!1,null,null,null);v.default=e.exports}}]);