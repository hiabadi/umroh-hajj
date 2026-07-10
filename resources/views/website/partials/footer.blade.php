<footer>
    <div class="container">
        <div class="footer-grid">
            <div class="footer-col">
                <h3>Tentang Kami</h3>
                <p>KBIH Sahabat Nabawi telah berpengalaman lebih dari 10 tahun dalam melayani jamaah haji dan umrah.</p>
            </div>
            <div class="footer-col">
                <h3>Link Cepat</h3>
                <ul>
                    <li><a href="{{ route('landing.index') }}">Beranda</a></li>
                    <li><a href="{{ route('registration.index') }}">Pendaftaran</a></li>
                    <li><a href="{{ route('regulation.index') }}">Persyaratan</a></li>
                    <li><a href="{{ route('schedule.index') }}">Jadwal</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>Kontak</h3>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i> Jl. Raya Kertajaya No. 45, Surabaya</li>
                    <li><i class="fas fa-phone"></i> (031) 1234567</li>
                    <li><i class="fas fa-envelope"></i> info@sahabatnabawi.com</li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>Media Sosial</h3>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; {{ date('Y') }} KBIH Sahabat Nabawi. All Rights Reserved.</p>
        </div>
    </div>
</footer>
