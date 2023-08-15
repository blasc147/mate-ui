import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerSides,
  DrawerTitle,
  DrawerTrigger,
} from './drawer';
import { Button } from './button';
import { cn } from '../utils';
import { FormControl, FormLabel, Input } from './input';

const Story: Meta<typeof Drawer> = {
  component: Drawer,
  title: 'Drawer',
  decorators: [(Story) => <div className="w-[250px]">{<Story />}</div>],
  tags: ['autodocs'],
};
export default Story;

type Story = StoryObj<typeof Drawer>;

export function RightDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button type="submit" size="sm">
          Open Drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Header</DrawerTitle>
        </DrawerHeader>
        <DrawerBody className="h-[85vh]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
          eleifend felis, vel fringilla neque. In tristique dui magna, id
          iaculis turpis pellentesque et. Suspendisse faucibus quam purus, quis
          facilisis purus egestas semper. Pellentesque ut odio ut neque
          pellentesque gravida. Aenean maximus mauris vel lorem faucibus, nec
          tincidunt eros eleifend. Etiam vel eros fringilla, porttitor nulla eu,
          ultricies enim. Aliquam et mauris in eros scelerisque porttitor. Etiam
          ut commodo turpis. Donec interdum erat non ipsum maximus, id tincidunt
          mauris suscipit. Curabitur eu laoreet enim. Cras ante ipsum, accumsan
          imperdiet ante in, pellentesque aliquam ante. Fusce eu sem est.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce
          vitae augue id sem lacinia placerat in in magna. Fusce iaculis leo ac
          condimentum mollis. Nunc fermentum nulla sed risus malesuada, id
          mattis sapien cursus. Donec auctor tempus ultricies. Mauris in aliquam
          justo. Ut convallis ullamcorper dui vitae mattis. Phasellus maximus
          tincidunt dui, ut efficitur lectus accumsan id. Duis maximus a quam
          nec consequat. Morbi quam ligula, consectetur egestas finibus vel,
          vehicula viverra purus. Etiam in libero egestas, ultricies purus non,
          imperdiet arcu. Nullam sollicitudin faucibus lacinia. Fusce pretium
          vitae libero eget dictum. Praesent erat nisl, pharetra sit amet lectus
          vel, egestas posuere quam. Etiam molestie nulla eget nisl tempus
          commodo. Ut orci mi, cursus eu porta et, egestas vel magna. Donec et
          dapibus eros. Curabitur et orci neque. Duis consectetur mollis ligula
          a lobortis. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Praesent ac magna vel metus facilisis
          ultrices vitae eget arcu. Nullam pretium pellentesque dolor a
          dignissim. In mollis posuere tellus, eget auctor lectus molestie ac.
          Sed facilisis orci nec tortor elementum ornare. Ut quis ullamcorper
          sapien, vel rhoncus augue. Etiam mollis, nulla in pharetra rhoncus,
          nisi eros viverra est, ut venenatis massa mi ac enim. Pellentesque
          maximus facilisis neque ac sollicitudin. Praesent et purus purus. In a
          arcu facilisis, aliquet elit non, mattis urna. Sed auctor sollicitudin
          nulla, vitae varius justo congue convallis. Ut nulla quam, iaculis vel
          condimentum sit amet, sagittis in lacus. Ut ultrices mauris velit,
          posuere suscipit sem posuere sit amet. Aenean ut diam at est tincidunt
          dapibus nec in urna. Quisque pulvinar massa libero, a auctor justo
          maximus quis. Pellentesque ut volutpat justo. Proin lorem ipsum,
          feugiat non vulputate ut, pharetra eget tellus. Mauris sed purus eu
          eros porta condimentum. Nunc ac nibh ac odio iaculis aliquam quis eu
          tortor. Ut lectus massa, tincidunt vitae maximus vitae, aliquam id
          massa. Phasellus vehicula fringilla nisi sed dictum. Etiam sed nisi
          eros. Maecenas et commodo risus. Aenean consectetur magna eget nulla
          blandit accumsan. Nunc tincidunt aliquam turpis, vitae dignissim
          tortor mollis a. Aenean mattis, mauris sed tempor sagittis, diam dolor
          eleifend leo, ut scelerisque ligula lacus eget orci. Vestibulum eget
          felis porttitor, mattis sem ut, tempor metus. Mauris lacus risus,
          feugiat at leo ac, rhoncus sagittis est. Maecenas in nunc mollis,
          ullamcorper lacus a, commodo nisl. Morbi laoreet metus a nulla
          fringilla, sed porttitor dui interdum. Proin quis odio lectus. Morbi
          vestibulum nec nisi quis cursus. Morbi quis rhoncus ligula. Proin ut
          dui nunc. Nunc et sollicitudin magna. Cras et libero nec eros
          malesuada faucibus et vel erat. Sed eget magna odio. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Nullam vestibulum congue mi, in laoreet leo finibus eu. Ut
          vulputate urna id augue lobortis, semper hendrerit nisl viverra.
          Nullam ut faucibus nisl, eget tempor sapien. Mauris eget ex et nulla
          venenatis fringilla. Ut commodo ex tellus, sit amet elementum lacus
          feugiat ac. Etiam et rutrum nunc. Aenean vitae blandit turpis, ut
          ultrices dolor. Praesent dui lorem, commodo sit amet sodales et,
          luctus at tortor. Curabitur vulputate laoreet augue non efficitur.
          Proin aliquet orci et quam commodo, hendrerit finibus ipsum ornare.
          Mauris ipsum elit, egestas vel tempus a, vehicula sit amet tellus.
          Cras vel dignissim lectus. Quisque luctus tellus sodales, lobortis
          lacus non, mollis erat. Donec ullamcorper dictum ligula ultricies
          ullamcorper. Maecenas posuere, lectus vel sagittis tincidunt, dolor
          nisl vestibulum nisl, vel rutrum libero ex ut enim. Etiam convallis ac
          sapien sit amet vulputate. In condimentum tincidunt nunc, vitae
          ultrices elit vulputate et. Phasellus sem diam, tempor nec odio quis,
          fermentum volutpat augue. Phasellus ut vehicula nibh. In vitae
          vestibulum tortor. Nunc scelerisque ullamcorper rhoncus. Quisque
          tincidunt sollicitudin tortor non vulputate. Nulla vehicula nulla et
          convallis vulputate. Pellentesque sodales risus velit, ut fringilla
          metus condimentum a. Phasellus dignissim massa quam, vitae dapibus
          libero lacinia vitae. Morbi neque risus, sodales id lectus vel,
          aliquam lobortis tortor. Integer luctus orci ornare felis hendrerit,
          ac condimentum enim suscipit. In ultricies elit non eros posuere, nec
          commodo lectus vulputate. Sed fermentum libero non orci porttitor
          luctus. Ut nec velit vitae est pretium pretium quis ac arcu. Proin
          vitae nulla at diam ultricies luctus at et nulla. Vivamus vitae
          lobortis felis, sit amet malesuada augue. Cras sed erat id sem
          ullamcorper semper. Vivamus ligula nisi, dictum ut leo non, interdum
          ultricies mauris. Praesent non tempor sapien, a fringilla orci.
          Suspendisse potenti. Donec efficitur maximus sapien, eu pharetra nisi
          sagittis ut. Vivamus in quam quis dolor scelerisque dapibus sit amet
          non dolor. Aliquam lacus tellus, elementum in accumsan quis, viverra
          eu justo. Integer lacinia felis non ante viverra, vitae eleifend erat
          laoreet. Duis molestie elit arcu, sit amet malesuada sem eleifend
          rutrum. Sed aliquet orci vel nulla sollicitudin, in venenatis purus
          tempus. In hac habitasse platea dictumst. Proin non dapibus purus.
          Mauris eu lectus et mi interdum luctus. Pellentesque tempor maximus
          auctor. Vivamus vulputate quis ex ac consectetur. Vivamus in sem
          lorem. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Morbi maximus quam ac sodales
          dignissim. Sed malesuada nisl sed dui tempor molestie. Curabitur
          ullamcorper, risus ac iaculis varius, ipsum odio placerat justo, ut
          cursus urna sem ut mauris. Etiam bibendum nisi eget neque varius, et
          tempus nulla ullamcorper. Vivamus malesuada a augue vel condimentum.
          Cras blandit nisi sit amet libero ultricies ultricies. Phasellus
          tempus purus sem, vel sodales turpis eleifend at. Ut at accumsan
          sapien, nec dignissim quam. Proin vitae leo eget nisi lobortis
          posuere. Maecenas eu tristique dui, eget faucibus leo. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Integer tellus tortor, viverra ac scelerisque id, semper
          finibus mi. In pretium diam mi, ac tincidunt mauris blandit venenatis.
          Aenean in nisi at elit vestibulum feugiat in eget ex. Sed vehicula,
          neque dictum vestibulum dictum, ex tortor venenatis magna, ac commodo
          arcu dolor ut felis. Aliquam condimentum vitae libero non placerat.
          Sed eu lacinia ipsum, id lacinia lacus. Donec rhoncus diam eget
          gravida blandit. Nulla facilisi. Maecenas eleifend dapibus
          pellentesque. Suspendisse odio diam, fermentum ac aliquam eu,
          ullamcorper ut lorem. Ut auctor tempus rhoncus. Duis facilisis
          suscipit erat, quis eleifend sem consequat et. Proin vestibulum purus
          eu turpis congue, eget blandit mi volutpat. Donec varius iaculis massa
          quis vehicula. Vivamus tempor mollis scelerisque. Ut pellentesque
          lorem nunc, finibus ultricies mauris suscipit at. Donec ac lectus
          tempus, sagittis nibh eu, posuere metus. Donec et consectetur velit,
          sit amet blandit lorem. Quisque imperdiet elementum neque, vel
          bibendum ante malesuada quis. Vivamus at tristique leo. Donec sit amet
          libero non urna viverra lacinia. Nam volutpat condimentum urna,
          eleifend pharetra dolor cursus sit amet. Integer ultrices lacus
          fermentum turpis tristique, eu cursus lacus pellentesque. Nunc luctus
          ut libero sit amet feugiat. Duis nec sapien mauris. Nunc vehicula nisl
          nec leo placerat aliquet. Vestibulum sed lacus arcu. Mauris sed
          scelerisque turpis. Suspendisse feugiat nunc mauris, ut efficitur arcu
          bibendum ut. Nunc egestas, orci et convallis malesuada, augue ante
          finibus risus, eget finibus felis nulla ut ante. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Vestibulum ullamcorper non tortor vitae faucibus. Fusce pharetra sem
          eu maximus eleifend. Curabitur ut ex lacinia, pellentesque velit non,
          porta lectus. In elementum tincidunt nisl, ac ullamcorper nibh mollis
          id. Sed non urna nec quam hendrerit ullamcorper a eu libero. Mauris
          blandit elit non nisi ultrices, eu venenatis magna accumsan. Duis sed
          erat ultricies, dapibus augue vel, fermentum mauris. Quisque porta
          rhoncus mauris, ac rhoncus magna tempus vestibulum. Quisque blandit
          risus non dolor gravida mollis. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Integer odio
          erat, scelerisque ut neque a, malesuada auctor metus. Maecenas finibus
          leo at nisl accumsan mattis. Phasellus sed sem ultrices, gravida urna
          in, tempor eros. In convallis lectus sit amet sapien ultrices
          sagittis. Sed aliquam sem sit amet ligula elementum, at luctus sem
          vulputate. Integer aliquet, dui nec tempus tincidunt, purus velit
          placerat ligula, vitae mattis sapien sem eu libero. Fusce pharetra
          tincidunt euismod. Nam suscipit ex ac libero tincidunt dictum. Nullam
          vel nisi ac urna dapibus scelerisque id a erat. Morbi tincidunt
          hendrerit risus sed finibus. Curabitur a orci ac tellus dignissim
          mollis. Sed nulla libero, suscipit in molestie sit amet, hendrerit vel
          eros. Cras laoreet nulla eget augue bibendum laoreet. Etiam eu rhoncus
          magna. Fusce a vehicula neque. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Phasellus
          dapibus auctor sem maximus varius. Sed maximus risus eu mollis
          condimentum. Nunc dolor libero, imperdiet id nulla vitae, tincidunt
          sagittis erat. Ut sed augue quis purus dictum malesuada ac a nibh. Sed
          sed facilisis sapien. Morbi scelerisque libero ipsum, ut maximus
          tellus lacinia tincidunt. Etiam in posuere nunc. Integer vel commodo
          ante. Nam fringilla, elit eu auctor varius, diam nunc facilisis purus,
          a interdum purus erat et leo. Mauris ullamcorper fermentum risus at
          lobortis. In blandit, arcu non tristique laoreet, est massa fringilla
          augue, et faucibus libero dui eget lectus. Maecenas aliquam purus
          vitae lacus iaculis, ut euismod sapien lacinia. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Sed rhoncus ante lorem, nec porttitor massa tempus eu. Sed
          lobortis mauris ac tempus fermentum. Nullam viverra orci neque,
          laoreet ornare dui laoreet vel. Nulla mattis justo sit amet est
          iaculis, et vehicula velit viverra. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Vivamus et
          tincidunt sapien. Aliquam et rutrum ex. Sed ultrices id nisi a
          accumsan. Pellentesque efficitur vulputate laoreet. Etiam quis dui
          faucibus, hendrerit arcu non, maximus est. Nunc gravida, dolor ac
          fringilla posuere, elit odio rutrum mauris, tincidunt condimentum
          tortor odio vitae nunc. Aliquam sit amet quam a urna semper laoreet in
          ut massa. Vestibulum justo neque, egestas non diam vitae, ultrices
          tincidunt ante. Fusce hendrerit ligula in nisi dictum auctor. Etiam
          sed suscipit eros. Pellentesque mattis facilisis nulla sit amet
          congue. Sed tristique sed magna aliquam mattis. Donec rhoncus ut
          turpis non pulvinar. Pellentesque eget ornare lacus. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Suspendisse ac diam a nisl tincidunt interdum. Phasellus risus
          erat, convallis a gravida eget, accumsan eu quam. Integer orci ante,
          dignissim et ipsum sit amet, malesuada vulputate sapien. Morbi sit
          amet neque a nulla mollis malesuada eu elementum leo. Suspendisse
          potenti. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Vestibulum non ligula ut metus
          varius tincidunt nec sit amet turpis. Fusce mi mi, mattis a porta
          quis, sollicitudin sed nunc. Proin mollis, nulla ultricies ultricies
          tincidunt, ipsum magna mollis dolor, vel egestas ante lacus eu nunc.
          Nunc condimentum feugiat tellus id tincidunt. Cras aliquet mauris
          blandit iaculis lobortis. Sed pretium, neque quis tincidunt finibus,
          ipsum magna iaculis quam, eget hendrerit lorem arcu sit amet libero.
          Fusce consequat cursus ex in luctus. Vestibulum lobortis ante a
          faucibus pellentesque. Sed rutrum, purus eu pharetra volutpat, risus
          magna efficitur ante, id interdum felis sapien ut est. Vivamus eget
          velit libero. Nullam consequat pharetra maximus. Mauris blandit
          rhoncus turpis eget hendrerit. Fusce iaculis lacinia arcu, a venenatis
          dui vulputate non. Vestibulum posuere lectus pellentesque, ornare odio
          in, elementum purus. Aenean laoreet nec nunc at hendrerit. Ut
          condimentum tincidunt leo non pharetra. Donec cursus sed orci eu
          accumsan. Nullam tempus faucibus aliquet. Duis interdum, dui vitae
          lobortis luctus, urna odio varius ante, quis ornare turpis nisi sit
          amet sapien. Vestibulum vel dignissim massa. Nunc justo neque,
          consectetur at tincidunt faucibus, volutpat nec odio. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Curabitur elementum
          libero eu arcu iaculis viverra. Morbi iaculis, lacus ut accumsan
          suscipit, libero nulla finibus sapien, nec vulputate velit ante id
          leo. Nam placerat dignissim massa, efficitur suscipit ex ultrices
          laoreet. Maecenas facilisis ex in ante luctus, eget vehicula ante
          cursus. Vestibulum et congue ipsum. Mauris vestibulum, ipsum iaculis
          placerat maximus, turpis nulla gravida felis, vitae luctus nulla neque
          ac dolor. Pellentesque nec varius nisl, sit amet ultrices eros. Cras
          nec imperdiet eros, vel porta purus. Maecenas fringilla diam non justo
          convallis fermentum. Maecenas et ex tempor magna eleifend ornare.
          Pellentesque ante leo, ultrices sed nunc sed, laoreet iaculis ligula.
          Sed finibus gravida vulputate. Proin aliquet tellus vitae turpis
          pharetra aliquam non vitae sapien. Duis at lacinia erat. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Proin pretium urna a nibh consectetur malesuada. Proin
          dictum et enim placerat semper. Phasellus imperdiet vel justo at
          sodales. Aenean lorem justo, placerat sed purus nec, lobortis
          venenatis metus. Duis aliquet turpis ipsum, quis ullamcorper est
          suscipit vitae. Duis finibus, nulla ac dignissim accumsan, libero
          neque bibendum lacus, in feugiat tortor lorem elementum augue. Cras
          pellentesque dignissim convallis. Aliquam a diam ut nibh laoreet
          accumsan. Praesent et luctus ante. Phasellus vitae egestas dui.
          Vivamus accumsan erat euismod iaculis pulvinar. Curabitur vel diam
          suscipit, condimentum enim non, euismod nisi. Morbi sollicitudin risus
          id volutpat dapibus. In hac habitasse platea dictumst. Sed neque
          velit, suscipit sed urna non, rhoncus pretium arcu. Quisque vulputate,
          purus eu lobortis euismod, dui felis convallis ante, ut tincidunt
          mauris leo pulvinar justo. Duis tempor est non dolor porta suscipit.
          Ut laoreet nunc id nibh suscipit, et efficitur magna vestibulum. Etiam
          sodales tincidunt augue, eleifend viverra tellus accumsan quis.
          Suspendisse potenti. Maecenas ultrices a felis non elementum. Nam
          venenatis dui eget ante commodo porta. Curabitur eget varius magna.
          Suspendisse mollis mattis convallis. Curabitur viverra nibh sed semper
          finibus. Vestibulum feugiat pharetra dui, et pulvinar tellus lobortis
          vel. Duis volutpat, augue vel fringilla facilisis, ante lorem pretium
          mauris, non aliquam elit ante nec risus. Etiam non odio non diam
          pellentesque pretium. Mauris porttitor sit amet urna facilisis luctus.
          Mauris justo ante, mollis ut vestibulum et, porttitor eget urna.
          Vestibulum vitae consequat purus. Integer facilisis interdum nulla ut
          pharetra. Mauris semper ligula nisl, non lacinia diam interdum et.
          Curabitur egestas hendrerit enim sed volutpat. Vivamus euismod diam
          elementum blandit hendrerit. Praesent pretium, lectus sit amet tempor
          efficitur, mauris magna lacinia urna, id interdum ante odio eu massa.
          In in est ac odio porta feugiat ac at magna. Etiam accumsan elementum
          ante id imperdiet. Suspendisse at luctus mi. Vestibulum porta eu odio
          quis mollis. Sed sed viverra est. Quisque luctus arcu vitae mauris
          efficitur, commodo interdum leo interdum. Quisque finibus massa nunc,
          sit amet tincidunt enim viverra sed. Phasellus nec luctus augue. Proin
          vitae lorem quis dolor placerat tincidunt vitae finibus dolor. Mauris
          non risus convallis, fermentum lacus at, varius mi. Mauris ligula est,
          varius eget ante a, volutpat auctor purus. Morbi malesuada metus at
          augue luctus lacinia. Phasellus sit amet leo purus. Curabitur
          vestibulum finibus vestibulum. Nullam viverra euismod volutpat. Ut
          eros tellus, molestie vitae sem eu, cursus pulvinar magna. Phasellus
          at velit eu nunc tempor ultrices. Mauris odio leo, ullamcorper eget
          felis ac, porta interdum ligula. Duis sit amet mi laoreet, malesuada
          tellus vel, venenatis mauris. Pellentesque fermentum dolor erat,
          interdum dictum orci dignissim bibendum. Praesent sodales tristique
          turpis vitae accumsan. Maecenas sollicitudin finibus porttitor. Mauris
          suscipit nibh vestibulum mauris ultricies rutrum. Fusce dui felis,
          sodales in facilisis quis, eleifend ac orci. Nullam eget tempus ante,
          sit amet pretium tortor. Morbi sed bibendum nibh. Integer eu orci
          nibh. Integer porta arcu porttitor diam tempor, at porta lacus
          aliquet. Sed libero nulla, aliquam a congue eget, elementum sit amet
          lacus. Pellentesque a laoreet est. Nam tempus risus ut dolor tincidunt
          efficitur. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nunc imperdiet sagittis sapien eget venenatis. Donec
          porttitor sed risus eu posuere. Maecenas lacus libero, euismod a sem
          et, auctor mollis dolor. Mauris malesuada nec mauris at sodales. Donec
          in pharetra lorem, vel gravida magna. Vestibulum at felis tellus. In
          hac habitasse platea dictumst. Cras tempus turpis nec dapibus gravida.
          Morbi tempor dui nec luctus luctus. Fusce iaculis auctor nisl, nec
          interdum lacus tincidunt eu. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc vitae mi tellus. Mauris est velit, elementum
          pretium blandit id, faucibus in tellus. Vivamus vitae fermentum enim.
          Duis interdum, ante quis accumsan porta, justo augue tristique turpis,
          sollicitudin lobortis massa leo eget ante. Aliquam sed bibendum risus.
          Integer nec nibh erat. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Aenean eget volutpat urna.
          Ut facilisis neque facilisis mattis tempus. Vivamus volutpat interdum
          magna at dignissim. Quisque id facilisis massa. Donec eget tempus
          metus. Ut in lacus rutrum purus volutpat venenatis. Aenean facilisis
          erat id sollicitudin bibendum. Vivamus lectus mi, tincidunt et
          tincidunt ut, aliquet ac diam. Mauris luctus, lorem venenatis blandit
          suscipit, urna quam ultricies risus, et lacinia eros elit in mi. Etiam
          eu tortor consectetur, semper quam nec, ultricies est. Nulla facilisi.
          Etiam id semper felis, feugiat interdum diam. Mauris viverra ac elit
          vel accumsan. Etiam et diam tellus. Praesent pretium ullamcorper
          eleifend. Donec rutrum ipsum et quam semper, nec pellentesque ipsum
          consectetur. Duis tincidunt vehicula est, vitae imperdiet mauris
          commodo a. Aenean efficitur nisi justo, eget convallis elit gravida
          non. In dignissim magna a nulla mattis, id ultricies sem viverra.
          Proin eget elit sit amet elit pharetra eleifend. Vivamus nulla turpis,
          facilisis ac blandit id, vulputate et orci. Quisque ultricies nunc
          velit, at mollis eros egestas sit amet. Donec porta, nibh ut vehicula
          sagittis, libero nulla congue purus, id suscipit massa nisi vel lacus.
          Quisque sed interdum sem. Phasellus porta rhoncus ante, quis venenatis
          ligula placerat tempus. Aenean egestas tellus lorem, ac venenatis
          metus tempor sit amet. Curabitur tristique ex et dolor euismod,
          ullamcorper commodo magna pulvinar. Vestibulum sit amet accumsan
          lacus, sodales volutpat arcu. Duis viverra, arcu vitae volutpat
          bibendum, elit ipsum maximus nibh, sit amet rhoncus est tortor eu
          augue. Mauris leo est, condimentum nec sodales eu, feugiat vel nisi.
          Proin nec sollicitudin mi, vel interdum orci. Vestibulum accumsan,
          ligula in eleifend varius, nisi elit convallis massa, et rhoncus massa
          nulla vitae urna. Integer sit amet dui non ipsum semper vulputate at
          quis ligula. Donec gravida ut lectus nec interdum. Fusce nulla sapien,
          semper in turpis ut, commodo ullamcorper eros. Curabitur a massa eget
          nisi finibus feugiat. Suspendisse potenti. Maecenas quis porttitor
          tortor, non tincidunt orci. Praesent a libero at quam consectetur
          ultrices. Ut volutpat leo sed ipsum lobortis, vitae aliquet ipsum
          facilisis. Phasellus imperdiet condimentum elit et faucibus. Cras
          luctus, turpis eget gravida pulvinar, dui orci auctor nibh, blandit
          mollis odio lectus quis dui. Morbi sollicitudin, erat vel ullamcorper
          auctor, ipsum nisi bibendum elit, nec mollis est enim a tellus. Nunc
          ultrices eu magna eu elementum. Mauris pharetra maximus sollicitudin.
          Nulla at dolor dapibus, rutrum magna at, congue tellus. Nunc molestie
          ultrices neque. Vivamus suscipit dui ut ante dignissim, at convallis
          enim dignissim. Morbi velit quam, commodo eu laoreet et, vehicula
          aliquam tellus. Phasellus congue, tellus sed pharetra iaculis, lacus
          metus commodo tellus, et porttitor lectus nulla ac lacus. Morbi nec
          ornare est, eget varius augue. Curabitur varius fringilla lobortis.
          Maecenas nec viverra odio, quis suscipit massa. Curabitur eu ultrices
          ex, eget facilisis ipsum. Mauris dapibus massa tortor, accumsan
          tristique tortor placerat eget. Nam et lobortis nisi, id elementum
          sapien. Nam interdum lectus odio, vel semper lorem vestibulum non.
          Nulla mollis scelerisque leo ullamcorper commodo. Aliquam porta, erat
          nec lobortis dictum, enim orci rutrum lectus, vitae bibendum ipsum dui
          a velit. Suspendisse viverra placerat turpis et convallis. Donec eu
          porttitor arcu, non sagittis ipsum. Aliquam augue diam, tempus sed
          dignissim ut, porta et diam. Mauris eu viverra augue. Etiam in varius
          tortor, quis molestie justo. Donec vel nulla egestas, eleifend sem a,
          luctus tortor. Nulla eget velit nunc. Suspendisse consequat ac massa
          eu aliquet. Fusce eu risus eu sem dapibus feugiat eu sed libero.
          Pellentesque nisl magna, aliquet vitae congue vel, laoreet sed eros.
          Mauris facilisis mauris eu nulla facilisis congue. Duis felis nulla,
          luctus in dignissim ut, pharetra eget turpis. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Praesent tincidunt blandit blandit. Etiam ut risus sit amet
          mi fermentum cursus. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. In ut bibendum augue.
          Curabitur a aliquam leo, sed tempus mi. Duis a imperdiet massa.
          Vivamus pretium, massa id tristique tempor, turpis massa tempor
          tortor, consequat ullamcorper urna dolor eget nunc. Maecenas congue,
          arcu at luctus varius, leo libero euismod metus, non consequat nisi
          augue luctus tellus. Duis ut varius magna, feugiat bibendum nibh.
          Curabitur ut imperdiet odio, a condimentum ipsum. Donec vitae
          hendrerit orci, vel volutpat arcu. Donec mattis, est lobortis egestas
          tincidunt, massa magna vehicula nulla, eget tincidunt quam ex in
          tellus. Suspendisse bibendum augue non odio blandit, vitae porttitor
          est laoreet. In sem enim, congue nec lorem ut, mattis laoreet quam.
          Cras magna enim, aliquam ut tristique ut, varius et neque. Aenean
          porta diam sit amet lacus condimentum pharetra. Morbi imperdiet, diam
          pulvinar finibus sodales, sapien enim tempor ipsum, ac finibus nibh
          urna eget leo. Morbi quis orci sollicitudin est maximus pellentesque a
          vel enim. Pellentesque turpis dolor, consectetur vitae laoreet vel,
          rhoncus et nulla. Nullam vel gravida lorem, sit amet luctus erat. Nam
          vel nisi nec tellus porta tincidunt id at lectus. Phasellus vel
          pellentesque nisi. Nam venenatis dui faucibus sapien semper suscipit.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vivamus eu felis tincidunt, consectetur felis
          sed, consequat augue. Nam ac odio ut est laoreet varius. Vestibulum
          hendrerit neque velit, a aliquam elit efficitur eget. Vestibulum
          tristique sed ex quis molestie. In lacus sem, accumsan vitae diam ac,
          lacinia auctor nibh. Vestibulum consequat est urna, eget pellentesque
          mi mollis egestas. Duis nunc odio, tincidunt viverra dictum et,
          volutpat ut tortor. Maecenas odio tellus, vehicula ac purus a,
          fermentum interdum sapien. Maecenas iaculis quam id magna tristique
          lobortis. Vivamus quis maximus magna, mattis efficitur erat.
          Suspendisse pretium nulla eget ipsum posuere posuere sed id nisi.
          Vestibulum sit amet turpis lacinia, rhoncus tellus ac, feugiat orci.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Suspendisse feugiat hendrerit ultrices.
          Pellentesque ac elit facilisis, volutpat lorem eu, efficitur turpis.
          Phasellus ut cursus lectus. Suspendisse vitae volutpat massa, eu
          blandit ex. Mauris sagittis, turpis sed laoreet dignissim, urna augue
          sodales justo, eu ultrices urna elit ut nibh. In vitae ultricies
          ligula. Donec in laoreet turpis. Ut vel diam sollicitudin, sagittis
          sapien et, accumsan massa. Pellentesque a leo vitae nunc tincidunt
          volutpat. Vestibulum sit amet arcu elit. Sed porta enim blandit orci
          gravida volutpat. Phasellus volutpat aliquet aliquet. In euismod
          sapien vel sem ullamcorper laoreet. In et turpis velit. Praesent
          blandit urna vitae fermentum pharetra. Nulla efficitur dolor non
          dapibus pellentesque. Curabitur rutrum leo nunc. Maecenas pharetra
          gravida eros, eget varius eros sodales vel.
        </DrawerBody>
        <DrawerFooter>
          <Button type="submit" size="sm" className={cn('w-full')}>
            Button
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export function BottomDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button type="submit" size="sm">
          Open Drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent side={DrawerSides.Bottom}>
        <DrawerHeader>
          <DrawerTitle>Header</DrawerTitle>
        </DrawerHeader>
        <DrawerBody className={cn('flex', 'flex-col', 'max-h-[500px]')}>
          <FormControl className={cn('my-4')}>
            <FormLabel>Label</FormLabel>
            <Input type="text" />
          </FormControl>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
          eleifend felis, vel fringilla neque. In tristique dui magna, id
          iaculis turpis pellentesque et. Suspendisse faucibus quam purus, quis
          facilisis purus egestas semper. Pellentesque ut odio ut neque
          pellentesque gravida. Aenean maximus mauris vel lorem faucibus, nec
          tincidunt eros eleifend. Etiam vel eros fringilla, porttitor nulla eu,
          ultricies enim. Aliquam et mauris in eros scelerisque porttitor. Etiam
          ut commodo turpis. Donec interdum erat non ipsum maximus, id tincidunt
          mauris suscipit. Curabitur eu laoreet enim. Cras ante ipsum, accumsan
          imperdiet ante in, pellentesque aliquam ante. Fusce eu sem est.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce
          vitae augue id sem lacinia placerat in in magna. Fusce iaculis leo ac
          condimentum mollis. Nunc fermentum nulla sed risus malesuada, id
          mattis sapien cursus. Donec auctor tempus ultricies. Mauris in aliquam
          justo. Ut convallis ullamcorper dui vitae mattis. Phasellus maximus
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
          eleifend felis, vel fringilla neque. In tristique dui magna, id
          iaculis turpis pellentesque et. Suspendisse faucibus quam purus, quis
          facilisis purus egestas semper. Pellentesque ut odio ut neque
          pellentesque gravida. Aenean maximus mauris vel lorem faucibus, nec
          tincidunt eros eleifend. Etiam vel eros fringilla, porttitor nulla eu,
          ultricies enim. Aliquam et mauris in eros scelerisque porttitor. Etiam
          ut commodo turpis. Donec interdum erat non ipsum maximus, id tincidunt
          mauris suscipit. Curabitur eu laoreet enim. Cras ante ipsum, accumsan
          imperdiet ante in, pellentesque aliquam ante. Fusce eu sem est.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce
          vitae augue id sem lacinia placerat in in magna. Fusce iaculis leo ac
          condimentum mollis. Nunc fermentum nulla sed risus malesuada, id
          mattis sapien cursus. Donec auctor tempus ultricies. Mauris in aliquam
          justo. Ut convallis ullamcorper dui vitae mattis. Phasellus maximus
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
          eleif
        </DrawerBody>
        <DrawerFooter>
          <Button type="submit" size="sm" className={cn('w-full')}>
            Button
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export function TopDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button type="submit" size="sm">
          Open Drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent side={DrawerSides.Top}>
        <DrawerHeader>
          <DrawerTitle>Header</DrawerTitle>
        </DrawerHeader>
        <DrawerBody className="max-h-[500px] p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
          eleifend felis, vel fringilla neque. In tristique dui magna, id
          iaculis turpis pellentesque et. Suspendisse faucibus quam purus, quis
          facilisis purus egestas semper. Pellentesque ut odio ut neque
          pellentesque gravida. Aenean maximus mauris vel lorem faucibus, nec
          tincidunt eros eleifend. Etiam vel eros fringilla, porttitor nulla eu,
          ultricies enim. Aliquam et mauris in eros scelerisque porttitor. Etiam
          ut commodo turpis. Donec interdum erat non ipsum maximus, id tincidunt
          mauris suscipit. Curabitur eu laoreet enim. Cras ante ipsum, accumsan
          imperdiet ante in, pellentesque aliquam ante. Fusce eu sem est.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce
          vitae augue id sem lacinia placerat in in magna. Fusce iaculis leo ac
          condimentum mollis. Nunc fermentum nulla sed risus malesuada, id
          mattis sapien cursus. Donec auctor tempus ultricies. Mauris in aliquam
          justo. Ut convallis ullamcorper dui vitae mattis. Phasellus maximus
        </DrawerBody>
        <DrawerFooter>
          <Button type="submit" size="sm" className={cn('w-full')}>
            Button
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export function LeftDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button type="submit" size="sm">
          Open Drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent side={DrawerSides.Left}>
        <DrawerHeader>
          <DrawerTitle>Header</DrawerTitle>
        </DrawerHeader>
        <DrawerBody className="h-[85vh]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
          eleifend felis, vel fringilla neque. In tristique dui magna, id
          iaculis turpis pellentesque et. Suspendisse faucibus quam purus, quis
          facilisis purus egestas semper. Pellentesque ut odio ut neque
          pellentesque gravida. Aenean maximus mauris vel lorem faucibus, nec
          tincidunt eros eleifend. Etiam vel eros fringilla, porttitor nulla eu,
          ultricies enim. Aliquam et mauris in eros scelerisque porttitor. Etiam
          ut commodo turpis. Donec interdum erat non ipsum maximus, id tincidunt
          mauris suscipit. Curabitur eu laoreet enim. Cras ante ipsum, accumsan
          imperdiet ante in, pellentesque aliquam ante. Fusce eu sem est.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce
          vitae augue id sem lacinia placerat in in magna. Fusce iaculis leo ac
          condimentum mollis. Nunc fermentum nulla sed risus malesuada, id
          mattis sapien cursus. Donec auctor tempus ultricies. Mauris in aliquam
          justo. Ut convallis ullamcorper dui vitae mattis. Phasellus maximus
        </DrawerBody>
        <DrawerFooter>
          <Button type="submit" size="sm" className={cn('w-full')}>
            Button
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
