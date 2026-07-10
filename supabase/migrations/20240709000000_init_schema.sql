-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    role VARCHAR(20) DEFAULT 'jamaah' CHECK (role IN ('jamaah', 'admin')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create packages table
CREATE TABLE IF NOT EXISTS public.packages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    type VARCHAR(20) NOT NULL CHECK (type IN ('umrah', 'hajj')),
    price DECIMAL(12,2) NOT NULL,
    duration_days INTEGER NOT NULL,
    departure_date DATE NOT NULL,
    description TEXT,
    facilities JSONB,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) NOT NULL,
    package_id UUID REFERENCES public.packages(id) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
    traveler_data JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create payments table
CREATE TABLE IF NOT EXISTS public.payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id UUID REFERENCES public.bookings(id) NOT NULL,
    amount DECIMAL(12,2) NOT NULL,
    method VARCHAR(50),
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'failed')),
    payment_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Public profiles are viewable by everyone." ON public.profiles
    FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile." ON public.profiles
    FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can update own profile." ON public.profiles
    FOR UPDATE USING (true);

-- Policies for packages
CREATE POLICY "Packages are viewable by everyone." ON public.packages
    FOR SELECT USING (true);

-- Policies for bookings
CREATE POLICY "Users can view their own bookings." ON public.bookings
    FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own bookings." ON public.bookings
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policies for payments
CREATE POLICY "Users can view their own payments." ON public.payments
    FOR SELECT USING (EXISTS (
        SELECT 1 FROM public.bookings
        WHERE bookings.id = payments.booking_id
        AND bookings.user_id = auth.uid()
    ));
