import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const ListItems = () => {
  return (
    <div className='container'>
      <div className="card">
        <img src="https://m.media-amazon.com/images/M/MV5BMGMyOThiMGUtYmFmZi00YWM0LWJiM2QtZGMwM2Q2ODE4MzhhXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_FMjpg_UX1000_.jpg" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Dragon Ball Z</h5>
          <p className="card-text">Dragon Ball Z (Japanese: ドラゴンボールZ, Hepburn: Doragon Bōru Zetto, commonly abbreviated as DBZ) is a Japanese anime television series produced by Toei Animation. Part of the Dragon Ball media franchise, it is the sequel to the 1986 Dragon Ball anime series and adapts the latter 325 chapters of the original Dragon Ball manga series created by Akira Toriyama, which ran in Weekly Shōnen Jump from 1988 to 1995. The series aired in Japan on Fuji TV from April 1989 to January 1996 and was later dubbed for broadcast in at least 81 countries worldwide.[4]</p>
          <Link to="/dbz" className="btn btn-primary">See The Facts</Link>
        </div>
      </div>
      <div className="card">
        <img src="https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Naruto</h5>
          <p className="card-text">Naruto (Japanese: NARUTOナルト) is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts – the first set in Naruto's pre-teen years, and the second in his teens. The series is based on two one-shot manga by Kishimoto: Karakuri (1995), which earned Kishimoto an honorable mention in Shueisha's monthly Hop Step Award the following year, and Naruto (1997).</p>
          <Link to="/naruto" className="btn btn-primary">See the Facts</Link>
        </div>
      </div>
      <div className="card">
        <img src="https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="..." />
        <div className="card-body">
          <h5 className="card-title">One Piece</h5>
          <p className="card-text">One Piece (stylized in all caps) is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled into 101 tankōbon volumes as of December 2021. The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his crew of pirates, named the Straw Hat Pirates, Luffy explores the Grand Line in search of the world's ultimate treasure known as "One Piece" in order to become the next King of the Pirates..</p>
          <Link to="/onepiece" className="btn btn-primary">See the Facts</Link>
        </div>
      </div>
      <div className="card">
        <img src="https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Demon Slayer</h5>
          <p className="card-text">Demon Slayer: Kimetsu no Yaiba (鬼滅の刃, Kimetsu no Yaiba, "Blade of Demon Destruction"[4]) is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister Nezuko turned into a demon. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from February 2016 to May 2020, with its chapters collected in twenty-three tankōbon volumes. It has been published in English by Viz Media and simultaneously published by Shueisha on their Manga Plus platform.</p>
          <Link to="/demonslayer" className="btn btn-primary">See The Facts</Link>
        </div>
      </div>
      <div className="card">
        <img src="https://flxt.tmsimg.com/assets/p10701949_b_v8_ah.jpg" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Attack ON titans</h5>
          <p className="card-text">Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin) is a Japanese dark fantasy anime television series adapted from the manga of the same name by Hajime Isayama that premiered on April 7, 2013. It has aired on NHK General TV in Japan,[d] and Aniplus Asia in various Asia-Pacific countries.[e] In the United States and Canada, the series has streamed on Crunchyroll, Funimation, Amazon Prime Video, and Hulu.
            Set in a post-apocalyptic world where the remains of humanity live behind walls protecting them from giant humanoid Titans, Attack on Titan follows protagonist Eren Jaeger, along with friends Mikasa Ackerman and Armin Arlert.</p>
          <Link to="/aot" className="btn btn-primary">See the Facts</Link>
        </div>
      </div>
      <div className="card">
        <img src="https://m.media-amazon.com/images/M/MV5BNzQyYzU3Y2MtOWY2Yy00ZGM2LTg3ZTUtMDJkZTJiMmEzMjYxXkEyXkFqcGdeQXVyMTI2NTY3NDg5._V1_.jpg" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Jujutsu Kaiken</h5>
          <p className="card-text">Jujutsu Kaisen (呪術廻戦) is a Japanese manga series written and illustrated by Gege Akutami, serialized in Shueisha's Weekly Shōnen Jump since March 2018. The Jujutsu Kaisen chapters are collected and published by Shueisha, with eighteen tankōbon volumes released as of December 2021. The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers in order to kill a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host. Jujutsu Kaisen is a sequel to Akutami's Tokyo Metropolitan Curse Technical School, serialized in Shueisha's Jump GIGA from April to July 2017, later collected in a tankōbon volume, as Jujutsu Kaisen 0, in December 2018.</p>
          <Link to="/kaiken" className="btn btn-primary">See the Facts</Link>
        </div>
      </div>
    </div>
  )
}

export default ListItems
