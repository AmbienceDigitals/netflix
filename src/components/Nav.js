import React, {useEffect, useState} from 'react';
import './Nav.css'

const Nav = () => {
    const [show, setShow] = useState(false)

    // using useEffect to add or remove scroll listener
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            }
            else setShow(false);
        })
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="nav_logo"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0SDhAPDw8QDxIOEBEPEBEQEA8OEA8QGB0XFhYRFRUYHiggGBolIBMVIjEhJSkrLi4uGSAzODMsNygtLisBCgoKDg0OGxAQGzAlHyUuKzcuLS0uLi0tLSszMC0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKMBNgMBIgACEQEDEQH/xAAbAAEBAQADAQEAAAAAAAAAAAAABQYBAwQHAv/EAEIQAAIBAQIICwcBBwQDAAAAAAABAgMEEQUGEiExcXLBEzIzNEFRYXORsdEWIiNSU4GhshRCYoKSwvBjotLxFUOT/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAMEAgUGAQf/xAA/EQACAQICBAoHBwMFAQAAAAAAAQIDEQQxBRIhcQYTMkFRYXKBscEUMzSRocLRIkJSU7Lh8BU1giMkYpLiFv/aAAwDAQACEQMRAD8A+GgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAq4PwPUrQdSM4RSkoe82nlPP1dp2WnAFaEJTc4SUVe8nKvu8CN1YJ2vtLsdHYqVPjY03q2vfZl053+BGAPfg2wTrSlGLinGLk8p3JpXepm2krsrUqU6s1CCu3kjwAvLFiv9Snn7ZehFlG5tdTuMYzjLku5NiMFXw9uNja97Zc2eTZ1gqYOwVUrRcoyhFJ5PvNp36eo9XszW+pS8Zeh46sE7NklLRmLqwU4U208ns82QQXvZit9Sl4y9B7M1vqUvGXoecfT/ABIk/o+O/KfvX1IIPdhOwToyjGbi3KKksltq5/8AR6LDgWrVp8JGUEr2rm5X5tSMuMjq619hXjgq8qroqD11mtl/EkgvezNb6lLxn6D2ZrfUpeMvQx4+n+JFj+j478p+9fUggvezNb6lLxn6HTa8BVqdOVSU4NRuvuyr87u6u09Vam3ZMxnorGQi5yptJZ5Ze8jg92DrDKtNwi0mouXvO5XK71KHszW+pS8Z+h7KrCLs2R0NH4mvDXpQbXTs82QQXvZit9Sl4y9B7M1vqUvGXoY8fT/Eib+j478p+9fUggq4QwPUow4SU4SWVke623fn7Ow6sG4NnWclCUY5KTeU7tP2MlUi4619hXeCxEayouD13ktl/G3xJ4LyxYrZvi0s+36EERnGXJZ5iMHXw1uOjq3yy5rdDfSgADMrAHuwdYZVpuEXGLSyvevSuzLeUFixW+pSz9svQjlVhF2bLtDR2Krx16UG107PNkEHbOF0mn0Noo2DA9SrDLhOCV+Tc200/AylJRV2QUcPVrz1KcbvoJILlTFyuouWXB5PQsq93dCzEMRnGWTMsRhK2HaVWNr5fxAHrsNjnVqKnC69pvPoSXWU/Zmt9Sl4y9DyVSEXaTM6GAxOIjrUoNrp2ebIIPZhCyOlUdNyjJq69xvaTfQeMyTTV0V6kJU5OElZrPeAAemAAABrMVuby73cixmd6eeMsz7UR8VubS73ciwauv6xn0fRPsVLs/UwlsoOnUnTf7jcda6H4XFXFLlqndf3RP3jVZrpQqr95ZE9qNy8vI/GKfLVO6/uiXJz16LfUcthcN6NpeNLmUnbc4tr4Gnp6VrRgK/Hlrfmb+npWtGAr8eWt+ZFg85d3mbDhRyaW+XymlxU5CfebiyRsVOQn3m4pW9/BqtfSmQ1leq11m20XLV0fTl0Rb91z05D6n4MZD6n4M+fKtP5n4s54afzPxZN6H1/z3mp/wDqI/lP/t/5LGNqfDU71d8LfIqYtxf7LHM378ujtMjKTelt67zlVJLRJrsTaJpUb01C+Rq6OllTxs8VqcpWtfdz26ug+gZL6n4M4MfgScnaqKcm/e631M2DKVWnxbtc63RukFjabmo6tnbO/Mn0LpOVF9T8CfjBF/slXM1xOj+NEDD82rVVSlK74fS/kiTnUk8zk2uptsnp4fKV+hmkx+nU1Vw/F/ije+9XtbvtfvK+KvLz7uW41Bl8VOWn3UtxqY6VrRHivWdxseD3sS7UjnIfU/BjIfU/BmFtlSXC1M8uPLpfWzp4afzPxZIsJ1/D9ylLhNGMmuKy/wCX7Gpxpi/2bOmvix6OyR4cUeNW2Y+ZCc5PS29bZdxQ41bZj5mcqfF0ZRv/ADYUcPjfTNK0qurbZa175KXUuk0sNK1o+dH0SOla0fOjHB/e7vMs8KM6P+fygAFw5QvYq8tU7qXnE09PStaMviry1TupeaNRT0rWjWYrl9x33B32OPal4mBtPHntPeVsV7Tk1JUnoqq9bUc6/F5JtPHntPecUajhKM46YNSX2NhOOvHV6jjMNiHhsSqq5n8Mmvdc38Xc0+pmKwvZeDrTj+63lQ2XnXnd9jZ06iko1I5ozjlLUyTh+wOqqLirpZSpvpvi9D1LeUMPPUnZ852OnMI8ThtamruLTXWna/k+44xYsuTSdRrPVd0dmOnxd/gVqtRQjKcs8Yxvf2FOmorJjmjCNy1IjY02q6nGinnqe/LYV2Sv86jH11Tf4Fh6ujMB2V75P6yd924zlao5zlOWmTcnrZ0nJwbQ+eNtu7zAAB4AAAazFbm0u93IsEjFbm0u93Iqzkkr3xTV1/WM+jaKaWBpN/h82ebC9n4ShOHTFZcP5f8AGvuRMUuWqd1viadO56mQ8E2ZU7ZXh0cH7uy3FrzuM6c/9KUSvjcN/v8AD110uL9za8/gXKela0YCvx5a35m/p6VrRgK/HlrfmSYTOXd5mv4Ucmlvl8ppcVOQn3m4pW/kaqX0p7ibipyE+83FkhrO1VvrNtouOto+nHpi177mBVGfyy8GcuhNZ3FpdbTSN9wj+Z+LPHhuT/Zq+d8VdP8AEidYttpW+JpK3ByNKlKfGN6qby6FfpMMAC4csUcBc6o7W5mzZjMA86o7W5mzZQxfLW47Tgz7NPteSMfjDzurqh+iJLKmMPO6uqH6YksuU+StyOVx3tVXtz/Uy5iry0+6luNRHStaMviry0+6luNQUcV6zuOz4PexLtS8TG2uw13UqNUajTnJr3JaL2dP/jrT9Cp/RI3F76z9U3njnelGXpbtkV3waoyld1JbepHzq40GKHGrbMfMhT0v7l3FDjVtmPmWq/q5fznOd0N7dT3vwZpI6VrR86PosdK1o+dEGD+93eZuOFGdH/P5QAC4coXcVeWqd1LzRqKela0ZfFXlqndS80ainpWtGsxXL7jvuDvsce1LxMDaePPae86DvtPHntPedBskcHPlPeazFi0ZVF03ppvNsS0/m8sGNwFacivHqnfTlqeZfm42TRrsTDVnfpO80DiuOwii84bO7m+GzuHTn6WYjCVq4WtOp8z93sisyXgaXGG18HQcVxqvuLZV2W933MaT4WGxyZqeEmLvOOHXNte95fC/vQABbOXAAAAAANZitzaXe7ke7CnN62xvPDitzaXe7ke7CvN62xvNbU9d3o+gYL+1x7EvBn7sFo4SjCp0yg8p9c1mk/FH74L4qqf6MoP+qMo/3eBFxUtOadJ9HxI6tEtxeMKsdSbS/iZZ0fXWKwtOo89l+0tj/nQzmnpWtGAr8eWt+Zv6ela0YCvx5a35ljCZy7vM0nCjk0t8vlNLipyE+83FW01JRpzkrsqMJTV+i8lYqchPvNxRt/I1u6mQ1Ves9/0Nro1taNg1+F+Zn/aav8lPwfqdVpw7WqQlCShdJZ7lc+skAv8AE009iOLlpXGTjaVR2YABIUCjgHnVHa3M2bMZgHnVHa3M2bKGL5a3HacGfZp9ryRj8Yed1dUP0RJZUxh53V1Q/REllynyVuRyuO9qq9uf6mXMVeWn3UtxqY6VrMtiry0+6luNTHStaKOK5fcdnwd9jXal4mWtGHLTGpOKlG6M5XfCp9d3UdaxhtfzQzf6VP0PBbeWqbcvNnmLqpQtkjkqmkcWptKrLN/efSfpsv4ocatsx8zPGhxQ41bZj5nlf1cjPQ3t1Pe/0s0kdK1o+dH0WOla0fOiDB/e7vM3HCjOj/n8oABcOULuKvLVO6l5o1FPStaMviry1TupeaNRT0rWjWYrl9x33B32OPal4mBtPHntPedB32njz2nvOk2SODqcp95ZxasuXXy3oorK/mz5O9/Y1R4cC2Xg6EE9NT4kty/puPdes38WZdvTuNZXnrTfUfQtEYT0bCRTze173ku5WJ2HrLl2eV2mn8T/AJfi8xh9EWldjRh8I2fg6s4dEX7uy86fgWMLPY4mj4S4W0oYhc+x71l8L+48YALhy4AAAAABrMVubS73cj3YV5vW2N54cVubS73cj3YV5vW2N5ranru9H0HBf2uPYfgzK4JtPB14TehPJnsvM/U2slc2uo+dm5wVaOEoU59PEnrj/l/3JcXDKXcangxieXQfaXwT8vieunpWtGAr8eWt+Zv6ela0YCvx5a35jB5y7vMz4Ucilvl8ppcVOQn3m4q16eXTnC/Jy4ZF+m7tJWKiboTzN/E6F2FadWC01ILXOCIK1+Nduk22itV6PpqWTi/MjwxapdNSo9UIredkcXLL0ut/tW4oO20FprUv679x0ywtZV/7ofaNV+SMuMrPpIvQtF0s1Dvl9WZ7D1ip0qkI08q5wUne73fe1uJJXxhtVOpVg6cspKmot3NZ72+kkF6lfUWtmcbpFU1ipqlbVvstlksu8o4B51R2tzNmzD4NtCp16dSV7UHe7tOi4vvGSh8lT/aV8TTlKScVzG90DjsPh6Eo1ZqLcufosiRjDzurqh+iJLPbhO1KrWlUScVK7NpuuSW48RagrRS6kc7i5xniKk4u6cpNbm2y5iry8+7luNTHStaMXgi3qjUc3HKvjKNyd12jP+CusZ6eb4Ev/ovQp4ilOUrpHT6F0nhcPhlCrOzu+Z+SZAt3LVNuXmzzHfaKjlOUtGVJvVe7zoLqOTqNOcmudsGhxQ41bZj5meK+A8IQoym5qTy4qKyGlddrMKybptIu6KqwpYynObsk3d9zNcn09WcmvAdk+k1qlUe86VjFZvlq+EfU7Fh+yfNNfyFBQrRyTR2dXF6Nr24ycJWyvZ29+44ni/ZOqcdUvUj4dsFOi4KGW8tOTy7uzsLkcN2T6l2uFX0I+MdqpVHSdOWVkqSfGzaOsmourrrWvY1OlYaO9FlKhqa11yWr5ro6jnFXlqndS80ainpWtGUxYnGNaTlKMb4NLLaSbzZs5qqMk2rpRedaJXkWKX2+4v8AB2S9Eir7daXiYK08ee0956sDWTha0Yviq+c9lZ2vvmR5bTyk9p+bNPizZHGi6jvvqu5bC/x/guVp6kLnMaMwnpOMUGvsptvcvq9hXbvbfWZ7DuEXG0U1C/4DU5K7TN6fx5su16yhCVRrNCN+vsMHUqOUnKWdybb1srYWndts6DhFjZUqcaUH9qTvuSd1734G+TTucc8ZZ0+tMg412XNTqro+HLzi/M9eLlpy6GS371F3PZ0x3r7HvtlnVSlOl88Vk7emP5uIoviqm3m8C9XjHSOA+z95XXVJfvsfeYAH7aazPM0fg2h88AAAAAANDgPCdGlRlGo5ZTnlJRV+a5eh227D1GdOcIQn78cm+WTm7ekzRwQuhBy1nmbSGmMVCgqEWlFK2W229goWHClalFxptJSd7vSecnglaT2M19KrOlLWptp9KKUsN2t6a0l9oryRPbvefpPyAopZI9qV6lT1knLe2/E/R+QD0hsjk4AB7YAAAAAAAAAAAAAAAAAAAAAAAA5OAAeNJnJ66dvrxSUatSKWhKTuS6rjxg8aTzJIVJwd4Nrc7eB77ThKvOGROblHM7rorR2pHgACSWxCpUnUd5tt9bb8Sjgq3ujNyyctSTi1fdf1Mtwxjs/TGrH7QmvyZMEc6MJu7L+E0tisLDUptW6Gr/v8ShhedKVaU6TbjP3s6auk9Kz+P3J4BIlZWKNWo6k3Nqzbb2ZbQAD0jAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z"
            alt="Netflix logo"/>

            <img
            className="nav_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix logo"/>
            
        </div>
    )
}

export default Nav;