import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      title: 'Жилищно-гражданское строительство',
      description: 'Строительство жилых комплексов, общественных зданий и социальных объектов с применением современных технологий и материалов.',
      icon: 'Building2',
      image: 'https://cdn.poehali.dev/projects/97cf3b11-3eab-4d7a-bea9-b77687eac818/files/91c3ac5c-cb36-484c-8123-f1dfad9345d1.jpg'
    },
    {
      title: 'Промышленное строительство',
      description: 'Реализация проектов машиностроения, металлообработки, химической, нефтехимической и пищевой промышленности, объектов нефтегазового комплекса.',
      icon: 'Factory',
      image: 'https://cdn.poehali.dev/projects/97cf3b11-3eab-4d7a-bea9-b77687eac818/files/113b0347-bf8c-4ae8-8619-f13c8ad4b5d4.jpg'
    },
    {
      title: 'Транспортное строительство',
      description: 'Строительство автомобильных дорог и объектов инфраструктуры автомобильного транспорта с соблюдением международных стандартов качества.',
      icon: 'Highway',
      image: 'https://cdn.poehali.dev/projects/97cf3b11-3eab-4d7a-bea9-b77687eac818/files/cec59a69-e12b-43c2-8e95-275669fd21d5.jpg'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.'
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/f933edb4-3d0c-4aa9-94ce-c86128a6ad11.png" 
              alt="Промстройпроект" 
              className="h-16 w-auto drop-shadow-2xl"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-white/90 hover:text-accent transition-colors">О компании</a>
            <a href="#services" className="text-white/90 hover:text-accent transition-colors">Услуги</a>
            <a href="#contact" className="text-white/90 hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button asChild className="bg-accent hover:bg-accent/90">
            <a href="#contact">Связаться</a>
          </Button>
        </div>
      </header>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Строим будущее<br />
              <span className="text-accent">с 2010 года</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Реализуем строительные проекты любого уровня сложности: жилищно-гражданское, промышленное и транспортное строительство
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
                <a href="#services">Наши услуги</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                <a href="#contact">Получить консультацию</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center animate-fade-in">
              О компании
            </h2>
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Icon name="Award" className="text-accent" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">ООО «Промстройпроект»</h3>
                    <p className="text-muted-foreground text-lg">Динамично развивающаяся строительная организация</p>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed mb-6 text-foreground">
                  Строительная компания ООО «Промстройпроект» — динамично развивающаяся строительная организация, работает на строительном рынке с 2010 года.
                </p>
                
                <p className="text-lg leading-relaxed mb-6 text-foreground">
                  В процессе своей деятельности наша компания позволяет реализовывать строительные проекты любого уровня сложности и функционального назначения:
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  {['Жилищно-гражданское строительство', 'Промышленное строительство', 'Транспортное строительство'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-accent/5 rounded-lg hover:bg-accent/10 transition-colors">
                      <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={24} />
                      <span className="font-semibold text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center animate-fade-in">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Профессиональное выполнение строительных работ с использованием современных технологий
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="group overflow-hidden border-2 hover:border-accent transition-all hover:shadow-2xl">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-accent p-3 rounded-lg">
                    <Icon name={service.icon as any} className="text-white" size={32} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
            Свяжитесь с нами
          </h2>
          <p className="text-center text-white/90 text-lg mb-12">
            Оставьте заявку, и мы свяжемся с вами для обсуждения вашего проекта
          </p>

          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Имя</label>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-2 focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-2 focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Телефон</label>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="border-2 focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="border-2 focus:border-accent resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-foreground">
                    <Icon name="Phone" className="text-accent" size={24} />
                    <span className="text-lg">+7 (___) ___-__-__</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Icon name="Mail" className="text-accent" size={24} />
                    <span className="text-lg">info@promstroyproekt.ru</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Icon name="MapPin" className="text-accent" size={24} />
                    <span className="text-lg">Россия</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-6">
            <img 
              src="https://cdn.poehali.dev/files/f933edb4-3d0c-4aa9-94ce-c86128a6ad11.png" 
              alt="Промстройпроект" 
              className="h-24 w-auto drop-shadow-2xl"
            />
            <p className="text-white/80 text-center">© 2010-2025 ООО «Промстройпроект». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;