
import React from 'react';
import { FileText, PhoneCall } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { companyPolicies, contactInfo } from '@/utils/mockData';

const CompanyInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center">
            <FileText className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Company Information</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div id="policies">
            <h3 className="text-xl font-semibold mb-4">Company Policies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {companyPolicies.map((policy, index) => (
                <Card key={index}>
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <policy.icon className="h-4 w-4 text-primary" />
                      </div>
                      <h4 className="font-medium">{policy.title}</h4>
                    </div>
                    <p className="text-sm">{policy.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div id="contacts">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center">
                <PhoneCall className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Key Contacts</h3>
            </div>
            
            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className={`pb-4 ${index < contactInfo.length - 1 ? 'border-b' : ''}`}>
                      <h4 className="font-medium">{contact.name}</h4>
                      <p className="text-sm mb-2">{contact.contact}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                        <a href={`tel:${contact.phone}`} className="text-primary hover:underline">
                          {contact.phone}
                        </a>
                        <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
